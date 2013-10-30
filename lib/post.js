var md = require("./md");
/**
 * 发布、修改文章
 * @param  {[type]} bloginfo   [description]
 * @param  {[type]} mdfilepath [description]
 * @return {[type]}            [description]
 */
function publish(bloginfo, mdfilepath, filtr) {
    var filtr = filtr ? filtr : "all"
    md.readMd(mdfilepath, function(hand, body) {
        if (hand.postid && (filtr == 'edit' || filtr == 'all')) {
            console.log(hand["postid"])
            bloginfo.client.methodCall('wp.editPost', ["1", bloginfo.username, bloginfo.password, hand["postid"], {
                    "post_title": hand.title,
                    "post_status": hand.publish ? "publish" : "draft",
                    "post_content": body,
                    "post_date": hand.date || new Date(),
                    "terms_names": {
                        "category": hand.categories,
                        "post_tag": hand.tags
                    }
                }],
                function(error, data) {
                    console.log("error:", error, "success:", data);
                }
            );
        }
        if (!hand.postid && (filtr == 'new' || filtr == 'all')) {
            console.log(mdfilepath + "发布中...");
            bloginfo.client.methodCall('wp.newPost', [1, bloginfo.username, bloginfo.password, {
                    "post_title": hand.title,
                    "post_type": "post",
                    "post_status": hand.publish ? "publish" : "draft",
                    "post_name": hand.permalink || Math.random().toString(36).substring(2),
                    "post_content": body,
                    "post_date": hand.date || new Date(),
                    "terms_names": {
                        "category": hand.categories,
                        "post_tag": hand.tags
                    }
                }],
                function(error, newPostId) {
                    console.log("error:", error, "newPostId:", newPostId);
                    if (newPostId) {
                        md.published(mdfilepath, newPostId)
                    }
                }
            )
        }

    });
}
module.exports.publish = publish;

/**
 * 发布所有md
 * @param  {[type]} bloginfo     [description]
 * @param  {[type]} mdfilefolder [description]
 * @return {[type]}              [description]
 */
module.exports.publishAll = function(bloginfo, mdfilefolder) {
    md.readDir(mdfilefolder, function(arrfile) {
        for (var i = arrfile.length - 1; i > -1; i--) {
            publish(bloginfo, arrfile[i]);
        }
    })
}


/**
 * 仅发布新的md
 * @param  {[type]} bloginfo     [description]
 * @param  {[type]} mdfilefolder [description]
 * @return {[type]}              [description]
 */
module.exports.publishNew = function(bloginfo, mdfilefolder) {
    md.readDir(mdfilefolder, function(arrfile) {
        for (var i = arrfile.length - 1; i > -1; i--) {
            publish(bloginfo, arrfile[i], 'new');
        }
    })
}

module.exports.uploadFile = function(bloginfo,filepath){
    bloginfo.client.methodCall('wp.uploadFile', [1,bloginfo.username,bloginfo.password,{
        name:"aa.jpg",
        type:"",
        bits:""
    }],function(data){
        console.log(data)
    });
}
var md = require("./md");

module.exports.newPost = function(bloginfo,mdfilepath){
    console.log("发布中...")
    md.readMd(mdfilepath,function(hand,body){
        bloginfo.client.methodCall('metaWeblog.newPost', ["1", bloginfo.username, bloginfo.password, {
            "title": hand.title,
            "post_type": "post",
            "wp_slug": hand.permalink || Math.random().toString(36).substring(2),
            "description": body,
            "dateCreated": hand.date || new Date(),
            "categories": hand.categories,
            "mt_keywords": hand.tags,
            "wp_author_id": '1',
            "wp_author_display_name": 'wyongzhi'
        }, hand.publish],
            function (error, newPostId) {
                console.log("error:", error, "newPostId:", newPostId);
                if(newPostId){
                    md.published(mdfilepath,newPostId)
                }
            }
        )
    });

}
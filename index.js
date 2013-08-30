#!/usr/bin/env node

var xmlrpc = require('xmlrpc');
var yaml = require('yamljs');
var fs = require('fs');
var md = require('markdown').markdown;
var nopt = require("nopt");
//var process = require("process");

var opts = nopt({
    "publish": String,
    "init": Boolean
});

if (opts.init) {
    //TODO: 连续输入，类似npm adduser
    //输入xmlrpc地址，用户名，密码
}

function newPost(){

}

if (opts.publish) {
    console.log(opts.publish);

    fs.readFile(opts.publish, {encoding:"utf-8"},function (err, data) {
        var d = data.match(/^-+\r\n([.\w\W]*?)\r\n--+/gm)[0];
        var hand = yaml.parse(d.replace(/--+/g,''));
        var body = md.toHTML(data.replace(d,''));
        console.log(hand)
        console.log(body)
        var client = xmlrpc.createClient({ host: 'wyz.67ge.com', port: 80, path: '/xmlrpc.php'});
        var username = 'xxx', password = 'xxx';
        client.methodCall('metaWeblog.newPost', ["1", username, password, {
            "title": hand.title,
            "post_type": "post",
            "wp_slug": Math.random().toString(36).substring(2),
            "description": body,
            "dateCreated": hand.date,
            "categories": hand.categories,
            "mt_keywords": hand.tags,
            "wp_author_id": '1',
            "wp_author_display_name": 'wyongzhi'
        }, hand.publish],
            function (error, newPostId) {
                console.log("error:", error, "newPostId:", newPostId);
                if(newPostId){

                }
            }
        );

    });


}

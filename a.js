var xmlrpc = require('xmlrpc');
var yaml = require('yamljs');
var fs = require('fs');
var md = require('markdown').markdown;
//var client = xmlrpc.createClient({ host: 'wyz.67ge.com', port: 80, path: '/xmlrpc.php'});
var username = 'admin', password = 'seasea'
//client.methodCall('metaWeblog.getPost', [process.argv[2],"admin","seasea"], function (error, value) {
//    console.log(error,value)
//})

//client.methodCall('metaWeblog.newPost', ["1", username, password, {
//    "title": "nodejs to wordpress 2",
//    "post_type": "post",
//    "wp_slug": Math.random().toString(36).substring(2),
//    "description": "<b style=\'color:red\'>aaaa中文</b>",
//    "dateCreated": "",
//    "categories": ['web前端技术'],
//    "mt_keywords": ['html'],
//    "wp_author_id": '1',
//    "wp_author_display_name": 'wyz'
//},true],
//    function (error, value) {
//        console.log("error:", error, "value:", value)
//    }
//)

//Math.random().toString(36).substring(2)

fs.readFile('./md/a.md', {encoding:"utf-8"},function (err, data) {
    var d = data.match(/^-+\r\n([.\w\W]*?)\r\n--+/gm)[0];
    console.log(yaml.parse(d.replace(/--+/g,'')));
    console.log(md.toHTML(data.replace(d,'')));

});
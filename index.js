#!/usr/bin/env node

var post = require("./lib/post");
var blog = require("./lib/blog");
var nopt = require("nopt");
//var process = require("process");
var opts = nopt({
    "publish": String,
    "publishAll": String,
    "publishNew": String,
    "init": Boolean
});

if (opts.init) {
    //TODO: 连续输入，类似npm adduser
    //输入xmlrpc地址，用户名，密码
}

if (opts.publish) {
    var bloginfo = blog.create(0);
    //console.log(bloginfo)
    post.publish(bloginfo, opts.publish)
}

if (opts.publishAll) {
    var bloginfo = blog.create(0);
    post.publishAll(bloginfo, opts.publishAll)
}

if (opts.publishNew) {
    var bloginfo = blog.create(0);
    post.publishNew(bloginfo, opts.publishNew)
}
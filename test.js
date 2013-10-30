var foo = require("./lib/post");
var blog = require("./lib/blog");
var bloginfo = blog.create(0);
foo.uploadFile(bloginfo);
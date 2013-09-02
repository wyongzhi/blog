var fs = require('fs');
var yaml = require('yamljs');
var md = require('markdown').markdown;
function md(){}

module.exports.readMd = function(filepath,callback){
    fs.readFile(filepath, {encoding:"utf-8"},function (err, data) {
        var d = data.match(/^-+\r\n([.\w\W]*?)\r\n--+/gm)[0];
        var hand = yaml.parse(d.replace(/--+/g,''));
        var body = md.toHTML(data.replace(d,''));
        callback && callback(hand,body);
    });
};

module.exports.moveMd = function(filepath){

}

module.exports.published = function(filepath,postid){
    fs.readFile(filepath, {encoding:"utf-8"},function (err, data) {
        var d = data.match(/^-+\r\n([.\w\W]*?)\r\n--+/gm)[0];
        var hand = d.replace(/--+/g,'');
        hand += "postid: "+postid;
        var content = data.replace(d,'')
        var newmd = '--------'+hand+'\n--------'+content;
        console.log(newmd)
        fs.writeFile(filepath,newmd,'utf8')
    });
}
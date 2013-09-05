var fs = require('fs');
var yaml = require('yamljs');
var md = require('markdown').markdown;
var reg = require('xregexp').XRegExp;

module.exports.readMd = function(filepath, callback) {
    fs.readFile(filepath, {
        encoding: "utf-8"
    }, function(err, data) {
        var d = reg.matchChain(data,[reg('(?is)^-+.*?--+')])[0];
        try{
            var hand = yaml.parse(d.replace(/--+/g, ''));
            var body = md.toHTML(data.replace(d, ''));
        }catch(e){
            console.log("ERROR:",filepath,d)
        }
        //callback && callback(hand, body);
    });
};

module.exports.moveMd = function(filepath) {

}

module.exports.readDir = function(dir, cb) {
    var arr = [];
    fs.readdir(dir, function(err, files) {
        for (var i = files.length - 1; i > -1; i--) {
            if (/\.md$/.test(files[i])) {
                arr.push(dir + '/' + files[i])
            }

        }
        cb && cb(arr);
    })
}

module.exports.published = function(filepath, postid) {
    fs.readFile(filepath, {
        encoding: "utf-8"
    }, function(err, data) {
        var d = data.match(/^-+\r\n([.\w\W]*?)\r\n--+/gm)[0];
        var hand = d.replace(/--+/g, '');
        hand += "postid: " + postid;
        var content = data.replace(d, '')
        var newmd = '--------' + hand + '\n--------' + content;
        fs.writeFile(filepath, newmd, 'utf8')
    });
}
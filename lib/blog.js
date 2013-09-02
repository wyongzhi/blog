var xmlrpc = require('xmlrpc');
module.exports.create = function(index){
    var index = index || 0;
    return [{
        client:xmlrpc.createClient({ host: 'www.xinling.me', port: 80, path: '/xmlrpc.php'}),
        username:"wyongzhi",
        password:"seasea"
    }][index];
};
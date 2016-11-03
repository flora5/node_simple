/**
 * Created by flora on 11/1/16.
 */
var name;
exports.setName = function(thyName){
    name = thyName;
};

exports.sayHello = function(){
    console.log('Hello ' + name);
};
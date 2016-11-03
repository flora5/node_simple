/**
 * Created by flora on 11/2/16.
 */

function Hello(){
    var name;
    this.setName() = function(thyName){
        name = thyName;

    };
    this.sayHello() = function(){
        console.log('Hello' + name);
    };
};

exports.Hello = Hello;
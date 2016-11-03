/**
 * Created by flora on 11/1/16.
 */
var fs = require('fs');
fs.readFile('file.txt', 'utf-8', function(err, data){
    if(err){
        console.error(err);
    }else{
        console.log(data);
    }
});
console.log('end');

// read file sync

var data = fs.readFileSync('file.txt', 'utf-8');
console.log(data);
console.log('end');
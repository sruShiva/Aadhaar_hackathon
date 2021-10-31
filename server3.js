//REST API  in Node.js

var express = require('express'); // requre the express framework
var app = express();
var fs = require('fs'); //data base is a single file system hence require file system object
var http = require('http');

const tesseract = require("node-tesseract-ocr");
const { nextTick } = require('process');
const { isBuffer } = require('util');

const config = {
  lang: "eng",
  oem: 1,
  psm: 3,
}
fs.readFile('aadhaar.jpg', function(err, data) {
    http.createServer(function(req, res) {
    if (err) throw err // Fail if the file can't be read.
       tesseract.recognize("aadhaar.jpg", config)//enter the link for your image file
 .then((text) => {
    
    const test2='To';
    const test1='Address'
    
    if(text.includes(test2)||text.includes(test1)){
    
        var news = text.replace(/(\r?\n)\s*\1+/g, '$1')
      
        var uniqueListIndex=news.split(' ').filter(function(currentItem,i,allItems){
            return (i == allItems.indexOf(currentItem));
        });
        var uniqueList=uniqueListIndex.join(' ');
       var splits =uniqueList.split("\n");
        var index= splits.indexOf('To\r')
        var y=0;
        var uniqueArr= new Array(15);
        for(var j=index+2;j<10;j++)
       {
       uniqueArr[y] =splits[j];
       y++;
       }
      
    var str= uniqueArr.join("");
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(str,'utf8');
    res.end();
    }
})

 // Send the file data to the browser.S
    }).listen(8124)
    console.log('Server running at http://localhost:8124/')// Open this web api link to view the output
  })
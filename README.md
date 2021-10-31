# Aadhaar hackathon : Problem statement 3 of Address authentication


This folder contains the Nodejs files for a REST API that helps in formatting address in the aadhaar card. 
It supports 100 languages.


The code for web REST api in node js is as follows:
 //REST API  in Node.js
 
 

		var express = require('express'); 
		var app = express();
		var fs = require('fs'); 
		var http = require('http');



The above snippet calls the express framework and 
the http to create a web based server



		const tesseract = require("node-tesseract-ocr");
		const { nextTick } = require('process');
		const { isBuffer } = require('util');


The code uses the Tesseract-OCR API to convert the image address to
a corressponding text address

		const config = {
			lang: "eng",
			oem: 1,

			psm: 3,
		}

The configuration area specifies the languages for the conversion. It supports 100 different
languages. So the user may choose any language by changing the configuration




		fs.readFile('aadhaar.jpg', function(err, data) {
		http.createServer(function(req, res) {
		if (err) throw err // Fail if the file can't be read.
		tesseract.recognize("aadhaar.jpg", config)//Enter link for your image file
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
				}).listen(8124)
				console.log('Server running at http://localhost:8124/')// Open this web api link to view the output
			})

  The output for the code is visible at "http://localhost:8124/"
  The above snippet clears the unwanted characters in the text and removes duplicates from it. 
   The res.write sends the output to the server at port 8124
  A sample input and output for the code:
  Input as an aadhaar image :
  
  
  ![aadhaar](https://user-images.githubusercontent.com/91767610/139588050-6bcd38e2-681e-4ad1-8683-7481f5818659.jpg)
		
		
 Ouput on the web
 browser as:
 
 ![WhatsApp Image 2021-10-31 at 19 54 07](https://user-images.githubusercontent.com/91767610/139588204-42004f2f-c421-447a-bbad-98fd4fad8e22.jpeg)
		
		
Advantages of this API:
1. Allows effective Address formatting
2. Extracts only the address
3. Removes unwanted characters and repeated words 
4. Supports 100 different langauges
5. A Scalable design as a number of different things can be added
6. Very easy to import as it is a web based REST API

Additions that can be made:
1. The deign can be integrated with various different applications to create powerful and effective solutions
2.  URL can be made secure 
3.  CAn be used for other purposes, too



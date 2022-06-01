const http = require('http');
const fs = require('fs');


const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readfilesync('../main interface/index.html');
const about = fs.readfilesync('../about interface/about-us.html')
const server = http.creatserver((req,res)=>{
    console.log(req.url)
    url = req.url;

    res.statuscode = 200;
    res.setHeader('content type', 'text/html');
    if(url == '/'){
        res.end(home);
    }
    else if(url == '/aboutus'){
        res.end(about);
    }
    else{
        res.statuscode = 404;
        res.end('<h1>404 not found</h1>');
    }
})
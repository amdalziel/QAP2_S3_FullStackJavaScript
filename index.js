
// Core Packages 
const http = require('http');
const fs = require('fs');
const path = require('path'); 
const myEvent = require('events'); 


// Imports from other JS files 
const { homePage, aboutPage, contactPage, blogPage, curriculaPage, 
     musictheoryinsideoutPage, cssStaticPage, imgStaticPage } = require('./routes.js'); 

global.DEBUG = true; 

const port = 3000; 

const server = http.createServer((request, response) => { // add async?? 

    if(DEBUG) console.log(`Request Url: ${request.url}`); 
    let path = './views/'; 

    let imagesRE = /\/images\/.+/gi; 

    if (imagesRE.test(request.url)) {
        let imgPath = `.${request.url}`;
        if (DEBUG) console.log(`Welcome to '${imgPath}'`);
        imgStaticPage(imgPath, response);
        return;
    }


    switch (request.url) {
        case '/':
            path+= 'index.html'; 
            if (DEBUG) console.log(`Welcome to '/'`); 
            homePage(path, response);
            break;

        case '/home':
            path+= 'index.html'; 
            if (DEBUG) console.log(`Welcome to '/home'`); 
            homePage(path, response);
            break;
            
        case '/about':
            path+= 'about.html'; 
            if (DEBUG) console.log(`Welcome to '/about'`); 
            aboutPage(path, response); 
            break;

        case '/curricula':
            path+= 'curricula.html'; 
            if (DEBUG) console.log(`Welcome to '/curricula'`); 
            curriculaPage(path, response); 
            break;
            
        case '/musictheoryinsideout':
            path+= 'musictheoryinsideout.html'; 
            if (DEBUG) console.log(`Welcome to '/musictheoryinsideout'`); 
            musictheoryinsideoutPage(path, response); 
            break; 
            
        case '/blog':
            path+= 'blog.html'; 
            if (DEBUG) console.log(`Welcome to '/blog'`); 
            blogPage(path, response); 
            break; 
        
        case '/contact':
            path+= 'contact.html'; 
            if (DEBUG) console.log(`Welcome to '/contact'`); 
            contactPage(path, response); 
            break;

        case '/stylesheet.css':
            path += 'stylesheet.css';
            if (DEBUG) console.log(`Welcome to '/stylesheet.css'`); 
            cssStaticPage(path, response);
            break;
    
        default:
            let errorMsg = `Error 404: ${request.url} not found`; 
            if (DEBUG) console.log(errorMsg); 

            response.writeHead(404, { 'Content-Type': 'text/plain'});
            response.end(`Error 404 - requested page not found`); 
            break;
    }


    }



)


server.listen(port, () => {
    console.log(`Server running on port ${port}`); 
})
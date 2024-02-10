
// Core Packages 
const http = require('http');
const fs = require('fs');
const path = require('path'); 
const myEvent = require('events'); 


// Imports from other JS files 
const { homePage, aboutPage, contactPage, blogPage, curriculaPage, 
     musictheoryinsideoutPage, cssStaticPage, imgStaticPage, jsStaticPage } = require('./routes.js'); 
const { myEmitter } = require('./logEvents.js');


// DEBUG currently set to 'true' - mesages sent to console 
global.DEBUG = true; 

const port = 3000;



const server = http.createServer((request, response) => { 

    if(DEBUG) console.log(`Request Url: ${request.url}`); 
    let path = './views/'; 

    // Regular expression - for rendering images on the index.html 
    // If the request.url contains /images/ in the path - this means it is a jpg image.
    // Use the imgStaticPage (routes.js file) to render the image 
    let imagesRE = /\/images\/.+/gi; 

    if (imagesRE.test(request.url)) {
        let imgPath = `.${request.url}`;
        // if (DEBUG) console.log(`Routed to '${imgPath}'`);
        imgStaticPage(imgPath, response);
        return;
    }

    // Switch clause - case for each route 
    // Default - if the user enters a route that does not exist - give a 404 message 
    // If the user enters a route that exists, a function 'fetchHtml' or 'fetchStaticFile' will attempt to fetch the file 
    switch (request.url) {
        case '/':
            path+= 'index.html'; 
            if (DEBUG) console.log(`Routed to '/'`); 
            homePage(path, response);
            break;

        case '/home':
            path+= 'index.html'; 
            if (DEBUG) console.log(`Routed to '/home'`);  
            homePage(path, response);
            break;
            
        case '/about':
            path+= 'about.html'; 
            if (DEBUG) console.log(`Routed to '/about'`); 
            aboutPage(path, response); 
            break;

        case '/curricula':
            path+= 'curricula.html'; 
            if (DEBUG) console.log(`Routed to '/curricula'`); 
            curriculaPage(path, response); 
            break;
            
        case '/musictheoryinsideout':
            path+= 'musictheoryinsideout.html'; 
            if (DEBUG) console.log(`Routed to '/musictheoryinsideout'`); 
            musictheoryinsideoutPage(path, response); 
            break; 
            
        case '/blog':
            path+= 'blog.html'; 
            if (DEBUG) console.log(`Routed to '/blog'`); 
            blogPage(path, response); 
            break; 
        
        case '/contact':
            path+= 'contact.html'; 
            if (DEBUG) console.log(`Routed to '/contact'`); 
            contactPage(path, response); 
            break;

        case '/stylesheet.css':
            path += 'stylesheet.css';
            if (DEBUG) console.log(`Routed to '/stylesheet.css'`); 
            cssStaticPage(path, response);
            break;

        case '/banner.js':
            path = 'banner.js';
            // if (DEBUG) console.log(`Routed to '/banner.js'`); 
            jsStaticPage(path, response);
            break;
    
        default:
            let errorMsg = `Error 404: ${request.url} not found`; 
            if (DEBUG) console.log(errorMsg); 

            myEmitter.emit('error', errorMsg); 

            response.writeHead(404, { 'Content-Type': 'text/plain'});
            response.end(`Error 404 - requested page not found`); 
            break;
    }
    }
)


server.listen(port, () => {
    console.log(`Server running on port ${port}`); 
})
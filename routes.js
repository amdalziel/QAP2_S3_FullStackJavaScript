const fs = require('fs'); 

const { myEmitter } = require('./logEvents.js');

function homePage(path, response) {
    fetchHtml(path, response)
    const homeMsg = `Route /home visited.`; 
    myEmitter.emit('route', homeMsg);
}

function aboutPage(path, response) {
    fetchHtml(path, response)
    const aboutMsg = `Route /about visited.`; 
    myEmitter.emit('route', aboutMsg);
}

function contactPage(path, response) {
    fetchHtml(path, response)
    const contactMsg = `Route /contact visited.`; 
    myEmitter.emit('route', contactMsg);
}

function blogPage(path, response) {
    fetchHtml(path, response)
    const blogMsg = `Route /home visited.`; 
    myEmitter.emit('route', blogMsg);
}

function curriculaPage(path, response) {
    fetchHtml(path, response)
    const curriculaMsg = `Route /curricula visited.`; 
    myEmitter.emit('route', curriculaMsg);
}

function musictheoryinsideoutPage(path, response) {
    fetchHtml(path, response)
    const theoryMsg = `Route /musictheoryinsideout visited.`; 
    myEmitter.emit('route', theoryMsg);
}

function cssStaticPage(path, response) {
    staticFile(path, response, 'text/css'); 
}

function imgStaticPage(path, response) {
    staticFile(path, response, 'text/jpg'); 
}

function jsStaticPage(path, response) {
    staticFile(path, response, 'text/js'); 
}




function fetchHtml(page, response) {
    fs.readFile(page, (error, content) => {
        if(error) {
            response.writeHead(500, { 'Content-Type': 'text/plain'}); 
            response.end('500 Internal Server Error'); 
        } else { 
            response.writeHead(200, { 'Content-Type': 'text/html '});
            response.end(content, 'utf-8'); 
        }
    });
};

function staticFile (path, response, ct)  {
    fs.readFile(path, (error, content) => {
        if (error) {
            console.error(`Error reading file: ${error}`);
            response.writeHead(500, { 'Content-Type': 'text/plain' });
            response.end('Internal Server Error');
        } else {
            response.writeHead(200, { 'Content-Type': ct });
            response.end(content);
        }
    });
};

module.exports = {
    homePage,
    aboutPage,
    contactPage,
    blogPage,
    curriculaPage, 
    musictheoryinsideoutPage, 
    cssStaticPage, 
    imgStaticPage,
    jsStaticPage,
}


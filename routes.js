const fs = require('fs'); 

function homePage(path, response) {
    fetchHtml(path, response)
}

function aboutPage(path, response) {
    fetchHtml(path, response)
}

function contactPage(path, response) {
    fetchHtml(path, response)
}

function blogPage(path, response) {
    fetchHtml(path, response)
}

function curriculaPage(path, response) {
    fetchHtml(path, response)
}

function musictheoryinsideoutPage(path, response) {
    fetchHtml(path, response)
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

module.exports = {
    homePage,
    aboutPage,
    contactPage,
    blogPage,
    curriculaPage, 
    musictheoryinsideoutPage, 
}


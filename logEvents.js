const fs = require('fs');
const fsPromises = require('fs').promises; 
const path = require('path'); 

const uuid = require('uuid'); 
const { format, getYear } = require('date-fns'); 

const EventEmitter = require('events'); 
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter(); 



myEmitter.on('error', async (url) => {
    const onDate = new Date(); 
    const onYear = getYear(new Date()).toString(); 
    if(DEBUG) console.log(`Route Event on: ${url} at ${onDate}`); 
    if(!fs.existsSync(path.join(__dirname, 'logs'))) {
        fs.mkdirSync(path.join(__dirname, 'logs'));
    }; 
    if(DEBUG) console.log(`Directory 'logs' created`); 
    if(!fs.existsSync(path.join(__dirname, 'logs', onYear))) {
            fs.mkdirSync(path.join(__dirname, 'logs', onYear));
            if(DEBUG) console.log(`Directory ${onYear} created`); 
        };
    if(!fs.existsSync(path.join(__dirname, 'logs', onYear, 'errorLog'))) {
        fs.mkdirSync(path.join(__dirname, 'logs', onYear, 'errorLog')); 
        if(DEBUG) console.log (`Directory 'logs/YYYY/errorLogs' created`); 
    }; 

    

    }
    // fs.appendFile(path.join(__dirname, 'logs', 'route.log'), '')
); 




myEmitter.on('error', (url) => {

}); 



myEmitter.on('cta', (url) => {

}); // cta = call to action 


module.exports = {
    myEmitter, 
}




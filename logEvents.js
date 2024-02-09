const fs = require('fs');
const fsPromises = require('fs').promises; 
const path = require('path'); 

const { v4: uuid } = require('uuid'); 
const { format, getYear } = require('date-fns'); 

const EventEmitter = require('events'); 
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter(); 



myEmitter.on('error', (url) => {
    setUpDirectories('errorLogs', url); 
    }

); 



myEmitter.on('route', (url) => {
    setUpDirectories('routeLogs', url); 

}); 



async function setUpDirectories(directoryType, url) {

    // Dates needed for logging: 
    const onDate = new Date(); 
    const onYear = getYear(new Date()).toString(); 
    const onMonthDay = format(new Date(), 'LLLdd').toString(); 
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;

    const currFolder = path.join(__dirname, 'logs', onYear, directoryType); 
    const logItem = `${dateTime}\t${directoryType}\t${url}\t${uuid()}`;

try {
    if(DEBUG) console.log(`Route Event on: ${url} at ${onDate}`); 
    if(!fs.existsSync(path.join(__dirname, 'logs'))) {
       await fsPromises.mkdir(path.join(__dirname, 'logs'));
    }; 
    if(DEBUG) console.log(`Directory 'logs' created`); 
    if(!fs.existsSync(path.join(__dirname, 'logs', onYear))) {
            await fsPromises.mkdir(path.join(__dirname, 'logs', onYear));
            if(DEBUG) console.log(`Directory ${onYear} created`); 
        };
    if(!fs.existsSync(path.join(__dirname, 'logs', onYear, directoryType))) {
        if(DEBUG) console.log(currFolder); 
        await fsPromises.mkdir(path.join(__dirname, 'logs', onYear, directoryType)); 
        if(DEBUG) console.log (`Directory 'logs/YYYY/${directoryType}' created`); 
    }; 

    if(DEBUG) console.log(logItem); 
    const fileName = onMonthDay; 
    await fsPromises.appendFile(path.join(currFolder, fileName), logItem + '\n');

    
    
} catch (error) {

    console.log(error); 
    
}
    
}; 


module.exports = {
    myEmitter, 
}




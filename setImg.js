const testFolder = './public/storage';
const fs = require('fs');
const pic = require('./Model/picture')

fs.readdir(testFolder, (err, files) => {
    files.forEach(file => {
        try{
            let pi = new pic()
            pi.URL = "/storage/" + file
            pi.folder = "storage"
            pi.save()
        }catch{}       
    });
});
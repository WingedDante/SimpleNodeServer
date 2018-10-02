const express = require ('express');
const app = express();
const port = 8080;
const path = require('path');

app.use(express.static('_site'))

app.get('/', (request, response)=>{
    response.sendFile(path.join(__dirname + '/_site/index.html'));

});

app.listen(port, (err) =>{
    if (err){
        return console.log('stuff broke', err)
    }
    console.log(`server listening on localhost:${port}`)
});

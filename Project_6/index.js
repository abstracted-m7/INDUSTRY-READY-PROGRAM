

const http = require('http');
const dotenv = require('dotenv');

dotenv.config();
// console.log(process.env);
console.log(dotenv.config());

const PORT = process.env.PORT || 8080;

const x = http.createServer((req, res) => {
    res.writeHead(200,{'Content-Type': 'text/plain'});
    
    res.writeProcessing();
    res.end("Hii their.!!",()=> {
    console.log('Data sent successfully');
  });
});


x.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
 
});
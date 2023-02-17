const http=require('http');
const fs= require('fs');


const host='localhost';
const port=8080;

http.createServer((request,respose)=>{
    // respose.write("hola mundo soy nuevo ");
    // return respose.end();

    if(request.url === '/'){
        respose.write('inicio de proyecto');
        return respose.end();
    }

    if(request.url === '/home'){
        respose.write(fs.readFileSync('dato/pagina.html','utf-8'));
        return respose.end();
    }

}).listen(port,host,()=>{
    console.log(`Server is running on http://${host}:${port}/home`);
})
    

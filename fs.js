const fs=require('fs');
const os=require('os')

// leer el contenido de un archivo
// const dato=fs.readFileSync('dato/hola.txt', 'utf-8');
// console.log(dato);


//creamos y agregamos contenido
// const n="sad";
// fs.writeFileSync("dato/tercero.js",n)

//creamos y agregamos contenido con objetos
// const hola=`1 \n`;
// fs.writeFileSync('../data/tercero.js',hola,{
//     flag: 'a'
// })


// fs.readFile('dato/on.js', 'utf-8', (err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data);
// })


console.log(" ejercicio numero 1 \n Alamcenar en un archivo txt los numero del 1 al 10");
for(i=1;i<=10;i++)
{
    fs.appendFileSync('dato/numero.txt',`${i}\n`);
}

console.log("\nejercio numero 2\nCrear un objeto,crear un archivo y almacenar sus valores en un archivo");
let cpu=os.cpus().slice(0,1).map((registro)=> registro.times);

const conversionRamDispoble=()=>{return 1e-9*os.freemem()}
const conversionTotalRam=()=>{return 1e-9*os.totalmem()}
const objetoOS={
    ramDispoble:os.freemem(),
    totalRam:os.totalmem(),
    cpu,
    conversionRamDispoble,
    conversionTotalRam
}

fs.writeFileSync('dato/objetoOS.txt',`Ram disponible ${objetoOS.conversionRamDispoble()} gb\nRam total ${objetoOS.conversionTotalRam()} gb\ninformacion del sistme : usuario:${cpu[0].user}, sys:${cpu[0].sys}, nice:${cpu[0].nice}, idle:${cpu[0].idle}, irq:${cpu[0].irq}`);
const path=require('path');

const union=path.join('consumible','propiedades','etc.js');
console.log(union);

const rutaSinArchivo=path.dirname(union);
console.log(rutaSinArchivo);

const fileParse=path.parse(union);
console.log(fileParse);

const filResolve=path.resolve(union);
console.log(+filResolve);
console.log(path);
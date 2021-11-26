// ! Traer modulos de node.js
// Requerir modulos path y file system de node.js para leer rutas y archivos.
const path = require('path');

// Requerir el modulo de File System de Node.js, este devuelve un objeto.
const fs = require('fs');

// ! Funcion principal mdLinks que retornara una promesa
// const mdLinks = () => {
// };

// ! Guardar el input (ruta ingresada por el usuario) en una variable
const inputPath = './input-readme/prueba1-readme.md';
console.log(`***1. Ruta Ingresada por el usuario: ${inputPath} ***`);

// ? Convertir ruta relativa a absoluta para mostrar al usuario
const absolutePath = path.resolve(inputPath);
console.log(`***2. La ruta absoluta es: ${absolutePath} ***`);

// ! Obteniendo info acerca de un archivo y validando ruta (FUNCTION)
const validateFile = () => {
  fs.stat(inputPath, (error, stats) => {
    if (error) {
      console.log(`*** 3. La ruta ingresada ${inputPath} NO es válida ***`);
    } else {
      // Usando métodos del objeto Stats para validar si es archivo o directorio
      console.log(`*** 3. LA RUTA INGRESADA ${inputPath} ES UN ARCHIVO: `, stats.isFile());
      console.log(`*** 4. LA RUTA INGRESADA ${inputPath} ES UN DIRECTORIO: `, stats.isDirectory());
    }
  });
};

validateFile();

// ! Obteniendo la extension del archivo
const fileExtension = path.extname(inputPath);
console.log(`*** 5. La extension del archivo es: ${fileExtension}`);

// ! Leer el archivo (FUNCTION)
const readingFile = () => {
  fs.readFile(inputPath, 'utf8', (err) => {
    if (err) {
      console.error('*** 6.ERROR AL LEER EL ARCHIVO ***', err);
    } else {
      console.log('*** 6. LECTURA DEL ARCHIVO ***');
      // console.log(data);
    }
  });
};

// ! Función para solamente leer archivos con extension .md (FUNCTION)
const readMackdown = () => {
  if (fileExtension === '.md') {
    readingFile();
  } else {
    console.log('*** 6. No es un archivo tipo MARKDOWN***');
  }
};

readMackdown();

//Función para extraer links de dataFile entregado por readFile y además se filtran. Esta función es síncrona porque ya recibe el texto plano (no lo busca)
const getLinks = (dataFile, filePath) => markdownLinkExtractor(dataFile, true)
  .filter(objectDetail => (((objectDetail.href).includes('#') == true) && ((objectDetail.href).includes('http' || 'https')) == true) ||
  ((objectDetail.href).includes('#') == false) && ((objectDetail.href)
  .includes('http' || 'https')))
  .map(objectDetail => ({
    href: objectDetail.href,
    text: objectDetail.text,
    file: filePath,
  })) 
// Esta función es una promesa que valida la ruta y si es archivo
/* const validFile = (inputPath) => new Promise((resolve, reject) => {
  fs.stat(inputPath, (error, stats) => {
    if (stats) {
      resolve(stats.isFile());
    } else {
      reject(error, 'Ruta inválida');
    }
  });
});

console.log(validFile); */

// fs.readdir('./input-readme', (err, files) => {
//   if (err) {
//     // throw err;
//     console.error('****RUTA INVALIDA****', err);
//   } else {
//     console.log('****LECTURA DEL DIRECTORIO****');
//     console.log(files);
//   }
// });

// fs.readFile('./input-readme/prueba1-readme.md', 'utf8', (err, data) => {
//   if (err) {
//     console.error('****ARCHIVO INVALIDO, DEBE SER UN ARCHIVO TIPO MARKDOWN****', err);
//   // return
//   } else {
//     console.log('****LECTURA DEL ARCHIVO****');
//     // console.log(data);
//   }
// });

// fs.readFile('.', 'utf8' , (err, data) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   console.log(data)
// })

// module.exports = () => {
//   // ...
// };

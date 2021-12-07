// ! Traer modulos de node.js
// Requerir modulos path y file system de node.js para leer rutas y archivos.
const path = require('path');

// Requerir el modulo de File System de Node.js, este devuelve un objeto.
const fs = require('fs');
// const { resolve } = require('path');

// Requerir libreria para obtener links de mardown
// const md = require('markdown-it')();

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
const readingFile = (inputPath1) => {
  const promiseReading = new Promise((res, reject) => {
    fs.readFile(inputPath1, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        console.error('*** 6.ERROR AL LEER EL ARCHIVO ***', err);
      } else {
        // console.log('*** 6. LECTURA DEL ARCHIVO ***');
        // console.log(data);
        res(data);
      }
    });
  });
  return promiseReading;
};

readingFile(inputPath)
  .then((data) => console.log(data))
  .catch(console.log('😁este archivo no es puede leer'));

// ! Función para solamente leer archivos con extension .md (FUNCTION)
const readMarkdown = () => {
  if (fileExtension === '.md') {
    readingFile();
    console.log('*** 6. Leyendo archivo tipo MARKDOWN***');
  } else {
    console.log('*** 6. No es un archivo tipo MARKDOWN***');
  }
};

// readMarkdown();

// ! Función para extraer links del archivo .md

// const { readFileSync } = require('fs');
// const markdownLinkExtractor = require('markdown-link-extractor');

// const markdown = readFileSync(inputPath, { encoding: 'utf8' });

// const links = markdownLinkExtractor(markdown, false);
// links.forEach((link) => console.log(link));

// const details = markdownLinkExtractor(markdown, true);
// details.forEach((detail) => console.log(detail));

/* const getLinks = (err) => {
  if (err) {
    console.log('*** 7. No es un archivo tipo MARKDOWN***');
  } else {
    const details = markdownLinkExtractor(readMarkdown(inputPath), false);
    details.forEach((detail) => console.log(detail));
    console.log('HOLA ENTRE');
  }
};

getLinks(); */

// ! Función para extraer links del archivo leido en la funcion readMarkdown
// const getLinks = md.parse(readMarkdown, {});

// console.log(getLinks);

// const markdownLinkExtractor = require('markdown-link-extractor');

// const details = markdownLinkExtractor(readingFile, true);
// details.forEach((detail) => console.log(detail));

// ! Funcion principal mdLinks que retornara una promesa
// const mdLinks = (inputPath, options) =>
// new Promise ((resolve, reject) => {
//   validateFile(inputPath)
//   .then
// };

readMarkdown(inputPath)
  .then(console.log('*** 5. 😁 Leyendo archivo tipo MARKDOWN', readingFile(inputPath)))
  .catch((error) => console.error(error, '*** 5.😓 No es un archivo tipo MARKDOWN'));

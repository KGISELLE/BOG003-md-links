// ! Guardar el input (ruta ingresada por el usuario) en una variable
// const inputPath = './input-readme';
// const inputPath = './input-readme/prueba3-readme.md';

const fs = require('fs');

const path = require('path');

const marked = require('marked');

const jsdom = require('jsdom');

const { JSDOM } = jsdom;

// ! Funcion para validar que la ruta sea correcta y que sea un archivo
const asFile = (inputPath0) => {
  const absolutePath = path.resolve(inputPath0);
  console.log(`*** 1. La ruta absoluta es: ${absolutePath}`);
  const validateFile = new Promise((resolve, reject) => {
    fs.stat(inputPath0, (error, stats) => {
      if (error) {
        reject(error);
        console.log('❌ La ruta ingresada no existe');
      } else if (stats.isFile() === false) {
        reject(error);
        console.log('🤔 La ruta ingresada es un directorio ');
      } else {
        resolve(stats.isFile());
        console.log('*** 2. La ruta ingresada es un archivo');
      }
    });
  });
  return validateFile;
};

// asFile(inputPath)
//   .then((res) => console.log('Es un archivo', res))
//   .catch((error) => console.log('Error en la ruta', error));

// ! Funcion para identificar tipo de archivo
// const fileType = (inputPath1) => path.extname(inputPath1);
// console.log(fileType(inputPath)); // .md

const isMarkdown = (inputPath2, error) => {
  const fileType = path.extname(inputPath2);
  const promiseFileMd = new Promise((resolve, reject) => {
    if (fileType === '.md') {
      resolve(true);
    } else {
      reject(error);
      console.log('😥 EL archivo no es de tipo markdown');
    }
  });
  return promiseFileMd;
};

// isMarkdown(inputPath)
//   .then((res) => console.log('*** Es un archivo tipo markdown', res))
//   .catch(() => console.error('*** El archivo no es de tipo markdown'));

// ! Funcion para leer el archivo (FUNCTION)
const readingFile = (inputPath1) => {
  const promiseReading = new Promise((resolve, reject) => {
    fs.readFile(inputPath1, 'utf8', (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
  return promiseReading;
};

// readingFile(inputPath)
//   .then((data) => console.log('*** Leyendo archivo', data))
//   .catch((error) => console.error(error, '*** Error al leer el archivo'));

// ! Función para extraer links de data leeida de archivo tipo markdown
const getLinks = (data) => {
  const arrayLinks = [];

  // Funcion renderizar(HTML)libreria marked - convirtiendo a archivo html.
  const dataHtml = marked.parse(data);

  const dom = new JSDOM(dataHtml);

  const aTags = dom.window.document.getElementsByTagName('a');

  const aTagsArray = [...aTags];

  aTagsArray.forEach((elem) => {
    console.log(`${elem}`);
    arrayLinks.push(`href: ${elem}`);
  });

  console.log(arrayLinks);
};

/* // ! Encadenando promesas
asFile(inputPath)
  .then(() => inputPath)
  .then((res) => isMarkdown(res))
  .then((res) => {
    console.log('*** 3. Es un archivo tipo Markdown', res);
    return inputPath;
  })
  .then((res) => readingFile(res))
  .then((res) => {
    console.log('*** 4. Leyendo el archivo');
    return res;
  })
  .then((res) => {
    console.log('*** 5. Extrayendo Links');
    getLinks(res);
  })
  .catch(() => console.log('Error Proceso Terminado')); */

module.exports = {
  asFile,
  isMarkdown,
  readingFile,
  getLinks,
};

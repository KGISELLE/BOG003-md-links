// ! Guardar el input (ruta ingresada por el usuario) en una variable
// const inputPath = './input-readme';
// const inputPath = './input-readme/prueba3-readme.md';

// LLamado a metodos de nodeJS
const fs = require('fs');
const path = require('path');

// Llamado a librerias
const marked = require('marked');
const jsdom = require('jsdom');

const { JSDOM } = jsdom;

// Libreria para hacer peticiones HTTP
const fetch = require('node-fetch');

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
        resolve(stats.isFile() === true);
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

  aTagsArray.forEach((elem) => arrayLinks.push(`${elem}`));

  console.log(arrayLinks);

  if (arrayLinks.length === 0) {
    console.log('Ups, no hemos encontrado ningún enlace');
  }

  return arrayLinks;
};

// ! Funcion para validar los links
const validateLinks = (arrayL) => {
  console.log('*** 6. Validando link');
  arrayL.map((link) => fetch(link)
    .then((res) => {
      if (res.status >= 200 && res.status < 400) {
        console.log('😉 Link OK');
        console.log('URL =', res.url);
        console.log('Status HTTP =', res.status);
        console.log('Mensaje Status =', res.statusText);
        console.log('');
      } else {
        console.log('❌ Link Fail');
        console.log('URL =', res.url);
        console.log('Status HTTP =', res.status);
        console.log('Mensaje Status =', res.statusText);
        console.log('');
      }
    })
    .catch((err) => console.error(err, '😪 Link Roto')));
};

validateLinks([
  'https://es.wikipedia.org/wiki/Markdown',
  'https://nodejs.org/',
  'https://nodejs.org/es/',
  'https://developers.google.com/v8/',
  'https://httpbin.org/post']);

module.exports = {
  asFile,
  isMarkdown,
  readingFile,
  getLinks,
  validateLinks,
};



// // validateLinks('https://github.com/github/fetch');
// validateLinks(['https://github.com/github/fetch', 'https://httpbin.org/post']);
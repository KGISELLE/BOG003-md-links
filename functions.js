// ! Guardar el input (ruta ingresada por el usuario) en una variable
// const inputPath = './input-readme';
const inputPath = './input-readme/prueba1-readme.md';

const fs = require('fs');

const path = require('path');

const marked = require('marked');

const jsdom = require('jsdom');

const { JSDOM } = jsdom;

// ! Funcion para validar que la ruta sea correcta y que sea un archivo
const asFile = (inputPath0) => {
  const validateFile = new Promise((resolve, reject) => {
    fs.stat(inputPath0, (error, stats) => {
      if (error) {
        reject(error);
      } else {
        resolve(stats.isFile());
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
  // Crear array vacio para guardar los links
  const arrayLinks = [];

  // Funcion renderizar(HTML)libreria marked.
  const dataHtml = marked.parse(data);
  console.log(dataHtml);

  const dom = new JSDOM(dataHtml);

  const aTags = dom.window.document.getElementsByTagName('a');

  const links = aTags[0].getAttribute('href');
  console.log('Extrayendo el link', links);

  arrayLinks.push(links);
  console.log(arrayLinks);

  // console.log('mostar arrayLink', arrayLinks);
};

getLinks('[Markdown](https://es.wikipedia.org/wiki/Markdown)');

// ! Encadenando promesas
asFile(inputPath)
  .then((res) => {
    console.log('*** 1. Es un archivo', res);
    return inputPath;
  })
  .then((res) => isMarkdown(res))
  .then((res) => {
    console.log('*** 2. Es un archivo tipo Markdown', res);
    return inputPath;
  })
  .then((res) => readingFile(res))
  .then((res) => {
    console.log('*** 3. Leyendo el archivo');
    return res;
  })
  // .then((res) => console.log('Es un archivo es de tipo', res))
  .catch(() => console.log('Error Proceso Terminado'));

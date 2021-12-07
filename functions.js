// ! Traer modulos de node.js
// Requerir modulos path y file system de node.js para leer rutas y archivos.
const path = require('path');

// Requerir el modulo de File System de Node.js, este devuelve un objeto.
const fs = require('fs');

// ! Guardar el input (ruta ingresada por el usuario) en una variable
const inputPath = './input-readme/prueba3-readme.md';
console.log(`***1. Ruta Ingresada por el usuario: ${inputPath} ***`);

// ? Convertir ruta relativa a absoluta para mostrar al usuario
const absolutePath = path.resolve(inputPath);
console.log(`***2. La ruta absoluta es: ${absolutePath} ***`);

// ! Obteniendo la extension del archivo
const fileExtension = path.extname(inputPath);
console.log(`*** 3. La extension del archivo es: ${fileExtension}`);

// ! Leer el archivo (FUNCTION)
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

readingFile(inputPath)
  .then((data) => console.log('*** 4. 😁 Leyendo archivo', data))
  .catch((error) => console.error(error, '*** 4. 😓 Error al leer el archivo'));

// ! Función para solamente leer archivos con extension .md (FUNCTION)
const readMarkdown = (error, fileMarkdown) => {
  const promiseFileMd = new Promise((resolve, reject) => {
    if (fileExtension === '.md') {
      resolve(fileMarkdown);
    } else {
      reject(error);
    }
  });
  return promiseFileMd;
};

readMarkdown(inputPath)
  .then(console.log('*** 5. 😁 Leyendo archivo tipo MARKDOWN', readingFile(inputPath)))
  .catch((error) => console.error(error, '*** 5.😓 No es un archivo tipo MARKDOWN'));

// ! Función para extraer links de data leeida en funcion readingFile

const functions = require('./functions');

// ! Funcion principal mdLinks que retornara una promesa
const mdLinks = (inputPath, option, error) => {
  const promiseMD = new Promise((resolve, reject) => {
    if (error) {
      reject(error);
    } else {
      const resMD = functions.asFile(inputPath)
        .then(() => inputPath)
        .then((res) => functions.isMarkdown(res))
        .then((res) => {
          console.log('*** 3. Es un archivo tipo Markdown', res);
          return inputPath;
        })
        .then((res) => functions.readingFile(res))
        .then((res) => {
          console.log('*** 4. Leyendo el archivo');
          return res;
        })
        .then((res) => {
          console.log('*** 5. Extrayendo Links');
          functions.getLinks(res);
        })
        // .then((res) => {
        //   console.log('*** 6. validando Links', res);
        //   functions.validateLinks(res);
        // })
        .catch(() => console.log('Proceso Terminado'));
      resolve(resMD);
    }
  });
  return promiseMD;
};

mdLinks('./input-readme/prueba3-readme.md');

module.exports = {
  mdLinks,
};

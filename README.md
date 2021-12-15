# MD Links 🕵️‍♀️👓🔗🖇🔗

## Índice

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Definición del producto (product definition)](##2-definición-del-producto-product-definition)
* [3. Plan de accion](#3-plan-de-accion)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Entregables](#6-entregables)
* [9. Checklist](#9-checklist)
* [10. Achicando el problema](#10-achicando-el-problema)

***

## 1. Resumen del proyecto

El presente proyecto se desarrolló como parte del proceso de aprendizaje del bootcamp de Laboratoria en el cual las estudiantes desarrollan habilidad claves para trabajar como desarrolladoras front-end.


## 2. Definición del producto (Product Definition)

El producto entregable es una herramienta de línea de comando (CLI) así como una librería propia usando Node.js, que lee y analice archivos en formato Markdown, para verificar los links que contengan y reportar los estados de las url's de estos links.

## 3. Plan de acción

### Etapa de Planeación

1. Lo primero que se realizó fue la lectura del readme de [Laboratoria](https://github.com/Laboratoria/BOG003-md-links) para poder entender el problema y así poder buscar posibles soluciones.

2. Se realizó planning en [Trello](https://trello.com/b/GTuKJg3r/md-links-gis) para estructurar mejor la planeación y los objetivos de aprendizaje de este proyecto, teniendo en cuenta los sprints faltantes para la culminación del bootcamp.

3. Se realizó un [Diagrama de Flujo](https://trello.com/1/cards/6196650d85856424173e6996/attachments/619bc2c5a36d95578f5e7fa1/download/md-links-chart_(1).png) para visualizar mejor las etapas del proyecto y planificar los procesos a realizar, puesto que este proyecto es distinto de los que has venido trabajando hasta ahora dado que no hay una interfaz web, todo se desarrolla en el editor de código (Visual Studio Code) y consola/terminal. <br>
Para realizar este diagrama de flujo se utilizó la herramienta **LucidChart**.

  <img src = "input-readme\diagrama-flujo.png">


4. Se realizó planning adicional mediante la herramienta [Github Projects](https://github.com/KGISELLE/BOG003-md-links/projects/1) que por medio de issues y milestones se organiza y planifica tareas y objetivos concretos del proyecto.

Se tomaron en consideración para realizar esta planeación los entregables del proyecto, el Checklist y los pasos definidos en el diagrama de flujo.

5. En paralelo a las actividades mencionadas, se priorizó el estudio [node.js](https://nodejs.org/en/docs/guides/) para estructurar mejor las actividades anteriores.

### Etapa de configuración y modularización (Archivos del Proyecto)

En esta etapa se realizó las configuraciones iniciales del proyecto

1. Se comenzó con la configuración de los datos principales del proyecto en el archivo ***package.json***.

2. Se instaló el ESLint y se configuraron algunas reglas.

3. Se creó la carpeta donde iran los archivos de prueba ***input-readme***.

4. Se crearon los archivos readme de prueba con extension .md de los cuales uno tiene todos los links perfectos ***prueba1-readme.md*** y el otro tiene algunos links rotos ***prueba2-readme.md*** y existe un tercer archivo ***diagrama-flujo.png*** con extensión .png para poder validar que se lean los archivos con extension .md.

### Etapa de Desarrollo

Se modularizo el codigo utilizando el sistema de módulos CommonJS de nodeJS.

Se dividio el código en los siguientes archivos y carpetas:
* 🗂️ input-readme = Carpeta que contiene archivos con extension .md, .txt y .png, esto para realizar las pruebas de la funcionalidad del proyecto.
  * 📝 diagrama-flujo.png
  * 📝 prueba.txt
  * 📝 prueba1-readme.md
  * 📝 prueba2-readme.md
  * 📝 prueba3-readme.md

* 📝 functions.js = Archivo donde se crea el código para las funciones que se utilizarán en el archivo index.js que contiene la funcion mdLinks.
* 📝 Index.js = Archivo principal que contiene la funcion mdLinks, la cual se compone de la invocación de las funciones-promesas creadas en el archivo functions.js.
* 📝 cli.js = Archivo en el cual se ejecutará la libreria por parte del usuario, en este archivo se llama a la funcion mdLinks para ejecutar las validaciones de los Links según la ruta ingresada por el usuario.



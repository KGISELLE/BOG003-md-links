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

[Node.js](https://nodejs.org/es/) es un entorno de ejecución para JavaScript
construido con el [motor de JavaScript V8 de Chrome](https://developers.google.com/v8/).
Esto nos va a permitir ejecutar JavaScript en el entorno del sistema operativo,
ya sea tu máquina o un servidor, lo cual nos abre las puertas para poder
interactuar con el sistema en sí, archivos, redes, ...

En este proyecto nos alejamos un poco del navegador para construir un programa
que se ejecute usando Node.js, donde aprenderemos sobre cómo interactuar con el
sistema archivos, con el entorno (_proceso_, _env_, _stdin/stdout/stderr_), ...

En este proyecto crearás una herramienta de línea de comando (CLI) así como tu
propia librería (o biblioteca - library) en JavaScript.

Diseñar tu propia librería es una experiencia fundamental para cualquier
desarrollador porque que te obliga a pensar en la interfaz (API) de tus
_módulos_ y cómo será usado por otros developers. Debes tener especial
consideración en peculiaridades del lenguaje, convenciones y buenas prácticas.

## 2. Definición del producto (Product Definition)

Reflexiona y luego marca los objetivos que has llegado a entender y aplicar en tu proyecto. Piensa en eso al decidir tu estrategia de trabajo.

## 3. Plan de acción

### Etapa de Planeación

1. Lo primero que se realizó fue la lectura del readme de [Laboratoria](https://github.com/Laboratoria/BOG003-md-links) para poder entender el problema y así poder buscar posibles soluciones.

2. Se realizó planning en [Trello](https://trello.com/b/GTuKJg3r/md-links-gis) para estructurar mejor la planeación y los objetivos de aprendizaje de este proyecto, teniendo en cuenta los sprints faltantes para la culminación del bootcamp.

3. Se realizó un [Diagrama de Flujo](https://trello.com/1/cards/6196650d85856424173e6996/attachments/619bc2c5a36d95578f5e7fa1/download/md-links-chart_(1).png) para visualizar mejor las etapas del proyecto y planificar los procesos a realizar, puesto que este proyecto es distinto de los que has venido trabajando hasta ahora dado que no hay una interfaz web, todo se desarrolla en el editor de código (Visual Studio Code) y consola/terminal. <br>
Para realizar este diagrama de flujo se utilizó la herramienta **LucidChart**.

  <img src = "input-readme\diagrama-flujo.png">


4. Se realizó planning adicional mediante la herramienta [Github Projects](https://github.com/KGISELLE/BOG003-md-links/projects/1) que por medio de issues y milestones se organiza y planifica tareas y objetivos concretos del proyecto.
<br>
Se tomaron en consideración para realizar esta planeación los entregables del proyecto, el Checklist y los pasos definidos en el diagrama de flujo.

5. En paralelo a las actividades mencionadas, se priorizó el estudio [node.js](https://nodejs.org/en/docs/guides/) para estructurar mejor las actividades anteriores.

### Etapa de configuración y modularización (Archivos del Proyecto)

En esta etapa se realizó las configuraciones iniciales del proyecto

1. Se comenzó con la configuración de los datos principales del proyecto en el archivo ***package.json***.

2. Se instaló el ESLint y se configuraron algunas reglas.

3. Se creó la carpeta donde iran los archivos de prueba ***input-readme***.

4. Se crearon los archivos readme de prueba con extension .md de los cuales uno tiene todos los links perfectos ***prueba1-readme.md*** y el otro tiene algunos links rotos ***prueba2-readme.md*** y existe un tercer archivo ***diagrama-flujo.png*** con extensión .png para poder validar que se lean los archivos con extension .md.

### Etapa de Desarrollo



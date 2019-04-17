# API RESTFUL Películas

## Estructura de las carpetas y archivos
```
rest-api-movies
│   README.md
│   package-lock.json    
│	package.json
│
└───db
│   │   database-movies.sql
│   │   procedures-movies.sql
│   
└───src
	└───routes
    	 │movies.js
    │   index.js
    │   database.js
```
La api-restful está hecha con el fin de demostrar el desarrollo del mismo y conceptos básicos como peticiones HTTP y conexiones a bases de datos.

Dentro del proyecto encontrarás dos directorios `db` y `src`, el primero contiene lo necesario para levantar la base de datos (MySQL) mientras que la segunda carpeta contiene el funcionamiento del proyecto, desde el archivo ejecutable como las rutas con las que interactuaremos más adelante.

El uso de la carpeta `node_modules` está omitido por el momento.

## Instalación

#### Requerimientos

- Servidor MySQL 5+.
- Gestor de base de datos MySQL (Workbench, HeidiSQL, MySQL-CLI, étc.).
- Git.
- Node JS 10+.
- Terminal como Cmder, CMD, etc.
- Postman (Testing).

#### Pasos de instalación
1. Utilizar el comando `git clone` para clonar el repositorio en el directorio que apunte su terminal.
2. Dentro del directorio de la API, ejecutar el comando `npm install` en la raíz, esto hará que las dependencias se instalen y así pueda correrse el proyecto; Este último comando creará una carpeta llamada `node_modules` que contendrá todas las dependencias instaladas, es importante tenerla ya que sin ella el proyecto no correrá correctamente.
4. Entrar a nuestro gestor de base de datos y crear una base de datos nueva llamada `movies` con el cotejamiento `utf8-general-ci`.
5. Ya teniendo las dependencias, dirigirse al archivo `db/database-movies.sql` y copiar el código **CREATE** y ejecutarlo en su gestor de bases de datos MySQL. Incluso ya puede meter los datos de prueba del código **INSERT** dentro de ese fichero.
6. Ahora diríjase al archivo `db/procedures-movies.sql` y haga lo mismo con el **Stored Procedure** llamado _movieAddOrEdit_.

#### Iniciar el proyecto
1. Iniciaremos el proyecto usando la terminal, dirigiéndonos al directorio `src/`.
2. Dentro de ese directorio, ejecutar el comando `node index.js`.
3. Si todo salió bien, la terminal  mostrará un mensaje indicándonos que la api está trabajando bajo el puerto 3000 y la base de datos ha sido conectada.

## Uso de la API
Para usar la API se debe de utilizar POSTMAN, para ingresar la ruta y el método HTTP por el cuál ejecutaremos nuestras cláusulas de MySQL.

#### Seleccionar todas las películas:

**_GET_** http://localhost:3000/

#### Seleccionar una película en específico:
**_GET_** http://localhost:3000/:id (Sin los dos puntos)

Ejemplo: http://localhost:3000/3 (Nos devolverá la película con el id 3).

#### Seleccionar una película por nombre:
**_GET_** http://localhost:3000/movie/:name (Sin los dos puntos)

Ejemplo: http://localhost:3000/movie/Hellboy (Nos devolverá la película de tal nombre o parecida).

#### Seleccionar las películas por actor principal:
**_GET_** http://localhost:3000/actor/:name (Sin los dos puntos)

Ejemplo: http://localhost:3000/actor/DiCaprio (Nos devolverá la[s] película[s] con tal nombre de actor o parecido).

#### Seleccionar las películas por director:
**_GET_** http://localhost:3000/director/:director (Sin los dos puntos)

Ejemplo: http://localhost:3000/director/DelToro (Nos devolverá la[s] película[s] con tal nombre de actor o parecido).

#### Seleccionar las películas por género:
**_GET_** http://localhost:3000/genre/:genre (Sin los dos puntos)

Ejemplo: http://localhost:3000/genre/Action (Nos devolverá la[s] película[s] con tal nombre de actor o parecido).

#### Eliminar una película en específico:
**_DELETE_** http://localhost:3000/:id (Sin los dos puntos)

Ejemplo: http://localhost:3000/2 (Borrará la película con el id _2_).

#### Insertar una película (Nombre y Año)
**_POST_** http://localhost:3000/

Dentro de postman debe de añadirse en **"raw"** los siguientes parámetros vía JSON:

_```
{
	"id": 0,
	"name": "Nueva Película",
	"year": "Año de la Película"
}
```_

##### Actualizar una película (Nombre y Año)
**_PUT_** http://localhost:3000/:id (Sin los dos puntos)

Dentro de postman deben de añadirse en **_"raw"_** los siguientes parámetros vía JSON:

_```
{
	"id": 3,
	"name": "Película Actualizada",
	"year": "Año de la Película"
}
```_
El "id" del JSON debe de coincidir con el de la ruta.


Para consumir la api debe de subirse a un servicio como HEROKU, GITHUB-PAGES, DigitalOcean étc.

Hecho por Andrey Poot May.

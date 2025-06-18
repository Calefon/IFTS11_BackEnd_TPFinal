# TP Final Desarrollo de Sistemas Web BackEnd - IFTS 11

## Instalación

### Clonar repo
Utilizando la terminal de linux:
```
git clone https://github.com/Calefon/IFTS11_Cloud_InquiroBack.git
```
### Instalar dependencias
Utilizando npm:
```
npm i
```
### Crear archivo .env
El server utiliza variables de entorno para definir algunos parámetros. Las mismas deben definirse dentro de un archivo de texto plano con el nombre `.env`, utilizando una linea por variable y el formato `NOMBRE_VARIABLE = VALOR_VARIABLE`.
En la siguiente tabla se detallan las variables:

| Variable | Detalle | Uso
| ------------- | ------------- | ------------- |
| USER_DB_MONGO_DB  | Usuario para autenticación del cluster | Conexión MongoDB |
| PASSWORD_DB_MONGO_DB  | Contraseña para autenticación del cluster | Conexión MongoDB |
| CLUSTER_NAME_MONGO_DB  | Nombre del cluster MongoDB | Conexión MongoDB |
| DB_NAME_MONGO_DB  | Nombre de la BD dentro del cluster | Conexión MongoDB |

#### Ejemplo .env
```
USER_DB_MONGO_DB = usuario1
PASSWORD_DB_MONGO_DB = 12345
CLUSTER_NAME_MONGO_DB = Cluster1
DB_NAME_MONGO_DB = mi-DB
```
### Ejecución
Para iniciar el servidor, utilice el siguiente script npm:
```
npm run initServer
```
## Integrantes
* ### Gonzalez Luriaud Ezequiel @Calefon
* ### Palma Romero Kevin Maximiliano @kevmpr
* ### Romero Rocha Gabriel Francisco @GabRom98
* ### Vivas Zoe Mariel @Chowi07
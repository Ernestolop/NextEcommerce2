#Descripción


##Correr en dev

1. Clonar el repositorio
2. Instalar dependencias con `npm install`
3. Copiar el archivo `.env.template` a `.env` y llenar las variables de entorno
4. Correr la base de datos con `docker-compose up -d`
5. Correr las migraciones de prisma con `npx prisma migrate dev`
6. Ejecutar el seed con `npm run seed`
7. Correr el proyecto con `npm run dev`


##Correr en producción
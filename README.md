# Steps to start the server

## 1. Install all the packages

```bash
npm i
```

## 2. Create a database instance in mysql workbench with the following parameters

```bash
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=12345678
DB_NAME=db_nodejs_filter
```

## 3. Save the following parameters in a .env file in the root folder of the project
```bash
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=12345678
DB_NAME=db_nodejs_filter
PORT=3000
```

## 4. Run nodemon in a local instance

```bash
npm start
```
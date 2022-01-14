# Multer File Upload

### Index

1. [Introduction](#introduction)

2. [Get Started](#get-started)

3. [Documentation](#documentation)

4. [Submit Issue](https://github.com/wohlig/MulterFileUpload/issues)

### 1. Introduction

Multer File Upload is a Microservice For File Upload. Multer File Upload uses the following Technologies.

This is an Opinionated File Upload which uses the following Technologies for the Microservices

1. [NodeJS](https://nodejs.org) - _12.0.0 or Above_

2. [Docker](https://www.docker.com/) - Container

3. [CodeFresh](https://codefresh.io) - CI CD Pipeline

4. [Yarn](https://yarnpkg.com/) Package Manager - _1.0.0 or above_

### 2. Get Started

1. Create Git Repository using MulterFileUpload as the Template. [Read More](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template)

2. Make Sure you have NodeJS _12.0.0 or above_ installed on your local machine. [Read More](https://nodejs.org/en/)

3. Make Sure the Yarn _1.0.0 or above_ installed on your computer. [Read More](https://yarnpkg.com)

4. Clone the Repository in your local machine. [Read More](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)

5. Create **.env** file in your local Repository and add the following details content in the file. [Read More](https://www.npmjs.com/package/dotenv)

   ```shell
   APP_ID=MulterFileUploads
   PORT=1330
   LOG_LEVEL=debug
   STORAGE_CLOUD=AWS
   AWS_ACCESS_KEY_ID= "Enter Your AWS Access Key Here"
   AWS_SECRET_ACCESS_KEY= "Enter Your AWS Secret Access Key Here"
   AWS_REGION= "Enter Your AWS Region Here"
   AWS_BUCKET= "Enter Your AWS S3 Bucket Name"
   ```

6. Install the Dependencies for the framework using yarn

   ```shell
   yarn install
   ```

7. Run the Application with Yarn

   ```shell
   yarn start
   ```

Now your application will start

If Application Starts Properly you will find the following response

```shell
Multer File Upload Server Started at Port 1330
```

In Case you find issues please following the steps provided above or contact the core team of Wohlig Transformation.

### 3. Documentation

1. Web Framework: [Express](https://expressjs.com)

2. Middleware for handling multipart/form-data: [Multer](https://www.npmjs.com/package/multer)

3. Container: [Docker](https://www.docker.com/)

4. CI CD: [CodeFresh](https://codefresh.io)

### 4. Submit Issue

Submit us on [Github Repository](https://github.com/wohlig/MulterFileUpload/issues)

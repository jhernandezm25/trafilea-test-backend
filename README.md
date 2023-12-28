# trafilea-test-backend

## Description

This project has been developed as part of a technical test for Trafilea. The application is built in TypeScript. Below are some important aspects of the development:

## Usage Guide

### Configuration

1. Open the `.env` file aif you want to change something

### Execution Steps

1. **Install dependencies**: Execute the following command:

   ```bash
   npm run install

   ```
2. **Start the application**: Execute the following command:

   ```bash
   npm run start

   ```

## Implemented Features

### Print Numbers

- **Endpoint:** `/print`
- **Method:** POST
- **Description:** Prints all numbers from 1 to 100 with type labels according to the specified rules. You can pass stard and end parameters

### Save Number

- **Endpoint:** `/save`
- **Method:** POST
- **Description:** Saves a number in an internal collection.

### Get Number Value

- **Endpoint:** `/get/:numberInfo`
- **Method:** GET
- **Description:** Retrieves the value of a specific number from the collection.

### Get All Numbers

- **Endpoint:** `/get`
- **Method:** GET
- **Description:** Retrieves all numbers saved in the collection.


**Note: I added a postman collection in postman folder** 
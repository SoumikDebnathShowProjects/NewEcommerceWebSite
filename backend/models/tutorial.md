# Models

## Overview

The `models` folder contains the data models for the backend application. Models define the structure of data, relationships between entities, and methods to interact with the database. These models are used to manage and manipulate data within the application.

## Structure

- **`User.js`**: Defines the schema and methods for user-related data.
- **`Product.js`**: Defines the schema and methods for product-related data.
- **`Order.js`**: Defines the schema and methods for order-related data.

## Usage

Each model file typically exports a class or a schema definition that can be used to interact with the database. For example:

```javascript
// Example of using a model in a service file

const User = require("./models/User");

// Fetch a user by ID
const getUserById = async (userId) => {
  return await User.findById(userId);
};
```

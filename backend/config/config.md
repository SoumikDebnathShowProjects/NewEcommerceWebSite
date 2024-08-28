# Config

## Overview

The `config` folder contains configuration files for the backend application. These files hold settings and environment-specific variables required to run the application properly. Configuration files help in managing application settings, connecting to external services, and maintaining environment-specific configurations.

## Structure

- **`default.json`**: Contains default configuration settings for the application. These settings are used when no environment-specific configuration is provided.
- **`development.json`**: Holds configuration settings for the development environment, including settings for local databases, debugging, and logging.
- **`production.json`**: Contains configuration settings for the production environment, including settings for production databases, security features, and performance optimizations.
- **`test.json`**: Includes configuration settings for the testing environment, such as test databases and test-specific options.

## Usage

Configuration files are typically loaded at the application startup and provide settings to different parts of the application. For example:

```javascript
// Example of using a configuration setting

const config = require("config");

// Get the database connection string from the configuration
const dbConnectionString = config.get;
```

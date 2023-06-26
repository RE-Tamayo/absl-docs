# Quick Start Guide

This quick start guide will walk you through the basic steps to get up and running with Absl in no time. By following these steps, you'll be able to connect to a database, define tables, perform CRUD operations, and retrieve data using Absl.

## Step 1: Installation

Before you begin, make sure you have Absl installed in your PHP project. Refer to the [Installation](/getting-started/installation.md) guide for detailed instructions on how to install Absl using Composer.

## Step 2: Establish a Database Connection

To start using Absl, you need to establish a connection to your database. Here's an example of connecting to a MySQL database:

```php
<?php
require 'vendor/autoload.php';

use Absl\Absl;
use PDO;

// Create a PDO instance with your database credentials
$connection = new PDO('mysql:host=localhost;dbname=mydatabase', 'username', 'password');

// Create an instance of Absl and pass the PDO connection
$absl = new Absl($connection);
?>
```

Make sure to replace `'localhost'`, `'mydatabase'`, `'username'`, and `'password'` with your actual database host, name, username, and password.

## Step 3: Define a Table

After establishing the database connection, you can define a table using the `defineTable` method. Specify the table name, primary key, and an array of column names and their specifications:

```php
<?php
// Define a table named 'users' with 'id' as the primary key and 'name' and 'email' as columns
$absl->defineTable('users', 'id', ['name', 'email']);
?>
```

## Step 4: Use a Table

Now that you have a table defined, you need to select which table to perform the database operations on:

```php
<?php
// Use a defined table by passing the table name as an argument
$absl->useTable('users');
?>
```

## Step 5: Perform CRUD Operations

Now that a table is selected, you can perform CRUD operations on it. Here are some examples:

### Create a Record

```php
<?php
// Create a new record in the 'users' table
$absl->create(['name' => 'John Doe', 'email' => 'johndoe@example.com']);
?>
```

### Retrieve Records

```php
<?php
// Retrieve all records from the 'users' table
$users = $absl->list();

// Retrieve specific columns from the 'users' table
$users = $absl->list(['name', 'email']);
?>
```

### Update a Record

```php
<?php
// Update a record in the 'users' table
$absl->update(['name' => 'Jane Doe'], 'id', 1);
?>
```

### Delete a Record

```php
<?php
// Delete a record from the 'users' table
$absl->delete('id', 1);
?>
```

These are just a few examples of what you can achieve with Absl. Explore the [Usage](/usage/) guide and the API reference for more in-depth information and advanced usage scenarios.

Congratulations! You've completed the quick start guide and are now ready to leverage the power of Absl in your PHP projects. Happy coding!
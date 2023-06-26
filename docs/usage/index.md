# CRUD Operations

Absl provides a convenient and straightforward way to perform CRUD (Create, Read, Update, Delete) operations on your database tables. This section will guide you through the various methods available for each operation.

## Create

To create a new record in a table, you can use the `create` method. Here's an example:

```php
<?php
// Create a new record in the 'users' table
$absl->useTable('users');
$absl->create([
    'name' => 'John Doe',
    'email' => 'johndoe@example.com',
]);
?>
```

The `create` method accepts an associative array where the keys represent column names and the values represent the corresponding values to be inserted into the table.

## Read

To retrieve records from a table, you can use the `list` method. Here are some examples:

### Retrieve all records

```php
<?php
// Retrieve all records from the 'users' table
$absl->useTable('users');
$users = $absl->list();
?>
```

### Retrieve specific columns

```php
<?php
// Retrieve specific columns from the 'users' table
$absl->useTable('users');
$users = $absl->list(['name', 'email']);
?>
```

You can pass an array of column names as an argument to the `list` method to specify which columns you want to retrieve. If no columns are provided, all columns will be fetched.

### Fetch a single record

```php
<?php
// Fetch a single record from the 'users' table
$absl->useTable('users');
$user = $absl->fetch(['name', 'email'], 'id', 1);
?>
```

The `fetch` method allows you to retrieve a single record based on a specific condition. In this example, we are fetching a record where the `id` column has a value of `1`.

## Update

To update records in a table, you can use the `update` method. Here's an example:

```php
<?php
// Update a record in the 'users' table
$absl->useTable('users');
$absl->update(['name' => 'Jane Doe'], 'id', 1);
?>
```

The `update` method accepts an associative array where the keys represent the column names to be updated and the values represent the new values. The third and fourth arguments specify the column and its corresponding value for the update condition.

## Delete

To delete records from a table, you can use the `delete` method. Here's an example:

```php
<?php
// Delete a record from the 'users' table
$absl->useTable('users');
$absl->delete('id', 1);
?>
```

The `delete` method takes two arguments: the column name and the value to match for the delete condition.

## Additional Considerations

- Before performing any CRUD operation, ensure that you have used the `useTable` method to specify the table you want to work with.

- It is recommended to validate and sanitize user input before performing any database operations to prevent security vulnerabilities such as SQL injection.

Congratulations! You now have a good understanding of how to perform CRUD operations using Absl.
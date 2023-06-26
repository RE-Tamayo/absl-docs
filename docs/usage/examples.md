# Examples

To help you get started with Absl, here are some examples that demonstrate the usage of different features and functionalities provided by the library.

## Example 1: Defining and Using Database Tables

```php
// Define table structure
$absl->defineTable('users', 'id', ['username', 'email', 'password']);

// Use the 'users' table
$absl->useTable('users');

// List all users
$users = $absl->list();
```

## Example 2: Performing CRUD Operations

```php
// Create a new record
$newUser = [
    'username' => 'john_doe',
    'email' => 'john@example.com',
    'password' => 'secretpassword',
];
$absl->create($newUser);

// Fetch user by ID
$user = $absl->fetch(['username', 'email'], 'id', 1);

// Update user email
$absl->update(['email' => 'new_email@example.com'], 'id', 1);

// Delete user
$absl->delete('id', 1);
```

## Example 3: User Authentication

```php
// Prepare user credentials
$credentials = [
    'username' => 'john_doe',
    'password' => 'secretpassword',
];

// Authenticate user
$isAuthenticated = $absl->authenticate($credentials);

if ($isAuthenticated) {
    // User authenticated successfully
    // Perform further actions or grant access
} else {
    // Invalid credentials, handle authentication failure
}
```

## Example 4: Data Validation

```php
// Check for duplicate email
$isDuplicateEmail = $absl->checkDuplicate('email', 'john@example.com');

if ($isDuplicateEmail) {
    // Email already exists, handle validation failure
} else {
    // Email is unique, proceed with the desired operation
}
```

These examples provide a glimpse into how you can utilize Absl to perform common database operations, implement user authentication, and validate data within your application. You can customize and extend these examples to fit your specific requirements.

Feel free to explore the various features of Absl and leverage its capabilities to streamline your database interactions and enhance the security of your application.
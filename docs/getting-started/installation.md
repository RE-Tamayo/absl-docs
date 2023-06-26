# Installation

To start using Absl in your PHP project, you can easily install it using Composer. Composer is a dependency management tool for PHP that allows you to declare the libraries your project depends on and manage them effectively.

Follow the steps below to install Absl via Composer:

## Step 1: Create a New PHP Project

If you haven't already set up your PHP project, create a new directory for your project and navigate to it in your terminal or command prompt.

```shell
mkdir my-project
cd my-project
```

## Step 2: Initialize Composer

Next, you need to initialize Composer in your project directory. Run the following command to create a `composer.json` file:

```shell
composer init
```

You will be prompted to provide information about your project. You can either fill in the details or press Enter to accept the default values.

## Step 3: Require Absl

Once the `composer.json` file is created, you can require Absl as a dependency. Run the following command:

```shell
composer require retamayo/absl
```

Composer will download Absl and all its dependencies and set them up in your project.

## Step 4: Autoload Classes

Absl utilizes autoloading to load its classes automatically. To enable autoloading, make sure you include the Composer-generated autoloader file at the beginning of your PHP script:

```php
require 'vendor/autoload.php';
```

With the autoloader included, you can start using Absl classes and methods in your project.

Congratulations! You have successfully installed Absl using Composer. You can now proceed to [Usage](/usage/) to learn how to use Absl in your PHP application.

Note: Make sure you have PHP and Composer installed on your system before following these installation steps.

## Manual Installation

If you prefer not to use Composer, you can manually download the Absl library from the [GitHub repository](https://github.com/RE-Tamayo/absl) and include the necessary files in your project. However, using Composer is the recommended method as it simplifies dependency management and ensures you have the latest version of Absl and its dependencies.
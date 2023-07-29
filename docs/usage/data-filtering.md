# Data Filtering

As of version 1.1.0 Absl now includes three new methods geared towards filtering data, with these new methods you can easily paginate through large datasets, customize the number of rows displayed per page, and perform efficient and flexible searches within your tables. This documentation entry provides a guide on how to utilize these functionalities effectively.

## Pagination Functionality
The `paginate()` method allows you to navigate through large datasets in a user-friendly manner. To use pagination with Absl, follow these steps:

Syntax:

```php
$absl->paginate(pageNumber);
```

Example:

```php
// Navigates to page 1
$absl->paginate(1);

// Navigates to page 2
$absl->paginate(2);
```

## Set Page Row Count
The `set_page_row_count()` method lets you customize the number of rows displayed per page, giving you control over data presentation and user interface optimization. Follow these steps to set the row count and apply the changes:

Syntax:

```php
$absl->set_page_row_count(rowCount);
```

Example:

```php
// Sets 10 rows per page
$absl->set_page_row_count(10);

// Navigates to page 1 with 10 rows per page
$absl->paginate(1);
```

Please note that after setting the row count, you need to call `paginate()` again to apply the changes.

## Search Functionality
The `search()` method empowers you to perform quick and flexible searches within the table currently in use. It utilizes regular expressions to search through the entire table and returns all matching rows, regardless of the column. To conduct efficient searches, follow these steps:

Syntax:

```php
$results = $absl->search(pattern);
```

Example:

```php
// Searches for any value starting with 'john'
$results = $absl->search('/john.*/');
```


By combining these data filtering features, users can make the most of Absl's capabilities to efficiently handle and explore their data. Whether it's for data analysis, visualization, or reporting purposes, these functionalities offer a significant advantage in managing data effectively. As you integrate these features into your projects, I hope they enhance your productivity and provide valuable insights from your datasets.
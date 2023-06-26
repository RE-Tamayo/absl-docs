# Input Sanitization

Absl takes care of automatically sanitizing input values when you use its methods for CRUD operations. This built-in feature helps protect your application from common security vulnerabilities, such as SQL injection and cross-site scripting (XSS) attacks.

When you interact with Absl by calling methods like `create()`, `update()`, or `fetch()`, the library automatically sanitizes the input values before executing the corresponding database queries. This ensures that the data being processed is properly sanitized and reduces the risk of security vulnerabilities.

By leveraging Absl's automatic input sanitization, you can focus on writing your application logic without worrying about manually sanitizing every input value. However, it's still important to follow secure coding practices and validate user input to maintain a robust security posture.

While Absl handles the sanitization of input values within its methods, it's essential to keep in mind the following best practices:

- Always validate user input before passing it to Absl methods. Input validation ensures that the provided data meets the expected format, length, and constraints.

- Sanitization is not a substitute for proper input validation. Although Absl sanitizes input values to prevent common vulnerabilities, it's crucial to implement comprehensive validation routines based on your application's specific requirements.

- Use parameterized queries or prepared statements in conjunction with Absl's input sanitization to further enhance the security of your database interactions. These techniques prevent SQL injection attacks by separating the query logic from the input values.

- Be cautious when outputting data from the database. While Absl sanitizes input values, you should still sanitize or escape data appropriately before displaying it in HTML, JavaScript, or other output formats to prevent XSS attacks.

Absl's automatic input sanitization simplifies the process of securing your CRUD operations. It serves as an additional layer of defense against common security vulnerabilities, providing you with peace of mind as you build robust and secure applications.
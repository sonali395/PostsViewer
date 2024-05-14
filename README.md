# Angular Assignment - Posts Application

This Angular application fetches 100 posts from the JSONPlaceholder API and displays them in a 10x10 grid layout. Each post is rendered as a square component.

## Features

- Display 100 posts from the JSONPlaceholder API.
- Arrange posts in a 10x10 grid layout.
- Clicking on a square toggles through different properties of the post (userId, id, title, body).
- Only one square at a time displays post details.
- Show the ID of the currently active post at the top of the page.
- Utilizes state management (NgRx) for managing post id.

## Motivation

The motivation behind this assignment is to demonstrate proficiency in Angular development, including:

- Consuming RESTful APIs and rendering data dynamically.
- Implementing interactive features such as toggling post details.
- Utilizing state management for managing application state.
- Writing clean and organized code with proper separation of concerns.
- Designing a visually appealing and user-friendly interface.

## How to Run

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Run the application using `ng serve`.
5. Open your browser and navigate to `http://localhost:4200` to view the application.

## Gotchas

- Ensure you have Node.js and Angular CLI installed on your machine.
- Make sure you have an internet connection to fetch data from the JSONPlaceholder API.
- Check the console for any errors if the application does not run as expected.

## Testing

This project includes unit tests for various components and services. To run the tests:

1. Navigate to the project directory.
2. Run `ng test` to execute the unit tests.
3. View test results in the terminal or browser.

## Design Choices

- The application uses Angular for its flexibility and robustness in building single-page applications.
- NgRx is chosen for state management due to its popularity, strong community support, and seamless integration with Angular.
- CSS Grid is utilized for the layout to create a responsive and visually appealing grid of squares.
- The UI design is kept clean and minimalist, focusing on readability and usability.

## Q&A

### 1. We use JWTs a lot throughout our API. For instance, when a user logs in on our API, a JWT is issued and our web-application uses this token for every request for authentication. Here's an example of such a token:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzb21lb25lQGV4YW1wbGUubmV0IiwiYWRtaW4iOmZhbHNlLCJ2YWxpZF91bnRpbCI6IldlZCBEZWMgMzEgMjM6NTk6NTkgQ0VTVCAxOTY5In0.4bl2puoaRetNjO1GsweKOnnQsYgwNa9bQIC-WQZkuNo

- The JWT (JSON Web Token) you provided consists of three parts separated by periods: the header, the payload, and the signature. Here's a breakdown of each part:

1. Header: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
2. Payload: eyJzdWIiOiJzb21lb25lQGV4YW1wbGUubmV0IiwiYWRtaW4iOmZhbHNlLCJ2YWxpZF91bnRpbCI6IldlZCBEZWMgMzEgMjM6NTk6NTkgQ0VTVCAxOTY5In0
3. Signature: 4bl2puoaRetNjO1GsweKOnnQsYgwNa9bQIC-WQZkuNo

Now, regarding the safety of using JWTs:

1. **Statelessness**: One of the primary benefits of JWTs is their statelessness. They contain all the necessary information within themselves, reducing the need for the server to store session data. This can improve scalability and reduce server overhead.

2. **Data Integrity**: JWTs are cryptographically signed, ensuring that the data in the token hasn't been tampered with. However, it's important to note that JWTs are not encrypted by default, so sensitive information should not be stored in the payload unless it's intended to be visible to anyone with access to the token.

3. **Security**: The safety of JWTs depends on proper implementation and adherence to security best practices. For instance, JWTs should be transmitted securely over HTTPS to prevent interception or tampering. Additionally, the key used to sign and verify JWTs should be kept secure to prevent unauthorized parties from generating or tampering with tokens.

4. **Expiration**: JWTs can include an expiration time (exp claim) to limit their lifespan and reduce the risk of unauthorized access if a token is stolen. Refresh tokens can be used to obtain new JWTs without requiring the user to re-enter their credentials.

5. **Revocation**: Unlike traditional session tokens, JWTs cannot be easily invalidated once issued. Revocation mechanisms may need to be implemented separately if token invalidation is required (e.g., using token blacklists or token introspection).

In conclusion, JWTs can be safe to use for authentication purposes when implemented correctly and used in conjunction with secure practices. However, it's crucial to understand their strengths and limitations and to carefully consider the security implications of their use in your application.

### 2. In our web-application, messages sent from one user to another, can contain HTML, which poses some security risks. Describe two attack vectors bad actors might try to abuse? And how would you mitigate these vectors?

-Two common attack vectors that bad actors might attempt to abuse in a web application allowing HTML content in user messages are Cross-Site Scripting (XSS) and HTML injection attacks. Here's a description of each attack vector and how to mitigate them:

1. **Cross-Site Scripting (XSS)**:
   - *Description*: XSS attacks occur when an attacker injects malicious scripts into web pages viewed by other users. This can happen when user-generated HTML content, such as messages, is not properly sanitized and executed in the context of the page.
   - *Mitigation*:
     - *Input Sanitization*: Implement strict input validation and sanitization to filter out potentially malicious scripts and HTML tags from user-generated content. Use libraries or frameworks that provide built-in sanitization functions.
     - *Content Security Policy (CSP)*: Utilize CSP headers to restrict the sources from which scripts can be executed on your web application. This can help mitigate the impact of XSS attacks by preventing the execution of unauthorized scripts.
     - *Encode Output*: Encode user-generated content before rendering it in HTML to ensure that any HTML tags or special characters are treated as plain text rather than executable code.
     - *Use Libraries*: Consider using libraries or frameworks that provide XSS protection mechanisms, such as automatic escaping of user input.

2. **HTML Injection**:
   - *Description*: HTML injection attacks occur when an attacker injects arbitrary HTML code into a web page, typically by exploiting vulnerabilities in user input fields. This can lead to various security risks, including phishing attacks or defacement of web pages.
   - *Mitigation*:
     - *Validation and Sanitization*: Similar to XSS mitigation, perform strict validation and sanitization of user-generated HTML content to remove or neutralize any potentially harmful HTML tags and attributes.
     - *Whitelist Approach*: Instead of trying to blacklist specific HTML tags or attributes, adopt a whitelist approach where only known safe HTML elements and attributes are allowed. This helps prevent unexpected vulnerabilities from emerging as new HTML standards are introduced.
     - *Content-Type Headers*: Set appropriate Content-Type headers for user-generated content to ensure that it's interpreted as plain text rather than HTML. This can help prevent browsers from rendering injected HTML code as executable content.
     - *Context-Specific Escaping*: Escape user-generated content based on its context within the HTML document. For example, different escaping techniques may be required for content within attributes, script blocks, or inline styles.

By implementing these mitigation strategies, you can significantly reduce the risk of XSS and HTML injection attacks in your web application, helping to protect your users' data and maintain the integrity of your platform.

### 3. Explain the difference between mutable and immutable objects.
● What is an example of an immutable object in JavaScript?
● What are the pros and cons of immutability?
● How can you achieve immutability in your own code?

Mutable and immutable objects refer to whether the state of an object can be changed after it's created.

**Mutable Objects**:
- Mutable objects are those whose state can be modified after they are created.
- Changes to mutable objects directly affect the object itself, meaning the same object in memory is altered.
- Examples of mutable objects include arrays, objects (dictionaries in some languages), and instances of classes with mutable properties.

**Immutable Objects**:
- Immutable objects are those whose state cannot be changed after they are created.
- Any operation that appears to modify an immutable object actually creates a new object with the modified state, leaving the original object unchanged.
- Examples of immutable objects include strings, numbers, and instances of frozen classes or data structures.

*Example of an immutable object in JavaScript*:
In JavaScript, strings are immutable. Once a string is created, its value cannot be changed. For example:
javascript
let str = "Hello";
str = str + " World"; // This creates a new string rather than modifying the original one
console.log(str); // Output: "Hello World"


**Pros and Cons of Immutability**:

*Pros*:
1. *Predictability*: Immutable objects have predictable behavior because their state cannot change unexpectedly.
2. *Thread Safety*: In concurrent programming, immutable objects are inherently thread-safe since their state cannot be modified by multiple threads simultaneously.
3. *Reduced Bugs*: Immutability can reduce bugs related to unintended side effects and race conditions.
4. *Performance*: In some cases, immutability can lead to performance optimizations, such as caching and sharing immutable data structures.

*Cons*:
1. *Memory Overhead*: Creating new objects for every modification can lead to increased memory usage, especially for large data sets.
2. *Performance Overhead*: The process of creating new objects can introduce performance overhead, especially in scenarios where frequent modifications are required.
3. *Complexity*: Implementing immutability can add complexity to the codebase, especially in languages or scenarios where immutability is not idiomatic.

**Achieving Immutability**:

You can achieve immutability in your own code by following these practices:
1. *Use const*: Declare variables with the const keyword whenever possible to prevent reassignment.
2. *Avoid Mutating Methods*: In languages like JavaScript, prefer immutable methods (e.g., map, filter, concat) over mutating methods (e.g., push, splice) when working with arrays.
3. *Functional Programming*: Embrace functional programming concepts such as immutability, pure functions, and immutable data structures.
4. *Copy-on-Write*: Implement copy-on-write techniques where necessary, creating new copies of objects only when modifications are made to them.

By incorporating these techniques into your codebase, you can leverage the benefits of immutability while mitigating its potential drawbacks.

### 4. If you would have to speed up the loading of a web-application, how would you do that? (no need to actually do it, just describe the steps you would take)

- To speed up the loading of a web application, I would focus on optimizing various aspects of the application to improve performance. Here are several steps I would take:

1. **Optimize Frontend Assets**:
   - *Minify and Concatenate CSS and JavaScript*: Reduce file sizes by minifying CSS and JavaScript files and combining multiple files into a single bundle to minimize HTTP requests.
   - *Use Responsive Images*: Serve appropriately sized images based on the device's screen size and resolution to reduce unnecessary bandwidth usage.
   - *Leverage Browser Caching*: Set cache-control headers to enable browser caching for static assets, allowing browsers to store files locally and reduce server requests for subsequent visits.
   - *Lazy Load Resources*: Implement lazy loading for images, scripts, and other resources that are not immediately necessary for rendering the initial view of the page.

2. **Improve Server-Side Performance**:
   - *Optimize Database Queries*: Optimize database queries by indexing frequently accessed fields, avoiding unnecessary joins, and utilizing database caching mechanisms.
   - *Implement Server-Side Caching*: Utilize server-side caching mechanisms such as Memcached or Redis to cache dynamic content and reduce database queries.
   - *Use Content Delivery Networks (CDNs)*: Distribute static assets across geographically distributed CDNs to reduce latency and improve loading times for users in different regions.

3. **Implement Performance Monitoring and Optimization**:
   - *Use Performance Monitoring Tools*: Utilize tools like Google PageSpeed Insights, Lighthouse, or WebPageTest to identify performance bottlenecks and areas for improvement.
   - *Optimize Critical Rendering Path*: Optimize the critical rendering path by prioritizing the loading of essential resources (e.g., critical CSS, above-the-fold content) to ensure faster initial render times.

4. **Optimize Third-Party Integrations**:
   - *Minimize Third-Party Scripts*: Limit the number of third-party scripts and services used in the application to reduce dependency on external resources and improve loading times.
   - *Asynchronous Loading*: Load third-party scripts asynchronously to prevent them from blocking the initial page load and delaying rendering.

By following these steps and continually monitoring and optimizing performance, you can significantly improve the loading speed and overall user experience of your web application.

### 5. What part of a new job do you think is more important:
● Choose your own hardware, but work with a company supplied operating system image.
● You’re offered a standard piece of mediocre hardware. Free to pick your own Software.?

- Both options have their advantages and considerations, but if I were to prioritize, I'd lean towards the second option: being offered a standard piece of hardware while having the freedom to pick my own software. Here's why:

1. **Flexibility and Comfort with Tools**: Having the freedom to choose your own software allows you to work with tools that you're comfortable and productive with. Every developer has their preferred set of tools, whether it's a specific text editor, IDE, or productivity software. Being able to use these tools can enhance workflow efficiency and job satisfaction.

2. **Tailored Environment**: Different roles and projects may require different software configurations and environments. With the ability to select your own software, you can tailor your environment to meet the specific needs of your role or project. This customization can contribute to better performance and productivity in your work.

3. **Open Source and Community Support**: You can leverage popular open-source tools and frameworks that align with your preferences and development practices.

4. **Potential Cost Savings**: Some proprietary software licenses can be expensive, especially for individual users. By having the freedom to choose your own software, you may have the opportunity to explore cost-effective or free alternatives without compromising on functionality or quality.

While having the ability to choose your own hardware can also be advantageous, the operating system image provided by the company may not align with your preferences or workflow. However, with the second option, you have more control over your immediate working environment, which can contribute to overall job satisfaction and productivity.
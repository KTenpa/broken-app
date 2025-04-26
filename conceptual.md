### Conceptual Exercise

Answer the following questions below:

- What is a JWT?

  A compact, URL-safe way to represent claims between two parties. It’s often used for authentication. It has three parts: header, payload, and signature.


- What is the signature portion of the JWT?  What does it do?

  It’s created by hashing the header and payload combined with a secret key using an algorithm like HMAC or RSA. It ensures that the token hasn’t been tampered with, if the signature is invalid, the token is considered invalid.


- If a JWT is intercepted, can the attacker see what's inside the payload?
  
  Yes the payload is visible to anyone who intercepts it because JWTs are encoded not encrypted. However, they can’t modify it without breaking the signature.


- How can you implement authentication with a JWT?  Describe how it works at a high level.

  User logs in and provides credentials then the server verifies credentials and generates a JWT. The token is sent to the client and is usually stored in localStorage or a cookie. Client then sends the JWT in the authorization header for future requests. The server then validates the token’s signature and extracts user info from the payload.


- Compare and contrast unit, integration and end-to-end tests.

  Unit tests: Test individual components or functions in isolation.
  Integration tests: Test multiple parts working together such as API and DB.
  End-to-end tests: Simulate real user behavior through the full system and test entire application.


- What is a mock? What are some things you would mock?

  A mock is a simulated object that mimics the behavior of real dependencies such as database queries and HTTP requests.


- What is continuous integration?

  A development practice where code changes are automatically and are merged into the main branch frequently, tested automatically 
  through a CI pipeline, validated before deployment.


- What is an environment variable and what are they used for?

  Key-value pairs stored outside the code, often in .env files. They're used to store secrets and configs


- What is TDD? What are some benefits and drawbacks?

  Test-Driven Development means writing tests before the actual code. Benefits include encouraging well-designed code, catching bugs early, keeping codebase test-covered. Drawbacks are it is slower upfront, can be rigid if requirements change quickly and not ideal for very experimental features.


- What is the value of using JSONSchema for validation?

  It ensures data structure and types are correct, is useful for validating incoming API requests and auto-generate docs or forms.


- What are some ways to decide which code to test?

  Areas of the code that require critical logic such as authentication, complex functions or conditionals and anything that could break easily or silently. 


- What does `RETURNING` do in SQL? When would you use it?
  
  It returns values from rows that were affected by INSERT, UPDATE, or DELETE.


- What are some differences between Web Sockets and HTTP?

  WebSockets create a persistent, two-way connection between client and server, allowing real-time communication. HTTP is one-way and request-response based and the client must initiate every interaction. WebSockets are better for live updates, while HTTP is used for standard web requests.


- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?

  No, I prefered Express over Flask for its simplicity and flexibility in handling middleware and routing in Node.js.
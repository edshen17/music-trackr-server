## Getting Started

These instructions will help you get a copy of the project up and running for development and testing purposes. For client-side code, refer to the [client repo](https://github.com/edshen17/music-trackr-client).

### Installation
1. `npm install`.

### Tests
To run the test suite, run `npm t`.

### Starting the server
To start the backend server, type `npm run server`. Please refer to `package.json` for additional commands.

### Project Structure
This project revolves heavily around the concepts of dependency injection and the single-responsibility principle. Please refer to [this diagram](https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg).

As you can see, entities, or core business logic, is at the very center of the circle. Thus, even if we change the frameworks or technology we use, our logic will not change. This enables us to easily change our code as our stack evolves. Furthermore, by using dependency injection, we can quickly prototype but and also throw away code that is no longer needed (eg. when business rules/strategy change).
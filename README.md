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

   ![Visualiser](/src/assets/UI.PNG?raw=true)

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

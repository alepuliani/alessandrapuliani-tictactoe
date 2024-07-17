# Tic Tac Toe
Welcome to Tic Tac Toe, a classic game implemented using Vue.js.

## Project Overview
This project implements the game of Tic Tac Toe using Vue.js framework. 
It includes three main views: Home, Rules, and Game Play. The Vue Router is used to navigate between these views. Here are the key features and design choices:

- Vue Router: Utilized to manage navigation between different views:

 -- Home: Introduces the game and its objective.
Rules: Explains the rules of Tic Tac Toe.
Game Play: Allows players to interact with the board and make moves.
Component-based Architecture: Various components such as BaseButton are created and reused throughout the application. This promotes code reusability and maintainability.

Computed Properties: Used to track player moves and determine the winner:

whoWin computed property checks the winning combinations after each move to determine if there's a winner.
Getting Started
To run the project locally, follow these steps:

Clone the repository:

bash
Copia codice
git clone https://github.com/your-username/tic-tac-toe.git
cd tic-tac-toe
Install dependencies:

bash
Copia codice
npm install
Start the development server:

bash
Copia codice
npm run dev
Open your browser and navigate to http://localhost:3000 to view the application.

Build
To build the project for production:

bash
Copia codice
npm run build
The production-ready files will be generated in the dist directory.

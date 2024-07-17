# Tic Tac Toe
Welcome to Tic Tac Toe, a classic game implemented using Vue.js.

## Project Overview
This project implements the game of Tic Tac Toe using Vue.js framework. 

It includes three main views: Home, Rules, and Game Play. 

The Vue Router is used to navigate between these views. 

Here are the key features and design choices:

- **Vue Router**: Utilized to manage navigation between different views:
  - **Home**: Introduces the game and its objective.
  - **Rules**: Explains the rules of Tic Tac Toe.
  - **Game Play**: Allows players to interact with the board and make moves.
    
- **Component-based Architecture**: Various components such as BaseButton are created and reused throughout the application. This promotes code reusability and maintainability.

- **Computed Properties**: Used to track player moves and determine the winner:
  - **whoWin** computed property checks the winning combinations after each move to determine if there's a winner.
    
## Getting Started
To run the project locally, follow these steps:

**1.Clone the repository:**
```javascript
git clone https://github.com/alepuliani/alessandrapuliani-tictactoe.git
```
**2.Install dependencies:**
```javascript
cd alessandrapuliani-tictactoe
npm install
```

**3.Start the development server:**
```javascript
npm run dev
```


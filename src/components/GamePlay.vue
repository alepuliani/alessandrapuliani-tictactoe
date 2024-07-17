<script>
export default {
  data() {
    return {
      board: ['', '', '', '', '', '', '', '', ''],
      winningCombinations: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ],
      player: 'X',
      playerXMoves: [],
      playerOMoves: []
    }
  },
  computed: {
    whoWin() {
      // Initialize variable to track the winner
      let winner = null

      // Iterate through each winning combination
      for (let i = 0; i < this.winningCombinations.length; i++) {
        const combination = this.winningCombinations[i]

        // Check if all elements of the combination are in playerXMoves or  playerOMoves
        if (combination.every((elem) => this.playerXMoves.includes(elem))) {
          winner = 'X' // Set winner to 'x' if player X has this combination
          break
        } else if (combination.every((elem) => this.playerOMoves.includes(elem))) {
          winner = 'O' // Set winner to 'o' if player O has this combination
          break
        }
      }
      return winner
    },

    draw() {
      for (let i = 0; i < this.board.length; i++) {
        if (this.board[i] === '') {
          return false
        }
      }
      return true
    }
  },
  methods: {
    updateCell(index) {
      // Check if the cell is already occupied or if there is already a winner
      if (this.board[index] !== '' || this.whoWin) return

      // Update the cell with the current player's symbol
      this.board[index] = this.player

      // Depending on the current player, update their respective moves
      if (this.player === 'X') {
        this.playerXMoves.push(index) // Push the index to playerXMoves array
        this.player = 'O' // Switch to player O's turn
      } else {
        this.playerOMoves.push(index) // Push the index to playerOMoves array
        this.player = 'X' // Switch to player X's turn
      }
    },
    restartGame() {
      // Reset the game board to its initial state with empty cells
      // Reset the player to start with 'x' (player X)
      // Clear the arrays tracking moves for both players
      this.board = ['', '', '', '', '', '', '', '', '']
      this.player = 'X'
      this.playerXMoves = []
      this.playerOMoves = []
    }
  }
}
</script>

<template>
  <div class="game-play">
    <div class="board">
      <div @click="updateCell(index)" class="cell" v-for="(cell, index) in board" :key="index">
        <!-- Utilizzo di v-if per visualizzare l'icona corretta -->
        <template v-if="cell === 'X'">
          <i class="bi bi-x-lg x-icon"></i>
        </template>
        <template v-else-if="cell === 'O'">
          <i class="bi bi-circle o-icon"></i>
        </template>
      </div>
    </div>
    <div class="wrapper">
      <div v-if="whoWin">
        <h2 class="winner">{{ whoWin }} wins!</h2>
      </div>
      <div v-else-if="draw">
        <h2>It's a draw! Play again!</h2>
      </div>
      <div v-else>
        <h2>It's {{ player }}'s turn!</h2>
      </div>

      <button class="refresh" @click="restartGame">
        <i class="bi bi-arrow-clockwise"></i>
      </button>
    </div>
  </div>
</template>

<style scoped>
.game-play {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.board {
  margin: 50px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3px;
  background-color: #4f4f4f;
}
.cell {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100px;
  background-color: rgb(247, 247, 247);
  font-size: 50px;
}

h2 {
  font-size: 30px;
}

.wrapper {
  display: flex;
  align-items: center;
}
.refresh {
  font-size: 40px;
  color: #547aff;
  margin-left: 20px;

  background-color: transparent;
  border: none;
}

.refresh:hover {
  color: #f94367;
  cursor: pointer;
}

.refresh:active {
  color: rgb(166, 166, 166);
}

.winner {
  font-size: 50px;
}

.x-icon {
  color: #547aff;
}

.o-icon {
  color: #f94367;
}
</style>

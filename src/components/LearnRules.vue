<script></script>

<template>
  <div class="rules-div">
    <h2>Objective:</h2>
    <p>
      The game is played on a 3x3 grid. The objective is to be the first player to place three of
      their marks (either "X" or "O") in a horizontal, vertical, or diagonal row.
    </p>

    <h2>Gameplay:</h2>
    <ul>
      <li>The game begins with an empty 3x3 grid.</li>
      <li>The first player (often "X") marks any empty cell on the grid.</li>
      <li>The second player (often "O") then marks another empty cell.</li>
      <li>
        Players continue taking turns until one player achieves the objective of three marks in a
        row or until the grid is full (resulting in a draw).
      </li>
    </ul>
  </div>
</template>

<style scoped>
.rules-div {
  line-height: 25px;
  padding: 40px 0;
  max-width: 500px;
}

h2 {
  margin-top: 20px;
  margin-bottom: 10px;
}
</style>

<script></script>

<template>
  <div class="welcome">
    <h1>Welcome to Tic Tac Toe!</h1>
    <p>
      Get ready to challenge your friends and enjoy the classic game of
      <strong>Tic Tac Toe</strong>.
    </p>
    <br />
    <p>Let's see if you can outsmart your opponent and claim victory!</p>
  </div>
</template>

<style scoped>
.welcome {
  margin: 70px auto;
  text-align: center;
}

h1 {
  font-size: 30px;
  padding-bottom: 30px;
}

p {
  font-size: 16px;
}

@media screen and (min-width: 768px) {
  .welcome {
    margin: 80px auto;
    width: 500px;
  }
  h1 {
    font-size: 40px;
    margin-bottom: 30px;
  }
  p {
    font-size: 20px;
  }
}
</style>

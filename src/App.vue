<script>
import BaseButton from './components/BaseButton.vue'

export default {
  components: { BaseButton },
  data() {
    return {
      title: 'Tic Tac Toe'
    }
  }
}
</script>

<template>
  <div class="app">
    <h1>
      <p class="blue">Tic</p>
      <p class="red">Tac</p>
      <p class="blue">Toe</p>
    </h1>
    <div class="buttons-div">
      <router-link to="/">
        <BaseButton>Home</BaseButton>
      </router-link>

      <router-link to="/play">
        <BaseButton name="play">Play</BaseButton>
      </router-link>

      <router-link to="/rules">
        <BaseButton name="rules">Rules</BaseButton>
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<style scoped>
.app {
  padding: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  margin-bottom: 20px;
  font-size: 50px;
  font-weight: 800;
  display: flex;
  flex-direction: row;
}

.buttons-div {
  display: flex;
  flex-direction: row;
}

.red {
  color: #f94367;
}

.blue {
  color: #7d49e5;
}

@media screen and (min-width: 768px) {
  h1 {
    font-size: 80px;
  }
}
</style>

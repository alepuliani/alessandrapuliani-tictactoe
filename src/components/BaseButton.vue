<script>
export default {
  name: 'BaseButton',
  props: {
    name: {
      type: String
    }
  },
  computed: {
    buttonColor() {
      switch (this.name) {
        case 'rules':
          return 'blue-btn'
        case 'play':
          return 'red-btn'
        default:
          return 'default-btn'
      }
    }
  }
}
</script>

<template>
  <button :class="buttonColor">
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  margin: 10px;
  width: 80px;
  padding: 8px 0;
  font-size: 18px;
  font-family: 'sora', sans-serif;
  border: 2px solid gray;
  border-radius: 5px;
}

button:hover {
  cursor: pointer;
}

button:active {
  background-color: #ededed;
}

button:visited {
  text-decoration: none;
}

.default-btn {
  background-color: #e3e3e3;
}

.red-btn {
  background-color: #ffd9d9;
}

.blue-btn {
  background-color: #d1d1ff;
}
</style>

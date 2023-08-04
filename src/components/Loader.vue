<template>
  <div class="loader">
    <div class="loader__spinner"></div>
  </div>
</template>

<script>
export default {
  name: 'Loader'
}
</script>

<style scoped lang="scss">
.loader {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100px;
  background-color: rgba(255, 255, 255, 0.8);
  &__spinner {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border-top: 3px solid #3498db;
    border-right: 3px solid transparent;
    animation: spin 1s linear infinite;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>

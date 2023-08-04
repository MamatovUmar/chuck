<script>
export default {
  name: 'AnswerStatus',
  props: {
    type: String
  }
}
</script>

<template>
  <div :class="['status', type]">
    {{ type === 'success' ? 'Correct' : 'Error' }}
  </div>
</template>

<style scoped lang="scss">
.status {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 12px 26px;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: #67c23a;
  color: #fff;
  &.error {
    background-color: #f56c6c;
  }
}
</style>
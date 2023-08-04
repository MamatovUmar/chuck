<script>
export default {
  name: 'AppHeader',
}
</script>

<template>
  <header class="header">
    <img class="header__logo" src="@/assets/images/logo.png" alt="Chuck" />

    <div class="header__title">Chuck Norris Jokes</div>

    <div class="header__rules">
      You are invited to guess if the joke is true or false by pressing
      the "Yes" or "No" buttons. Once selected, the player will see if the correct
      he guessed right, and can move on to the next joke. Attention: you have 15
      seconds to choose from, after which an automatic request is made to the server and
      the joke changes.
    </div>

    <button
      class="button button--primary header__play"
      @click="$router.push('/play')"
    >
      Play
    </button>
  </header>
</template>

<style scoped lang="scss">
.header {
  animation: zoomIn 1s;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  box-sizing: border-box;
  &__logo {
    max-height: 238px;
  }
  &__title {
    font-size: 36px;
    font-weight: 500;
    margin-top: 20px;
  }
  &__rules {
    text-align: center;
    max-width: 600px;
    margin-top: 20px;
    font-size: 16px;
    line-height: 20px;
    padding: 18px 24px;
    background-color: #fafafa;
    border: 1px solid #eaeefb;
  }
  &__play {
    margin-top: 30px;
    width: 200px;
  }
}

@keyframes zoomIn {
  from { transform: scale(0); }
  to { transform: scale(1); }
}
</style>
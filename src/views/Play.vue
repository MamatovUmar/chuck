<script>
import { mapGetters, mapActions } from 'vuex'
import CustomSelect from '@/components/CustomSelect.vue'
import CircularProgress from '@/components/CircularProgress.vue'
import AnswerStatus from '@/components/AnswerStatus.vue'
import Loader from '@/components/Loader.vue'

export default {
  components: { Loader, AnswerStatus, CircularProgress, CustomSelect },

  data() {
    return {
      activeCategory: 'all',
      loading: false,
      intervalId: null,
      updateJokeTime: 15,
      result: null
    }
  },

  computed: {
    ...mapGetters({
      categories: 'categories',
      joke: 'joke'
    })
  },

  methods: {
    ...mapActions({
      getCategories: 'getCategories',
      getJoke: 'getJoke'
    }),

    /**
     * get joke by category
     * @returns {Promise<void>}
     */
    async getJokeByCategory() {
      this.loading = true
      this.updateJokeTime = 15
      const params = {}
      if (this.activeCategory !== 'all') {
        params.category = this.activeCategory
      }
      await this.getJoke(params)
      this.loading = false
    },

    /**
     * Check user answer
     * @param button - button type: true or false
     * @returns {Promise<void>}
     */
    async checkAnswer(button) {
      console.log('joke length:', this.joke.value.length)
      console.log('button:', button)

      if ((this.joke.value.length % 2 === 0) === button) {
        this.result = 'success'
        await this.getJokeByCategory()
      } else {
        this.result = 'error'
      }
      setTimeout(() => this.result = null, 3000)
    },

    timer() {
      this.intervalId = setInterval(async () => {
        this.updateJokeTime--
        if (this.updateJokeTime === 0) {
          await this.getJokeByCategory()
        }
      }, 1000)
    }
  },

  watch: {
    /**
     * if change category, joke will be updated
     * and the timer will reset
     */
    activeCategory() {
      this.getJokeByCategory()
    }
  },

  async mounted() {
    /**
     * load categories and joke
     */
    await Promise.all([
      this.getCategories(),
      this.getJoke()
    ])

    this.timer()
  },

  /**
   * clear interval after component is destroyed
   */
  destroyed() {
    clearInterval(this.intervalId)
  }
}
</script>

<template>
  <div class="play">
    <AnswerStatus v-if="result" :type="result" />

    <div class="play__logo">
      <router-link to="/">
        <img src="@/assets/images/logo.png" alt="chuck">
      </router-link>
    </div>

    <div v-if="joke" class="play__body">
      <div class="play__category">
        <CustomSelect
          v-model="activeCategory"
          :options="['all', ...categories]"
          label="Select category"
        />
      </div>

      <div class="play__content">
        <Loader v-if="loading" />
        {{ joke.value }}
      </div>

      <div class="play__actions">
        <button class="button" @click="checkAnswer(false)">
          False
        </button>
        <button class="button button--primary" @click="checkAnswer(true)">
          True
        </button>
      </div>

      <CircularProgress v-if="updateJokeTime < 6" :value="updateJokeTime" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.play {
  &__logo {
    text-align: center;
    height: 200px;
    padding-top: 50px;
    padding-bottom: 50px;
    img {
      height: 100%;
    }
  }
  &__body {
    max-width: 500px;
    margin: 20px auto;
  }
  &__content {
    position: relative;
    padding: 30px;
    box-sizing: border-box;
    border-radius: 4px;
    background-color: #f4f4f5;
    color: #000000;
    transition: 0.3s;
    font-size: 16px;
    line-height: 18px;
    margin-bottom: 20px;
    overflow: hidden;
  }
  &__actions {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}
</style>
<template>
  <div class="c-select">
    <label class="c-select__label">{{ label }}</label>
    <div class="c-select__body">
      <div class="c-select__option" @click="toggleOptions">{{ selectedOption }}</div>
      <ul v-show="showOptions">
        <li v-for="option in options" :key="option" @click="selectOption(option)">
          {{ option }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomSelect',

  props: {
    label: String,
    options: Array,
    value: String
  },

  data() {
    return {
      showOptions: false,
      selectedOption: this.value
    }
  },

  methods: {
    toggleOptions() {
      this.showOptions = !this.showOptions;
    },
    selectOption(option) {
      this.selectedOption = option;
      this.showOptions = false;
      this.$emit('input', option);
    }
  }
}
</script>

<style scoped lang="scss">
.c-select {
  margin-bottom: 20px;
  &__body {
    position: relative;
  }
  &__label {
    display: block;
    font-size: 13px;
    margin-bottom: 8px;
  }
  &__option {
    box-sizing: border-box;
    border: 1px solid #dcdfe6;
    padding: 10px;
    cursor: pointer;
    min-height: 41px;
    text-transform: capitalize;
    border-radius: 4px;
  }

  ul {
    list-style: none;
    border-radius: 4px;
    margin: 0;
    padding: 0;
    position: absolute;
    user-select: none;
    top: 100%;
    left: 0;
    right: 0;
    border: 1px solid #dcdfe6;
    max-height: 300px;
    overflow-y: auto;
    background-color: #ffffff;
    transition: 0.3s;
    z-index: 2;
    li {
      padding: 10px;
      cursor: pointer;
      text-transform: capitalize;
    }

    li:hover {
      background-color: #eee;
    }
  }
}





</style>

<template>
  <div class="circular-progress">
    <svg viewBox="0 0 100 100">
      <circle
        class="circular-progress__background"
        cx="40"
        cy="40"
        r="35"
      />
      <circle
        class="circular-progress__progress"
        cx="40"
        cy="40"
        r="35"
        stroke-width="3"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="progressOffset"
      />
      <text
        class="circular-progress__text"
        x="40"
        y="40"
        text-anchor="middle"
        dominant-baseline="central"
      >
        {{ value }}
      </text>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'CircularProgress',

  props: {
    value: {
      type: Number,
      default: 0,
    },
    strokeWidth: {
      type: Number,
      default: 10,
    },
  },

  computed: {
    radius() {
      return 40 - this.strokeWidth / 2;
    },
    circumference() {
      return 2 * Math.PI * this.radius;
    },
    progressOffset() {
      const progress = this.value / 15;
      return this.circumference * (1 - progress);
    }
  }
}
</script>

<style lang="scss">
.circular-progress {
  width: 100px;
  position: fixed;
  top: 30px;
  right: 30px;
  &__background, &__progress{
    fill: none;
  }
  &__background {
    stroke: #e5e9f2;
  }
  &__progress {
    stroke: rgb(255, 73, 73);
    transition: stroke-dashoffset 0.6s ease;
  }
  &__text {
    fill: #000000;
    font-weight: 600;
  }
}
</style>

<template>
  <div>
    <div class="error-wrapper">
      <div class="error-container">
        <div v-if="error.statusCode === 404">
          <h1 class="error-title">{{ Status[1].code }}</h1>
          <h2>
            {{ Status[1].title }}
          </h2>
        </div>

        <div v-else-if="error.statusCode === 400">
          <h1 class="error-title">{{ Status[2].code }}</h1>
          <h2>
            {{ Status[2].title }}
          </h2>
        </div>

        <div v-else>
          <h1 class="error-title">{{ Status[0].code }}</h1>
          <h2>
            {{ Status[0].title }}
          </h2>
        </div>

        <NuxtLink to="/">RETURN TO HOMEPAGE</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      Status: [
        { code: 'Unknown', title: 'An unknown error occurred' },
        { code: '404', title: 'PAGE NOT FOUND' },
        { code: '400', title: 'BAD REQUEST' },
      ],
    }
  },
}
</script>

<style lang="sass" scoped>
.error-wrapper
  height: 100vh
  position: relative

.error-container
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  text-align: center

.error-title
  font-size: 60px
  color: $color-primary
</style>

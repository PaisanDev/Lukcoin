<template>
  <div class="publish-wrapper shadow">
    <span>
      <header>Publish Date</header>
      <article>{{ date }}</article>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    date: '',
  },
}
</script>

<style lang="sass" scoped>
.publish-wrapper
    display: flex
    vertical-align: middle
    padding: 20px
    border-radius: 10px
    background: $color-bg

.publish-wrapper span header
    display: inline
    color: $color-ascent
    text-transform: uppercase
</style>

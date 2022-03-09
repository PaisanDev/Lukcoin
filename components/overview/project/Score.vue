<template>
  <div class="score-wrapper shadow">
    <span class="mr-auto">
      <header>
        Average <br />
        Sentiment
      </header>
    </span>
    <span class="score my-auto">3.5</span>
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
.score-wrapper
    display: flex
    vertical-align: middle
    padding: 20px
    border-radius: 10px
    background: $color-bg

.score-wrapper span header
    display: inline
    font-size: 20px
    font-weight: 350
    color: $color-ascent
    text-transform: uppercase

.score
  height: 40px
  line-height: 40px
  color: $color-primary
  font-weight: 500
  font-size: 30px
  vertical-align: middle
  transition: all 0.3s

@media only screen and (max-width: $md-width)
  .score
    font-size: 20px

@media only screen and (max-width: 570px)
  .score
    font-size: 25px
</style>

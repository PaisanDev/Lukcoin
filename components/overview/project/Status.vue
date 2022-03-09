<template>
  <div class="status-wrapper shadow">
    <span class="mr-auto">
      <header>
        Sentiment <br />
        Status
      </header>
    </span>
    <span class="status my-auto">POSITIVE</span>
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
.status-wrapper
    display: flex
    vertical-align: middle
    padding: 20px
    border-radius: 10px
    background: $color-bg

.status-wrapper span header
    display: inline
    font-size: 20px
    font-weight: 350
    color: $color-ascent
    text-transform: uppercase

.status
  height: 40px
  line-height: 40px
  color: $color-primary
  font-weight: 500
  font-size: 30px
  vertical-align: middle
  transition: all 0.3s

@media only screen and (max-width: $md-width)
  .status
    font-size: 20px

@media only screen and (max-width: 570px)
  .status
    font-size: 25px
</style>

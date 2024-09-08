<template>
  <div class="status-wrapper shadow">
    <span class="mr-auto">
      <header>
        Coin Status <br />
        Prediction
      </header>
    </span>
    <span class="status my-auto positive" v-if="data == 'Up'">{{ data }}</span>
    <span class="status my-auto negative" v-if="data == 'Down'">{{
      data
    }}</span>
    <span class="status my-auto unpredicted" v-if="data == 'Unpredicted'">{{
      data
    }}</span>
  </div>
</template>

<script>
export default {
  props: {
    data: '',
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
  font-weight: 500
  font-size: 30px
  vertical-align: middle
  transition: all 0.3s

.positive
  color: $color-primary

.negative
  color: #eb3434

.unpredicted
  color: #f2cf30

@media only screen and (max-width: $md-width)
  .status
    font-size: 20px

@media only screen and (max-width: 570px)
  .status
    font-size: 25px
</style>

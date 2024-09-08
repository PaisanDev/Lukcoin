<template>
  <div class="status-wrapper shadow">
    <span class="mr-auto">
      <header>
        Coin price <br />
        predict
        <i
          class="far fa-question-circle"
          v-b-tooltip.hover
          title="A section for displaying token price prediction percent (Up means the worth of this token going to increase tomorrow, Down means the worth of this token going to decrease tomorrow)"
        />
      </header>
    </span>
    <span class="status my-auto positive" v-if="status == 'Up'">{{
      status + ' ' + data + ' ' + '%'
    }}</span>
    <span class="status my-auto negative" v-if="status == 'Down'">{{
      status + ' ' + data + ' ' + '%'
    }}</span>
    <span class="status my-auto unpredicted" v-if="status == 'Unpredicted'">{{
      status
    }}</span>
  </div>
</template>

<script>
export default {
  props: {
    data: '',
    status: '',
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

.status-wrapper span i
    display: inline
    font-size: 16px
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

<template>
  <div class="status-wrapper shadow">
    <span class="mr-auto">
      <header>
        Sentiment <br />
        Status
        <i
          class="far fa-question-circle"
          v-b-tooltip.hover
          title="A section for displaying a daily sentiment status from our model (Positive status means social media references this token in a positive way, Negative status means social media references this token in a negative way)"
        />
      </header>
    </span>
    <span class="status my-auto positive" v-if="data == 1">Positive</span>
    <span class="status my-auto negative" v-if="data == 0">Negative</span>
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

.status-wrapper span header i
    font-size: 16px
    color: $color-ascent

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

@media only screen and (max-width: $md-width)
  .status
    font-size: 20px

@media only screen and (max-width: 570px)
  .status
    font-size: 25px
</style>

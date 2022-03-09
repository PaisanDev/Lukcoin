<template>
  <div class="comparison-wrapper">
    <b-row class="mb-5">
      <b-col cols="12" class="comparison-header">
        <header>COMPARISON</header>
      </b-col>
      <b-col cols="12" class="comparison-sub-header">
        <span>Compare two token statistic</span>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12" sm="12" md="6" class="mb-3">
        <ComparisonCompare class="mx-auto" />
      </b-col>
      <b-col cols="12" sm="12" md="6" class="mb-3">
        <ComparisonCompare class="mx-auto" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
.comparison-wrapper
  height: 100%
  min-height: 100vh
  display: flex
  align-items: center
  flex-direction: column
  padding: 80px 0 0 0

.comparison-header
  text-align: center
  font-size: 35px

.comparison-sub-header
  text-align: center
  color: $color-ascent
</style>

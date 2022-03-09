<template>
  <div class="name-wrapper shadow">
    <span>
      <img
        :src="require('~/assets/images/' + img)"
        alt="Project Logo"
        class=""
      />
      <header>Project Name</header>
      <br />
      {{ name }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    img: '',
    name: '',
  },
}
</script>

<style lang="sass" scoped>
.name-wrapper
    display: flex
    vertical-align: middle
    padding: 20px
    border-radius: 10px
    background: $color-bg

.name-wrapper span img
    height: 40px
    margin: 5px 10px 0 0
    float: left

.name-wrapper span header
    display: inline
    color: $color-ascent
    text-transform: uppercase
</style>

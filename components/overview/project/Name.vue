<template>
  <div class="name-wrapper shadow">
    <span>
      <b-row>
        <b-col cols="3"><img :src="img" alt="Token Logo" class="" /></b-col>
        <b-col
          ><header>Token Name</header>
          <br />
          {{ name }}</b-col
        >
      </b-row>
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
    // float: left

.name-wrapper span header
    display: inline
    color: $color-ascent
    text-transform: uppercase
</style>

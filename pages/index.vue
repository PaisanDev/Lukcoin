<template>
  <div class="search-wrapper">
    <b-row class="mb-4">
      <img src="~/images/Logo.svg" alt="Logo" class="logo" />
      <span class="brand ml-3">LUK COIN</span>
    </b-row>
    <b-row class="discription mb-3"
      >Explore project in blockchain economy</b-row
    >
    <b-row>
      <b-col>
        <div class="search">
          <i class="fas fa-search" />
          <input type="text" placeholder="Search...." />
          <button class="test">Search</button>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>

.search-wrapper
  height: 100vh
  display: flex
  align-items: center
  justify-content: center
  vertical-align: middle
  flex-direction: column

.title
  display: block

.logo
  display: inline-block
  height: 50px
  vertical-align: bottom

.brand
  display: inline-block
  color: $color-primary
  font-size: 40px
  font-weight: 700

.discription
  color: $color-ascent
  text-transform: uppercase

.search
  height: 50px
  border-radius: 25px
  background-color: $color-secondary
  padding: 0 20px
  display: flex
  align-items: center
  justify-content: center
  vertical-align: middle
  position: relative

.search i
  color: white

.search input
  height: 100%
  width: 300px
  color: white
  background: none
  border: none
  margin: 0 15px
  transition: all 0.5s

.search input::placeholder
  color: white

.search input:focus
  outline: none

.search button
  height: 40px
  width: 100px
  color: $color-primary
  background-color: #FBFBFB
  border: none
  border-radius: 20px
  box-shadow: 2px 6px 5px 0px rgba(0,0,0,0.16)
  -webkit-box-shadow: 2px 6px 5px 0px rgba(0,0,0,0.16)
  -moz-box-shadow: 2px 6px 5px 0px rgba(0,0,0,0.16)
  transition: all 0.1s

.search button:hover
  background-color: #f5f5f5

@media only screen and (max-width: $lg-width)
  .search input
    width: 300px

@media only screen and (max-width: $md-width)
  .search input
    width: 200px

@media only screen and (max-width: $sm-width)
  .search
    height: 45px
  .search input
    width: 100px
  .search button
    height: 30px
    width: 80px
</style>

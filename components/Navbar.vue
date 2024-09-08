<template>
  <div class="navbar">
    <NuxtLink :to="'/'" class="nav-logo-link">
      <div>
        <img src="~/images/Logo.svg" alt="Navbar Logo" class="nav-logo" />
        <span class="nav-brand">Luk Coin</span>
      </div>
    </NuxtLink>

    <div class="ml-auto">
      <div class="lg-menu">
        <Nuxt-link
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          class="nav-link"
        >
          {{ item.title }}
        </Nuxt-link>
      </div>

      <div class="sm-menu">
        <button @click="showMenu"><i class="fas fa-bars"></i></button>

        <div class="sm-menu-wrapper" v-if="isActive">
          <Nuxt-link
            v-for="item in items"
            :key="item.title"
            :to="item.to"
            class="sm-nav-link"
          >
            {{ item.title }}
          </Nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from '@/router'
export default {
  data() {
    return {
      items: router,
      isActive: false,
    }
  },
  methods: {
    showMenu() {
      if (this.isActive) this.isActive = false
      else this.isActive = true
    },
  },
}
</script>

<style lang="sass" scoped>

/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active
  color: $color-primary

a.nuxt-link-exact-active:hover
  color: #00a5ff

.navbar
  height: 50px
  width: 100%
  position: fixed
  z-index: 1
  background: $color-bg
  box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.1)
    -webkit-box-shadow: 0px 8px 5px 0px rgba(0,0,0,0.1)
    -moz-box-shadow: 0px 8px 5px 0px rgba(0,0,0,0.1)

.nav-logo
  height: 30px
  vertical-align: sub

.nav-logo-link
  text-decoration: none

.nav-brand
  font-size: 25px
  color: $color-primary
  font-weight: 700

.nav-link
  display: inline-block
  color: $color-ascent

.nav-link:hover
  color: #676767

.lg-menu
  display: inline-block

.sm-menu
  display: none

.sm-menu button
  background: none
  border: none

@media only screen and (max-width: $sm-width)
  .lg-menu
    display: none

  .sm-menu
    display: inline-block

  .sm-menu-wrapper
    right: 20px
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    position: absolute

  .sm-nav-link
    width: 100%
    padding: 0 10px
    line-height: 50px
    text-align: right
    vertical-align: middle
    text-decoration: none
    color: $color-ascent
    background: #ffffff

  .sm-nav-link:first-child
    border-radius:  15px 15px 0px 0px

  .sm-nav-link:last-child
    border-radius:  0px 0px 15px 15px

  .sm-nav-link:hover
    color: #676767
</style>

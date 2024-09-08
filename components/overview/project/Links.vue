<template>
  <div class="link-wrapper shadow h-100">
    <span class="mr-auto">
      <header>
        Related Website
        <i
          class="far fa-question-circle"
          v-b-tooltip.hover
          title="A section for displaying all links from token creator official reference from coingecko website"
        />
      </header>
      <article class="p-2">
        <a :href="i.link" v-for="i in links" :key="i.text" target="_blank">
          <button class="w-100 shadow mb-2">
            <div v-if="i.type == 'facebook'">
              <i class="fab fa-facebook"></i>
              Facebook
            </div>

            <div v-else-if="i.type == 'twitter'">
              <i class="fab fa-twitter"></i>
              Twitter
            </div>

            <div v-else-if="i.type == 'reddit'">
              <i class="fab fa-reddit"></i>
              Reddit
            </div>

            <div v-else-if="i.type == 'telegram'">
              <i class="fab fa-telegram"></i>
              Telegram
            </div>

            <div v-else-if="i.type == 'discord'">
              <i class="fab fa-discord"></i>
              Discord
            </div>

            <div v-else-if="i.type == 'technical_doc'">
              <i class="fas fa-file"></i>
              Techinal Document
            </div>

            <div v-else-if="i.type == 'homepage'">
              <i class="fas fa-broom"></i>
              Official Website
            </div>
          </button>
        </a>
      </article>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    links: Array,
  },
}
</script>

<style lang="sass" scoped>
.link-wrapper
    padding: 20px
    border-radius: 10px
    background: $color-bg

.link-wrapper span header
    text-transform: uppercase
    display: inline
    font-size: 20px
    font-weight: 350
    color: $color-ascent

.link-wrapper span header i
    font-size: 16px
    color: $color-ascent

.link-wrapper span article button
    height: 40px
    padding: 0 30px
    background: #fff
    border-radius: 8px
    border: 1px #DCDCDC solid
    position: relative
    transition: all 0.4s


.link-wrapper span article button:hover
    color: white
    background: $color-primary

.link-wrapper span article button div i
    position: absolute
    top: 10px
    left: 20px
</style>

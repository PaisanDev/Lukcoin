<template>
  <div class="audit-wrapper shadow">
    <i class="fas fa-check-circle" v-if="audit"></i>
    <i class="fas fa-times-circle" v-else></i>
    <span>
      <header>
        Audit status
        <i
          class="far fa-question-circle"
          v-b-tooltip.hover
          title="A section for displaying audit or code inspection status from the third party to prevent embezzlement by the token creator."
        />
      </header>
      <article v-if="audit">AUDITED</article>
      <article v-else>UN-AUDITED</article>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    audit: Boolean,
    name: '',
  },
}
</script>

<style lang="sass" scoped>
.audit-wrapper
    display: flex
    vertical-align: middle
    padding: 20px
    border-radius: 10px
    background: $color-bg

.audit-wrapper header
  text-transform: uppercase
  color: $color-ascent

.audit-wrapper i
  color: $color-primary
  margin: 0 10px 0 0
  font-size: 50px

.audit-wrapper span header i
  color: $color-ascent
  margin: 0 10px 0 0
  font-size: 18px
</style>

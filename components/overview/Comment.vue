<template>
  <b-row>
    <b-col v-for="comment in comments" :key="comment.name" class="comment">
      <div class="comment-wrapper shadow">
        <div class="comment-user">
          <i
            class="fab fa-twitter comment-type d-inline"
            v-if="comment.type == 'Twitter'"
            style="color: #5ab8eb"
          ></i>

          <i
            class="fab fa-reddit comment-type d-inline"
            v-else-if="comment.type == 'Reddit'"
            style="color: #ff7653"
          ></i>

          <header class="ml-1 d-inline">{{ comment.name }}</header>
        </div>
        <div class="comment-comment">{{ comment.comment }}</div>
        <div class="comment-date-time">
          {{ comment.time }} - {{ comment.date }}
        </div>
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    comments: [],
  },
}
</script>

<style lang="sass" scoped>
.comment-wrapper
    height: 180px
    border-radius: 10px
    border: 1px #F1F1F1 solid
    padding: 10px
    background: $color-bg

.comment
  display: inline-block

.comment-type
    font-size: 18px

.comment-user header
  width: 80px
  overflow-x: hidden


.comment-comment
    height: 80px
    margin: 10px 0
    overflow: auto
    word-break: break-word

.comment-date-time
    color: $color-ascent

@media only screen and (max-width: 1130px)
  .overview-wrapper
    padding: 80px 20px
  .comment:nth-child(5)
    display: none
@media only screen and (max-width: 850px)
  .comment:nth-child(4)
    display: none

@media only screen and (max-width: 650px)
  .comment:nth-child(3)
    display: none

@media only screen and (max-width: 480px)
  .comment:nth-child(2)
    display: none
</style>

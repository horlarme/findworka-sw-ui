<template>
  <div style="text-align: center">
    <h4 v-text="movie.title"></h4>
    <p v-text="movie.opening_crawl"></p>
    <table align="center">
      <tr>
        <td>
          <router-link :to="`/movie/${movie.id}`">Comments</router-link>
        </td>
        <td>
          <router-link :to="`/movie/${movie.id}`" v-text="movie.comment_count"></router-link>
        </td>
      </tr>
      <tr>
        <td>
          <router-link :to="`/movie/${movie.id}`">Characters</router-link>
        </td>
        <td>
          <router-link :to="`/movie/${movie.id}`" v-text="movie.characters_count"></router-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: ['movie']
}
</script>

<style scoped>

</style>

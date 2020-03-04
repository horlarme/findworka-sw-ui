<template>
  <div>
    <h1>Star Wars Movie List</h1>
    <movie v-for="(movie, index) in movies" :key="index" :movie="movie" />
  </div>
</template>

<script>
import { apiHost } from '@/../config'

export default {
  mounted () {
    this.fetchMovieList()
  },
  data () {
    return {
      movies: []
    }
  },
  methods: {
    fetchMovieList () {
      console.log('should be fetching')

      fetch(apiHost + '/movies')
        .then(response => response.json())
        .then(response => response.result.map(movie => this.movies.push(movie)))
    }
  }
}
</script>

<template>
  <div>
    <h2>{{movie.title}}</h2>
    <h4>Released: {{movie.release_date}}</h4>
    <h4>Producer: {{movie.producer}}</h4>
    <p>{{movie.opening_crawl}}</p>
    <h3>Characters</h3>
    <hr/>
    <h3>Comments</h3>
    <hr/>
    <div>
      <form @submit="postComment">
        <input v-model="comment" type="text" max="500" min="1"/>
        <input type="submit" value="Comment" />
      </form>
    </div>
    <p v-if="comments.length < 1">No Comment Yet</p>
    <p v-for="(comment, index) in comments" :key="index" v-else>
      <strong>{{comment.ip}}:</strong>
      {{comment.comment}}&nbsp;{{(new Date(comment.created_at)).toUTCString()}}
    </p>
  </div>
</template>

<script>
import { apiHost } from '@/../config'
import axios from 'axios'

export default {
  data () {
    return {
      comment: '',
      movie: {},
      comments: []
    }
  },
  mounted () {
    this.getMovie()
  },
  methods: {
    getMovie () {
      fetch(`${apiHost}/movie/${this.$route.params.episode}`)
        .then(response => response.json())
        .then(response => {
          this.movie = Object.assign({}, this.movie, response.result)
        })
        .then(this.getComments)
    },
    getComments () {
      this.comment = ''
      fetch(`${apiHost}/movies/${this.$route.params.episode}/comments`)
        .then(response => response.json())
        .then(response => {
          console.log(response)
          if (response.status !== 'error') this.comments = Object.assign({}, this.comments, response.result)
        })
    },
    postComment (e) {
      e.preventDefault()
      axios.post(
         `${apiHost}/movies/${this.$route.params.episode}/comment`,
         { comment: this.comment }
      )
        .finally(this.getComments)
    }
  }
}
</script>

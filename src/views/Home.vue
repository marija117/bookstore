<template>
  <v-app>
    <v-row v-for="genre in genres"
        :key="genre.id">
      <Slide/>
      <Slide/>
      <Slide/>
      <Slide/>
      <Slide/>
    </v-row>
  </v-app>
</template>

<script>
import Slide from '@/components/Slide.vue'
import moduleGenre from "@/store/genre/moduleGenre.js";

// @ is an alias to /src
export default {
  name: 'Home',
  components: {
    Slide
  },
  computed: {
    genres() {
      return this.$store.state.genre.genres;
    },
  },
  created () {
    if (!moduleGenre.isRegistered) {
      this.$store.registerModule('genre', moduleGenre)
      moduleGenre.isRegistered = true
    }
    this.$store.dispatch('genre/fetchGenres')
      .catch(err => { console.error(err) })
   }
}
</script>

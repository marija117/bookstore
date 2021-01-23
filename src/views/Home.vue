<template>
  <v-app>
    <v-row>
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

// @ is an alias to /src
export default {
  name: 'Home',
  components: {
    Slide
  }
}
</script>

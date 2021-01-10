<template>
  <v-app>
    <v-row>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </v-row>
  </v-app>
</template>

<script>
import Card from '@/components/Card.vue'

// @ is an alias to /src
export default {
  name: 'Home',
  components: {
    Card
  }
}
</script>

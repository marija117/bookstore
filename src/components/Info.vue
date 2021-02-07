<template>
<v-app>
  <v-card
    class="mx-auto my-0"
    style="width:100%;"
    height="35%"
  >
    <Row/>
    <Row/>
    <Row/>
    <Row/>
  </v-card>
</v-app>
</template>
<script>
import Row from './Row.vue'

  export default {
    name: 'Info',
    components: {
        Row
    },
  }
</script>
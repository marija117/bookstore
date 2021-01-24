<template>
  <div>
    <Book/>
    <Info/>
  </div>
</template>

<script>
import Book from './Book.vue'
import Info from './Info.vue'

  export default {
    name: 'Details',
    components: {
        Book,
        Info
    },
  }
</script>
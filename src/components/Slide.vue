<template>
  <v-sheet
    class="mx-auto mt-5 rounded-lg"
    elevation="8"
    width="100%"
  >
  <v-card-text class="pb-0">
    <div class="title">
      Crime
    </div>
  </v-card-text>
    <v-slide-group
      v-model="model"
      class="pa-4"
      center-active
      show-arrows
    >
      <v-slide-item
        v-for="book in books"
        :key="book.id"
        v-slot="{ active, toggle }"
      >
        <Card
          :bookData="book"
          :color="active ? 'primary' : 'grey lighten-1'"
          height="200"
          width="100"
          @click="toggle"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-scale-transition>
              <v-icon
                v-if="active"
                color="white"
                size="48"
                v-text="'mdi-close-circle-outline'"
              ></v-icon>
            </v-scale-transition>
          </v-row>
        </Card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>
<script>
import Card from './Card.vue'
import moduleBook from "@/store/book/moduleBook.js";

  export default {
    name: 'Slide',
    components: {
        Card
    },
    data: () => ({
      model: null,
    }),
    computed: {
      books() {
        return this.$store.state.book.books;
      },
    },
    created () {
    if (!moduleBook.isRegistered) {
      this.$store.registerModule('book', moduleBook)
      moduleBook.isRegistered = true
    }
    this.$store.dispatch('book/fetchBooks')
      .catch(err => { console.error(err) })
   }
  }
</script>
<template>
  <v-sheet
    class="mx-auto mt-5 rounded-lg"
    elevation="8"
    width="100%"
  >
  <v-card-text class="pb-0">
    <div class="title">
      {{ genreData.name }}
    </div>
  </v-card-text>
    <v-slide-group
      v-model="model"
      class="pa-4"
      center-active
      show-arrows
    >
      <v-slide-item
        v-for="book in genreData.books"
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

  export default {
    name: 'Slide',
    components: {
        Card
    },
    props: {
      genreData: {
        type: Object,
      }
    },
    data: () => ({
      model: null,
    })
  }
</script>
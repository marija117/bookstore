<template>
  <v-sheet
    class="mx-auto mt-3 rounded-lg"
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
        v-for="n in 15"
        :key="n"
        v-slot="{ active, toggle }"
      >
        <Card
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
    data: () => ({
      model: null,
    }),
  }
</script>
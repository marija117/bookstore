<template>
  <v-card
    :loading="loading"
    class="mx-2"
    style="box-shadow:none;"
    max-width="200"
    max-height="400"
  >
    <v-img
      height="250"
      src="../images/sidarta.jpg"
      @click="details"
      style="cursor:pointer"
    ></v-img>

    <v-card-title>Sidarta</v-card-title>

    <v-card-text class="py-0">
        <div class="subtitle-1">
         Herman Hese
        </div>
        <v-divider></v-divider>
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>
    </v-card-text>

    <v-card-text class="py-0">
      <div><span class="red--text text-md-h6">5.00 €</span></div>
    </v-card-text>

    <v-card-actions
      class="d-flex justify-center"
    >
      <v-btn
      style="color:white;"
        color="yellow accent-4"
        elevation="2"
        class="px-9"
        medium
        @click="reserve"
      >
        Add to card
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
// @ is an alias to /src
export default {
  data: () => ({
    loading: false,
    selection: 1,
  }),

  methods: {
    reserve () {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },
    details () {
       this.$router.push({ name: "Details" })
    }
  },
}
</script>

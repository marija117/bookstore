<template>
  <v-card
    :loading="loading"
    class="mx-2 my-12"
    max-width="200"
    max-height="440"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="../images/sidarta.jpg"
      @click="details"
      style="cursor:pointer"
    ></v-img>

    <v-card-title>Sidarta</v-card-title>

    <v-card-text>
    
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

        <div class="grey--text">
          4.5 (413)
        </div>

      <div>19 October</div>
    </v-card-text>

    <v-card-text>
      <div><span class="red--text text-md-h6">5.00 €</span></div>
    </v-card-text>

    <v-card-actions
      class="d-flex justify-center"
    >
      <v-btn
        color="accent"
        elevation="2"
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

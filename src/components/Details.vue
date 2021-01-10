<template>
<v-app>
  <v-card
    class="mt-5"
    max-width="1000"
    height="70%"
  >
   <v-row style="height:100%;">
       <v-col cols="4">
            <v-img
            fluid
             class="fill-height d-flex"
            style="height:100%; cursor: pointer;"
      src="../images/sidarta.jpg"
    >
    </v-img>
       </v-col>
       <v-col cols="8">
            <v-card-subtitle class="pb-0">
      Number 10
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Whitehaven Beach</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Explore
      </v-btn>
    </v-card-actions>
       </v-col>
   </v-row>
  </v-card>
  </v-app>
</template>

<script>
  export default {
  }
</script>
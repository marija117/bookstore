<template>
<v-app>
  <v-card
    class="mt-5 mx-auto"
    max-width="1000"
    height="85%"
  >
    <v-row class="ma-0"  style="height:100%;">
      <v-col cols="4" class="pa-0" style="height:100%;">
        <v-img
          max-height="inherit"
          class="fill-height d-flex rounded"
          style="height:100%; cursor: pointer;"
          src="../images/sidarta.jpg">
        </v-img>
      </v-col>
      <v-col cols="8">
        <v-card-title>
          Sidarta
        </v-card-title>
         <v-row>
           <v-col cols="10" class="py-0">
             <v-card-subtitle class="py-0">
            Hermann Hesse
          </v-card-subtitle>
           </v-col>
            <v-col cols="2" class="pa-0">
            <v-card-text class="py-0">
      <div><span class="red--text text-md-h6">5.00 €</span></div>
    </v-card-text>
           </v-col>
        </v-row>
    <v-card-text class="text--primary pb-0">
      <div>The title of this novel is a combination of two Sanskrit words, "siddha," which is defined as "achieved," and "artha" which is defined as "meaning" or "wealth." The invented word serves as the name for the principal character, a man on a spiritual journey of self-discovery during the time of the Buddha. The titular character Siddhartha is the son of a wealthy Brahmin family who decides to leave his home in the hopes of gaining spiritual illumination. Siddhartha is joined by his best friend Govinda; the two renounce their earthly possessions, engage in ritual fasting and intense meditation and ultimately seek out and speak with Gautam, the famous Buddha. Here the two go their separate ways, Govinda joining the order of the Buddha, Siddhartha traveling on in order to find his spiritual enlightenment. In order to complete this novel Hesse immersed himself in the sacred teachings of both Hindu and Buddhist scriptures and lived a semi-reclusive life in order to achieve his own spiritual enlightenment. "Siddhartha" is considered one of Hesse's most important works and remains one of his most popular; a work that deals with the quest that we all undertake in some way or another, the quest to define our lives in an environment of conflicting dualities and ultimately find spiritual awareness.</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Add to cart
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Add to wishlist
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
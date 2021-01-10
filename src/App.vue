<template>
  <div id="app">

    <v-card class="overflow-hidden">
    <v-app-bar
      style="height:100px;"
      absolute
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Bookstore</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-menu
        bottom
        left
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            color="yellow"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
          >
          <router-link :to="item.path"><v-list-item-title>{{ item.title }}</v-list-item-title></router-link> |
          </v-list-item>
        </v-list>
      </v-menu>

      <template v-slot:extension>
        <v-tabs align-with-title  v-for="(item, i) in items"
            :key="i">
            <v-tab><router-link :to="item.path">{{ item.title }}</router-link></v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques"
      class="overflow-y-auto"
      max-height="800"
    >
      <v-container style="height: 800px; padding-top:100px;">    <router-view/>
</v-container>
    </v-sheet>
  </v-card>
  </div>
</template>
<script>
  export default {
    data: () => ({
      items: [
        { title: 'Home', path: '/', icon: 'home' },
        { title: 'Genres', path: '/genres', icon: 'face' },
        { title: 'Best Sellers', path: '/best-sellers', icon: 'lock_open' },
        { title: 'By Years', path: '/by-years', icon: 'lock_open' },
        { title: 'Profile', path: '/profile', icon: 'lock_open' }
      ],
    }),
  }
</script>

<style>
.v-toolbar__content {
  height: 50px!important;
}
#scrolling-techniques-4 {
  max-height: 150px;
}
.v-image {
  max-height: 150px;
}
.v-card.v-app-bar  {
  max-height: 200px!important;
}
.overflow-y-auto.v-sheet.theme--light {
  max-height: 200px;
}
a {
  text-decoration: none;
  color: azure;
}
</style>

<template>
  <v-app>
    <HeaderComponent :drawer.sync="drawer" />
    <v-menu v-model="drawer" absolute offset-y>
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" @click="null">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-main class="gradient-bg">
      <HeroHamburgerComponentVue />
      <ContentComponent />
    </v-main>
    <FooterComponent />
  </v-app>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import HeroHamburgerComponentVue from './components/HeroHamburgerComponent.vue';
import ContentComponent from "./components/ContentComponent.vue";


export default {
  name: "App",
  components: {
    HeaderComponent,
    FooterComponent,
    HeroHamburgerComponentVue,
    ContentComponent,
  },
  data: () => ({
    drawer: false,
    items: [
      // { title: 'Home' },
      // { title: 'About' },
      // { title: 'Contact' },
    ],
    sheetData: [],
  }),
  
};
</script>

<style>
.text-secondary {
  color: var(--v-textSecondary-base) !important;
}

.gradient-bg {
  background-image: linear-gradient(#57006c, #FF35D3);
}
</style>


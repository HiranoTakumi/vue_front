<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <v-list-item v-for="item in HeaderItems" :key="item.title" :to="item.path" link>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="secondary" dark app clipped-left>
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Test Vuetify Front</v-toolbar-title>
    </v-app-bar>

    <v-footer color="secondary" dark app>
      Developed by horus
    </v-footer>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
  // import HelloWorld from './components/HelloWorld';
  
export default {
  data(){
    return {
      drawer: null,
      HeaderItems: [
        {title: 'Home', icon: 'mdi-book-open-page-variant', path: '/'},
        {title: 'Hello World', icon: 'mdi-book-open-page-variant', path: '/helloWorld'},
        {title: 'Sleep Time', icon: 'mdi-book-open-page-variant', path: '/sleepTime'},
        {title: 'CORS Check', icon: 'mdi-book-open-page-variant', path: '/corsCheck'},
      ]
    }
  }
};
</script>

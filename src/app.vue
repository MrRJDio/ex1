<template>
  <!-- App -->
  <f7-app :params="f7params">

    <!-- Statusbar -->
<f7-statusbar></f7-statusbar>
    <!-- Left Panel -->
    <f7-panel left reveal theme-dark>
      <f7-view url="/panel-left/"></f7-view>
    </f7-panel>
    <!-- Right Panel -->
    <!-- <f7-panel right cover theme-dark>
      <f7-view url="/panel-right/"></f7-view>
    </f7-panel> -->
    <!-- Main View -->
     <f7-view id="main-view" url="/" main class="safe-areas"></f7-view>  <!-- загружает первую страницу указанную в routes.js в url="" можно указать путь к файлу, в данный момент прописанна
         {
        path: '/',
        component: HomePage,
      }, -->

    <!-- Popup -->



    <!-- Login Screen -->

  </f7-app>
</template>

<script>
// Import Routes
import routes from './routes.js'

export default {
  data() {
    return {
      // Framework7 parameters here
      f7params: {
        id: 'io.framework7.testapp', // App bundle ID
        name: 'Framework7', // App name
        theme: 'auto', // Automatic theme detection
        // App routes
        routes: routes,
      },
    }
  }
}
</script>

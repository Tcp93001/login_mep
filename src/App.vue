<template>
  <v-app dark>
    <v-toolbar fixed clipped-left class="deep-purple lighten-1" app>
      <v-toolbar-title class="headline">
        <span>Ingenieria MEP</span>
        <span class="pl-5 ml-5 display-1">Proyectos</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          flat
          href="https://www.ingenieriamep.mx/"
          target="_self"
        >
          <span v-ripple class="mr-2">Logout</span>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>

      <UserTable />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import UserTable from './components/UserTable'

export default {
  name: 'App',
  components: {
    HelloWorld,
    UserTable
  },
  data () {
    return {
      //
    }
  }
}
</script>



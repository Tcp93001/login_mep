<template>
  <v-app dark>
    <v-container align-content-center class="background">
      <v-toolbar fixed clipped-left class="red darken-4" app>
        <v-toolbar-title class="headline">
          <span>Ingenieria MEP</span>
          <span class="pl-5 ml-5 display-2">Proyectos</span>
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
        <div class="centered-align">
          <Login />
        </div>
        <div class="centered-align" v-if="true">
            <UserTable />
        </div>
        <div class="centered-align" v-if="true">
            <UserTable />
        </div>
      </v-content>
    </v-container>
  </v-app>
</template>

<script>
import UserTable from './components/UserTable.vue'
import Login from './components/Login/Login.vue'

// aqui voy a necesitar las banderas para saber qué tabla pintar y si ya está loggeado o no

export default {
  name: 'App',
  components: {
    UserTable,
    Login
  },
  data () {
    return {
      userData: {},
      adminData: '',
      isUserAdmin: false
    }
  }

}
</script>

<style>
  .centered-align {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 400px;
  }

  .background {
    background-color: rgb(41, 41, 41);
  }
</style>


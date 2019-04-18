<template>
  <v-app dark>
    <v-container
      align-content-center class="background"
    >
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
        <div v-if="!success" class="centered-align">
          <div>
            <v-container>
              <v-alert
                :value="badInput"
                dismissible
                type="warning"
                transition="scale-transition"
              >
                Verifique su usuario y contraseña
              </v-alert>
              <v-form>
                <v-container>
                  <v-layout>
                    <v-flex
                      xs12
                      md3
                      offset-md3
                    >
                      <v-text-field
                        v-model="user"
                        label="Usuario"
                        required
                      ></v-text-field>
                    </v-flex>

                    <v-flex
                      xs12
                      md3
                    >
                      <v-text-field
                        v-model="password"
                        label="Password"
                        required
                        type="password"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-form>

              <div class="text-xs-center">
                <v-btn
                  type="submit"
                  :loading="loading"
                  :disabled="loading"
                  color="secondary"
                  @click="handleSubmit"
                >
                  Entrar
                </v-btn>
              </div>
            </v-container>
          </div>
        </div>
        <div class="centered-align" v-if="adminUser">
          <AddUser />
          <UserTable :userData="adminData" />
        </div>
        <div class="centered-align" v-if="!adminUser && success">
          <CardUser />
        </div>
      </v-content>
    </v-container>
  </v-app>
</template>

<script>
import axios from 'axios'
import { setTimeout } from 'timers'

import UserTable from './components/UserTable.vue'
import CardUser from './components/CardUser/CardUser.vue'

const url = 'https://ingeniaria-mep.herokuapp.com/user/login'
const urlShow = 'https://ingeniaria-mep.herokuapp.com/user'

// aqui voy a necesitar las banderas para saber qué tabla pintar y si ya está loggeado o no

export default {
  name: 'App',
  components: {
    UserTable,
    CardUser
  },
  data () {
    return {
      success: false,
      badInput: false,
      user: '',
      password: '',
      userData: [],
      adminUser: null,
      adminData: [],
      token: '',
      loader: null,
      loading: false,
      loading2: false,
      loading3: false,
      loading4: false,
      userId: ''
    }
  },
  watch: {
    loader () {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 3000)

      this.loader = null
    }
  },
  methods: {

    async handleSubmit () {
      this.loader = 'loading'
      const params = {
        user: this.user,
        password: this.password
      }
      // admin real: usuarioAdmin  password: *secret00*
      await axios({
        method: 'post',
        url,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'username': 'usuarioAdmin',
          'password': '*secret00*'
          // 'username': this.user,
          // 'password': this.password
        }
      })
        .then(response => {
          this.userData = response.data.data
          this.token = this.userData.token
          if (this.userData.user.admin) {
            this.adminUser = true
            this.success = true
//  poner aqui un cambio de estilo para que se presente otro fondo en el backgrpund, dependiendo si es administrador o 
// un usuario normal
            this.getAdminData()
          }
        })
        .catch(response => {
          this.badInput = true
          setTimeout(() => {
            this.badInput = false
          }, 3000);
        })
    },

    async getAdminData () {
      await axios({
        method: 'get',
        url: urlShow,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'x-token': this.token,
          'admin': this.adminUser
        }
      })
        .then(response => {
          this.adminData = response.data.data
          console.log('aqui', this.adminData)
          this.$emit('adminReceivedData', this.adminData)
        })
        .catch(response => {
          console.log(response)
        })
    },
    async createUser () {
      // usuarios de prueba2 a prueba4 ver con getAdminData
      const body = {
        'username': 'pruebas8',
        'password': 'TETETE',
        'links': ['https://onedrive.live.com/?id=1DAE05C90EE8DFCB%21106&cid=1DAE05C90EE8DFCB'],
        'admin': false
      }
      await axios({
        method: 'post',
        url: urlShow,
        headers: {
          'Content-Type': 'application/json',
          'x-token': this.token,
          'admin': this.adminUser
        },
        data: body
      })
        .then(response => {
          this.adminData = response.data.data
        })
        .catch(response => {
          console.log(response)
        })
    },

    async deleteUser () {
      await axios({
        method: 'delete',
        url: urlShow + '/' + userId,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'x-token': this.token,
          'admin': this.adminUser
        }
      })
        .then(response => {
          this.adminData = response.data.data
        })
        .catch(response => {
          console.log(response)
        })
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
    height: 600px;
    overflow: hidden;
    background-image: linear-gradient(rgba(0,0,0, 0.80)), url("../src/assets/WhatsApp Image 2019-02-12 at 10.15.02 AM.jpeg");
  }
</style>


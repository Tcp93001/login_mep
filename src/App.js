import axios from 'axios'
import { setTimeout } from 'timers'

import UserTable from './components/UserTable/UserTable.vue'
import CardUser from './components/CardUser/CardUser.vue'
import CreateUser from './components/CreateUser/CreateUser.vue'

const url = 'https://ingeniaria-mep.herokuapp.com/user/login'
const urlShow = 'https://ingeniaria-mep.herokuapp.com/user'

export default {
  name: 'App',
  components: {
    CardUser,
    CreateUser,
    UserTable
  },
  data () {
    return {
      success: false,
      badInput: false,
      error: false,
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
      userId: '',
      message: 'Verifique su usuario y contraseña'
    }
  },
  watch: {
    loader () {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 8000)

      this.loader = null
    }
  },
  methods: {

    async handleSubmit () {
      this.loader = 'loading'
      // admin real: usuarioAdmin  password: *secret00*
      await axios({
        method: 'post',
        url,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          // 'username': 'usuarioAdmin',
          // 'password': '*secret00*'
          'username': this.user,
          'password': this.password
        }
      })
        .then(response => {
          this.userData = response.data.data
          this.token = this.userData.token
          this.success = true
          if (!this.userData.user.admin) {
            this.adminUser = false
          } else {
            this.adminUser = true
            this.getAdminData()
          }
        })
        .catch(response => {
          this.error = true
          setTimeout(() => {
            this.error = false
          }, 6000)
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
          this.$emit('adminReceivedData', this.adminData)
        })
        .catch(response => {
          this.error = true
          setTimeout(() => {
            this.error = false
          }, 6000)
        })
    },

    async createUser (newUser) {
      const body = {
        'username': newUser.name,
        'password': newUser.password,
        'links': [newUser.links],
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
          this.getAdminData()
        })
        .catch(response => {
          this.error = true
          setTimeout(() => {
            this.error = false
            this.message = 'Verifique su usuario y contraseña'
          }, 6000)
        })
    },

    async deletingUser (userDeleted) {

      await axios({
        method: 'delete',
        url: urlShow + '/' + userDeleted.id,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'x-token': this.token,
          'admin': this.adminUser
        }
      })
        .then(response => {
          this.adminData = response.data.data
          this.getAdminData()
        })
        .catch(response => {
          if (response.data.status === 400) {
            this.error = true
            this.message = 'Tenemos problemas con el servidor por el momento. Intente nuevamente más tarde.'
            setTimeout(() => {
              this.error = false
              this.message = 'Verifique su usuario y contraseña'
            }, 6000)
          }
          this.error = true
          setTimeout(() => {
            this.error = false
          }, 6000)
        })
    }
  }
}

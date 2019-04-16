import axios from 'axios'
import { setTimeout } from 'timers'

const url = 'https://ingeniaria-mep.herokuapp.com/user/login'
const urlShow = 'https://ingeniaria-mep.herokuapp.com/user'

export default {
  name: 'Login',
  data () {
    return {
      success: false,
      badInput: false,
      user: '',
      password: '',
      userData: {},
      adminUser: null,
      adminData: {},
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
  
        })
    }
  }
}

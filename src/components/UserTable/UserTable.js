export default {
  name: 'UserTable',
  props: [
    'userData',
    'error'
  ],
  data () {
    return {
      headers: [
        { text: 'Usuario',
          align: 'left',
          value: 'userName'
        }, {
          text: 'Repositorio(s)',
          value: 'links'
        }, {
          text: 'Borrar',
          value: 'id'
        }
      ],
      dialog: false
    }
  },
  watch: {
    dialog (val) {
      val || this.close()
    }
  },
  computed: {
    usersData () {
      if (this.userData) {
        let informacion = this.userData.map(element => {
          return {
            userName: element.username,
            links: element.links[0],
            id: element._id
          }
        })
        informacion = informacion.filter(element => {
          return element.userName !== 'usuarioAdmin'
        })
        return informacion
      }
      return []
    }
  },
  methods: {
    deleteUser (userDeleted) {
      const opcion = confirm('¿Quiere borrar este usuario?')
      if (opcion) {
        this.$emit('deleteUser', userDeleted)
      }
    }
  }
}

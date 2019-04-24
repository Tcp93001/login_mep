export default {
  name: 'CreateUser',
  data: () => ({
    valid: true,
    newUser: {
      name: '',
      password: '',
      links: ''
    },
    nameRules: [
      v => !!v || 'Se requiere este campo',
      v => (v && v.length <= 10) || 'El nombre debe ser de menos de 10 caracteres'
    ],
    passwordRules: [
      v => !!v || 'Se requiere contraseña'
    ],
    linkRules: [
      v => !!v || 'Se requiere este campo',
      v => (v && v.length >= 5) || 'Debe contener al menos 5 caracteres',
      v => /.+:\/\/.+/.test(v) || 'Debe ser una dirección válida'
    ],
    checkbox: false
  }),

  methods: {
    setNewUser () {
      this.$emit('setNewUser', this.newUser )
      this.reset()
    },
    reset () {
      this.$refs.form.reset()
    }
  }
}

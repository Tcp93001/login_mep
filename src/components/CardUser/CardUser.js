export default {
  name: 'CardUser',
  props: [
    'userData'
  ],
  data () {
    return {
      card_text: 'Hemos preparado este proyecto contemplando las mejores prácticas de la industria aplicables. Estaremos gustosos de aclarar cualquier duda o comentario al respecto.'
    }
  },
  computed: {
    userContainer () {
      if (this.userData) {
        let informacion = this.userData.map(element => {
          return {
            userName: element.username,
            links: element.links[0],
            id: element._id
          }
        })
        return informacion
      }
      return []
    }
  },
  methods: {
    goToInfo () {
      window.open(this.userData.user.links[0], '_self')
    }
  }
}

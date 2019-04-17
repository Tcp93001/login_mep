<template>
  <v-container>
    <div>
      <v-alert
        :value="badInput"
        dismissible
        type="warning"
        transition="scale-transition"
      >
        Tenemos problemas con el servidor. Intente de nuevo más tarde.
      </v-alert>

      <v-container>
        <p class="headline">
          Datos de los usuarios
        </p>
        {{ users }}
        <v-flex lg8 offset-lg2>
          <v-data-table
            dark
            :headers="headers"
            :items="usersData"
            class="elevation-1"
          >
            <template v-slot:items="props">
              <td>{{ props.item.userName }}</td>
              <td><a :href="props.item.links">{{ props.item.links }}</a></td>
              <td><v-icon>delete</v-icon></td>
            </template>
          </v-data-table>
        </v-flex>
      </v-container>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'UserTable',
  props: [
    'userData'
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
      ]
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
        console.log(informacion)
        informacion = informacion.filter(element => {
          return element.userName !== 'usuarioAdmin'
        })
        return informacion
      }
      return []
    }
  }
}
</script>

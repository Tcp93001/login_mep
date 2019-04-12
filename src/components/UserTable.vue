<template>
    <v-container>
      <v-flex lg8 offset-lg2>
        <v-data-table
          dark
          :headers="headers"
          :items="users"
          class="elevation-1"
        >
          <template v-slot:items="props">
            <td>{{ props.item.userName }}</td>
            <td class="text-xs-right">{{ props.item.password }}</td>
            <td>{{ props.item.links }}</td>
            <td><v-icon>delete</v-icon></td>
          </template>
        </v-data-table>
      </v-flex>
    </v-container>
</template>

<script>
export default {
  name: 'UserTable',
  data () {
    return {
      headers: [
        { text: 'Usuario',
          align: 'left',
          value: 'userName'
        }, {
          text: 'Contraseña',
          sortable: false,
          value: 'password'
        }, {
          text: 'Repositorio(s)',
          value: 'links'
        }, {
          text: 'Borrar'
        }
      ],
      users: [{
          userName: 'Prueba',
          password: 'ererere',
          links: 'https://vuetifyjs.com/en/components/data-tables'
        }, {
        userName: 'Prueba2',
        password: 'ersdfdfssf',
        links: 'https://vuetifyjs.com/en/components/data-tables'
      }

      ]
    }
  }
}
</script>

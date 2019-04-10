<template>
    <v-container>
      <v-data-table
        :headers="headers"
        :items="users"
        class="elevation-1"
      >
        <template v-slot:items="props">
          <td>{{ props.item.name }}</td>
          <td class="text-xs-right">{{ props.item.calories }}</td>
          <td class="text-xs-right">{{ props.item.fat }}</td>
          <td class="text-xs-right">{{ props.item.carbs }}</td>
          <td class="text-xs-right">{{ props.item.protein }}</td>
          <td class="text-xs-right">{{ props.item.iron }}</td>
        </template>
      </v-data-table>
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
        },
        { text: 'Contraseña',
          sortable: false,
          value: 'password'
        },
        { text: 'Repositorio(s)',
          value: 'links'
        }
      ],
      users: []
    }
  }
}
</script>

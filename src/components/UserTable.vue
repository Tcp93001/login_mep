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

    <v-form>
      <v-container>
        <p class="headline">
          Agregar nuevos usuarios
        </p>
        <v-layout class="blue-grey darken-3">
          <v-flex
            xs12
            md4
            offset-md1
          >
            <v-text-field
              v-model="user"
              label="Usuario"
              required
            ></v-text-field>
          </v-flex>

          <v-flex
            xs12
            md4
          >
            <v-text-field
              v-model="password"
              label="Password"
              required
            ></v-text-field>
          </v-flex>

          <v-flex
            xs12
            md4
          >
            <v-text-field
              v-model="password"
              label="Link a"
              required
            ></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>

    <div class="text-xs-center">
      <v-btn
        :loading="loading"
        :disabled="loading"
        color="secondary"
        @click="handleSubmit"
      >
        Entrar
      </v-btn>
    </div>
  </div>

    <v-flex lg8 offset-lg2>
      <v-data-table
        dark
        :headers="headers"
        :items="users"
        class="elevation-1"
      >
        <template v-slot:items="props">
          <td>{{ props.item.userName }}</td>
          <td>{{ props.item.password }}</td>
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
  props: [
    'adminData'
  ],
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
          text: 'Borrar',
          value: 'id'
        }
      ],
      users: this.adminData
    }
  }
}
</script>

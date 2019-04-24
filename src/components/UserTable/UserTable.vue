<template>
  <v-container>
    <div>
      <v-alert
        :value="error"
        dismissible
        type="warning"
        transition="scale-transition"
      >
        Tenemos problemas con el servidor. Intente de nuevo más tarde.
      </v-alert>

      <v-container>
        <v-flex lg8 offset-lg2>
          <p class="headline text-xs-center" >
            Datos de los usuarios
          </p>
          <v-data-table
            dark
            :headers="headers"
            :items="usersData"
            class="elevation-1"
          >
            <template v-slot:items="props">
              <td>{{ props.item.userName }}</td>
              <td><a :href="props.item.links">{{ props.item.links }}</a></td>
              <td><v-icon @click.native="deleteUser(props.item)">delete</v-icon></td>
            </template>
          </v-data-table>
        </v-flex>
      </v-container>
    </div>
  </v-container>
</template>

<script src="./UserTable.js" />

<template>
  <v-container>
    <v-layout align-center justify-center column>
      <p class="headline">
        Alta de nuevo usuario
      </p>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model="newUser.name"
          :counter="10"
          :rules="nameRules"
          label="Usuario"
          required
        ></v-text-field>

        <v-text-field
          v-model="newUser.password"
          :rules="passwordRules"
          label="Password"
          required
        ></v-text-field>

        <v-text-field
          v-model="newUser.links"
          :rules="linkRules"
          label="Links"
          required
        ></v-text-field>

        <v-btn
          :disabled="!valid"
          color="success"
          @click.native="setNewUser"
        >
          Dar de alta
        </v-btn>

        <v-btn
          color="error"
          @click="reset"
        >
          Limpiar formulario
        </v-btn>

      </v-form>
    </v-layout>
  </v-container>

</template>

<script src="./CreateUser.js" />


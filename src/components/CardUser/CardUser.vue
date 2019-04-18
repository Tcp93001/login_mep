<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card ripple="true">
        <v-img
          src="https://res.cloudinary.com/tcp93001/image/upload/v1555551086/ingenieriamep34.jpg"
          height="200"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Documentación del Proyecto</h3>
            <div> {{ card_text }} </div>
          </div>
        </v-card-title>
          <v-layout
            fill-height
            align-center
            justify-center
          >
            <v-img
              src="https://res.cloudinary.com/tcp93001/image/upload/c_scale,h_107,w_107/v1555551443/logoMEP_sinfondo2.png"
              contain
              height="90"
            ></v-img>
          </v-layout>

        <v-card-actions>
          <v-btn flat color="orange">Ir a la documentación</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script src="./CardUser.js" />

<style src="./CardUser.css" scoped />
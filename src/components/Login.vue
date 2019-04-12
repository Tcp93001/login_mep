<template>
  <div>
    <v-form v-model="valid">
      <v-container>
        <v-layout>
          <v-flex
            xs12
            md3
            offset-md3
          >
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              label="Usuario"
              required
            ></v-text-field>
          </v-flex>

          <v-flex
            xs12
            md3
          >
            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              :counter="10"
              label="Password"
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
        @click="loader = 'loading'"
      >
        Entrar
      </v-btn>
    </div>
  </div>
</template>



<script>
export default {
  name: 'Login',
  data () {
    return {
      loader: null,
      loading: false,
      loading2: false,
      loading3: false,
      loading4: false
    }
  },
  watch: {
    loader () {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 3000)

      this.loader = null
    }
  }
}
</script>

<style>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>

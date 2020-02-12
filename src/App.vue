<template>
  <v-app dark>
    <v-container
      align-content-center class="background"
    >
      <v-toolbar fixed clipped-left class="red darken-4" app>
        <v-toolbar-title class="headline">
          <span>Ingeniería MEP</span>
          <span class="pl-5 ml-5 display-2">Proyectos</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn
            flat
            href="https://www.ingenieriamep.mx/"
            target="_self"
          >
            <span v-ripple class="mr-2">Logout</span>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-content>
        <div v-if="!success" class="centered-align">
          <div>
            <v-container>
              <v-alert
                :value="badInput"
                dismissible
                type="warning"
                transition="scale-transition"
              >
                {{ message }}
              </v-alert>
              <v-form v-if="!success">
                <v-container>
                  <v-layout>
                    <v-flex
                      xs12
                      md3
                      offset-md3
                    >
                      <v-text-field
                        v-model="user"
                        label="Usuario"
                        required
                      ></v-text-field>
                    </v-flex>

                    <v-flex
                      xs12
                      md3
                    >
                      <v-text-field
                        v-model="password"
                        label="Password"
                        required
                        type="password"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-form>

              <div class="text-xs-center">
                <v-btn
                  type="submit"
                  :loading="loading"
                  :disabled="loading"
                  color="secondary"
                  @click="handleSubmit"
                >
                  Entrar
                </v-btn>
              </div>
            </v-container>
          </div>
        </div>
        <div class="centered-align" v-if="adminUser">
          <CreateUser
            @setNewUser="createUser"
          />
          <UserTable
            :error="error"
            :userData="adminData"
            @deleteUser="deletingUser"
          />
        </div>
        <div class="centered-align" v-if="!adminUser && success">
          <CardUser
            :userData="userData"
          />
        </div>
      </v-content>
    </v-container>
  </v-app>
</template>

<script src="./App.js" />

<style>
  .centered-align {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 400px;
  }

  .background {
    min-height: 700px;
    background-image: linear-gradient(rgba(0,0,0, 0.80)), url("../src/assets/seccion_users.png");
    background-size: cover;
  }

  .new_color {
    background-color: #059193;
    height: 70px;
  }
</style>


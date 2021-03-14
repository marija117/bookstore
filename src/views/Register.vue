<template>
        <v-app >
            <v-main>
            <v-container class="fill-height">
                <v-layout class="align-center justify-center">
                <v-flex class="login-form text-xs-center"> 
                    
                    <v-card light>
                    <v-card-text>
                        <div class="subheading">
                        <template v-if="options.isLoggingIn">Log in</template>
                        <template v-else>Crate a new account</template>
                        </div>
                        <v-form>
                        <v-text-field v-model="form.email" light prepend-icon="mdi-email" label="Email" type="email"></v-text-field>
                        <v-text-field v-model="form.password" light prepend-icon="mdi-lock" label="Password" type="password"></v-text-field>
                        <v-btn block="block" color="orange" type="submit" style="color:white;" @click.prevent="options.isLoggingIn = true">Sign up</v-btn>
                        </v-form>
                    </v-card-text>
                    </v-card>
                    <div class="d-flex mt-5 justify-center" v-if="options.isLoggingIn">
                        Don't have an account?
                    </div>
                    <div class="d-flex mt-3 justify-center" v-if="options.isLoggingIn">
                        <v-btn color="orange" text @click="options.isLoggingIn = false">Sign up</v-btn>
                    </div>
                </v-flex>
                </v-layout>
            </v-container>
            </v-main>
        </v-app>
</template>
<script>
import { mapActions } from 'vuex'
import Form from '../services/Form'

export default {
   data: () => ({
       form: new Form({
        email: '',
        password: '',
        stay_signed_in: false
      }),
        options: {
            isLoggingIn: true,
            shouldStayLoggedIn: true
        } 
    }),
    methods: {
    ...mapActions('auth', ['loginAction']),
    formSubmit() {
      this.loginAction(this.form)
        .then(() => {
          this.$router.push('/')
        })
        .catch(error => {
          this.form.errors.record(error.response.data.error)
        })
    }
  },
}
</script>
<style>
.login-form
  {
    max-width: 500px
  }

</style>
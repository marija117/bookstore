<template>
        <v-app >
            <v-main>
            <v-container class="fill-height">
                <v-layout class="align-center justify-center">
                <v-flex class="login-form text-xs-center">  
                    <v-card light>
                    <v-card-text>
                        <div class="subheading">
                        <template>Crate a new account</template>
                        </div>
                        <v-form>
                        <v-text-field v-model="form.email" light prepend-icon="mdi-email" label="Email" type="email"></v-text-field>
                        <v-text-field v-model="form.password" light prepend-icon="mdi-lock" label="Password" type="password"></v-text-field>
                        <v-text-field v-model="form.password_confirmation" light prepend-icon="mdi-lock" label="Password confirmation" type="password"></v-text-field>
                        <v-btn block="block" color="orange" type="submit" style="color:white;" @click.prevent="formSubmit">Sign up</v-btn>
                        </v-form>
                    </v-card-text>
                    </v-card>
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
        password_confirmation: ''
      })
    }),
    methods: {
    ...mapActions('auth', ['registerAction']),
    formSubmit () {
      this.registerAction(this.form)
        .then(() => {
          this.$router.push('/login')
        })
        .catch(error => {
          this.form.errors.record(error.response.data.errors)
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
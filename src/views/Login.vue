<template>
        <v-app >
            <v-content>
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
                        <v-text-field v-if="!options.isLoggingIn" v-model="user.name" light prepend-icon="mdi-account" label="Name"></v-text-field>
                        <v-text-field v-model="user.email" light prepend-icon="mdi-email" label="Email" type="email"></v-text-field>
                        <v-text-field v-model="user.password" light prepend-icon="mdi-lock" label="Password" type="password"></v-text-field>
                        <v-checkbox v-if="options.isLoggingIn" v-model="options.shouldStayLoggedIn" light label="Stay logged in?" hide-details color="orange" class="mt-0 mb-4"></v-checkbox>
                        <v-btn v-if="options.isLoggingIn" @click.prevent="" block="block" color="orange" type="submit" style="color:white;">Sign in</v-btn>
                        <v-btn v-else block="block" color="orange" type="submit" style="color:white;" @click.prevent="options.isLoggingIn = true">Sign up</v-btn>
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
            </v-content>
        </v-app>
</template>
<script>
export default {
   data: () => ({
        options: {
      isLoggingIn: true,
      shouldStayLoggedIn: true
        },
        user: {
            email:'',
            password: ''
        } 
    })
}
</script>
<style>
.login-form
  {
    max-width: 500px
  }

</style>
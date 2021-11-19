<template>
  <div>
    <template v-if="tab === 'register'">
      <div class="text-center q-mb-lg">Sign up with</div>
    </template>
    <template v-else>
      <div class="text-center q-mb-lg">Sign in with</div>
    </template>
    <div class="flex flex-center">
      <q-btn class="flex flex-center q-px-lg q-py-sm q-mb-md" color="primary" size="md"  label="Google" 
        @click="google" 
      />
    </div>
    <template v-if="tab === 'register'">
      <p class="text-center">Sign up with credentials</p>
    </template>
    <template v-else>
      <p class="text-center">Sign in with credentials</p>
    </template>

    <q-form @submit="submitForm">
      <q-input outlined class="q-mb-md" type="email" label="Email" v-model="formData.email" />
      <q-input outlined class="q-mb-md" type="password" label="Password" v-model="formData.password" />
      <div class="row">
        <q-space />
        <q-btn type="submit" color="primary" :label="tab" />
      </div>
    </q-form>
    <div class="text-center q-my-md">
      <q-btn flat label="Forgot Password?" class="text-capitalize rounded-borders"
        v-if="tab !== 'register'" @click="forgotPassword" />
    </div>
    <q-dialog v-model="resetPwdDialog">
      <ForgotPassword />
    </q-dialog>
  </div>
</template>

<script>
import ForgotPassword from "./ForgotPassword.vue";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, 
        signInWithEmailAndPassword, sendPasswordResetEmail, fetchSignInMethodsForEmail } from 'firebase/auth'

export default {
  name: "AuthComponent",
  props: ['tab'],
  components: { ForgotPassword },
  data (){
    return {
      formData: {
        email: '',
        password: ''
      },
      resetPwdDialog: false
    }
  },
  methods: {
    submitForm () {
      if (this.tab === 'login') {
         this.signInExistingUser(this.formData.email, this.formData.password)
      } else {
        this.createUser(this.formData.email, this.formData.password)
      }
    },
    google () {
      console.log('google login & signup')
      const auth = getAuth()
      const provider = new GoogleAuthProvider()
      signInWithPopup(auth, provider).then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        const user = result.user
        this.$q.notify({message: 'Sign In Success.'})
        this.$router.push('/')
      }).catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        const email = error.email
        const credential = GoogleAuthProvider.credentialFromError(error)
        console.log(errorCode, errorMessage, email, credential)
      })
    },
     signInExistingUser (email, password) {
      const auth = getAuth()
      signInWithEmailAndPassword(auth, email, password).then(() => {
        this.$q.notify({message: 'Sign In Success.'})
        this.$router.push('/')
      }).catch(error => {
            console.log('error', error)
      })
    },
    createUser(email, password) {
      const auth = getAuth()
      createUserWithEmailAndPassword(auth, email, password).then(() => {
        this.$q.notify({message: 'Sign In Success.'})
        this.$router.push('/')
      }).catch(error => {
        fetchSignInMethodsForEmail(auth, email).then((signInMehotds) => {
          if(signInMehotds.length) {
            this.$q.notify({message: 'Email Already In Use!'})
          } else {console.log('error',error)}
        })
      })
    },
    forgotPassword () {
      this.resetPwdDialog = true
      const auth = getAuth()
      sendPasswordResetEmail(auth, this.formData.email).then(() => {
        this.form = {}
        this.$q.notify({message: 'Check you email and reset your password.'})
      }).catch(error => console.log(error))
    }
  }
}
</script>
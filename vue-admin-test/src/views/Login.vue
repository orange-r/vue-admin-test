<template>
  <div class="container">
    <div>
      <h2>ログイン画面</h2>
      <div>
        <input v-model="email" type="email" placeholder="メールアドレス" />
      </div>
      <div>
        <input v-model="password" type="password" placeholder="パスワード" />
      </div>
      <div>
        <button @click="googleLogin">Google ログイン</button>
      </div>
      <div v-if="showError" class="alert-danger">{{ errorMessage }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import firebase from 'firebase/app'
import router from '@/router'

@Component({
})
export default class Login extends Vue {
  // data
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  showError: boolean = false;

  // methods
  googleLogin(): void{
    const provider = new firebase.auth.GoogleAuthProvider()

    firebase.auth().signInWithPopup(provider).then(result => {
      console.log(result.user)
      console.log(result.user.uid)
      router.push('/')
    }).catch(error => {
      console.log(error)
      this.errorMessage = error.message
      this.showError = true
    })
  }
}
</script>

<style lang="scss">
</style>

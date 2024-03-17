<template>
  <div class="auth-wrapper">
    <div class="g-container">
      <div class="auth-content">
        <div class="auth-logo">
          <logo></logo>
        </div>
        <div class="auth-text">
          <p>More than just one repository. This is our digital world.</p>
        </div>
        <div class="auth-button">
          <mainButton @click="getToken">Authorize with github <icon class="auth-button-icon" name="octocat"></icon></mainButton>
        </div>
        <div class="auth-img">
          <!-- <img class="auth-img-link" src="../../../dist/assets/macbook.png" alt="macbook"> -->
        </div>
      </div>
    </div>
    <div class="auth-footer">
      <authFooter>
        <template #headline>
          <div class="auth-footer-text">
            <p>© Gitogram from Loftschool</p>
          </div>
        </template>
      </authFooter>
    </div>
  </div>
</template>

<script>
import { logo } from '@/components/logo'
import { mainButton } from '@/components/mainButton'
import { authFooter } from '@/components/footer'
import { icon } from '@/icons'

const clientID = '286f7a47e463a95bc261'
const clientSecret = '58f55dcb1e5469e921e1222272356487b5b5e5dd'

export default {
  name: 'auth',
  components: {
    logo,
    mainButton,
    authFooter,
    icon
  },
  methods: {
    getToken () {
      const apiURL = 'https://github.com/login/oauth/authorize'
      const params = new URLSearchParams()

      params.append('client_id', clientID)
      params.append('scope', 'repo:status read:user')

      window.location.href = `${apiURL}?${params}`
    }
  },
  async created () {
    const code = new URLSearchParams(window.location.search).get('code')

    if (code) {
      try {
        const response = await fetch('https://webdev-api.loftschool.com/github', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({ clientID, clientSecret, code })
        })

        const { token } = await response.json()
        localStorage.setItem('token', token)

        this.$router.replace({ name: 'feeds' })
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="scss" src="./auth.scss" scoped></style>

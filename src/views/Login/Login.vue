<template>
  <body class="bg-white">
    <div class="grid grid-cols-12">
      <div class="col-span-6 bg-login-banner bg-cover bg-center h-screen"></div>
      <div class="col-span-4 col-start-8 col-end-12 my-auto px-5">
        <div class="flex justify-center flex-col">
          <h1 class="text-xl font-heavy text-grey-20 mb-8">Faça seu login</h1>
          <form @submit.prevent="handleLogin">
            <Input
              id="cpf"
              v-model="formDataLogin.cpf"
              type="text"
              placeholder="CPF"
              icon="user"
              maska="###.###.###-##"
            />
            <Input
              id="password"
              v-model="formDataLogin.password"
              type="password"
              placeholder="Senha"
              icon="locker"
            />
            <RouterLink to="#" class="block text-xxs text-right text-primary hover:text-primary-light">
              Esqueci minha senha
            </RouterLink>
            <Button
              id="entrar"
              type="submit"
              size="large"
              class="my-8"
              label="Entrar"
              :disabled="disabledButton"
            />
          </form>
          <div class="text-center relative mb-6">
            <span class="text-xxs font-normal text-grey-30 relative z-10 bg-white px-2">
              Ou acesse com
            </span>
            <span
              class="absolute top-1/2 left-0 w-full h-0.5 bg-grey-90 transform -translate-y-1/2"
            />
          </div>
          <Socials :icons="iconsSocials" size="large" class="justify-center" />
          <p class="text-center mt-8 text-md text-grey-20">
            Ainda não tem uma conta?
            <RouterLink to="#" class="text-primary hover:text-primary-light">Cadastre aqui</RouterLink>
          </p>
        </div>
      </div>
    </div>
  </body>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Button from '@/components/Button.vue'
import Input from '@/components/Input.vue'
import Socials from '@/components/Socials.vue'
import router from '@/router'
import { useAuth } from '@/stores/auth'

const auth = useAuth()

const formDataLogin = ref({
  cpf: '',
  password: ''
})

const disabledButton = computed(() => {
  return formDataLogin.value.cpf === '' || formDataLogin.value.password === '';
})

const handleLogin = () => {
  auth.authorizeUser()
  router.push('/onboarding')
}

const iconsSocials = ['google', 'facebook', 'apple']
</script>

<style></style>

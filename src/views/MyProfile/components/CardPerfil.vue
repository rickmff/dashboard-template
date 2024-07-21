<template>
  <div>
    <div class="bg-gradient-to-r from-primary to-primary-light">
      <div class="relative h-36 bg-mask-meu-perfil-card bg-no-repeat bg-contain bg-bottom">
        <div
          class="absolute flex justify-center items-center -bottom-5 left-2/4 -translate-x-2/4 rounded-full h-24 w-24 bg-gradient-to-r from-primary to-primary-light border-4 border-blue-opacity"
        >
          <span class="text-xxl text-white font-middle">{{ cardPerfilinfo.nameAbreviation }}</span>
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-center text-center card rounded-t-none">
      <h2 class="medium text-color-2">{{ cardPerfilinfo.name }}</h2>
      <p class="md regular text-color-2">{{ cardPerfilinfo.position }}</p>
      <p class="md medium text-color-1 my-4">
        <img src="@/assets/icons/location.svg" alt="icon location" class="inline pb-1" />
        {{ cardPerfilinfo.location }}
      </p>
      <RouterLink :to="{ name: 'Dados Pessoais'}">
        <Button
          id="editar-perfil"
          label="Editar Perfil"
          color="primaryOpacity"
          icon="edit"
          size="small"
        ></Button>
      </RouterLink>
      <div class="flex text-left justify-center my-4">
        <img src="@/assets/icons/chart-green.svg" alt="Gráfico verde" />
        <div class="ml-2">
          <p class="sm bold text-success">{{ cardPerfilinfo.viewedCompanies }}</p>
          <p class="sm medium text-color-1">viram seu perfil na última semana</p>
        </div>
      </div>
      <div class="flex flex-col">
        <span class="w-full h-px bg-grey-90" />
        <p class="sm bold text-color-2 text-left my-4">Redes Sociais</p>
        <Socials :icons="iconsSocials" size="small" />
      </div>
    </div>
  </div>
  <RouterLink :to="{ name: 'Dados Pessoais'}" class="flex justify-between card my-6 hover:bg-primary-opacity duration-300">
    <div>
      <h2 class="bold text-color-2">{{ cardPerfilinfo.vacancy }}</h2>
      <p class="sm regular text-color-1">compatíveis com seu perfil</p>
    </div>
    <div class="flex">
      <img src="@/assets/icons/arrow_right.svg" alt="arrow right" />
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import Button from '@/components/Button.vue'
import Socials from '@/components/Socials.vue'

const cardPerfilinfo = {
  nameAbreviation: 'LM',
  name: 'Lorenzo Manoel Pereira',
  position: 'Estudante de contabilidade',
  location: 'Campinas, São Paulo',
  viewedCompanies: '+15 empresas',
  vacancy: '14 vagas'
}

const iconsSocials = ['facebook', 'facebook', 'facebook', 'facebook']
</script>

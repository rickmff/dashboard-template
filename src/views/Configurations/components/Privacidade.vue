<template>
  <div class="p-8">
    <div>
      <h1>Configurar privacidade</h1>
      <h5>Ative ou desative o que você deseja compartilhar com as empresas.</h5>
    </div>

    <hr class="my-8" />

    <div class="flex space-between gap-24">
      <div class="w-80">
        <h2>Dados do perfil</h2>
        <p>
          Defina suas preferências sobre o que as empresas podem visualizar em seu perfil e o que
          podem fazer com esses dados.
        </p>
      </div>

      <div>
        <div class="flex items-center mb-1">
          <Switch v-model:checked="isShowContact" class="mr-3" />
          <p class="md bold text-grey-20 text-sm">Exibir dados de contato</p>
        </div>
        <p class="mb-4">Dados de contato como email e telefone.</p>

        <div class="flex items-center mb-1">
          <Switch v-model:checked="isDownloadResume" class="mr-3" />
          <p class="md bold text-grey-20 text-sm">Download do currículo</p>
        </div>
        <p>Permitir que empresas e a instituição de ensino baixem seu currículo.</p>
      </div>
    </div>

    <hr class="my-8" />

    <div class="flex items-center justify-end gap-x-4">
      <Button
          id="voltar-inicio"
          label="Voltar para o início"
          color="transparent"
          size="small"
          class="!w-52 !h-12 !text-xs"
      ></Button>
      <Button
          id="salvar"
          label="Salvar"
          size="small"
          class="!w-52 !h-12 !text-xs"
      ></Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Switch from '@/components/Switch.vue'
import { ref } from 'vue'
import Button from "@/components/Button.vue";

const isShowContact = ref<boolean>(false)
const isDownloadResume = ref<boolean>(false)
</script>

<style scoped></style>

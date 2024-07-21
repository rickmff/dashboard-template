<template>
  <div class="p-8">
    <div>
      <h1>Configurar notificações</h1>
      <h5>Ative ou desative notificações conforme sua preferencia.</h5>
    </div>

    <hr class="my-8" />

    <div class="flex space-between gap-24">
      <div class="w-80">
        <h2>Notificações por email</h2>
        <p>
          Receba e-mails para descobrir o que está acontecendo quando você não está online. Você
          pode desligar isso.
        </p>
      </div>

      <div>
        <div class="flex items-center mb-1">
          <Switch v-model:checked="isSystemUpdate" class="mr-3" />
          <p class="md bold text-grey-20 text-sm">Atualizações do sistema</p>
        </div>
        <p class="mb-4">Novas funcionalidades ou atualizações da aplicação.</p>

        <div class="flex items-center mb-1">
          <Switch v-model:checked="isInstitutionalUpdate" class="mr-3" />
          <p class="md bold text-grey-20 text-sm">Conteúdo institucional</p>
        </div>
        <p class="mb-4">Comunicados e anúncios da instituição de ensino.</p>

        <div class="flex items-center mb-1">
          <Switch v-model:checked="isAds" class="mr-3" />
          <p class="md bold text-grey-20 text-sm">Publicidade e marketing</p>
        </div>
        <p class="mb-4">Anúncios de campanhas, vagas patrocinadas e outros serviços.</p>

        <div class="flex items-center mb-1">
          <Switch v-model:checked="isComments" class="mr-3" />
          <p class="md bold text-grey-20 text-sm">Comentários</p>
        </div>
        <p class="mb-4">Comentários da instituição de ensino e empresas em seu perfil.</p>

        <div class="flex items-center mb-1">
          <Switch v-model:checked="isNewJobs" class="mr-3" />
          <p class="md bold text-grey-20 text-sm">Novas vagas</p>
        </div>
        <p class="mb-4">Novas vagas publicadas compatíveis com o seu perfil.</p>

        <div class="flex items-center mb-1">
          <Switch v-model:checked="isInvites" class="mr-3" />
          <p class="md bold text-grey-20 text-sm">Convite de participação</p>
        </div>
        <p class="mb-4">Convites de empresas para participar do processo seletivo.</p>

        <div class="flex items-center mb-1">
          <Switch v-model:checked="isSelectionStages" class="mr-3" />
          <p class="md bold text-grey-20 text-sm">Etapas do processo seletivo</p>
        </div>
        <p class="mb-4">Comunicados sobre a evolução, resultados, aprovação ou reprova.</p>
      </div>

      <hr class="my-8" />
    </div>

    <hr class="my-8" />

    <div class="flex space-between gap-24">
      <div class="w-80">
        <h2>Notificações por SMS</h2>
        <p>
          Receba em seu celular notificações para descobrir o que está acontecendo em tempo real. Você pode desligar iss quando quiser.
        </p>
      </div>

      <div>
        <div class="flex items-center mb-1">
          <Switch v-model:checked="isNewJobsSms" class="mr-3" />
          <p class="md bold text-grey-20 text-sm">Novas vagas</p>
        </div>
        <p class="mb-4">Novas vagas publicadas compatíveis com o seu perfil.</p>

        <div class="flex items-center mb-1">
          <Switch v-model:checked="isInvitesSms" class="mr-3" />
          <p class="md bold text-grey-20 text-sm">Convite de participação</p>
        </div>
        <p class="mb-4">Convites de empresas para participar do processo seletivo.</p>

        <div class="flex items-center mb-1">
          <Switch v-model:checked="isSelectionStagesSms" class="mr-3" />
          <p class="md bold text-grey-20 text-sm">Etapas do processo seletivo</p>
        </div>
        <p class="mb-4">Comunicados sobre a evolução, resultados, aprovação ou reprova.</p>

      </div>

      <hr class="my-8" />
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
      <Button id="salvar" label="Salvar" size="small" class="!w-52 !h-12 !text-xs"></Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/Button.vue'
import Switch from '@/components/Switch.vue'
import { ref } from 'vue'

const isSystemUpdate = ref<boolean>(false)
const isInstitutionalUpdate = ref<boolean>(false)
const isAds = ref<boolean>(false)
const isComments = ref<boolean>(false)
const isNewJobs = ref<boolean>(false)
const isInvites = ref<boolean>(false)
const isSelectionStages = ref<boolean>(false)
const isNewJobsSms = ref<boolean>(false)
const isInvitesSms = ref<boolean>(false)
const isSelectionStagesSms = ref<boolean>(false)
</script>

<style scoped></style>

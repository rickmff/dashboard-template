<template>
  <div>
    <div class="px-10 py-4 bg-primary-opacity grid grid-cols-5 justify-between items-center">
      <p class="xl bold text-primary">{{ title }}</p>
      <div class="col-span-3"></div>
      <Button
        id="addFormacao"
        label="Adicionar formação"
        color="transparent"
        icon=""
        class="!justify-end"
      />
    </div>
    <div
      class="bg-bgColor grid grid-cols-4 items-center h-24 mx-8 my-4 rounded-xl px-8 py-6"
      v-for="formacao in formacaoAcademica"
      :key="formacao.id"
    >
      <div>
        <p class="lg medium text-grey-20">{{ formacao.curso }}</p>
        <p class="md regular text-grey-30">{{ formacao.instituicao }}</p>
      </div>
      <div>
        <p class="md regular text-grey-30">
          Início {{ formacao.inicio }} - Término {{ formacao.fim }}
        </p>
      </div>
      <div class="flex space-x-3">
        <p class="md bold text-grey-10">{{ formacao.status }}</p>
        <p v-if="formacao.periodo !== ''">{{ formacao.periodo }}</p>
      </div>
      <div class="flex justify-end">
        <Button
          id="Excluir"
          label="Excluir"
          color="transparent"
          icon=""
          class="!w-20 !text-danger"
          size="small"
        />
        <Button id="Editar" label="Editar" color="transparent" icon="" class="!w-20" size="small" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from '@/components/Button.vue'

defineProps({
  title: String
})

const formacaoAcademica = ref([
  {
    id: 1,
    curso: 'Ciência da Computação',
    instituicao: 'Universidade Federal de Pernambuco',
    inicio: '01/06/2016',
    fim: '01/06/2021',
    status: 'Cursando',
    periodo: '3º Período'
  },
  {
    id: 2,
    instituicao: 'Universidade Federal de Pernambuco',
    curso: 'Ciência da Computação',
    inicio: '01/06/2016',
    fim: '01/06/2021',
    status: 'Finalizado',
    periodo: ''
  }
])
</script>

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
    <div class="flex items-center mx-8 mt-10">
      <Switch />
      <p class="md regular text-color-3 pl-2">Estou procurando meu primeiro emprego.</p>
    </div>
    <div
      class="bg-bgColor grid grid-cols-4 items-center h-24 mx-8 my-4 rounded-xl px-8 py-6"
      v-for="formacao in formacaoAcademica"
      :key="formacao.id"
    >
      <div>
        <p class="lg medium text-grey-20">{{ formacao.curso }}</p>
        <p class="md regular text-grey-30">{{ formacao.empresa }}</p>
      </div>
      <div>
        <p class="md regular text-grey-30">
          Início {{ formacao.inicio }} - Término {{ formacao.fim }}
        </p>
      </div>
      <div class="flex space-x-3">
        <p class="md bold text-color-2">{{ formacao.status }}</p>
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
import Switch from '@/components/Switch.vue'

defineProps({
  title: String
})

const formacaoAcademica = ref([
  {
    id: 1,
    curso: 'Gerente de vendas',
    empresa: 'RTL Consulting',
    inicio: '01/06/2016',
    fim: '01/06/2021',
    status: 'É meu trabalho atual'
  },
  {
    id: 2,
    curso: 'Consultor financeiro',
    empresa: 'RTL Consulting',
    inicio: '01/06/2016',
    fim: '01/06/2021',
    status: '1 ano e 6 meses'
  }
])
</script>

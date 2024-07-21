<template>
  <div>
    <div class="px-8 py-6 bg-primary-opacity flex justify-between items-center">
      <p class="xl bold text-primary">{{ title }}</p>
      <p class="sm medium text-grey-30">
        Suas informações estão seguras. Entenda nossa
        <a href="#" class="text-primary font-bold">Política de Privacidade</a>.
      </p>
    </div>
    <div class="mx-8 my-10">
      <h3 class="medium text-color-3">Idiomas</h3>
      <div
        class="grid grid-cols-2 my-6 gap-12"
        v-for="(item, index) in habilidadesCursos.idiomas"
        :key="index"
      >
        <Select id="idioma" :items="idioma" v-model="item.idioma" placeholder="Idioma" />
        <Select id="nivelIdioma" :items="nivel" v-model="item.nivel" placeholder="Nível" />
      </div>
      <Button
        id="addIdioma"
        label="Adicionar idioma"
        color="transparent"
        class="!justify-start"
        icon=""
      />
    </div>
    <hr />
    <div class="mx-8 my-10">
      <h3 class="medium text-color-3">Habilidades</h3>
      <div
        class="grid grid-cols-2 my-6 gap-12"
        v-for="(item, index) in habilidadesCursos.habilidades"
        :key="index"
      >
        <Select
          id="habilidade"
          :items="habilidade"
          v-model="item.habilidade"
          placeholder="Habilidade"
        />
        <Select id="nivelHablidade" :items="nivel" v-model="item.nivel" placeholder="Nível" />
      </div>
      <Button
        id="addHabilidade"
        label="Adicionar Habilidade"
        color="transparent"
        class="!justify-start"
        icon=""
      />
    </div>
    <hr />
    <div class="mx-8 my-10">
      <h3 class="medium text-color-3">Outros cursos</h3>
      <div
        class="bg-bgColor grid grid-cols-4 items-center h-24 my-6 rounded-xl px-8 py-6"
        v-for="(curso, index) in habilidadesCursos.cursos"
        :key="index"
      >
        <div>
          <p class="lg medium text-grey-20">{{ curso.nome }}</p>
          <p class="md regular text-grey-30">{{ curso.empresa }}</p>
        </div>
        <div>
          <p class="md regular text-grey-30">Início {{ curso.inicio }} - Término {{ curso.fim }}</p>
        </div>
        <div class="flex space-x-3">
          <Button
            id="exibirCertificado"
            label="Exibir certificado"
            color="transparent"
            size="small"
            icon=""
          />
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
          <Button
            id="Editar"
            label="Editar"
            color="transparent"
            icon=""
            class="!w-20"
            size="small"
          />
        </div>
      </div>
      <Button
        id="addCurso"
        label="Adicionar Curso"
        color="transparent"
        class="!justify-start"
        icon=""
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Select from '@/components/Select.vue'
import { ref } from 'vue'
defineProps({
  title: String
})

const habilidadesCursos = ref({
  idiomas: [
    {
      idioma: '',
      nivel: ''
    },
    {
      idioma: '',
      nivel: ''
    }
  ],
  habilidades: [
    {
      habilidade: '',
      nivel: ''
    },
    {
      habilidade: '',
      nivel: ''
    }
  ],
  cursos: [
    {
      nome: 'Excel 2018 do Básico ao Avança...',
      empresa: 'Senac Campinas',
      inicio: '01/06/2016',
      fim: '01/06/2021'
    }
  ]
})

const idioma = [
  'Português',
  'Inglês',
  'Espanhol',
  'Francês',
  'Alemão',
  'Italiano',
  'Mandarim',
  'Japonês',
  'Russo',
  'Outro'
]

const nivel = ['Básico', 'Intermediário', 'Avançado']

const habilidade = ['Photoshop', 'Illustrator', 'InDesign', 'Corel Draw', 'Outro']
</script>

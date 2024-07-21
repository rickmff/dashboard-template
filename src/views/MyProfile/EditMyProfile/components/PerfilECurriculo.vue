<template>
  <div>
    <div class="px-8 py-4 bg-primary-opacity flex justify-between items-center">
      <p class="xl bold text-primary">{{ title }}</p>
      <p class="sm medium text-grey-30">
        Suas informações estão seguras. Entenda nossa
        <a href="#" class="text-primary font-bold">Política de Privacidade</a>.
      </p>
    </div>
    <div class="mx-8 my-10">
      <h3 class="medium text-color-3">Informações do perfil</h3>
      <div class="grid sm:grid-cols-2 grid-cols-1 my-6 gap-12">
        <Input id="nome" v-model="perfilECurriculo.nome" placeholder="Nome de exibição" />
        <Input id="ocupacao" v-model="perfilECurriculo.ocupacao" placeholder="Ocupação atual" />
        <div class="flex flex-col mb-4">
          <p class="lg regular text-color-3">Imagem Perfil (200x200px)</p>
          <label
            for="imagemPerfil"
            class="my-4 cursor-pointer hover:opacity-70 py-4 w-full text-center bg-bgColor border-dashed border-[3px] border-gray-10 rounded-lg"
          >
            Clique para <span class="text-primary-light">procurar em seu computador</span>
            <input id="imagemPerfil" type="file" class="hidden" />
          </label>
        </div>
        <div class="flex flex-col mb-4">
          <p class="lg regular text-color-2">Selecione uma cor de capa.</p>
          <div class="flex space-x-1.5 my-4">
            <template v-for="(cor, index) in coresDeCapa" :key="index">
              <label
                class="cursor-pointer w-7 h-7 flex items-center justify-center rounded-full"
                :style="{ backgroundColor: cor }"
                :class="{ 'ring-1 ring-offset-2 ring-primary-light': selectedCor === cor }"
              >
                <input type="radio" class="hidden" :value="cor" v-model="selectedCor" />
              </label>
            </template>
          </div>
        </div>
      </div>
      <div class="flex">
        <p class="md medium text-color-3">Selecione um template para seu currículo</p>
        <a href="#" class="text-primary text-xxs ml-3 font-medium">Visualizar modelo</a>
      </div>
      <div class="flex my-4 space-x-6">
        <div
          v-for="(modeloCV, index) in modelosCV"
          :key="index"
          class="py-3 px-8 border border-bgColor rounded-lg flex items-center space-x-3"
        >
          <label
            class="cursor-pointer w-2 h-2 flex items-center justify-center rounded-full ring-1 ring-offset-2 ring-primary bg-white"
            :class="{
              '!ring-primary-light !bg-primary-opacity ring-4 ring-offset-0':
                selectedModeloCV === modeloCV.design
            }"
          >
            <input
              type="radio"
              class="hidden"
              :value="modeloCV.design"
              v-model="selectedModeloCV"
            />
          </label>
          <p class="md regular text-color-3">{{ modeloCV.design }}</p>
          <img :src="modeloCV.img" alt="Image modelo CV" />
        </div>
      </div>
    </div>
    <hr />
    <div class="mx-8 my-10">
      <h3>Habilidades para vida e trabalho</h3>
      <p class="lg regular text-color-2">
        Selecione até 3 comportamentos que mais representem sua personalidade.
      </p>
      <div
        v-for="(skills, index) in softSkills"
        :key="index"
        class="grid my-4 gap-6"
        :class="getGridClass(skills.length)"
      >
        <template v-for="comportamento in skills" :key="comportamento">
          <label
            class="grid-span-1 w-full rounded-xl border text-center py-3 cursor-pointer hover:opacity-70"
            :class="{
              'text-primary bg-primary-opacity hover:opacity-100':
                selectedComportamento[index] === comportamento
            }"
          >
            <input
              type="radio"
              class="hidden"
              :value="comportamento"
              v-model="selectedComportamento[index]"
            />
            <p class="lg regular">
              <img
                :src="CheckedIcon"
                class="inline mr-1"
                v-if="selectedComportamento[index] === comportamento"
              />{{ comportamento }}
            </p>
          </label>
        </template>
      </div>
    </div>
    <hr />
    <div class="mx-8 my-10">
      <h3>Objetivos profissionais</h3>
      <p class="lg regular text-color-2">
        Preencha com as informações da vaga que deseja alcançar, você pode atualizar quantas vezes
        quiser.
      </p>
      <div class="grid grid-cols-2 gap-12 my-8">
        <Select
          id="areaAtuacao"
          v-model="perfilECurriculo.areaAtuacao"
          :items="areaAtuacao"
          placeholder="Área de atuação"
        />
        <Select
          id="nivelAreaAtuacao"
          v-model="perfilECurriculo.nivelAreaAtuacao"
          :items="nivel"
          placeholder="Nível"
        />
      </div>
      <Input
        id="nome"
        v-model="perfilECurriculo.cargoInteresse"
        placeholder="Cargos de interesse"
      />
      <div class="grid grid-cols-2 gap-12 my-8">
        <RangePicker
          id="pretecaoSalarial"
          min=""
          max=""
          v-model="perfilECurriculo.pretecaoSalarial"
        />
        <div class="flex items-center">
          <Switch />
          <p class="sm regular text-color-1 ml-3">Visualizar vagas sem valor de remuneração.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Input from '@/components/Input.vue'
import { ref, watch } from 'vue'
import IconModelBasic from '@/assets/images/iconModelBasico.png'
import IconModeMinimalista from '@/assets/images/iconModelMinimalista.png'
import IconModelEstilizado from '@/assets/images/iconModelEstilizado.png'
import CheckedIcon from '@/assets/icons/checked.svg'
import Select from '@/components/Select.vue'
import Switch from '@/components/Switch.vue'

defineProps({
  title: String
})

console.log(CheckedIcon)

const perfilECurriculo = ref({
  nome: '',
  ocupacao: '',
  areaAtuacao: '',
  nivelAreaAtuacao: '',
  cargoInteresse: '',
  pretecaoSalarial: ''
})

const selectedCor = ref('')
const selectedModeloCV = ref('')

watch(selectedCor, (cor) => {
  console.log(cor)
})

const coresDeCapa = [
  '#3B82F6',
  '#0EA5E9',
  '#10B981',
  '#2DD4BF',
  '#4ADE80',
  '#84CC16',
  '#FACC15',
  '#F97316',
  '#EF4444',
  '#F43F5E',
  '#EC4899',
  '#D946EF',
  '#8B5CF6'
]

const modelosCV = [
  { design: 'Básico', img: IconModelBasic },
  { design: 'Minimalista', img: IconModeMinimalista },
  { design: 'Estilizado', img: IconModelEstilizado }
]

const softSkills = [
  ['Pontualidade', 'Atenção aos detalhes'],
  ['Oratória', 'Organização', 'Lealdade'],
  ['Ágil', 'Flexibilidade', 'Negociação'],
  ['Original', 'Persuasão', 'Resiliência']
]

const selectedComportamento = ref(Array(softSkills.length).fill(''))

const getGridClass = (length) => {
  return `grid-cols-${length}`
}

const areaAtuacao = ['Administrativo', 'Comercial', 'Financeiro', 'Marketing', 'Tecnologia']
const nivel = ['Estágio', 'Júnior', 'Pleno', 'Sênior', 'Especialista', 'Diretor', 'CEO']
</script>

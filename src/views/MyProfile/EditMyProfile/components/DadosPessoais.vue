<template>
  <div>
    <div class="px-8 py-6 bg-primary-opacity">
      <p class="xl bold text-primary">{{ title }}</p>
    </div>
    <div class="px-8">
      <div class="my-10">
        <h3 class="medium text-grey-20">Acessibilidade</h3>
        <p class="md regular text-grey-20">
          Selecione as opções de acessibilidade que você considera necessária para sua contratação.
        </p>
      </div>
      <div class="flex items-center mb-3">
        <Switch v-model:checked="isPcd" class="mr-3" />
        <p class="md regular text-grey-20">Sou PcD</p>
      </div>
      <Select
        v-if="isPcd"
        id="pcdList"
        v-model="dadosPessoais.pcd"
        :items="pcdList"
        class="w-1/3"
      />
    </div>

    <hr class="my-10" />

    <div class="px-8">
      <div class="my-10">
        <h3 class="medium text-grey-20">Dados de contato</h3>
        <p class="md regular text-grey-20">
          As empresas utilizarão esses dados para entrar em contato com você; mantenha-os
          atualizados!
        </p>
      </div>
      <div class="grid grid-cols-3 gap-4">
        <Input id="email" v-model="dadosPessoais.email" placeholder="E-mail" icon="" />
        <Input id="celular" v-model="dadosPessoais.celular" placeholder="Celular" icon="" />
        <Input id="telefone" v-model="dadosPessoais.telefone" placeholder="Telefone" icon="" />
      </div>
      <p class="md medium text-grey-30">Rede Sociais</p>

      <div class="mt-2 mb-8 grid grid-cols-3 gap-4">
        <Input id="linkedin" v-model="dadosPessoais.linkedin" placeholder="Linkedin" />
        <Input id="instagram" v-model="dadosPessoais.instagram" placeholder="Instagram" />
        <Input id="facebook" v-model="dadosPessoais.facebook" placeholder="Facebook" />
        <Button
          id="addContact"
          label="Adicionar outro contato"
          color="transparent"
          class="!justify-start"
          icon=""
        />
      </div>
    </div>

    <hr />

    <div class="px-8">
      <h3 class="medium my-10 text-grey-20">Localização</h3>
      <div class="grid grid-cols-4 gap-4">
        <Input id="cepInput" v-model="dadosPessoais.cep" placeholder="CEP" icon="" required />
        <Button
          id="cepBtn"
          label="Não sei meu CEP"
          color="transparent"
          size="medium"
          class="!justify-start font-medium"
        />
      </div>
      <div class="mt-4 grid grid-cols-2 gap-4">
        <Input id="cidade" v-model="dadosPessoais.cidade" placeholder="Cidade" required />
        <Input id="estado" v-model="dadosPessoais.estado" placeholder="Estado" required />
        <Input id="endereco" v-model="dadosPessoais.endereco" placeholder="Endereço" required />
        <Input id="bairro" v-model="dadosPessoais.bairro" placeholder="Bairro" required />
        <Input id="numero" v-model="dadosPessoais.numero" placeholder="Número" required />
        <Input
          id="complemento"
          v-model="dadosPessoais.complemento"
          placeholder="Complemento (Opcional)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/Button.vue'
import Select from '@/components/Select.vue'
import Input from '@/components/Input.vue'
import Switch from '@/components/Switch.vue'

import { ref, watch } from 'vue'

defineProps({
  title: String
})

const pcdList = ['Auditiva', 'Física', 'Intelectual', 'Mental', 'Visual']
const isPcd = ref<boolean>(false)

watch(isPcd, (value) => {
  if (!value) {
    dadosPessoais.value.pcd = ''
  }
})

const dadosPessoais = ref({
  pcd: '',
  email: '',
  celular: '',
  telefone: '',
  linkedin: '',
  instagram: '',
  facebook: '',
  cep: '',
  cidade: '',
  estado: '',
  endereco: '',
  bairro: '',
  numero: '',
  complemento: ''
})
</script>

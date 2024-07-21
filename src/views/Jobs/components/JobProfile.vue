<template>
  <div class="w-full bg-white">
    <!--  COVER IMAGE  -->
    <div class="w-full h-32">
      <img
        class="w-full h-full object-cover"
        src="@/assets/images/mockups/cover-4.png"
        alt="Imagem da vaga"
      />
    </div>
    <div class="px-10 pb-10">
      <!--  AVATAR  -->
      <div class="w-20 h-20 -mt-[40px] ml-8 mb-4">
        <img
          class="w-full h-full object-cover"
          src="@/assets/images/mockups/job-avatar-4.png"
          alt="Imagem do avatar da carreira"
        />
      </div>
      <!--  DADOS DA CARREIRA  -->
      <div class="mb-5">
        <h1 class="text-grey-30 flex items-baseline gap-x-4">
          Assistente Contábil Júnior
          <Badge label="12 vagas" size="sm" bold />
        </h1>
        <div class="w-full flex items-baseline justify-between">
          <p class="text-grey-80">RTL Consulting</p>
          <p class="flex items-baseline gap-x-1 text-grey-80 text-sm">
            <img src="src/assets/icons/pin-dark.svg" alt="Ícone de localização" />
            Campinas, São Paulo
          </p>
        </div>
      </div>
      <JobCompatibility />

      <!--   SOBRE A VAGA   -->
      <h1 class="mt-8 mb-6 text-grey-30">Sobre a vaga</h1>

      <div class="w-full h-32 p-6 flex items-center justify-evenly ring-1 ring-grey-80 rounded-xl">
        <div
          class="h-full flex flex-col items-center justify-center border-r border-grey-80 pr-4 w-1/3"
        >
          <p class="text-primary medium">Valor da bolsa</p>
          <h2 class="text-grey-70 regular">R$ 1.500,00 por mês</h2>
        </div>

        <div
          class="h-full flex flex-col items-center justify-center border-r border-grey-80 pr-4 w-1/3"
        >
          <p class="text-primary medium">Modelo de trabalho</p>
          <h2 class="text-grey-70 regular">Remoto</h2>
        </div>

        <div class="h-full flex flex-col items-center justify-center pr-4 w-1/3">
          <p class="text-primary medium">Tipo de contrato</p>
          <h2 class="text-grey-70 regular">Estágio</h2>
        </div>
      </div>

      <!--   DESCRIÇÃO DA VAGA   -->
      <div class="w-full p-6 mt-6 ring-1 ring-grey-80 rounded-xl">
        <h4 class="mb-2 text-grey-20">Descrição da vaga</h4>
        <p class="text-grey-70 mb-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur distinctio harum
          ipsa maxime numquam officia, possimus sed! Cumque eius eos, esse itaque laborum maiores
          nemo placeat quaerat tenetur totam. Adipisci aliquid amet asperiores assumenda delectus
          deleniti enim, ipsam iure mollitia officia placeat quas rem, vitae. Dicta dolorum,
          eligendi. Commodi, iusto!
        </p>
        <p class="text-grey-70 mb-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur distinctio harum
          ipsa maxime numquam officia, possimus sed! Cumque eius eos, esse itaque laborum maiores
          nemo placeat quaerat tenetur totam. Adipisci aliquid amet asperiores assumenda delectus
          deleniti enim, ipsam iure mollitia officia placeat quas rem, vitae. Dicta dolorum,
          eligendi. Commodi, iusto!
        </p>
        <p class="text-grey-70 mb-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur distinctio harum
          ipsa maxime numquam officia, possimus sed! Cumque eius eos, esse itaque laborum maiores
          nemo placeat quaerat tenetur totam. Adipisci aliquid amet asperiores assumenda delectus
          deleniti enim, ipsam iure mollitia officia placeat quas rem, vitae. Dicta dolorum,
          eligendi. Commodi, iusto!
        </p>
      </div>

      <!--   ATIVIDADES   -->
      <div class="w-full p-6 mt-6 ring-1 ring-grey-80 rounded-xl">
        <h4 class="mb-2 text-grey-20">Atividades</h4>
        <ul class="list-disc pl-8">
          <li class="text-grey-70" v-for="i in [1, 2, 3, 4]" :key="i">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit;
          </li>
          <li class="text-grey-70">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
        </ul>
      </div>

      <!--   BENEFÍCIOS   -->
      <div class="w-full p-6 mt-6 ring-1 ring-grey-80 rounded-xl">
        <h4 class="mb-2 text-grey-20">Benefícios</h4>
        <ul class="list-disc pl-8">
          <li class="text-grey-70" v-for="i in [1, 2, 3, 4]" :key="i">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit;
          </li>
          <li class="text-grey-70">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
        </ul>
      </div>

      <!--   PERÍODO DE CONTRATAÇÃO   -->
      <div class="w-full p-6 mt-6 ring-1 ring-grey-80 rounded-xl">
        <h4 class="mb-2 text-grey-20">Período de contratação</h4>
        <div class="flex items-baseline gap-x-4">
          <Badge label="6 meses" size="md" />
          <p class="text-md text-grey-80">Início em 01/03/2023 até 01/09/2023</p>
        </div>
      </div>

      <!--   JORNADA DE TRABALHO   -->
      <div class="w-full p-6 mt-6 ring-1 ring-grey-80 rounded-xl">
        <h4 class="mb-2 text-grey-20">Jornada de trabalho</h4>
        <div class="flex items-baseline gap-x-4">
          <Badge label="20h semanais" size="md" />
          <p class="text-md text-grey-80">
            De segunda à sexta, das 14h às 18h, com intervalo de 1 hora
          </p>
        </div>
      </div>

      <!--   ÁREAS DE ATUAÇÃO   -->
      <div class="w-full p-6 mt-6 ring-1 ring-grey-80 rounded-xl">
        <h4 class="mb-2 text-grey-20">Áreas de atuação</h4>
        <div class="flex items-baseline gap-x-4">
          <Badge label="Contábil" size="md" />
          <Badge label="Matemática" size="md" />
          <Badge label="Economia" size="md" />
          <Badge label="Administração" size="md" />
        </div>
      </div>
    </div>
    <!--  FOOTER  -->
    <div
      class="w-full bg-white p-4 flex items-center justify-between sticky bottom-0 shadow-[0px_4px_4px_-2px_rgb(0,0,0,0.1),0px_-4px_4px_-2px_rgb(0,0,0,0.1)]"
    >
      <p class="text-warning flex gap-x-2">
        <img src="@/assets/icons/visibility.svg" alt="Ícone de visibilidade" />
        1.256 pessoas já se candidataram.
      </p>
      <div class="flex items-center gap-x-4">
        <Button
          id="ampliar-visualizacao"
          label="Ampliar visualização"
          color="transparent"
          size="small"
          class="!w-52 !h-12 !text-xs"
        ></Button>
        <Button
          id="candidatar"
          label="Candidatar"
          size="small"
          class="!w-52 !h-12 !text-xs"
        ></Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import JobCompatibility from '@/views/Jobs/components/JobCompatibility.vue'
import Badge from '@/components/Badge.vue'
import Button from '@/components/Button.vue'
</script>

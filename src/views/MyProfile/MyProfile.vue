<template>
  <div>
    <ViewHeader class="sticky top-20" title="Meu Perfil" back-to-url="/dashboard"/>
    <div class="grid grid-cols-12 p-6">
      <div class="col-span-4">
        <CardPerfil />
      </div>
      <!-- CONTENT PERFIL -->
      <div class="col-span-8 col-start-5 mx-6">
        <div class="card space-y-20">
          <!-- Curriculo -->
          <div>
            <div class="flex flex-row justify-between relative">
              <h2 class="bold text-color-3">Currículo</h2>
              <RouterLink :to="{ name: 'Dados Pessoais' }">
                <span class="md medium text-primary">Exibir currículo</span>
                <img
                  src="@/assets/icons/open_in_new.svg"
                  alt="icon location"
                  class="inline ml-2 pb-1"
                />
              </RouterLink>
              <span class="absolute -bottom-4 w-full h-px bg-grey-90" />
            </div>
            <div class="my-12">
              <p class="md medium text-color-3 mb-3">Sobre mim</p>
              <p class="lg regular text-color-2">
                Lorem ipsum dolor sit amet consectetur. Nisi faucibus morbi sapien in. Tristique in
                dignissim habitasse ipsum in posuere risus. Lacus vestibulum dolor viverra proin
                mauris. Orci mauris sagittis gravida suspendisse aliquam id egestas at.Lorem ipsum
                dolor sit amet consectetur.
              </p>
            </div>
            <p class="md medium">Dados de contato</p>
            <div class="flex justify-between my-4 relative sm:flex-row flex-col">
              <span v-for="(contact, key) in dataContact" :key="key">
                <img
                  :src="'src/assets/icons/' + key + '.svg'"
                  :alt="'icon' + key"
                  class="inline pb-1 mr-2"
                />
                <span class="lg regular text-color-2">{{ contact }}</span>
              </span>
              <span class="absolute -bottom-10 w-full h-px bg-grey-90" />
            </div>
          </div>
          <!-- Formação acadêmica -->
          <div>
            <div class="flex flex-row items-center mb-8">
              <h2 class="medium text-color-3">Formação acadêmica</h2>
              <RouterLink :to="{ name: 'Dados Pessoais' }" class="ml-3">
                <img src="@/assets/icons/add.svg" alt="icon adicionar curso" class="inline pb-1" />
                <span class="md medium text-primary-light">Adicionar curso</span>
              </RouterLink>
            </div>
            <div
              v-for="curso in cursos"
              :key="curso.nome"
              class="flex mb-16 item-center justify-between relative"
            >
              <div class="flex flex-col space-y-2">
                <p class="lg medium text-color-3">{{ curso.nome }}</p>
                <div class="flex">
                  <img src="@/assets/icons/location.svg" alt="icon location" class="pb-1" />
                  <span class="md regular text-primary">{{ curso.local }}</span>
                </div>
                <div class="flex space-x-2">
                  <img src="@/assets/icons/calendar_white.svg" alt="icon calendar" />
                  <p class="md regular text-color-2">Início {{ curso.dataInit }}</p>
                  <img src="@/assets/icons/calendar_blue.svg" alt="icon calendar" />
                  <p class="md regular text-color-2">Término {{ curso.dataEnd }}</p>
                </div>
              </div>
              <div class="flex items-center space-x-1">
                <img
                  :src="'src/assets/icons/' + curso.status + '.svg'"
                  :alt="'icon ' + curso.status"
                  class="h-5"
                />
                <p class="md bold text-color-2">{{ curso.status }}</p>
                <span class="sm medium text-color-2">{{ curso.periodo }}</span>
              </div>
              <div class="flex items-center">
                <RouterLink :to="{ name: 'Dados Pessoais' }">
                  <img src="@/assets/icons/edit.svg" alt="icon location" class="inline h-5 pb-1" />
                  <span class="sm medium text-primary-light">Editar</span>
                </RouterLink>
              </div>
              <span class="absolute -bottom-8 w-full h-px bg-grey-90" />
            </div>
          </div>
          <!-- Experiência profissional -->
          <div>
            <div class="flex flex-row items-center mb-8">
              <h2 class="medium text-color-3">Experiência Profissional</h2>
              <RouterLink to="#" class="ml-3">
                <img src="@/assets/icons/add.svg" alt="icon adicionar curso" class="inline pb-1" />
                <span class="md medium text-primary-light">Adicionar experiência</span>
              </RouterLink>
            </div>
            <div
              v-for="(carreira, index) in carreiraProfissional"
              :key="index"
              class="flex mb-16 item-center justify-between relative"
            >
              <img
                :src="'src/assets/images/brand/' + carreira.image + '.png'"
                :alt="'icon ' + carreira.image"
                class="h-12 mr-4"
              />

              <div class="flex flex-col space-y-3">
                <div>
                  <p class="lg medium text-color-2">{{ carreira.cargo }}</p>
                  <p class="md regular text-color-1">{{ carreira.empresa }}</p>
                </div>
                <div class="flex space-x-2">
                  <p class="md medium text-color-2">
                    Início <span class="regular">{{ carreira.dataInit }}</span>
                  </p>
                  <p class="md medium text-color-2">
                    Término <span class="regular">{{ carreira.dataEnd }}</span>
                  </p>
                  <p class="md regular text-color-2">{{ carreira.periodo }}</p>
                </div>
                <div class="flex">
                  <img src="@/assets/icons/location.svg" alt="icon location" class="pb-1" />
                  <span class="md regular text-color-1">{{ carreira.local }}</span>
                </div>
                <div>
                  <p class="sm bold text-color-2 mb-2">Competências</p>
                  <p class="md regular text-color-2">{{ carreira.competencia }}</p>
                </div>
              </div>
              <RouterLink :to="{ name: 'Dados Pessoais' }" class="contents">
                <img src="@/assets/icons/edit.svg" alt="icon location" class="inline h-5 pb-1" />
                <span class="sm medium text-primary-light">Editar</span>
              </RouterLink>
              <span class="absolute -bottom-8 w-full h-px bg-grey-90" />
            </div>
          </div>
          <!-- Competências e habilidades -->
          <div>
            <div class="flex flex-row items-center mb-8">
              <h2 class="medium text-color-3">Competências e habilidades</h2>
            </div>
            <div class="space-y-10">
              <div
                v-for="competencia in competencias"
                :key="competencia.name"
                class="flex flex-col relative"
              >
                <div class="flex items-center mb-4">
                  <p class="md medium text-color-3 mr-2">{{ competencia.name }}</p>
                  <RouterLink :to="{ name: 'Dados Pessoais' }" class="contents">
                    <img
                      src="@/assets/icons/edit.svg"
                      alt="icon location"
                      class="inline h-5 pb-1"
                    />
                    <span class="sm medium text-primary-light">Editar</span>
                  </RouterLink>
                </div>
                <ul class="flex flex-wrap">
                  <li
                    v-for="(skill, index) in competencia.skills"
                    :key="index"
                    class="bg-grey-90 py-1.5 px-3 rounded-lg mr-3 my-1.5"
                  >
                    <p class="md regular text-color-3">
                      {{ skill }}
                    </p>
                  </li>
                </ul>
                <span class="absolute -bottom-5 w-full h-px bg-grey-90" />
              </div>
            </div>
          </div>
          <!-- Projetos e portfólio -->
          <div>
            <div class="flex flex-row items-center justify-between mb-8">
              <h2 class="medium text-color-3 mr-2">Projetos e portfólio</h2>
              <div>
                <RouterLink :to="{ name: 'Dados Pessoais' }" class="contents">
                  <img src="@/assets/icons/edit.svg" alt="icon location" class="inline h-5 pb-1" />
                  <span class="sm medium text-primary-light">Editar</span>
                </RouterLink>
              </div>
            </div>
            <div class="grid grid-cols-12 grid-rows-1 gap-6">
              <div
                v-for="(projeto, index) in projetos"
                :key="index"
                class="col-span-4 border-primary-opacity border rounded-lg"
              >
                <div
                  :class="[
                    `bg-[url('src/assets/images/${projeto.image}.png')]`,
                    'rounded-t-lg h-32 bg-cover'
                  ]"
                ></div>
                <div class="p-6 space-y-2">
                  <p class="md medium text-color-2">{{ projeto.name }}</p>
                  <p class="md regular text-color-1">{{ projeto.position }}</p>
                  <div class="flex">
                    <img src="src/assets/icons/calendar_white.svg" alt="Calendar" class="mr-2" />
                    <p class="sm regular text-color-2">{{ projeto.date }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CardPerfil from '@/views/MyProfile/components/CardPerfil.vue'
import ViewHeader from '@/components/ViewHeader.vue'

const dataContact = {
  email: 'lorenzo.music@gmail.com',
  phone: '+55 16 4444-44444',
  site: 'www.lorenzo.com.br'
}

const cursos = [
  {
    nome: 'Técnico em Enfermagem',
    local: 'Senac Campinas',
    dataInit: '00/00/0000',
    dataEnd: '00/00/0000',
    status: 'Cursando',
    periodo: '3º periodo'
  },
  {
    nome: 'Bacharel em Administração',
    local: 'Senac Campinas',
    dataInit: '00/00/0000',
    dataEnd: '00/00/0000',
    status: 'Concluído',
    periodo: ''
  }
]

const carreiraProfissional = [
  {
    cargo: 'Gerente de vendas',
    image: 'rtl',
    empresa: 'RTL Consulting',
    local: 'Campinas, São Paulo',
    dataInit: '00/00/0000',
    dataEnd: '00/00/0000',
    periodo: '9 meses',
    competencia:
      'Lorem ipsum dolor sit amet consectetur. Nisi faucibus morbi sapien in. Tristique in dignissim habitasse ipsum in posuere risus. Lacus vestibulum dolor viverra proin mauris. '
  },
  {
    cargo: 'Gerente de vendas',
    image: 'adc',
    empresa: 'ABC Distribuição',
    local: 'Campinas, São Paulo',
    dataInit: '00/00/0000',
    dataEnd: '00/00/0000',
    periodo: '9 meses',
    competencia:
      'Lorem ipsum dolor sit amet consectetur. Nisi faucibus morbi sapien in. Tristique in dignissim habitasse ipsum in posuere risus. Lacus vestibulum dolor viverra proin mauris. '
  }
]

const competencias = [
  { name: 'Idiomas', skills: ['Português', 'Inglês', 'Espanhol'] },
  { name: 'Habilidades Técnicas', skills: ['Pacote Office', 'Excel', 'Power Point'] },
  {
    name: 'Habilidades Comportamentais',
    skills: [
      'Comunicação',
      'Trabalho em equipe',
      'Comunicação',
      'Trabalho em equipe',
      'Comunicação',
      'Trabalho em equipe'
    ]
  }
]

const projetos = [
  {
    image: 'placeholder',
    name: 'Brandbook Senac Carreiras',
    position: 'Design Gráfico',
    date: '2022'
  },
  {
    image: 'placeholder',
    name: 'Brandbook Senac Carreiras',
    position: 'Design Gráfico',
    date: '2022'
  },
  {
    image: 'placeholder',
    name: 'Brandbook Senac Carreiras',
    position: 'Design Gráfico',
    date: '2022'
  }
]
</script>

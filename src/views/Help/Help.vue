<template>
  <div class="w-full">
    <ViewHeader class="sticky top-20" title="Ajuda" back-to-url="/dashboard" />

    <div class="w-[97%] rounded-xl bg-white border border-grey-90 my-6 mx-auto p-6">
      <h2 class="text-grey-10 mb-2">Precisa de ajuda?</h2>
      <p class="text-grey-30">
        Utilize um de nossos canais de atendimento ou verifique as dúvidas frequentes.
      </p>

      <div class="flex gap-x-4 mt-6">
        <HelpChannel
          v-for="channel in channels"
          :key="channel.label"
          :value="channel.value"
          :label="channel.label"
          :icon-path="channel.iconPath"
          :link="channel.link"
          :handler="channel.handler"
        />
      </div>

      <Accordion :accordion-items="accordionItems" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ViewHeader from '@/components/ViewHeader.vue'
import HelpChannel from '@/views/Help/components/HelpChannel.vue'
import type { HelpChannelInterface } from '@/views/Help/models/help-channel.interface'
import Accordion from '@/components/Accordion/Accordion.vue'
import type {AccordionItemInterface} from "@/components/Accordion/models/accordion-item.interface";

const channels: HelpChannelInterface[] = [
  {
    label: 'Fale conosco',
    value: '0800-000-0000',
    iconPath: 'src/assets/icons/telephone.svg',
    link: '#'
  },
  {
    label: 'WhatsApp',
    value: '+55 00 0000-0000',
    iconPath: 'src/assets/icons/whatsapp.svg',
    link: '#'
  },
  {
    label: 'Suporte Técnico',
    value: 'suporte@vacanti.com.br',
    iconPath: 'src/assets/icons/mail.svg',
    handler() {
      console.log('DO WHATEVER')
    }
  }
]

const accordionItems: AccordionItemInterface[] = [
  {
    id: 'quero-me-candidatar',
    title: 'Como me candidatar a uma vaga?',
    bodyText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis metus ut lacus rutrum lacinia a quis
               quam. Aliquam feugiat ligula at efficitur pharetra. Etiam non egestas libero. Integer at tortor in neque
               ultrices tincidunt id non velit. Etiam tincidunt a leo at semper. Vivamus justo velit, sagittis a lacinia
               id, consectetur a quam. Donec venenatis id nisl at rutrum.`,
    isOpen: false
  },
  {
    id: 'como-aumentar-compatibilidade',
    title: 'Como aumentar minha compatibilidade com as vagas?',
    bodyText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis metus ut lacus rutrum lacinia a quis
               quam. Aliquam feugiat ligula at efficitur pharetra. Etiam non egestas libero. Integer at tortor in neque
               ultrices tincidunt id non velit. Etiam tincidunt a leo at semper. Vivamus justo velit, sagittis a lacinia
               id, consectetur a quam. Donec venenatis id nisl at rutrum.`,
    isOpen: false
  },
  {
    id: 'posso-adicionar-outros-cursos',
    title: 'Posso adicionar outros cursos fora do Senac em formação?',
    bodyText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis metus ut lacus rutrum lacinia a quis
               quam. Aliquam feugiat ligula at efficitur pharetra. Etiam non egestas libero. Integer at tortor in neque
               ultrices tincidunt id non velit. Etiam tincidunt a leo at semper. Vivamus justo velit, sagittis a lacinia
               id, consectetur a quam. Donec venenatis id nisl at rutrum.`,
    isOpen: false
  },
  {
    id: 'eu-pago-para-usar',
    title: 'Eu pago para usar esse sistema?',
    bodyText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis metus ut lacus rutrum lacinia a quis
               quam. Aliquam feugiat ligula at efficitur pharetra. Etiam non egestas libero. Integer at tortor in neque
               ultrices tincidunt id non velit. Etiam tincidunt a leo at semper. Vivamus justo velit, sagittis a lacinia
               id, consectetur a quam. Donec venenatis id nisl at rutrum.`,
    isOpen: false
  },
  {
    id: 'quanto-tempo-leva',
    title: 'Quanto tempo leva para uma empresa responder a minha candidatura?',
    bodyText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis metus ut lacus rutrum lacinia a quis
               quam. Aliquam feugiat ligula at efficitur pharetra. Etiam non egestas libero. Integer at tortor in neque
               ultrices tincidunt id non velit. Etiam tincidunt a leo at semper. Vivamus justo velit, sagittis a lacinia
               id, consectetur a quam. Donec venenatis id nisl at rutrum.`,
    isOpen: false
  },
]
</script>

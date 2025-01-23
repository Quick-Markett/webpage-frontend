import { ChannelData } from './types'

export const CONTACT_CHANNELS = [
  {
    title: 'WhatsApp - 24/7',
    description:
      'Ajuda com nossos especialistas através do nosso canal oficial de WhatsApp.',
    observation: 'Disponível 24 horas por dia.',
    anchor: {
      label: 'Clique Aqui'
    }
  },
  {
    title: 'Telefone',
    description: 'Fale com um de nossos especialistas em tempo real.',
    observation: 'Disponível 24 horas por dia.',
    anchor: {
      label: 'Clique Aqui'
    }
  },
  {
    title: 'Email',
    description: 'Dedicado à perguntas por texto ou de urgência menores',
    observation: 'Respostas dedicadas.',
    anchor: {
      label: 'Clique Aqui'
    }
  }
] satisfies ChannelData[]

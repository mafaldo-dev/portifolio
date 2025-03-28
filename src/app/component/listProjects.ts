import { StaticImageData } from 'next/image';

import e1 from '@/images/eplay1.png';
import e2 from '@/images/eplay2.png';
import e3 from '@/images/eplay3.png';
import e4 from '@/images/eplay4.png';
import e5 from '@/images/eplay5.png';

import im1 from '@/images/im1.png';
import im2 from '@/images/im2.png';
import im3 from '@/images/im3.png';
import im4 from '@/images/im4.png';
import im5 from '@/images/im5.png';

import sm1 from '@/images/sm1.png'
import sm2 from '@/images/sm2.png'
import sm3 from '@/images/sm3.png'
import sm4 from '@/images/sm4.png'

import job1 from '@/images/job1.png'
import job2 from '@/images/job2.png'
import job3 from '@/images/job3.png'
import job4 from '@/images/job4.png'
import job5 from '@/images/job5.png'
import job6 from '@/images/job6.png'
import job7 from '@/images/job7.png'

import cap1 from '@/images/cap1.png'
import cap2 from '@/images/cap2.png'
import cap3 from '@/images/cap3.png'

import no from '@/images/1000_F_499933117_ZAUBfv3P1HEOsZDrnkbNCt4jc3AodArl.jpg'
import no2 from '@/images/Image_not_available.png'

export interface Projetos  {
  id: number
  nome: string
  descricao: string
  tecnologias: string
  image: StaticImageData[]
  tags: string[]
  link: string
}

const projects: Projetos[] = [
      {
	id: 1,
	nome: 'NexusEarth',
	descricao: 'Motor de busca Ex: "Google, yahoo, bing, mozila"',
	tecnologias: 'Typescript | Next.js | TailwindCss | Node.js | Express | Redis',
	image: [cap1, cap2, cap3],
	tags: ['Next', 'Typescript', 'Node.Js', 'TailwindCss', 'Express', 'Redis'],
	link: 'https://nexuearth.vercel.app/'
      },
      { id: 2,
        nome: 'EmpreGo',
        descricao: 'Site de empregos para profissionais encontrarem seu emprego dos sonhos, e empresas contratarem os melhores profissionais do mercado',
      tecnologias: 'Typescript | NextJs | tailwindCss | shadcn',
      image: [job1, job2, job3, job4, job5, job6, job7],
      tags: ['Next.Js', 'Typescript', 'Node.Js', 'Shadcn', 'TailwindCss','Express'],
      link: ''
    },
    {
      id: 3,
      nome: 'Eplay',
      descricao: 'Loja de Compra de Jogos para video games e PCs',
      tecnologias: 'Typescript | ReactJs | Styled-components',
      image: [e1, e2, e3, e4, e5],
      tags: ['React', 'Typescript', 'Node.Js', 'Styled-components'],
      link:'https://eplay-blond.vercel.app/'
    },
    {
      id: 4,
      nome: 'Imobiliaria',
      descricao: 'Template para imobiliarias de venda e aluguel de imóveis',
      tecnologias: 'Typescript | ReactJs | Styled-components',
      image: [im1, im2, im3, im4, im5],
      tags:['React', 'Typescript', 'Node.Js', 'Styled-components'],
      link: 'https://template-imobiliaria.vercel.app/'
    },
    {
  
      id: 5,
      nome: 'Recycle.me',
      descricao: 'App mobile de agendamento de coleta de recicláveis',
      tecnologias: 'Typescript | React-Native | Expo',
      image: [no, no2],
      tags: ['React-native', 'Typescript', 'Expo',],
      link: ''
    },
    {
      id: 6,
      nome: 'Smile Company',
      descricao: 'Landing page de clinica odontologica, pagina estatica',
      tecnologias: 'Javascript | React | Saas',
      image:[sm1, sm2, sm3, sm4],
      tags:['Javascript', 'React', 'SCSS'],
      link: 'https://smilecompany-zeta-ecru.vercel.app/'
    }
  ];

  export default projects

import { createRouter, createWebHistory } from 'vue-router'
import { useAuth } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', component: () => import('@/views/Login/Login.vue') },
    {
      path: '/onboarding',
      component: () => import('@/views/Onboarding/Onboarding.vue'),
      meta: { requiresOnboarding: true }
    },
    {
      path: '/',
      redirect: () => {
        const authStore = useAuth()
        if (authStore.isAuthenticated) {
          if (!authStore.hasCompletedOnboarding) {
            return '/onboarding'
          } else {
            return '/dashboard'
          }
        } else {
          return '/login'
        }
      },
      component: () => import('@/layouts/MainLayout.vue'),
      children: [
        {
          path: '/dashboard',
          component: () => import('@/views/Dashboard/Dashboard.vue'),
          name: 'dashboard'
        },
        {
          path: '/ajuda',
          component: () => import('@/views/Help/Help.vue'),
          name: 'ajuda'
        },
        {
          path: '/vagas',
          component: () => import('@/views/Jobs/Jobs.vue'),
          name: 'vagas'
        },
        {
          path: '/configuracoes',
          redirect: {name: 'Privacidade'},
          component: () => import('@/views/Configurations/Configurations.vue'),
          name: 'Configurações',
          children: [
            {
              path: '/configuracoes/privacidade',
              component: () => import('@/views/Configurations/components/Privacidade.vue'),
              name: 'Privacidade'
            },
            {
              path: '/configuracoes/politicas-e-termos',
              component: () => import('@/views/Configurations/components/PoliticasTermos.vue'),
              name: 'Políticas e termos'
            },
            {
              path: '/configuracoes/notificacoes',
              component: () => import('@/views/Configurations/components/Notificacoes.vue'),
              name: 'Notificações'
            },
            {
              path: '/configuracoes/alterar-senha',
              component: () => import('@/views/Configurations/components/AlterarSenha.vue'),
              name: 'Alterar senha'
            }
          ]
        },
        {
          path: '/meu-perfil',
          component: () => import('@/views/MyProfile/MyProfile.vue'),
          name: 'Meu Perfil'
        },
        {
          path: '/meu-perfil/editar-meu-perfil',
          component: () => import('@/views/MyProfile/EditMyProfile/EditMyProfile.vue'),
          name: 'Editar Meu Perfil',
          children: [
            {
              path: '/meu-perfil/editar-meu-perfil/dados-pessoais',
              component: () =>
                import('@/views/MyProfile/EditMyProfile/components/DadosPessoais.vue'),
              name: 'Dados Pessoais'
            },
            {
              path: '/meu-perfil/editar-meu-perfil/perfil-e-curriculo',
              component: () =>
                import('@/views/MyProfile/EditMyProfile/components/PerfilECurriculo.vue'),
              name: 'Perfil e Curriculo'
            },
            {
              path: '/meu-perfil/editar-meu-perfil/experiencia-profissional',
              component: () =>
                import('@/views/MyProfile/EditMyProfile/components/ExperienciaProfissional.vue'),
              name: 'Experiência Profissional'
            },
            {
              path: '/meu-perfil/editar-meu-perfil/formacao-academica',
              component: () =>
                import('@/views/MyProfile/EditMyProfile/components/FormacaoAcademica.vue'),
              name: 'Formação Acadêmica'
            },
            {
              path: '/meu-perfil/editar-meu-perfil/minhas-habilidades',
              component: () =>
                import('@/views/MyProfile/EditMyProfile/components/MinhasHabilidades.vue'),
              name: 'Minhas Habilidades'
            },
            {
              path: '/meu-perfil/editar-meu-perfil/portfolio-e-projetos',
              component: () =>
                import('@/views/MyProfile/EditMyProfile/components/PortefolioEProjetos.vue'),
              name: 'Portfólio e Projetos'
            }
          ]
        }
      ]
    }
  ]
})

export default router

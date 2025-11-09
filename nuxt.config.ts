// nuxt.config.ts
export default defineNuxtConfig({
    modules: [
    '@nuxt/content',
    'nuxt-studio'
  ],

    extends: 'docus',

  // ...
  routeRules: {
    '/_studio/**': { prerender: false }
  },

  hooks: {
    'pages:extend'(pages) {
      // Supprime toute page générée par Docus correspondant à /_studio
      const index = pages.findIndex(p => p.path.startsWith('/_studio'))
      if (index !== -1) pages.splice(index, 1)
    }
  },
  // content: {
  //   preview: {
  //     api: 'https://api.nuxt.studio',
  //     gitInfo: {
  //       name: 'wiki-influencraft',
  //       owner: 'Dofault',
  //       url: 'https://github.com/Dofault/wiki-influencraft'
  //     }
  //   }
  // },
  nitro: {
    experimental: {
        websocket: true
    }
  },
   studio: {

    // Studio admin route (default: '/_studio')
    route: '/_studio',
    
    
    // GitHub repository configuration (owner and repo are required)
    repository: {
      provider: 'github', // only GitHub is currently supported
      owner: 'Dofault', // your GitHub username or organization
      repo: 'wiki-influencraft', // your repository name
      branch: 'main', // the branch to commit to (default: main)
      rootDir: '' // optional: if your Nuxt app is in a subdirectory (default: '')
    },
        development: {
      sync: true // Enable development mode
    }
  },

    vite: {
    define: {
      global: 'globalThis',
    },
    optimizeDeps: {
      include: ['vue', '@headlessui/vue']
    },
    server: {
      // @ts-ignore pour éviter l'erreur TypeScript
      host: '0.0.0.0',
      // @ts-ignore
      port: 3001,
      // @ts-ignore
      allowedHosts: ['influencraft.fr', 'localhost', '127.0.0.1']
    } as any
  },
})

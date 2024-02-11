import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  project: {
    basePath: '/studio'
  },
  
  api: {
    projectId: 'a7fk82qa',
    dataset: 'production'
  }
})

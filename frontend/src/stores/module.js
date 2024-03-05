import { defineStore } from 'pinia'


export const useModuleStore = defineStore({
    id: 'module',
    state: () => ({
        projects: [
            {
                name: 'Project 1',
                id: 1
            }
        ],
        currentProject: {id: 1, name: 'Project 1'}
    }),
    actions: {
        setCurrentProject(payload) {
            this.currentProject = payload;
        }
    },
})

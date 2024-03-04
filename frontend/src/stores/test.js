import { defineStore } from 'pinia'

export const useTestStore = defineStore({
    id: 'test',
    state: () => ({
        createdList: [
            {
                number: 234567,
                branch: 'feature/324534',
                createdAt: '7 Sept, 15:00',
                createdBy: 'Ken Block',
                modulesCount: 3,
                casesCount: 29
            },
            {
                number: 234567,
                branch: 'feature/324534',
                createdAt: '7 Sept, 15:00',
                createdBy: 'Ken Block',
                modulesCount: 3,
                casesCount: 29
            },
            {
                number: 234567,
                branch: 'feature/324534',
                createdAt: '7 Sept, 15:00',
                createdBy: 'Ken Block',
                modulesCount: 3,
                casesCount: 29
            },
            {
                number: 234567,
                branch: 'feature/324534',
                createdAt: '7 Sept, 15:00',
                createdBy: 'Ken Block',
                modulesCount: 3,
                casesCount: 29
            },
            {
                number: 234567,
                branch: 'feature/324534',
                createdAt: '7 Sept, 15:00',
                createdBy: 'Ken Block',
                modulesCount: 3,
                casesCount: 29
            },
            {
                number: 234567,
                branch: 'feature/324534',
                createdAt: '7 Sept, 15:00',
                createdBy: 'Ken Block',
                modulesCount: 3,
                casesCount: 29
            },
            {
                number: 234567,
                branch: 'feature/324534',
                createdAt: '7 Sept, 15:00',
                createdBy: 'Ken Block',
                modulesCount: 3,
                casesCount: 29
            },
            {
                number: 234567,
                branch: 'feature/324534',
                createdAt: '7 Sept, 15:00',
                createdBy: 'Ken Block',
                modulesCount: 3,
                casesCount: 29
            },
            {
                number: 234567,
                branch: 'feature/324534',
                createdAt: '7 Sept, 15:00',
                createdBy: 'Ken Block',
                modulesCount: 3,
                casesCount: 29
            },
            {
                number: 234567,
                branch: 'feature/324534',
                createdAt: '7 Sept, 15:00',
                createdBy: 'Ken Block',
                modulesCount: 3,
                casesCount: 29
            },
        ],
        testedList: [
            {
                number: 34567,
                branch: 'feature/34567',
                createdAt: '7 Sept, 17:00',
                createdBy: 'Ken Block',
                testedAt: '8 Sept, 17:00',
                testedBy: 'Ned Flanders',
                modulesCount: 3,
                casesCount: 29,
                bugsCount: 0,
            },
            {
                number: 34576,
                branch: 'feature/34567',
                createdAt: '7 Sept, 17:00',
                createdBy: 'Ken Block',
                testedAt: '8 Sept, 17:00',
                testedBy: 'Ned Flanders',
                modulesCount: 3,
                casesCount: 29,
                bugsCount: 2,
            },
            {
                number: 34567,
                branch: 'feature/34567',
                createdAt: '7 Sept, 17:00',
                createdBy: 'Ken Block',
                testedAt: '8 Sept, 17:00',
                testedBy: 'Ned Flanders',
                modulesCount: 3,
                casesCount: 29,
                bugsCount: 0,
            },
            {
                number: 34576,
                branch: 'feature/34567',
                createdAt: '7 Sept, 17:00',
                createdBy: 'Ken Block',
                testedAt: '8 Sept, 17:00',
                testedBy: 'Ned Flanders',
                modulesCount: 3,
                casesCount: 29,
                bugsCount: 2,
            },
            {
                number: 34567,
                branch: 'feature/34567',
                createdAt: '7 Sept, 17:00',
                createdBy: 'Ken Block',
                testedAt: '8 Sept, 17:00',
                testedBy: 'Ned Flanders',
                modulesCount: 3,
                casesCount: 29,
                bugsCount: 0,
            },
            {
                number: 34576,
                branch: 'feature/34567',
                createdAt: '7 Sept, 17:00',
                createdBy: 'Ken Block',
                testedAt: '8 Sept, 17:00',
                testedBy: 'Ned Flanders',
                modulesCount: 3,
                casesCount: 29,
                bugsCount: 2,
            },
            {
                number: 34567,
                branch: 'feature/34567',
                createdAt: '7 Sept, 17:00',
                createdBy: 'Ken Block',
                testedAt: '8 Sept, 17:00',
                testedBy: 'Ned Flanders',
                modulesCount: 3,
                casesCount: 29,
                bugsCount: 0,
            },
            {
                number: 34576,
                branch: 'feature/34567',
                createdAt: '7 Sept, 17:00',
                createdBy: 'Ken Block',
                testedAt: '8 Sept, 17:00',
                testedBy: 'Ned Flanders',
                modulesCount: 3,
                casesCount: 29,
                bugsCount: 2,
            },
            {
                number: 34567,
                branch: 'feature/34567',
                createdAt: '7 Sept, 17:00',
                createdBy: 'Ken Block',
                testedAt: '8 Sept, 17:00',
                testedBy: 'Ned Flanders',
                modulesCount: 3,
                casesCount: 29,
                bugsCount: 0,
            },
            {
                number: 34576,
                branch: 'feature/34567',
                createdAt: '7 Sept, 17:00',
                createdBy: 'Ken Block',
                testedAt: '8 Sept, 17:00',
                testedBy: 'Ned Flanders',
                modulesCount: 3,
                casesCount: 29,
                bugsCount: 2,
            },
        ],
    }),
    getters: {
        //createdTests: (state) => state.created,
    },
    actions: {
    },
})

/**
 * Simulate a login
 * @param {string} a
 * @param {string} p
 */
function apiLogin(a, p) {
    if (a === 'ed' && p === 'ed') return Promise.resolve({ isAdmin: true })
    if (p === 'ed') return Promise.resolve({ isAdmin: false })
    return Promise.reject(new Error('invalid credentials'))
}

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
        lastActivity: [
            {
                dateAt: '9 Sept, 15:00',
                user: 'Ken Block',
                action: 'create',
                requestNumber: 1234,
                branch: 'feature/123',
                modulesCount: 1,
                casesCount: 9,
                bugsCount: null,
            },
            {
                dateAt: '9 Sept, 15:30',
                user: 'Ken Block',
                action: 'update',
                requestNumber: 1234,
                branch: 'feature/123',
                modulesCount: 3,
                casesCount: 29,
                bugsCount: null,
            },
            {
                dateAt: '8 Sept, 10:00',
                user: 'Ned Flanders',
                action: 'assign',
                requestNumber: 1234,
                branch: 'feature/123',
                modulesCount: 3,
                casesCount: 29,
                bugsCount: null,
            },
            {
                dateAt: '8 Sept, 10:30',
                user: 'Ned Flanders',
                action: 'complete',
                requestNumber: 1234,
                branch: 'feature/123',
                modulesCount: 3,
                casesCount: 29,
                bugsCount: 0,
            },
        ],
        teamWorkload: [
            {
                user: 'Ned Flanders',
                completeCasesCount: 5,
                totalCompleteCasesCount: 25,
            },
            {
                user: 'Bart Simpson',
                completeCasesCount: 1,
                totalCompleteCasesCount: 25,
            },
            {
                user: 'Lisa Simpson',
                completeCasesCount: 19,
                totalCompleteCasesCount: 25,
            }
        ],
        fullTable: [
            {
                id: 1234,
                dateAt: '8 Sept, 10:00',
                user: 'Ken Block',
                testedBy: 'Ned Flanders',
                action: 'assign',
                requestNumber: 1234,
                branch: 'feature/123',
                modulesCount: 3,
                casesCount: 29,
                bugsCount: 0,
                status: 'Not started',
            },
        ],
        currentRequest: null
    }),
    getters: {
        //createdTests: (state) => state.created,
    },
    actions: {
        resetCurrentRequest() {
            this.currentRequest = null
        },
        newRequest(project) {
            this.currentRequest = {
                number: null,
                projectId: project.id,
                branch: null,
                createdAt: '7 Sept, 15:00',
                createdBy: 'Ken Block',
                modulesCount: 0,
                casesCount: 0
            }
        },
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

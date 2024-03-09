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
        currentProject: {
            id: 1,
            name: 'Project 1',
            modules: [
                {
                    key: 1,
                    label: 'Module 1',
                    icon: 'pi pi-fw pi-ticket',
                    children: [
                        {
                            key: 11,
                            label: 'Module 11',
                            icon: 'pi pi-fw pi-ticket',
                            children: [],
                            cases: [
                                {
                                    id: '11a',
                                    name: 'Case 11a',
                                    scenario: 'large scenario text'
                                },
                                {
                                    id: '11b',
                                    name: 'Case 11b',
                                    scenario: 'large scenario text'
                                }
                            ]
                        },
                        {
                            key: 12,
                            label: 'Module 12',
                            icon: 'pi pi-fw pi-ticket',
                            children: [],
                            cases: [
                                {
                                    id: '12a',
                                    name: 'Case 12a',
                                    scenario: 'large scenario text'
                                },
                                {
                                    id: '12b',
                                    name: 'Case 12b',
                                    scenario: 'large scenario text'
                                },
                            ]
                        },
                    ],
                    cases: [
                        {
                            id: '1a',
                            name: 'Case 1a',
                            scenario: 'large scenario text'
                        },
                    ],
                },
                {
                    key: 2,
                    label: 'Lab 2',
                    icon: 'pi pi-fw pi-ticket',
                    children: [],
                    cases: [
                        {
                            id: '2a',
                            name: 'Case 2a',
                            scenario: 'large scenario text'
                        },
                    ]
                },
            ]
        },
        editingNode: null,
        editingCase: null
    }),
    actions: {
        setCurrentProject(payload) {
            this.currentProject = payload;
        },
        deleteCurrentProject() {
            console.log('deleteCurrentProject')
        },
        setEditingNode(payload) {
            console.log('setEditingNode', payload)
            this.editingNode = payload
        },
        addNode(parent) {
            const lastRootId = 123; // @todo
            const newNode = {
                key: lastRootId,
                label: 'Module ' + lastRootId,
                icon: 'pi pi-fw pi-ticket',
                children: [],
                cases: []
            }
            if (parent) {
                parent.children.push(newNode)
            } else {
                this.currentProject.modules.push(newNode)
            }

            this.setEditingNode(null)
        },
        deleteEditingNode() {
            const recursiveDelete = (parentNodes, deletingNodeId) => {
                console.log('recursiveDelete', parentNodes, deletingNodeId)
                if (!parentNodes.length) {
                    return parentNodes;
                }
                parentNodes = parentNodes.filter(node => node.key !== deletingNodeId)
                for (let i in parentNodes) {
                    parentNodes[i].children = recursiveDelete(parentNodes[i].children, deletingNodeId)
                }

                return parentNodes;
            }
            this.currentProject.modules = recursiveDelete(this.currentProject.modules, this.editingNode.key)
            this.setEditingNode(null)
        },
        addCaseToEditingNode() {
            if (!this.editingNode) {
                return;
            }
            const nodeLastCase = this.editingNode.cases.length ? this.editingNode.cases[this.editingNode.cases.length-1].id : null;
            const caseId = nodeLastCase ? nodeLastCase + 'c' : this.editingNode.key + 'a';
            const newCase = {
                id: caseId,
                name: 'Case ' + caseId,
                scenario: 'large scenario text'
            };
            this.editingNode.cases.push(newCase);
            this.editingCase = newCase;
        },
        setEditingCase(payload) {
            console.log('setEditingCase', payload)
            this.editingCase = payload
        },
        deleteEditingCase() {
            const deletingCaseId = this.editingCase.id
            this.editingCase = null
            this.editingNode.cases = this.editingNode.cases.filter(caseItem => caseItem.id !== deletingCaseId)
        }
    },
})

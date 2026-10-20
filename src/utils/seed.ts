import type { Board } from '../types/board'

export const initialBoard: Board = {
    cards: {
        'card-1': {
            id: 'card-1',
            title: 'Prepare project documentation',
            description: 'Describe the system architecture and deployment steps for the production environment.',
            priority: 'high',
            dueDate: '2026-10-25',
            labels: ['documentation', 'urgent']
        },
        'card-2': {
            id: 'card-2',
            title: 'Design logo',
            priority: 'medium',
            labels: ['design']
        },
        'card-3': {
            id: 'card-3',
            title: 'Refactor login module',
            description: 'Change the session mechanism to JWT tokens.',
            priority: 'high',
            dueDate: '2026-10-22',
            labels: ['backend', 'refactor']
        },
        'card-4': {
            id: 'card-4',
            title: 'Fix footer rendering bug',
            priority: 'low',
            labels: ['frontend', 'bug']
        },
        'card-5': {
            id: 'card-5',
            title: 'Recruitment meeting',
            description: 'Technical interview with the Senior Dev candidate.',
            priority: 'medium',
            dueDate: '2026-10-20',
            labels: ['hr']
        }
    },
    columns: {
        'column-1':{
            id: 'column-1',
            title: 'To Do',
            cardIds: ['card-1', 'card-2']
        },
        'column-2': {
            id: 'column-2',
            title: 'In Progress',
            cardIds: ['card-3','card-4']
        },
        'column-3': {
            id: 'column-3',
            title: 'Done',
            cardIds: ['card-5']
        },
    },
    columnOrder: ['column-1', 'column-2', 'column-3']
}

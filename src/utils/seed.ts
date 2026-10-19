import type { Board } from '../types/board'

const initialBoard: Board = {
    cards: {
        'card-1': {
            id: 'card-1',
            title: 'Przygotować dokumentację projektu',
            description: 'Opisać architekturę systemu oraz kroki wdrożeniowe dla środowiska produkcyjnego.',
            priority: 'high',
            dueDate: '2026-10-25',
            labels: ['dokumentacja', 'pilne']
        },
        'card-2': {
            id: 'card-2',
            title: 'Zaprojektować logo',
            priority: 'medium',
            labels: ['design']
        },
        'card-3': {
            id: 'card-3',
            title: 'Refaktorować moduł logowania',
            description: 'Zmienić mechanizm sesji na tokeny JWT.',
            priority: 'high',
            dueDate: '2026-10-22',
            labels: ['backend', 'refaktor']
        },
        'card-4': {
            id: 'card-4',
            title: 'Naprawić błąd z wyświetlaniem stopki',
            priority: 'low',
            labels: ['frontend', 'bug']
        },
        'card-5': {
            id: 'card-5',
            title: 'Spotkanie rekrutacyjne',
            description: 'Rozmowa techniczna z kandydatem na stanowisko Senior Dev.',
            priority: 'medium',
            dueDate: '2026-10-20',
            labels: ['hr']
        }
    },
    columns: {
        'column-1':{
            id: 'column-1',
            title: 'To Do',
            cardIds: ['card1', 'card2']
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
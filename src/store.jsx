import { create } from 'zustand';
// const MOCK_DATA = [
//   {
//     id: 1,
//     title: '작업 목록 1',
//     desc: '해야 할 작업 목록입니다. 우선순위를 정하고 진행하세요.',
//     type: 'todo',
//     created_at: '2023-10-01',
//   },
// ]

export const useBoardStore = create((set) => ({
    boards: [],
    addBoard: (board) => set((state) => ({
        boards: [...state.boards, board],
    })),
    removeBoard: (id) => set((state) => ({
        boards: state.boards.filter((item) => item.id !== id),
    })),
    editBoard: (id, board) =>
        set((state) => ({
            boards: state.boards.map((item) => (item.id === id ? board : item)),
        })),
}));
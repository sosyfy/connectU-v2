"use client";
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface BearState {
    user: User | undefined  
    update: (user: User) => void
}

const useUserStore = create<BearState>()(
    devtools(
        persist(
            (set) => ({
                user: undefined,
                update: (user) => set((state) => ({ user: user })),
            }),
            {
                name: 'bear-storage',
            }
        )
    )
)

export default useUserStore
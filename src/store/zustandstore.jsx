import { create } from "zustand";


const useStore = create((set) =>({
    sideBarOpen:false,
    toggleSidebar: () => set((state)=> ({sideBarOpen: !state.sideBarOpen})),
    openSidebar: () => set({sideBarOpen: true}),
    closeSidebar: () => set({sideBarOpen: false})
}))

export default useStore;
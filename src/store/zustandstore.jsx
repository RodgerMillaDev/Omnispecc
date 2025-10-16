import { create } from "zustand";


const useStore = create((set) =>({
    sideBarOpen:false,
    professionDash: false,
    userprofiledash: false,
    chatgram:true,
    toggleSidebar: () => set((state)=> ({sideBarOpen: !state.sideBarOpen})),
    openSidebar: () => set({sideBarOpen: true}),
    closeSidebar: () => set({sideBarOpen: false}),
    showProfessions: () => set({professionDash: true}),
    hideProfessions: () => set({professionDash: false}),
    showuserProfile: () => set({userprofiledash: true}),
    closeuserProfile: () => set({userprofiledash: false}),
    showChatGram: () => set({chatgram:true}),
    hIdeChatGram: () => set({chatgram:false})

}))

export default useStore;
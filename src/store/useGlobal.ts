import { create } from "zustand"

export const useGlobal = create((set:any, get:any) => ({
    drawer: false,
    drawerProfile: false,
    setDrawer: (payload:boolean) => set((state:any) => ({ 
      drawer: payload
    })),
    setDrawerProfile: (payload:boolean) => set((state:any) => ({ 
      drawerProfile: payload
    })),
  })
)
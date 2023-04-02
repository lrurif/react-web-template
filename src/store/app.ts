import { create } from "zustand";
import { persist } from "zustand/middleware";



type AppStoreType = {
    isCollapsed: boolean,
    toggleCollapsed: () => void,
}
let store = persist<AppStoreType>((set, get) => ({
    isCollapsed: false,
    toggleCollapsed() {
        set(() => ({
            isCollapsed: !get().isCollapsed
        }))
    }
  }), { name: "userInfo" });
  const useAppStore = create(store)
export default useAppStore;
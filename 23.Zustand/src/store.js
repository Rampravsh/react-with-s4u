import { create } from "zustand";

const useMyStore = create((set, get) => {
  return {
    count: 1,
    name: "rpk",
    increment: function () {
      const { count } = get();
      set({ count: count + 1 });
    },
    decrement: function () {
      const { count } = get();
      set({ count: count - 1 });
    },
    captlizeName: function () {
      const { name } = get();
      set({ name: name.charAt(0).toUpperCase() + name.slice(1) });
    },
  };
});

export default useMyStore;

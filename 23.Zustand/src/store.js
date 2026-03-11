import { create } from "zustand";

const useMyStore = create(() => {
  return {
    coutn: 1,
    name: "RPK",
  };
});

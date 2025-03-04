import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => {
    return { count: 0 };
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++;
    },
  },
});

export const useCounterStore2 = defineStore("counter", {
  state: () => ({ count: 100, count2: 200 }),
  actions: {
    increment() {
      this.count++;
    },
  },
});

import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type Action = {};

interface State {}

export const useCommonStore = create<State & Action>()(
  immer((set, get) => ({}))
);

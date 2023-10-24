import { create } from 'zustand'
import { devtools } from 'zustand/middleware';

export type Bears = "blackBears" | "polarBears" | "pandaBears";
interface Bear {
  id: number;
  name: string;
}


export interface BearState {
  blackBears: number;
  polarBears: number;
  pandaBears: number;

  bears: Bear[];

  totalBears: () => number;

  increaseBears: (by: number, target: Bears) => void;
  increaseBlackBears: (by: number) => void;
  increasePolarBears: (by: number) => void;
  increasePandaBears: (by: number) => void;


  doNothing: () => void;
  addBear:   () => void;
  clearBears: () => void;


}

export const useBearStore = create<BearState>()(
  devtools((set, get) => ({
    blackBears: 10,
    polarBears: 5,
    pandaBears: 1,
  
  
    bears: [ { id: 1, name: 'Oso #1' }  ],
    
    
    
    totalBears() {
      return get().blackBears + get().polarBears + get().pandaBears + get().bears.length;
    },
    increaseBears: (by: number, target: Bears) => set((state) => ({ [target]: state[target] + by })),
  
    increaseBlackBears: (by: number) => set((state) => ({ blackBears: state.blackBears + by })),
    increasePolarBears: (by: number) => set((state) => ({ polarBears: state.polarBears + by })),
    increasePandaBears: (by: number) => set((state) => ({ pandaBears: state.pandaBears + by })),
    
  
    doNothing: () => set(state => ({ bears: [...state.bears] })),
    addBear: () => set(state => ({ 
      bears: [...state.bears, { id: state.bears.length + 1, name: `Oso #${ state.bears.length + 1 }` }] 
    })),
    clearBears: () => set({ bears: [] })
  
  }))
);
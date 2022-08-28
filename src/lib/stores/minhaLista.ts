import { writable } from "svelte/store";

const { subscribe, set, update } = writable<Array<string>>([]);

export const minhaLista = {
  subscribe,
  set,
  update,
  adicionarIngrediente(ingrediente: string) {
    update((valoratual) => [...valoratual, ingrediente]);
  },
  removeIngrediente(ingrediente: string) {
    update((valorAtual) =>
      valorAtual.filter((item: string) => item !== ingrediente)
    );
  },
};

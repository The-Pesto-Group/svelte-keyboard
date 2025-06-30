declare module 'svelte-keyboard' {
  import { SvelteComponent } from "svelte";

  export type KeyboardProps = {
    custom?: Array<{ row: number, value: string }> | null;
    localizationLayout?: 'qwerty' | 'azerty';
    layout?: 'standard' | 'crossword' | 'wordle';
    keyClass?: {
      [k: string]: string
    };
    noSwap?: string[]
  };

  export type KeyboardEvents = {
    keydown: CustomEvent<string>;
    [evt: string]: CustomEvent<any>;
  };

  export type KeyboardSlots = {};

  export default class Keyboard extends SvelteComponent<
    KeyboardProps,
    KeyboardEvents,
    KeyboardSlots
  > {
  }
}
declare module 'random-words' {
    export default function randomWords(options?: {
      min?: number;
      max?: number;
      exactly?: number;
      join?: string;
      wordsPerString?: number;
      formatter?: (word: string, index: number) => string;
    }): string | string[];
  }
  
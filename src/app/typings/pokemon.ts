export type PokemonSex = 'male' | 'female';

export interface Pokemon {
  name: string;
  level: number;
  picture?: string;
  sex: PokemonSex;
}

export interface InfoPokemon {
  name: string;
  sprites: {
    front_default: string;
  };
  abilities: [{
    ability: {
      name: string;
    }
  }];
  types: [{
    type: {
      name: string;
    }
  }];
};

export interface NamePokemon {
  results: [{ name: string }];
};

const pokemon = require('./data.js');

const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: true, difficulty: 1 },
    { location: "Cerulean City", completed: true, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
}
console.dir(pokemon, { maxArrayLength: null })
console.log(game)

game.difficulty = ("Easy");
console.log('Exercise 3 resault:',game.difficulty);

const starterPokemon = pokemon.find(p=>p.starter === true);
game.party.push(starterPokemon);
console.log('Exercise 4 resault:',game.party);

const newPokemon1 = {
    name: "Ivysaur",
    type: "grass",
    HP: 60,
};

const newPokemon2 = {
    name: "Venosaur",
    type: "Grass",
    HP: 80,
};

const newPokemon3 = {
    name: "Charizard",
    type: "Fire",
    HP: 78,

};

game.party.push(starterPokemon, newPokemon1, newPokemon2, newPokemon3);


console.log('Exercise 5 resault:',game.party);


let gyms = [
   { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
];

gyms.forEach(gym => {
    if (gym.difficulty < 3) {
        gym.completed = true;
    }
});

console.log('Exercise 6 resault:',game.gyms);

const starterIndex = game.party.findIndex(p => p.starter === true);
let evolvedPokemon;

switch (game.party[starterIndex].name) {
    case 'Bulbasaur':
        evolvedPokemon = pokemon.find(p => p.name === 'Ivysaur');
        break;
    case 'Charmander':
        evolvedPokemon = pokemon.find(p => p.name === 'Charmeleon');
        break;
    case 'Squirtle':
        evolvedPokemon = pokemon.find(p => p.name === 'Wartortle');
        break;
    case 'Pikachu':
        evolvedPokemon = pokemon.find(p => p.name === 'Raichu');
        break;
}

if (evolvedPokemon) {
    game.party.splice(starterIndex, 1, evolvedPokemon);
}
console.log('Exercise 7 resault:',game.party);

game.party.forEach(p => console.log('Exercise 8 resault:',p.name));

const starters = pokemon.filter(p => p.starter === true);
starters.forEach(s => console.log('Exercise 9 resault:',s.name));

game.catchPokemon = function(pokemonObj) {
    this.party.push(pokemonObj);
}

const newPokemon = pokemon.find(p => p.name === 'Pidgey');
game.catchPokemon(newPokemon);

console.log('Exercise 10 resault:',game.party);



game.catchPokemon = function(pokemonObj) {
    this.party.push(pokemonObj);
    const pokeballItem = this.items.find(item => item.name === 'pokeball');
    if (pokeballItem) {
        pokeballItem.quantity -= 1;
    }
}

const anotherNewPokemon = pokemon.find(p => p.name === 'Jigglypuff');
game.catchPokemon(anotherNewPokemon);

console.log('Exercise 11 resault:',game.party);



game.gyms.forEach(gym => {
    if (gym.difficulty < 6) {
        gym.completed = true;
    }
});

console.log('Exercise 12 resault:',game.gyms);

module.exports = game;


game.gymStatus = function() {
    const gymTally = { completed: 0, incomplete: 0 };
    this.gyms.forEach(gym => {
        if (gym.completed) {
            gymTally.completed += 1;
        }
        else {
            gymTally.incomplete += 1;
        }
    }
    );
    console.log('Exercise 13 resault:',gymTally);
}

game.gymStatus();



game.partyCount = function() {
    return this.party.length;
}
console.log('Exercise 14 resault:',game.partyCount());



game.gyms.forEach(gym => {
    if (gym.difficulty < 8) {
        gym.completed = true;
    }
}

);

console.log('Exercise 15 resault:',game.gyms);



console.log('Exercise 16 resault:',game);

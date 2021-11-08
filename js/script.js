let pokemonList = [
  {
   name: 'Caterpie',
   height: 2,
   type: 'bug' ,
   weight: 3   
  }, 
  
  {
      name: 'Charmeleon',
      height: 1,
      type: 'bug' ,
      weight: 19   
  }, 
  
  {
      name: 'Parasect',
      height: 1,
      type: ['grass', 'bug'] ,
      weight: 3   
  },

  {
      name: 'Sneasel',
      height: 3,
      type: ['dark', 'ice'] ,
      weight: 28   
  }

];

//for loop that iterates over each item in pokemonList:

for (let i = 0; i < pokemonList.length; i++) {
    document.write(
      "<p>" + (i + 1) + ": " + pokemonList[i].name + ": Pokémon name" + "</p>"
    );
  
    if (pokemonList[i].height > 2) {
      document.write(
        "<p>" +
          '"' +
          pokemonList[i].name +
          " (height:" +
          pokemonList[i].height +
          ") - Wow, that's big\"" +
          "<p>" +
          "-----"
      );
    } else {
      document.write(
        "<p>" +
          '"' +
          " " +
          pokemonList[i].name +
          " (height:" +
          pokemonList[i].height +
          ')"' +
          "<p>" +
          "-----"
      );
    }
  }
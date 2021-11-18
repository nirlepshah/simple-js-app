// wrapping pokemonList array in an IIFE 

let pokemonRepository = (function(){

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
// functions to add item to the pokemonList 
// function will check of the datatype of the element inserted is object or not

function add(pokemon){
  if(typeof (pokemon) === 'object'){

      pokemonList.push(pokemon);
  }
  else{
    document.write('Add element of data type object ')
  }

}

// function to return all the items of the pokemonList array

function getAll(){
  return pokemonList;
}

//function to run a console.log() on the Pokémon object 

function ShowDetails(pokemon){
  console.log(pokemon);
  
}

// function dedicated for adding event listener to the newly created button

function addEvent1(button, pokemon){
  button.addEventListener('click', function(){
    ShowDetails(pokemon)
  })

}

// function to add list item and button to hold pokemon object and add styling 

function addListItem(pokemon) {
  let myVar = document.querySelector(".pokemon-list");
  let listItem = document.createElement("li");
  let button = document.createElement("button");
  button.innerText = pokemon.name;
  button.classList.add("my_class");
  listItem.appendChild(button);
  myVar.appendChild(listItem);
  document.write('<br>')
  addEvent1(button, pokemon);
}

// IIFE returns only an object with the same names for keys as values

return{
  add: add,
  getAll: getAll,
  addListItem: addListItem,
}

})();

document.write("</br>")

// Use of add function to add item in the pokemonList

pokemonRepository.add({name: "Pidgeot", height: 4, type:"Bird", weight:87 });

/*  // Use of forEach() Loop to iterate over pokemonList: 

  document.write("</br>")

  function myFunction(pokemon, index)  {
     
  if (pokemon.height>2){
    document.write(` <p> ${index+1} :  ${pokemon.name} = Pokemon name </br>`);
    document.write(`<p> ${pokemon.name} (height:${pokemon.height}) - Wow that's big </br>`)
    
  }
else{
  document.write(`<p> ${index+1} :  ${pokemon.name} = Pokemon name </br>` );
  document.write(` <p> ${pokemon.name} (height:${pokemon.height})</br> `)
  }
 } 
    */
   // Foreach function to fetch and display each Pokemon object in list and button element
 function myFunction(pokemon)
 {
   
   pokemonRepository.addListItem(pokemon);
 }
  
  pokemonRepository.getAll().forEach(myFunction);

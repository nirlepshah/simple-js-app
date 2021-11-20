// wrapping pokemonList array in an IIFE 

let pokemonRepository = (function(){

let pokemonList = [
  {
   name: 'Caterpie',
   height: 2,
   type: 'bug' ,
   weight: 3, 
   imgFile: './img/Caterpie.png' 
   
  }, 
  
  {
      name: 'Charmeleon',
      height: 1,
      type: 'bug' ,
      weight: 19,   
      imgFile: './img/Charmeleon.png'
  }, 
  
  {
      name: 'Parasect',
      height: 1,
      type: ['grass', 'bug'] ,
      weight: 3,   
      imgFile: './img/Parasect.png'
  },

  {
      name: 'Sneasel',
      height: 3,
      type: ['dark', 'ice'] ,
      weight: 28,
      imgFile: './img/Sneasel.png'   
  }

];
// functions to add item to the pokemonList 
// function will check of the datatype of the element inserted is object or not

function add(pokemon){
  if(pokemon.hasOwnProperty('name') && pokemon.hasOwnProperty('height') && pokemon.hasOwnProperty('type') && pokemon.hasOwnProperty('weight') && pokemon.hasOwnProperty('imgFile')){

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

// function to chnage background color

function changeBackground(color) {
  document.body.style.background = color;
} 

// function dedicated for adding event listener to the newly created button

function addShowDetailsListener(button, pokemon){
  button.addEventListener('click', function(){
    ShowDetails(pokemon);
    changeBackground('lightblue');
    // let img = document.createElement('img');
    // img.src = "./img/Caterpie.png"
    // document.body.appendChild(img)
  })
}

// function to add list item and button to hold pokemon object and add styling 

function addListItem(pokemon) {
  
  let myVar = document.querySelector(".pokemon-list");
  let listItem = document.createElement("li");
  let button = document.createElement("button");
   button.innerText = pokemon.name;
  listItem.appendChild(button);
   button.classList.add("my_class");
   myVar.appendChild(listItem);
   let span = document.createElement("span")
   span.innerText = ` Height is ${pokemon.height}.`;
   listItem.appendChild(span);
   let span1 = document.createElement("span")
   span1.innerText = ` Weight is ${pokemon.weight}.`;
   listItem.appendChild(span1);
   let span3 = document.createElement("span")
   span3.innerText = ` Type is ${pokemon.type}.`;
   listItem.appendChild(span3);
   addShowDetailsListener(button, pokemon);
   let img = document.createElement("img");
   img.src = pokemon.imgFile;
   listItem.appendChild(span3);
   let span4 = document.createElement("span");
   span4.innerText = ` Image of ${pokemon.name} is : `
   listItem.appendChild(span4);
   listItem.appendChild(img);
   
}

// IIFE returns only an object with the same names for keys as values

return{
  add: add,
  getAll: getAll,
  addListItem: addListItem,
}

})();



// Use of add function to add item in the pokemonList

pokemonRepository.add({name: "Pidgeot", height: 4, type:"Bird", weight:87, imgFile:"./img/Pidgeot.png" });



   // Foreach function to fetch and display each Pokemon object in list and button element
 function myFunction(pokemon)
 {
      pokemonRepository.addListItem(pokemon);

 }
  
  pokemonRepository.getAll().forEach(myFunction);

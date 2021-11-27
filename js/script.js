// wrapping pokemonList array in an IIFE 

let pokemonRepository = (function(){

  const pokemonList = [];
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=75'
  

  // functions to add item to the pokemonList and  will check the datatype of the element inserted has required property
  
  function add(pokemon){
    if(pokemon.hasOwnProperty('name') && pokemon.hasOwnProperty('detailsUrl'))
        pokemonList.push(pokemon);
       }
  
  // function to return all the items of the pokemonList array
  
  function getAll(){
    return pokemonList;
  }
  //function to change background color
  function changeBackground(color) {
    document.body.style.background = color;
  } 
  // function to add list item and button to hold pokemon object and add styling 
  
  function addListItem(pokemon) {
    const myVar = document.querySelector(".pokemon-list");
    const listItem = document.createElement("li");
    const button = document.createElement("button");
    button.innerText = pokemon.name;
    listItem.appendChild(button);
    button.classList.add("my_class");
    myVar.appendChild(listItem);
    button.addEventListener('click', function(event){
    showDetails(pokemon);
    changeBackground('lightblue')
     })  
  }
// function to add Loading message while page has not loaded 

  function showLoadingMessage() {
    window.onload = function(){ document.getElementById("loading").style.display = "none" }
  }
  // function to remove  Loading message while page has been loaded 
  function hideLoadingMessage(){
    window.onload = function(){ document.getElementById("loading").style.display = "block" }
  }

  // function to load data from external source.
  
  function loadList(){
    showLoadingMessage();
    return fetch(apiUrl).then(function (response){
      
      return response.json();
    }).then(function(json){
      hideLoadingMessage()
      json.results.forEach(function(item){
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon)
        console.log(pokemon);
      });
    }).catch(function (e) {
      hideLoadingMessage();
    console.log(e)  
    })
  }
 
  // function to fetch parameter details of the Pokemon from the external source

  function loadDetails(pokemon) {
    showLoadingMessage();
    let url = pokemon.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      hideLoadingMessage();
      // Now we add the details to the item
      pokemon.imageUrl = details.sprites.front_default;
      pokemon.height = details.height;
      pokemon.types = details.types;})
      .catch(function (e) {
        console.error(e);
    })
  }
  // function to display pokemon object on the console.

  function showDetails(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function () {
      console.log(pokemon);
    });
  }

  
  function showAdditionalDetails(pokemon){
    window.scrollTo(0, 0)
    let placeHolder = document.querySelector(".Container")
    placeHolder.classList.add("align")
    let note = document.createElement("p")
    note.innerText=`Note: Hit "Cancel" to move back to the Pokemon list`
    note.classList.add("note")
    placeHolder.appendChild(note)
    let name = document.createElement('p')
    name.innerText=`Name of the pokemon is "${pokemon.name}"`
    placeHolder.appendChild(name)
    let imageName = document.createElement('p')
    imageName.innerText = `Image of "${pokemon.name}" is:`
    placeHolder.appendChild(imageName)
    let imgElement = document.createElement('img')
    imgElement.src = pokemon.imageUrl;
    placeHolder.appendChild(imgElement);
    placeHolder.appendChild(document.createElement("br"));    
    let heightElement = document.createElement('p');
    heightElement.innerText = `Height of "${pokemon.name}" is: ${pokemon.height}`;
    placeHolder.appendChild(heightElement);
    placeHolder.appendChild(document.createElement("br"));
    let button = document.createElement('button')
    button.innerText="Cancel"
    placeHolder.appendChild(button)
    button.classList.add("buttonCLass")
    document.querySelector('.buttonCLass').addEventListener('click',function(){
     document.getElementsByClassName('my_class').disabled = true
     clear();
     pokemonRepository.loadList().then(function() {
     pokemonRepository.getAll().forEach(function(pokemon)
     {
      pokemonRepository.addListItem(pokemon);
     });
     });
    })
    }

    function clear()  {
      let clearContent = document.querySelector(".Container")
      clearContent.innerHTML="";
   }
  // IIFE returns only an object with the same names for keys as values
  
  return{
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  }
  
  })();
  
        pokemonRepository.loadList().then(function() {

        pokemonRepository.getAll().forEach(function(pokemon)
        {
        pokemonRepository.addListItem(pokemon);
        });
          });
    

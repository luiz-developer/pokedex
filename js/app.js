const InforPokemonImg = document.querySelector('.pokemon-image');

const inforName = document.querySelector('.name');

const inforHeight = document.querySelector('.height');

const inforWeight = document.querySelector('.weight');

const inforDisplayLeft = document.querySelector('.display-left');

const inforDisplayRight = document.querySelector('.display-right');

var audio = new Audio('pokedex-sound.mp3');

pokemonId = 1;

var lastClass = 'caracter-8-9';

inforName.classList.add(lastClass)

const fetchPokemon = async (pokemonId) => {

    document.querySelector('.light').classList.add('active');

    setTimeout(function() {

        document.querySelector('.active').classList.remove('active');

    }, 700);

    //acess api

    const imagePokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemonId}.gif`;

    const dataApi = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);

    const dataJson = await dataApi.json();

    let objToString = JSON.stringify(dataJson);

    let StringToObj = JSON.parse(objToString);

    audio.play();

    //add info in html

    InforPokemonImg.src = imagePokemon;

    inforName.innerHTML = (StringToObj.name);

    const caracter = (StringToObj.name.length)

    

    lengthStr();

    inforHeight.innerHTML = `HEIGHT: 0.${(StringToObj.height)}m`;

    inforWeight.innerHTML = `WEIGHT: ${(StringToObj.weight)}g`;

    inforDisplayLeft.innerHTML = `TYPE: ${(StringToObj.types[0].type.name)} </br>

    HP: ${StringToObj.stats[0].base_stat} </br> 

    ATTACK: ${StringToObj.stats[1].base_stat} </br> 

    DEFENCE: ${StringToObj.stats[2].base_stat} </br>`;

    inforDisplayRight.innerHTML = `SPEED: ${(StringToObj.stats[3].base_stat)} </br>

    SPECIAL ATTACK: ${StringToObj.stats[4].base_stat} </br> 

    SPECIAL DEFENCE: ${StringToObj.stats[5].base_stat} </br>`;

    //console.log(dataJson)

    

    function lengthStr() {

        inforName.classList.remove(lastClass);

        

        if (caracter == 3 ||

        caracter == 4) {

            

            inforName.classList.add('caracter-3-4');

            lastClass = 'caracter-3-4';

            

        }

        

        if (caracter == 5 ||

        caracter == 6 ||

        caracter == 7) {

            

            inforName.classList.add('caracter-5-7');

            lastClass = 'caracter-5-6';

        }

        

        if (caracter == 8 || 

        caracter == 9) {

            

            inforName.classList.add('caracter-8-9');

            lastClass = 'caracter-8-9';

            

        }

        

        if (caracter == 10) {

            inforName.classList.add('caracter-10');

            lastClass = 'caracter-10';

        }

        

        if (caracter == 11) {

            inforName.classList.add('caracter-11');

            lastClass = 'caracter-11';

        }

        

        if (caracter == 12) {

            inforName.classList.add('caracter-12');

            lastClass = 'caracter-12';

        }

    }

}

fetchPokemon(pokemonId);

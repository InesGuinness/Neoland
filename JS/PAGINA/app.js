const getData = async () => {
    const data = [];
    for (let i = 1; i < 31; i++) {
      const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      const pokemonJson = await pokemon.json();
      data.push(pokemonJson);
    }
  
    mappeoDato(data);
  };
  
  const mappeoDato = (data) => {
    console.log(data);
    const dataMappeada = data.map((pokemon, index) => ({
      name: pokemon.name,
      image: pokemon.sprites.other.dream_world.front_default,
    }));
  
    printGallery(dataMappeada);
  };
  
  const printGallery = (dataPrint) => {
    console.log(dataPrint);
  
    dataPrint.forEach((pokemon, index) => {
      const figure = `
      <figure>
          <img src=${pokemon.image} />
          <h3>${pokemon.name}</h3>
      </figure>
      
      `;
      document.getElementById("app").innerHTML += figure;
    });
  };
  getData();
  
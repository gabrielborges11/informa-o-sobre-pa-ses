function obterResultados() {
    const nomePais = document.getElementById('nomePais').value;

   
    const url = `https://restcountries.com/v3.1/name/${nomePais}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {

            const pais = data[0];

            const capitalUrl = pais.capital[0];
            const populacao = pais.population
           // const bandeira = pais.coatOfArms.png; 
           const bandeira = pais.flags.png; 
           const continente = pais.continents[0]

            const resultadoDiv = document.getElementById('resultado');
            const resultado2Div = document.getElementById('resultado2');
            const resultado3Div = document.getElementById('resultado3');
            const resultado4Div = document.getElementById('resultado4');

            resultadoDiv.innerHTML = "a capital de "+nomePais+" é "+capitalUrl
            resultado2Div.innerHTML = "população: "+populacao
            //msg.innerHTML ="bração de armas:"
            resultado4Div.innerHTML = "continente: "+continente
            resultado3Div.innerHTML = `<img src="${bandeira}" alt="Bandeira do ${nomePais}" style="width:150px; height:100px;">`;
           
          console.log(data)

        })
        .catch(error => {
           
            const resultadoDiv = document.getElementById('resultado');
            const resultado2Div = document.getElementById('resultado2');
            const resultado3Div = document.getElementById('resultado3');
            const resultado4Div = document.getElementById('resultado4');
            resultadoDiv.innerHTML = `Erro ao obter informações do pais ${nomePais}.`;
            resultado2Div.innerHTML = ""
            resultado3Div.innerHTML = ""
            resultado4Div.innerHTML = ""

        });
}

document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        obterResultados()
    }
  });
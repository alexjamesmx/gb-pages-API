const API = 'https://referential.p.rapidapi.com/v1/country?fields=currency%2Ccurrency_num_code%2Ccurrency_code%2Ccontinent_code%2Ccurrency%2Ciso_a3%2Cdial_code&limit=250'

const content = null || document.getElementById('content')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f1ea1195d4msh4936e7f098906ecp173a88jsn5687cd4837bc',
		'X-RapidAPI-Host': 'referential.p.rapidapi.com'
	}
};

async function fetchData(uriApi){
    const response = await fetch(uriApi,options)
    const data = await response.json();
    return data
}

(async ()=>{
  try {
    const paises = await fetchData(API);
    // console.log(paises)
    
    let test  = paises.map(pais=>{
        console.log('pais ',pais)
    })
    // console.log("test ", test) 
    let view = `
    ${paises.map(pais => 
    
    
    `
    <div class="group relative">
    <p>Code: ${pais.value} ${pais.currency_code} ${pais.currency_num_code}</p>
    <div
      class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
      <img src="" alt="" class="w-full">
    </div>
    <div class="mt-4 flex justify-between">
      <h3 class="text-sm text-gray-700">
        <span aria-hidden="true" class="absolute inset-0"></span>
      </h3>
    </div>
  </div>
    `)}
   `
   content.innerHTML = view;
  } catch (error) {
    console.log(error)
  }


})()

async function search () {
  const response = await fetch('https://rickandmortyapi.com/api/character/47')
  const data = await response.json()
  console.log(data)
  document.getElementById('name').innerHTML = data?.name
  
  document.getElementById('origin').innerHTML = data?.origin?.name
  document.getElementById('species').innerHTML = data?.species
  document.getElementById('type').innerHTML = data?.type
  document.getElementById('status').innerHTML = data?.status 


  
}
search() 

/*
async function main(playerData){
    const response = await fetch (`https://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part='${playerData}%25`)
    const data = await response.json();
    return data;
}

main('mike trout')
    .then(idk =>console.log(idk.search_player_all.queryResults.row))
    .catch(error => console.log(error))
*/
/*
async function main(id){
const response = await fetch (`https://api-football-standings.azharimm.site/leagues/${id}/standings?season=2020&sort=asc`)
const data = await response.json();
return data;
}
main('eng.1')
    .then (idk => console.log(idk.data.standings))
    .catch (error => console.log(error))*/

//made a button, a search button
let searchButton = document.getElementById("btn")
let searchButton2 = document.getElementById("btn2")
const formData = document.querySelector('.post-list')
const post = document.querySelector('.post')
const post2 = document.querySelector('.post2')
//formData.style.display='none';
post.style.display='none';
post2.style.display ='none';


//Add an event listener to the button that runs the function sendApiRequest when it is called
//When we click it, we will console log the button has been pressed
searchButton.addEventListener("click", ()=>{
    
    //formData.style.display='block';
    post.style.display='block';

    async function sendApiRequest(){
        let API_KEY = 'xQmxysbExhXfG1v8eUW0Br8zwfmGXZAplNlc5F4C'
        const response = await fetch (`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
        const nasaData = await response.json();
        console.log(nasaData)
        post.innerHTML = useApiData(nasaData)
        return nasaData;

        

        //cant map through an array, so ill use a for in loop instead
        //formData.innerHTML = nasaData.map(data => useApiData(data)).join('');
        
        /*the for in loop is to go through every key, instead of the keys we want
        for (const i in nasaData) {
          useApiData(nasaData[i])
            }
        */
            
    }
    sendApiRequest()
        .then (random => console.log(random))
        .catch (error => console.log(error))
})

searchButton2.addEventListener("click", ()=>{
    
  //formData.style.display='block';
  post2.style.display='block';

  async function sendApiRequest2(){
      let API_KEY = 'xQmxysbExhXfG1v8eUW0Br8zwfmGXZAplNlc5F4C'
      const response2 = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=${API_KEY}`)
      const nasaData2 = await response2.json();
      console.log(nasaData2)
      post2.innerHTML = useApiData2(nasaData2)
      return nasaData2;

      

      //cant map through an array, so ill use a for in loop instead
      //formData.innerHTML = nasaData.map(data => useApiData(data)).join('');
      
      /*the for in loop is to go through every key, instead of the keys we want
      for (const i in nasaData) {
        useApiData(nasaData[i])
          }
      */
          
  }
  sendApiRequest2()
      .then (random => console.log(random))
      .catch (error => console.log(error))
})



        //cant map through an array, so ill use a for in loop instead
        //formData.innerHTML = nasaData.map(data => useApiData(data)).join('');
        //
        /*the for in loop is to go through every key, instead of the keys we want
        for (const i in nasaData) {
          useApiData(nasaData[i])
            }
        */
//this closes the form when clicking on the x 
function toggleForm(){
    post.style.display='none';
}  
//this closes the form when clicking on the x 
function toggleForm2(){
  post2.style.display='none';
}

function useApiData(nasaData){
  return `
            <i class = "fas fa-times form__exit click" onclick="toggleForm()"></i>
            <div class="nasa__img">
             <img class = "img1" src = "${nasaData.hdurl}">
            </div>
            <p class="nasa__para">
              ${nasaData.explanation}
            </p>`
}

function useApiData2(nasaData2){
  return `
        <i class = "fas fa-times form__exit click" onclick="toggleForm2()"></i>
         <div class="rover__img">
           <img class = "img2" src = "${nasaData2.photos[0].img_src}">
         </div>
         <p class="rover__para">
           ${nasaData2.photos[0].earth_date}
         </p>`
}





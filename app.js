// VARIABLES
const btnElementUser = document.getElementById('btnElementUser');
const btnElementPost = document.getElementById('btnElementPost');
const divResponses = document.querySelector('.responses');
const urlUser = "https://jsonplaceholder.typicode.com/users";
const urlPost = "https://jsonplaceholder.typicode.com/posts";
let data = [];
let responsePost = [];
let responseUser = [];
let printItemAccumulated = [];
let printItem = "";


// Listeners

loadListeners();

function loadListeners(){
btnElementUser.addEventListener('click', readUsersWithAsync);
btnElementPost.addEventListener('click', readPostAsyncFunction);
}

function readUsersWithPromises(){

    fetch(urlUser)
        .then((response)=>{
            return response.json();
            
        })
        .then((responseUser)=>{
            return responseUser
        })

        .catch((e)=>{
            console.log('error', e);
        })
}


async function readUsersWithAsync(){
    try{
    const request = await fetch(urlUser);
    const responseUser = await request.json();


    divResponses.innerHTML = '';

    printResponse(responseUser);

    } catch(error){

        console.log(error);
    }

    
}

function readPostWithPromises(){
    fetch(urlPost)
        .then((response)=>{
            return response
        })

        .then((responsePost)=>{
            console.log(responsePost);
        })
}

async function readPostAsyncFunction(){


    try{
    const request = await fetch(urlPost);
    const responsePost = await request.json();
        divResponses.innerHTML = ''
        printResponse(responsePost);

    } catch(erro){
        console.log(error);
    }
}

function printResponse(responses){
    divResponses.innerHTML ='<p>vacio</p>';
    printItem = "";

    responses.forEach((responseItem) => {
        divResponses.textContent = '';
        printItemAccumulated = ``;

        printItem += `
        <div class="response">
        <p>${JSON.stringify(responseItem)}</p>    
        </div>
        `;
              
    });

    divResponses.innerHTML = printItem;

}
import { openMobileNav, closeMobileNav, createWarning, removeWarning, createResult, copied } from "./function.js";
const closeButton = document.getElementById('closeButton');
const mobileNavBar = document.getElementById('mobileNavBar');
const inputField = document.getElementById('inputField');
const shorteningButton = document.getElementById('shorteningButton');


async function shortenTheUrl(){
    try{
        const url = "https://api.shrtco.de/v2";
        const endPoint = `/shorten?url=${inputField.value}`;
        const finalCode = url + endPoint; 
        const response = await fetch(finalCode, {
            method: 'POST'
        }, { cache: 'no-cache' });
        if(response.ok){
            const jsonResponse = await response.json();
            createResult(inputField.value, jsonResponse.result.short_link)
            // console.log(document.querySelectorAll('.shortLink'));
            if(document.querySelectorAll('.shortLink') !== null){
            document.querySelectorAll('.linkButton').forEach(item => {
                item.addEventListener('click', copied)
              })
        }
        }
    }
    catch(e){
        console.log(e);
    }    
}
function init() {
    mobileNavBar.addEventListener('click', openMobileNav);
    closeButton.addEventListener('click', closeMobileNav);
    shorteningButton.addEventListener('click', () => {
        if(inputField.value == ""){
            if(inputField.style.border !== '2px solid red'){
                inputField.style.border = '2px solid red';
                createWarning('Please enter a URL');
            }

        } else{
            inputField.style.border = 'solid black';
            removeWarning();
            shortenTheUrl();
        }
    }
    );
}

window.onload = init;
function openMobileNav(){
    const mobileNavMenu = document.getElementById('mobileNavMenu');
    mobileNavMenu.style.display = 'block';
}

function closeMobileNav(){
    const mobileNavMenu = document.getElementById('mobileNavMenu');
    mobileNavMenu.style.display = 'none';    
}

function createWarning(warning){
    const warningMessage = document.createElement('p');
    warningMessage.setAttribute("id", 'warningMes');
    warningMessage.innerHTML = `<em>${warning}<em>`
    warningMessage.style.color = 'red';
    warningMessage.style.fontSize = '10px';
    const inputAndWarning = document.getElementById('inputAndWarning');
    inputAndWarning.appendChild(warningMessage);
    const inputField = document.getElementById('inputField');
    inputField.classList.add('placeholderColor');
}

function removeWarning(){
    const inputField = document.getElementById('inputField');
    inputField.classList.remove("placeholderColor");
    if(document.getElementById("warningMes") != null){
        const inputAndWarning = document.getElementById('inputAndWarning');
        const warningMessage = document.getElementById('warningMes');
        inputAndWarning.removeChild(warningMessage);
    }
}
export { openMobileNav, closeMobileNav, createWarning, removeWarning};
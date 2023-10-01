const butInstall = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {
    // trigger event 
    window.deferredPrompt = event;
    // remove hidden class from buttton 
    butInstall.classList.toggle('hidden', false);
});


butInstall.addEventListener('click', async () => {
    if (!promptEvent) {
        return;
       }
    //    show prompt 
        promptEvent.prompt();
       
        // reset variable 
       window.deferredPrompt = null;
       
       butInstall.classList.toggle('hidden', true);
});


window.addEventListener('appinstalled', (event) => {
    // rest variable 
    window.deferredPrompt = null;
});

function removeDivs() {
    const regex = /^(?:[a-z0-9]{5})$/;
    const textDiv = document.getElementById('text');
    if (textDiv) {
        const divs = textDiv.getElementsByTagName('div');
        for (let i = 0; i < divs.length; i++) {
            if (regex.test(divs[i].className)) {
                //remove the div
                divs[i].remove();
                console.log('Saved by Unacademy Watermark Remover');
            }
        }
    }
}

console.log('Watermark Blocker: Content Script Loaded');
// Listen for DOM changes and call removeDivs if new divs are added
const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        if (mutation.type === 'childList') {
            removeDivs();
        }
    });
});

observer.observe(document, {childList: true, subtree: true});
// Call removeDivs on initial page load
removeDivs();

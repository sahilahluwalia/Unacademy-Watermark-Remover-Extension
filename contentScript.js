function removeDivs() {
    const ignoreList = ['middle', 'border', 'bottom', 'empty']
    const fiveDigitsRegex = /^(?:[a-z0-9]{5})$/;
    const fourDigitsRegex = /^(?:[a-z0-9]{4})$/;
    const sixDigitsRegex = /^(?:[a-z0-9]{6})$/;
    const textDiv = document.getElementById('text');
    if (textDiv) {
        const divs = textDiv.getElementsByTagName('div');
        for (let i = 0; i < divs.length; i++) {
            //remove the div
            if (divs[i].className.length === 5 || divs[i].className.length === 4 || divs[i].className.length === 6) {
                if (fiveDigitsRegex.test(divs[i].className) || fourDigitsRegex.test(divs[i].className) || sixDigitsRegex.test(divs[i].className)) {
                    if (ignoreList.includes(divs[i].className)) {
                        continue;
                    }
                    console.log('Saved by Unacademy Watermark Remover');
                    // console.log('length: ' + divs[i].className.length + ' class: ' + divs[i].className);
                    divs[i].remove();
                }
            }

        }
    }
}

function init() {
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
}

init()

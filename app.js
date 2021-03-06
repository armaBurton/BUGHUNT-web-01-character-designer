const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('report');
const chatchphrasesEl = document.getElementById('chatchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById(`catchphrase-button`);

let headCount = 0;
let middleCount = 0;
let bottomCount = 0;

const catchphrases = [];

headDropdown.addEventListener('change', () => {
    const value = headDropdown.value;
    headCount++;
    headEl.style.backgroundImage = `url("./assets/${value}-head.png")`;
    reportEl.textContent = displayStats();
});


middleDropdown.addEventListener('change', () => {
    const value = middleDropdown.value;
    middleCount++;
    middleEl.style.backgroundImage = `url("./assets/${value}-middle.png")`;
    reportEl.textContent = displayStats();
});


bottomDropdown.addEventListener('change', () => {
    const value = bottomDropdown.value;

    bottomCount++;
    bottomEl.style.backgroundImage = `url("./assets/${value}-pants.png")`;
    reportEl.textContent = displayStats();
});

catchphraseButton.addEventListener ('click', () => {
    const newCatchphrase = catchphraseInput.value;
    catchphrases.push(newCatchphrase);

    catchphraseInput.value = '';
    displayCatchphrases();
});

function displayStats() {
    return `You have changed the head ${headCount} times, the body ${middleCount} times, and the pants ${bottomCount} times. And nobody can forget your character's classic catchphrases:`;
}

function displayCatchphrases() {
    chatchphrasesEl.textContent = ``;
    for (let catchphrase of catchphrases) {
        const p = document.createElement('p');

        p.textContent = catchphrase;
        chatchphrasesEl.append(p);
    }
}

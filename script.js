const cities = [
    {
        name: "London",
        dispatch: "Dispatch No. 01",
        text: [
            "London is the capital city of England. It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.",
            "Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium."
        ]
    },
    {
        name: "Paris",
        dispatch: "Dispatch No. 02",
        text: [
            "Paris is the capital and most populous city of France, sitting on the Seine in the north of the country.",
            "Known as the City of Light, Paris has been a major center of finance, fashion, and the arts since the 17th century."
        ]
    },
    {
        name: "Tokyo",
        dispatch: "Dispatch No. 03",
        text: [
            "Tokyo is the capital of Japan and one of the most populous metropolitan areas in the world.", 
            "Once a small fishing village called Edo, Tokyo grew into a major city after becoming the seat of the Tokugawa shogunate in 1603."
        ]
    }
];

const cityList = document.getElementById('cityList');
const cityArticle = document.getElementById('cityArticle');

function renderNav(activeIndex) {
    cityList.innerHTML = cities.map((city ,i) => `
        <li class="${i === activeIndex ? 'active' :''}">
            <a href="#" data-index=${i}>${city.name}</a>
        </li>
    `).join('');
}

function renderArticle(index) {
    const city = cities[index];
    cityArticle.innerHTML = `
        <p class="eyebrow">${city.dispatch}</p>
        <h1>${city.name}</h1>
        ${city.text.map(description => 
            `<p>${description}</p>`
        ).join('')}
    `;
}

function showCity(index) {
    renderNav(index);
    renderArticle(index);
}

cityList.addEventListener('click', (e) => {
    const link = e.target.closest('a[data-index]');
    if (!link) return;
    e.preventDefault();
    showCity(Number(link.dataset.index));
});

showCity(0);
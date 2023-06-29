var btn = document.querySelector('#random')
btn.addEventListener('click', function () { exibe() })

// Requisição da WEB
async function fetchData() {
    let data = [];
    try {
        const response = await fetch("https://api.thecatapi.com/v1/images/search");

        data = await response.json();

    } catch (error) { console.error(error); return [] }

    return data;
}

async function exibe() {

    try {
        const gatos = await fetchData();
        let sec_cats = document.querySelector('.cats');

        gatos.forEach(eCat => {
            console.log(eCat);
            const catCardHTML = `
                <div class="cat-card">
                    <img class="foto" src="${eCat.url}" alt="">
                </div>
                `;
            sec_cats.insertAdjacentHTML('afterbegin', catCardHTML);
        });

    } catch (error) { console.error(error) }
}

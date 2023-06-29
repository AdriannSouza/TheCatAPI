var btn = document.querySelector('.random')
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
        const gato = await fetchData();
        let sec_cats = document.querySelector('.cats');
        
        gato.forEach(eCat => {
            const catCardHTML = `
                <div class="cat-card">
                    <img class="foto" src="${eCat.url}" alt="">
                </div>
                `;
            console.log(eCat);
            sec_cats.insertAdjacentHTML('afterbegin', catCardHTML);
        });

    } catch (error) { console.error(error) }
}

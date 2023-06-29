var btn = document.querySelector('.random');
btn.addEventListener('click', function () { exibe() });

// Requisição da WEB
async function fetchData() {
    let data = [];
    try {
        const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
        data = await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
    return data;
}

async function exibe() {
    try {
        const gatos = await fetchData();
        let sec_cats = document.querySelector('.cats');
        
        for (let i = 0; i < gatos.length; i++) {
            const eCat = gatos[i];
            console.log(eCat);
            const catCardHTML = `
                <div class="cat-card">
                    <img class="foto" src="${eCat.url}" alt="">
                </div>
            `;
            sec_cats.insertAdjacentHTML('afterbegin', catCardHTML);
            await delay(3000); // Aguarda 5 segundos antes de exibir a próxima imagem
        }

    } catch (error) {
        console.error(error);
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

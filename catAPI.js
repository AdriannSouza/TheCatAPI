var btncat = document.querySelector('#cat')
btncat.addEventListener('click', function () { exibe() })

var message = document.querySelector('.message')

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
        if (message) {message.remove()}
        const obj = await fetchData();
        let sec_cats = document.querySelector('.cats');
        
        obj.forEach(eCat => {
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

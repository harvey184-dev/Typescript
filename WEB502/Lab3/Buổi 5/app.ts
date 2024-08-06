const api = "http://localhost:3000/hinhdep";

const fetchAPI = async (api) => {
    const response = await fetch(api);
    return response.json();
}

const game = async () => {
    const data = await fetchAPI(api);
    const newData = data.sort((a, b) => 0.5 - Math.random());

    const divHinhdep = document.getElementById('divhinhdep');
    divHinhdep.innerHTML = newData.map((item) => {
        return `<div class="hinh">
                    <img src="public/images/${item.url}" title="${item.mota}" name="${item.ten}">
                </div>`;
    }).join('');

    const arrdivHinh = document.querySelectorAll('.hinh');

    arrdivHinh.forEach(
        (div: HTMLElement) => div.children.item(0).className = 'an'
    )

    arrdivHinh.forEach((div: HTMLElement) => {
        let img = div.children.item(0);
        div.onclick = async () => {
            img.className = (img.className == 'an') ? 'hien' : '';
            if (hinh_danglat == null) {
                hinh_danglat = img;
            } else {
                await delay(1000);
                if (img.getAttribute('name') != hinh_danglat.getAttribute('name')) {
                    hinh_danglat.className = 'an';
                    img.className = 'an'
                }
                hinh_danglat = null;
            }
        }
    })

}

game();

var hinh_danglat: Element = null;

const delay = (ms) => new Promise(res => setTimeout(res, ms))



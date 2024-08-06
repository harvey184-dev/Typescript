var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const api = "http://localhost:3000/hinhdep";
const fetchAPI = (api) => __awaiter(this, void 0, void 0, function* () {
    const response = yield fetch(api);
    return response.json();
});
const game = () => __awaiter(this, void 0, void 0, function* () {
    const data = yield fetchAPI(api);
    const newData = data.sort((a, b) => 0.5 - Math.random());
    const divHinhdep = document.getElementById('divhinhdep');
    divHinhdep.innerHTML = newData.map((item) => {
        return `<div class="hinh">
                    <img src="public/images/${item.url}" title="${item.mota}" name="${item.ten}">
                </div>`;
    }).join('');
    const arrdivHinh = document.querySelectorAll('.hinh');
    arrdivHinh.forEach((div) => div.children.item(0).className = 'an');
    arrdivHinh.forEach((div) => {
        let img = div.children.item(0);
        div.onclick = () => __awaiter(this, void 0, void 0, function* () {
            img.className = (img.className == 'an') ? 'hien' : '';
            if (hinh_danglat == null) {
                hinh_danglat = img;
            }
            else {
                yield delay(1000);
                if (img.getAttribute('name') != hinh_danglat.getAttribute('name')) {
                    hinh_danglat.className = 'an';
                    img.className = 'an';
                }
                hinh_danglat = null;
            }
        });
    });
});
game();
var hinh_danglat = null;
const delay = (ms) => new Promise(res => setTimeout(res, ms));

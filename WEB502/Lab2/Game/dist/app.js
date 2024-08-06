var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const arr_hinh = [
    { id: 1, ten: 'Hitokage', url: '1.png', mota: 'Hitokage', hinh: 1 },
    { id: 2, ten: 'Zennigame', url: '2.png', mota: 'Zennigame', hinh: 2 },
    { id: 3, ten: 'Fushigidane', url: '3.png', mota: 'Fushigidane', hinh: 3 },
    { id: 4, ten: 'Tsutarja', url: '4.png', mota: 'Tsutarja', hinh: 4 },
    { id: 5, ten: 'Pokabu', url: '5.png', mota: 'Pokabu', hinh: 5 },
    { id: 6, ten: 'Mijumaru', url: '6.png', mota: 'Mijumaru', hinh: 6 },
    { id: 7, ten: 'Hitokage', url: '1.png', mota: 'Hitokage', hinh: 1 },
    { id: 8, ten: 'Zennigame', url: '2.png', mota: 'Zennigame', hinh: 2 },
    { id: 9, ten: 'Fushigidane', url: '3.png', mota: 'Fushigidane', hinh: 3 },
    { id: 10, ten: 'Tsutarja', url: '4.png', mota: 'Tsutarja', hinh: 4 },
    { id: 11, ten: 'Pokabu', url: '5.png', mota: 'Pokabu', hinh: 5 },
    { id: 12, ten: 'Mijumaru', url: '6.png', mota: 'Mijumaru', hinh: 6 }
];
const divHinhdep = document.getElementById('divhinhdep');
const arr_hinhShuffle = arr_hinh.sort(() => 0.5 - Math.random());
let hien1hinh = (h) => {
    divHinhdep.innerHTML +=
        `<div class="hinh">
            <img src="public/images/${h.url}" title="${h.mota}" name="${h.ten}">
        </div>`;
};
arr_hinhShuffle.forEach(hien1hinh);
const arrdivHinh = document.querySelectorAll('.hinh');
arrdivHinh.forEach((div) => div.children.item(0).className = 'an');
let hinh_danglat = null;
arrdivHinh.forEach((div) => {
    let img = div.children.item(0);
    div.onclick = () => __awaiter(this, void 0, void 0, function* () {
        img.className = (img.className == 'an') ? 'hien' : 'an';
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
const delay = (ms) => new Promise(res => setTimeout(res, ms));

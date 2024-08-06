var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export const show = () => __awaiter(void 0, void 0, void 0, function* () {
    let data = yield fetch(`http://localhost:3000/phim`).then(res => res.json()).then(data => data);
    let text = ``;
    data.forEach(c => {
        text += `<div class="col-md-3">
        <img src="../public/${c.anh}" alt="" style="width: 100%;">
        <div class="menu bg-light" style="width: 100%;">
            <h2 class="text-center text-danger fw-bold">${c.ten}</h2>
            <a class="btn btn-primary btn-sm col-md-5 m-2" href="chitiet.html?id=${c.id}">Chi tiết</a>
            <a class="btn btn-primary btn-sm col-md-5 m-2" href="#"><i class="bi bi-telephone-fill"></i> Đặt
                vé</a>
        </div>
    </div>`;
    });
    return text;
});
export const chitiet = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let data = yield fetch(`http://localhost:3000/phim?id=${id}`)
        .then(res => res.json()).then(data => data[0]);
    let text = `
    <div class="col-lg-6">
    <img src="../public/${data.anh}" class="img-fluid product-img" alt="" style="width: 100%;">
</div>
<div class="col-lg-6">
    <h2 class="mb-4">${data.ten}</h2>
    <p><strong>Mô tả:</strong>${data.mota}</p>
    <button class="btn btn-primary"><i class="bi bi-telephone-fill"></i>  Đặt vé</button>
</div>
    `;
    return text;
});

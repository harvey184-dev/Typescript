export function addCategoryProduct() {
    document.getElementById('add_category_form')?.addEventListener('submit', function (event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của form

        // Lấy giá trị từ các trường input
        let title_category_product = (document.getElementById('title_category_product') as HTMLInputElement)?.value;
        let desc_category_product = (CKEDITOR.instances.editor as any)?.getData();

        // Tạo object chứa dữ liệu sản phẩm
        let data = {
            title_category_product: title_category_product,
            desc_category_product: desc_category_product
        };

        // Gửi yêu cầu POST đến API
        fetch('http://localhost:3000/admin/add_category_product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Thêm danh mục sản phẩm không thành công');
                }
                return res.json();
            })
            .then(data => {
                console.log(data.message);
                window.location.href = 'list_category.html';
            })
            .catch(error => {
                console.error('Lỗi:', error);
            });
    });
}

export function addProduct() {
    document.getElementById('add_product_form')?.addEventListener('submit', function (event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của form

        // Lấy giá trị từ các trường input
        let title_product = (document.getElementById('title_product') as HTMLInputElement)?.value;
        let image_product = (document.getElementById('image_product') as HTMLInputElement)?.value.split('\\').pop();
        let price_product = (document.getElementById('price_product') as HTMLInputElement)?.value;
        let quantity_product = (document.getElementById('quantity_product') as HTMLInputElement)?.value;
        let desc_product = (CKEDITOR.instances.editor as any)?.getData();
        let id_category_product = (document.getElementById('category_product') as HTMLInputElement)?.value;
        let product_hot = (document.getElementById('product_hot') as HTMLInputElement)?.value;
        let view = Math.floor(Math.random() * 1000);

        // Lấy ngày hiện tại
        let currentDate = new Date();
        let ngay = currentDate.toISOString();

        // Tạo object chứa dữ liệu sản phẩm
        let data = {
            title_product: title_product,
            image_product: image_product,
            price_product: price_product,
            quantity_product: quantity_product,
            desc_product: desc_product,
            id_category_product: id_category_product,
            product_hot: product_hot,
            date: ngay,
            view: view
        };

        // Gửi yêu cầu POST đến API
        fetch('http://localhost:3000/admin/add_product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Thêm sản phẩm không thành công');
                }
                return res.json();
            })
            .then(data => {
                console.log(data.message);
                window.location.href = 'list_product.html';
            })
            .catch(error => {
                console.error('Lỗi:', error);
            });
    });
}

export const category_product = async () => {
    let data = await fetch(`http://localhost:3000/category`).then(res => res.json()).then(data => data)
    let text = ``
    data.forEach(c => {
        text += `<option value="${c.id_category_product}">${c.title_category_product}</option>`
    })
    return text
}

export function editCategoryProduct(id_category_product: number) {
    document.getElementById('edit_category_form')?.addEventListener('submit', function (event) {
        event.preventDefault();

        let title_category_product = (document.getElementById('title_category_product') as HTMLInputElement)?.value;
        let desc_category_product = (CKEDITOR.instances.editor as any)?.getData();

        let data = {
            title_category_product: title_category_product,
            desc_category_product: desc_category_product
        };

        fetch(`http://localhost:3000/admin/edit_category_product/${id_category_product}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('update sản phẩm không thành công');
                }
                return res.json();
            })
            .then(data => {
                console.log(data.message);
                window.location.href = 'list_category.html';
            })
            .catch(error => {
                console.error('Lỗi:', error);
            });
    });
}

export const editProduct = (id_product: number): void => {
    document.getElementById('edit_product_form').addEventListener('submit', function (event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của form

        // Lấy giá trị từ các trường input
        let title_product = (document.getElementById('title_product') as HTMLInputElement)?.value;
        let image_product = (document.getElementById('image_product') as HTMLInputElement)?.value.split('\\').pop();
        let price_product = (document.getElementById('price_product') as HTMLInputElement)?.value;
        let quantity_product = (document.getElementById('quantity_product') as HTMLInputElement)?.value;
        let desc_product = (CKEDITOR.instances.editor as any)?.getData();
        let id_category_product = (document.getElementById('category_product') as HTMLInputElement)?.value;
        let product_hot = (document.getElementById('product_hot') as HTMLInputElement)?.value;
        let view = Math.floor(Math.random() * 1000);

        // Lấy ngày hiện tại
        let currentDate = new Date();
        let ngay = currentDate.toISOString();

        // Tạo object chứa dữ liệu sản phẩm
        let data = {
            title_product: title_product,
            image_product: image_product,
            price_product: price_product,
            quantity_product: quantity_product,
            desc_product: desc_product,
            id_category_product: id_category_product,
            product_hot: product_hot,
            date: ngay,
            view: view
        };

        // Gửi yêu cầu POST đến API
        fetch(`http://localhost:3000/admin/edit_product/${id_product}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Sửa sản phẩm không thành công');
                }
                return res.json();
            })
            .then(data => {
                console.log(data.message);
                window.location.href = 'list_product.html';
            })
            .catch(error => {
                console.error('Lỗi:', error);
            });
    });
};

export const ep = async (id_product: number): Promise<string> => {
    let data = await fetch(`http://localhost:3000/detail_product/${id_product}`).then(res => res.json()).then(data => data[0])
    let text = `<div class="form-group">
    <label for="title_product">Tên sản phẩm</label>
    <input type="text" id="title_product" class="form-control" value="${data.title_product}">
</div>
<div class="form-group">
    <label for="image_product">Hình ảnh sản phẩm</label><br>
    <img src="../../../public/uploads/product/${data.image_product}" height="200" alt="">
    <input type="file" id="image_product" class="form-control" value="${data.image_product}">
</div>
<div class="form-group">
    <label for="price_product">Giá sản phẩm</label>
    <input type="text" id="price_product" class="form-control" value="${data.price_product}">
</div>
<div class="form-group">
    <label for="quantity_product">Số lượng sản phẩm</label>
    <input type="text" id="quantity_product" class="form-control" value="${data.quantity_product}">
</div>
<div class="form-group">
    <label for="pwd">Miêu tả sản phẩm</label>
    <textarea id="editor" name="desc_product" rows="5" style="resize: none" class="form-control">${data.desc_product}</textarea>
</div>
<div class="form-group">
    <label for="category_product">Danh mục sản phẩm</label>
    <select class="form-control" id="category_product">
        <!-- Option được tạo bằng JavaScript từ API hoặc dữ liệu được cung cấp -->
    </select>
</div>
<div class="form-group">
    <label for="product_hot">Sản phẩm hot</label>
    <select class="form-control" id="product_hot">
        <option value="0">Không</option>
        <option value="1">Có</option>
    </select>
</div>
<button type="submit" class="btn btn-default">Thêm sản phẩm</button>`;
    return text;
}


export const ecp = async (id_category_product: number) => {
    let data = await fetch(`http://localhost:3000/category/${id_category_product}`)
        .then(res => res.json()).then(data => data[0])
    let text = `
            <div class="form-group">
                <label for="email">Tên danh mục</label>
                <input type="text" id="title_category_product" value="${data.title_category_product}" class="form-control">
            </div>
            <div class="form-group">
                <label for="pwd">Miêu tả danh mục</label>
                <textarea rows="5" id="editor" class="form-control">${data.desc_category_product}</textarea>
            </div>
            <button type="submit" class="btn btn-default">Thêm danh mục</button>
    `
    return text
}

export const listcategoryproduct = async () => {
    let data = await fetch(`http://localhost:3000/category`).then(res => res.json()).then(data => data)
    let text = ``
    data.forEach(c => {
        text += `<tr>
        <td>
            ${c.id_category_product}
        </td>
        <td>
            ${c.title_category_product}
        </td>
        <td>
            ${c.desc_category_product.replace(/"/g, '\\"')}
        </td>
        <td><a id="deleteCategoryProductLink_${c.id_category_product}">Xóa</a>
            || <a href="edit_category.html?id_category_product=${c.id_category_product}">Cập
                nhật</a></td>
    </tr>`
    })
    return text
}

export const listproduct = async () => {
    let data = await fetch(`http://localhost:3000/all_product`).then(res => res.json()).then(data => data);
    let text = ``;
    data.forEach(p => {
        text += `<tr>
        <td>${p.id_product}</td>
        <td>${p.title_product}</td>
        <td><img src="../../../public/uploads/product/${p.image_product}"
            height="100" width="100"></td>
        <td>${p.title_category_product}</td>
        <td>${p.price_product.toLocaleString('vi')}đ</td>
        <td>${p.quantity_product}</td>
        <td>${p.product_hot == 0 ? "Không" : "Có"}</td>
        <td><a id="deleteProductLink_${p.id_product}">Xóa</a> || <a href="edit_product.html?id_product=${p.id_product}">Cập
                nhật</a></td>
    </tr>`;
    });
    return text;
};


export const xoasp = async (id_product: number): Promise<void> => {
    try {
        const response = await fetch(`http://localhost:3000/admin/delete_product/${id_product}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error('Xóa sản phẩm không thành công');
        }

        const data = await response.json();
        console.log(data.message);
        window.location.href = 'list_product.html';
    } catch (error) {
        console.error('Lỗi:', error);
    }
};

export const xoadmsp = async (id_category_product: number): Promise<void> => {
    try {
        const response = await fetch(`http://localhost:3000/admin/delete_category_product/${id_category_product}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error('Xóa danh mục sản phẩm không thành công');
        }

        const data = await response.json();
        console.log(data.message);
        window.location.href = 'list_category.html';
    } catch (error) {
        console.error('Lỗi:', error);
    }
};





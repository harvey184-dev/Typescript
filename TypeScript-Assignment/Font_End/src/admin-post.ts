export function addCategoryPost() {
    document.getElementById('add_category_form')?.addEventListener('submit', function (event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của form

        let title_category_post = (document.getElementById('title_category_post') as HTMLInputElement)?.value;
        let desc_category_post = (CKEDITOR.instances.editor as any)?.getData();

        let data = {
            title_category_post: title_category_post,
            desc_category_post: desc_category_post
        }

        fetch('http://localhost:3000/admin/add_category_post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Thêm danh mục bài viết không thành công');
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

    })
}

export function editCategorypost(id_category_post: number) {
    document.getElementById('edit_category_form')?.addEventListener('submit', function (event) {
        event.preventDefault();

        let title_category_post = (document.getElementById('title_category_post') as HTMLInputElement)?.value;
        let desc_category_post = (CKEDITOR.instances.editor as any)?.getData();

        let data = {
            title_category_post: title_category_post,
            desc_category_post: desc_category_post
        };

        fetch(`http://localhost:3000/admin/edit_category_post/${id_category_post}`, {
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

export const ecp = async (id_category_post: number) => {
    let data = await fetch(`http://localhost:3000/categorypost/${id_category_post}`)
        .then(res => res.json()).then(data => data[0])
    let text = `
            <div class="form-group">
                <label for="email">Tên danh mục</label>
                <input type="text" id="title_category_post" value="${data.title_category_post}" class="form-control">
            </div>
            <div class="form-group">
                <label for="pwd">Miêu tả danh mục</label>
                <textarea rows="5" id="editor" class="form-control">${data.desc_category_post}</textarea>
            </div>
            <button type="submit" class="btn btn-default">Thêm danh mục</button>
    `
    return text
}

export const listcategorypost = async () => {
    let data = await fetch(`http://localhost:3000/categorypost`).then(res => res.json()).then(data => data)
    let text = ``
    data.forEach(c => {
        text += `<tr>
        <td>
            ${c.id_category_post}
        </td>
        <td>
            ${c.title_category_post}
        </td>
        <td>
            ${c.desc_category_post.replace(/"/g, '\\"')}
        </td>
        <td><a id="deleteCategorypostLink_${c.id_category_post}">Xóa</a>
            || <a href="edit_category.html?id_category_post=${c.id_category_post}">Cập
                nhật</a></td>
    </tr>`
    })
    return text
}

export const xoadmbv = async (id_category_post: number): Promise<void> => {
    try {
        const response = await fetch(`http://localhost:3000/admin/delete_category_post/${id_category_post}`, {
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
}

export function addpost() {
    document.getElementById('add_post_form')?.addEventListener('submit', function (event) {
        event.preventDefault();
        let title_post = (document.getElementById('title_post') as HTMLInputElement)?.value;
        let image_post = (document.getElementById('image_post') as HTMLInputElement)?.value.split('\\').pop();
        let content_post = (CKEDITOR.instances.editor as any)?.getData();
        let id_category_post = (document.getElementById('category_post') as HTMLInputElement)?.value;

        let data = {
            title_post: title_post,
            image_post: image_post,
            content_post: content_post,
            id_category_post: id_category_post,
        };
        fetch('http://localhost:3000/admin/add_post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Thêm bài viết không thành công');
                }
                return res.json();
            })
            .then(data => {
                console.log(data.message);
                window.location.href = 'list_post.html';
            })
            .catch(error => {
                console.error('Lỗi:', error);
            });

    })
}

export const category_post = async () => {
    let data = await fetch(`http://localhost:3000/categorypost`).then(res => res.json()).then(data => data)
    let text = ``
    data.forEach(c => {
        text += `<option value="${c.id_category_post}">${c.title_category_post}</option>`
    })
    return text
}

export const listpost = async () => {
    let data = await fetch(`http://localhost:3000/all_post`).then(res => res.json()).then(data => data)
    let text = ``
    data.forEach(p => {
        text += `<tr>
        <td>
            ${p.id_post}
        </td>
        <td>
            ${p.title_post}
        </td>
        <td><img src="../../../public/uploads/post/${p.image_post}"
                height="100" width="100"></td>
        <td>
            ${p.title_category_post}
        </td>

        <td><a id="deletepostLink_${p.id_post}">Xóa</a>
            || <a href="edit_post.html?id_post=${p.id_post}">Cập nhật</a></td>
    </tr>`
    })
    return text
}

export const xoabv = async (id_post: number): Promise<void> => {
    try {
        const response = await fetch(`http://localhost:3000/admin/delete_post/${id_post}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error('Xóa bài viết không thành công');
        }

        const data = await response.json();
        console.log(data.message);
        window.location.href = 'list_post.html';
    } catch (error) {
        console.error('Lỗi:', error);
    }
}

export const ep = async (id_post: number) => {
    let data = await fetch(`http://localhost:3000/detail_post/${id_post}`).then(res => res.json()).then(data => data[0])

    let text = `<div class="form-group">
        <label for="email">Tên bài viết</label>
        <input type="text" id="title_post" class="form-control" value="${data.title_post}">
    </div>
    <div class="form-group">
        <label for="email">Hình ảnh sản phẩm</label><br>
        <img src="../../../public/uploads/post/${data.image_post}" height="200" alt="">
        <input type="file" id="image_post" class="form-control" value="${data.image_post}">
    </div>
    <div class="form-group">
        <label for="pwd">Chi tiết bài viết</label>
        <textarea id="editor" name="content_post" rows="10" style="resize: none"
            class="form-control">${data.content_post}</textarea>
    </div>
    <div class="form-group">
        <label for="pwd">Danh mục bài viết</label>
        <select class="form-control" id="category_post">
        </select>
    </div>

    <button type="submit" name="addpost" class="btn btn-default">Thêm bài viết</button>`
    return text

}

export function editpost(id_post: number) {
    document.getElementById('edit_post_form')?.addEventListener('submit', function (event) {
        event.preventDefault();

        let title_post = (document.getElementById('title_post') as HTMLInputElement)?.value;
        let image_post = (document.getElementById('image_post') as HTMLInputElement)?.value.split('\\').pop();;
        let content_post = (CKEDITOR.instances.editor as any)?.getData();
        let id_category_post = (document.getElementById('category_post') as HTMLInputElement)?.value;;

        let data = {
            title_post: title_post,
            image_post: image_post,
            content_post: content_post,
            id_category_post: id_category_post
        };

        fetch(`http://localhost:3000/admin/edit_post/${id_post}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Thêm bài viết không thành công');
                }
                return res.json();
            })
            .then(data => {
                console.log(data.message);
                window.location.href = 'list_post.html';
            })
            .catch(error => {
                console.error('Lỗi:', error);
            });
    })
} 
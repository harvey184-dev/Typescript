export const postall = async () => {
    let data = await fetch('http://localhost:3000/all_post')
        .then(res => res.json()).then(data => data)
    let text = ''
    data.forEach(p => text += post(p))
    return text
}

export const detailpost = async (id_post) => {
    let data = await fetch(`http://localhost:3000/detail_post/${id_post}`)
        .then(res => res.json()).then(data => data[0])
    let text = `<div class="box-title">
    <div class="title-bar">
        <h1>
            ${data.title_post}
        </h1>
    </div>
</div>
<div class="content_text">
    ${data.content_post.replace(/"/g, '\\"')}
</div>
<div class="clear"></div>`

    return text
}

const post = (p) => {
    return `<li class="lists">
    <div class="img-list">
        <a href="post.html?id_post=${p.id_post}">
            <img src="../public/uploads/post/${p.image_post}" alt="${p.title_post}" class="img-list-in">
        </a>
    </div>
    <div class="content-list">
        <div class="content-list_inm">
            <div class="title-list">
                <h3>
                    <a href="post.html?id_post=${p.id_post}">
                        ${p.title_post}
                    </a>
                </h3>

            </div>
            <div class="content-list-in">
                <p>
                    ${p.content_post.replace(/"/g, '\\"').substring(0, 200) + '...'}
                </p>
            </div>
            <div class="xt"><a href="post.html?id_post=${p.id_post}">Xem
                    thêm</a></div>
        </div>
    </div>
    <div class="clear"></div>
</li>`
}
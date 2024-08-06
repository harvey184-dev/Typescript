export const menu = async () => {
    let data = await fetch(`http://localhost:3000/category`).then(res => res.json()).then(data => data);
    let text = ``;
    data.forEach(dm => {
        text += `<li class='active has-sub'> <a href='category_product.html?id_category_product=${dm.id_category_product}'><span> ${dm.title_category_product} </span></a> </li>`;
    });
    return text;
};
export const postindex = async () => {
    let data = await fetch('http://localhost:3000/all_post')
        .then(res => res.json()).then(data => data);
    let text = ``;
    data.forEach(p => {
        text += `<div class="row">
        <div class="col-md-4 col-xs-4 col-sm-4">
            <img src="../public/uploads/post/${p.image_post}">
        </div>
        <div class="col-md-8 col-xs-8 col-sm-8">
            <h4>
                <?php echo $post['title_post'] ?>${p.title_post}
            </h4>
            <p>
                ${p.content_post.replace(/"/g, '').substring(0, 100) + '...'}
            </p>
        </div>
    </div>
    <hr>`;
    });
    return text;
};

export const producthot = async () => {
    let data = await fetch('http://localhost:3000/hot/30')
        .then(res => res.json()).then(data => data)
    let text = ''
    data.forEach(p => text += product(p))
    return text
}

export const producthot1 = async () => {
    let data = await fetch('http://localhost:3000/hot/100')
        .then(res => res.json()).then(data => data)
    let text = ''
    data.forEach(p => text += product(p))
    return text
}

export const productcategoryindex = async () => {
    let data = await fetch('http://localhost:3000/category')
        .then(res => res.json()).then(data => data)
    let text = ''
    data.forEach(p => {
        text += cate(p);
        product_category(p.id_category_product);
    });
    return text
}

export const productall = async () => {
    let data = await fetch('http://localhost:3000/all_product')
        .then(res => res.json()).then(data => data)
    let text = ''
    data.forEach(p => text += product(p))
    return text
}

export const productdate = async () => {
    let data = await fetch('http://localhost:3000/new/30')
        .then(res => res.json()).then(data => data)
    let text = ''
    data.forEach(p => text += product(p))
    return text
}

export const productview = async () => {
    let data = await fetch('http://localhost:3000/view/30')
        .then(res => res.json()).then(data => data)
    let text = ''
    data.forEach(p => text += product(p))
    return text
}

export const product_category = async (id_category_product) => {
    let data = await fetch(`http://localhost:3000/category_product/${id_category_product}`)
        .then(res => res.json()).then(data => data)
    let text = ``
    data.forEach(p => {
        text += product(p);
    });
    return text
}

export const productcategory = async (id_category_product: number) => {
    let data = await fetch(`http://localhost:3000/category_product/${id_category_product}`)
        .then(res => res.json()).then(data => data)
    let text = ``
    data.forEach(p => {
        text += product(p);
    });
    return text
}

export const namecategory = async (id_category_product: number) => {
    let data = await fetch(`http://localhost:3000/category_product/${id_category_product}`)
        .then(res => res.json()).then(data => data[0])
    let text = `${data.title_category_product}`
    return text
}

export const productbyproduct = async (id_product: number) => {
    let data = await fetch(`http://localhost:3000/lienquan/${id_product}`)
        .then(res => res.json()).then(data => data)
    let text = ``
    data.forEach(p => {
        text += product(p);
    });
    return text
}

export const detailproduct = async (id_product: number) => {
    let data = await fetch(`http://localhost:3000/detail_product/${id_product}`)
        .then(res => res.json()).then(data => data[0])
    let text = `
<div class="title-pro-des-ct">
    <h1>
        ${data.title_product}
    </h1>
</div>
<div class="slider-galery ">
    <div id="sync1" class="owl-carousel owl-theme owl-loaded owl-drag">
        <div class="owl-stage-outer">
            <div class="owl-stage"
                style="transform: translate3d(-571px, 0px, 0px); transition: all 0s ease 0s; width: 1429px;">
                <div class="owl-item active" style="width: 285.75px;">
                    <div class="item">
                        <img src="../public/uploads/product/${data.image_product}" width="100%">
                    </div>
                </div>
                <div class="owl-item cloned" style="width: 285.75px;">
                    <div class="item">
                        <img src="../public/uploads/product/${data.image_product}" width="100%">
                    </div>
                </div>
                <div class="owl-item cloned" style="width: 285.75px;">
                    <div class="item">
                        <img src="../public/uploads/product/${data.image_product}" width="100%">
                    </div>
                </div>
            </div>
        </div>
        <div class="owl-nav disabled"><button type="button" role="presentation" class="owl-prev"><svg width="10%"
                    height="10%" viewBox="0 0 11 20">
                    <path style="fill:none;stroke-width: 2px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606">
                    </path>
                </svg></button><button type="button" role="presentation" class="owl-next"><svg width="3%" height="3%"
                    viewBox="0 0 11 20" version="1.1">
                    <path style="fill:none;stroke-width: 2px;stroke: #000;"
                        d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"></path>
                </svg></button></div>
        <div class="owl-dots disabled"></div>
    </div>

    <div id="sync2" class="owl-carousel owl-theme owl-loaded owl-drag">

        <div class="owl-stage-outer">
            <div class="owl-stage"
                style="transform: translate3d(0px, 0px, 0px); transition: all 0s ease 0s; width: 58px;">
                <div class="owl-item active current" style="width: 57.15px;">
                    <div class="item">
                        <img src="../public/uploads/product/${data.image_product}" width="100%">
                    </div>
                </div>
            </div>
        </div>
        <div class="owl-nav disabled"><button type="button" role="presentation" class="owl-prev"><span
                    aria-label="Previous">‹</span></button><button type="button" role="presentation"
                class="owl-next"><span aria-label="Next">›</span></button></div>
        <div class="owl-dots disabled"></div>
    </div>
</div>
<div class="content-des-pro">
    <div class="content-des-pro_in">
        <div class="pro-des-sum">
            <div class="price">
                <div class="status_pro">
                    <span><b>Trạng thái:</b> Còn hàng</span>
                </div>
                <div class="status_pro"><span><b>Xuất xứ:</b> Việt Nam</span></div>
            </div>
            <div class="color_price">
                <span class="title_price bg_green">Giá bán</span>
                ${data.price_product.toLocaleString('vi')}
                <span>vnđ</span>
                <div class="clear"></div>
            </div>

        </div>
        <div class="clear"></div>
    </div>
    <div class="content-pro-des">
        <div class="content_des">
            ${data.desc_product.replace(/"/g, '\\"')}
        </div>
    </div>
    <div class="ct">
        <div class="wp_a">
            <a onclick="giohang(${data.id_product});" class="view_duan">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i> <span class="text-mobile-buy">Mua hàng</span>
            </a>
            <a href="tel:0932 023 992" class="view_duan">
                <i class="fa fa-phone" aria-hidden="true"></i> <span class="text-mobile-buy">Gọi ngay</span>
            </a>
            <div class="clear"></div>
        </div>
        <div class="clear"></div>

    </div>

    <div class="tags_products prodcut_detail">
        <div class="tab_link">
            <h3 class="title_tab_link">TAGS: </h3>
            <div class="content_tab_link"> <a href="tag/"></a></div>
        </div>
    </div>
</div>
<div class="content-des-pro-suport">
    <div class="box-setup">
        <div class="title-setup">
            <i class="fa fa-tasks" aria-hidden="true"></i> Dịch vụ &amp; Chú ý
        </div>
        <div class="info-setup">
            <div class="row-setup">
                <p style="text-align:justify">Quý khách vui lòng liên hệ với nhân viên bán
                    hàng theo số điện thoại Hotline sau :</p>
                <p><span style="color:#d50100;font-weight: bold;">0932 023
                        992</span>&nbsp;để biết thêm chi tiết về Phụ kiện sản phẩm.</p>
            </div>
        </div>
    </div>
    <div class="info-prod prod-price freeship">
        <span class="title">
            <p>
                <!-- <img alt="chuyển hàng miễn phí tại thietbivanphong123.com" src="/data/upload/ship-hang-mien-phi.png" style="height:33px; width:60px" /> -->
                Bạn sẽ được giao hàng miễn phí trong khu vực nội thành TPHCM khi mua sản
                phẩm này.
            </p>
        </span>

    </div>

</div>
<div class="clear"></div>`
    return text
}

export const tag = async (id_product: number) => {
    let data = await fetch(`http://localhost:3000/detail_product/${id_product}`)
        .then(res => res.json()).then(data => data[0])
    let text = `<a href="category_product.html?id_category_product=${data.id_category_product}">${data.title_category_product}</a>`
    return text
}

const cate = (p) => {
    return `<div class="box-title">
    <div class="title-bar">
        <h1>${p.title_category_product}</h1>
        <a class="read_more" href="category_product.html?id_category_product=${p.id_category_product}">
            Xem thêm
        </a>
    </div>
</div>
<div class="pro_all_gird">
    <div class="girds_all list_all_other_page" id="product-category-${p.id_category_product}">
    </div>
    <div class="clear"></div>
</div>
<div class="clear"></div>`
}

const product = (p) => {
    return `
        <form action="#">
            <input type="hidden" value="${p.id_product}" name="product_id">
            <input type="hidden" value="${p.title_product}" name="product_title">
            <input type="hidden" value="${p.image_product}" name="product_image">
            <input type="hidden" value="${p.price_product}" name="product_price">
            <input type="hidden" value="1" name="product_quantity">
            <div class="grids home_product">
                <div class="grids_in">
                    <div class="content">
                        <div class="img-right-pro">
                            <a href="#">
                                <img class="lazy img-pro content-image pic" src="../public/uploads/product/${p.image_product}"
                                    data-original="image/iphone.png" alt="${p.title_product}" />
                            </a>
                            <div class="content-overlay"></div>
                            <div class="content-details fadeIn-top">
                                ${p.desc_product.replace(/"/g, '\\"')}
                            </div>
                        </div>
                        <div class="name-pro-right">
                            <a href="product.html?id_product=${p.id_product}">
                                <h3>    
                                    ${p.title_product}
                                </h3>
                            </a>
                        </div>
                        <div>
                            <input type="submit" style="box-shadow: none" class="btn btn-success btn-sm" name="addcart"
                                value="Đặt hàng" onclick="giohang(${p.id_product})">
                        </div>
                        <div class="price_old_new">
                            <div class="price">
                                <span class="news_price">
                                    ${p.price_product.toLocaleString('vi')}đ
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>`
}
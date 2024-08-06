export const dh = async () => {
    let data = await fetch(`http://localhost:3000/order`).then(res => res.json()).then(data => data)
    let text = ``
    data.forEach(c => {
        text += `<tr>
        <td>
            ${c.order_id}
        </td>
        <td>
            ${c.order_code}
        </td>
        <td>
            ${c.order_date}
        </td>
        <td>
            ${c.order_status == 0 ? 'Chưa xử lí' : 'Đã xử lí'}
        </td>
        <td><a href="order_details.html?order_code=${c.order_code}">Xem đơn
                hàng</a></td>
    </tr>`
    })
    return text
}

export const dhct1 = async (order_code: number) => {
    let data = await fetch(`http://localhost:3000/order_details/${order_code}`).then(res => res.json()).then(data => data[0])
    let text = `<tr>
    <td>
        ${data.order_details_id}
    </td>
    <td>
        ${data.name}
    </td>
    <td>
        ${data.email}
    </td>
    <td>
        ${data.sodienthoai}
    </td>
    <td>
        ${data.diachi}
    </td>
    <td>
        ${data.noidung}
    </td>
</tr>`
    return text
}

export const dhct = async (order_code: number) => {
    let data = await fetch(`http://localhost:3000/order_details/${order_code}`).then(res => res.json()).then(data => data)
    let text = ``
    data.forEach(p => {
        text += `<tr>
        <td>
            ${p.id_product}
        </td>
        <td>
            ${p.title_product}
        </td>
        <td>
            <img src="../../../public/uploads/product/${p.image_product}" height="100" width="100">
        </td>
        <td>
            ${p.product_quantity}
        </td>
        <td>
            ${p.price_product.toLocaleString('vi')}
        </td>
        <td>
            ${(p.product_quantity * p.price_product).toLocaleString('vi')}
        </td>
    </tr>`
    })
    return text
}

export const tt = async (order_code: number) => {
    let data = await fetch(`http://localhost:3000/order_details/${order_code}`).then(res => res.json()).then(data => data)
    let tt = 0
    let text = ``
    data.forEach(p => {
        const tong = p.product_quantity * p.price_product
        tt += tong
        text = `Tổng tiền: ${tt.toLocaleString('vi')} `
    })
    return text
}

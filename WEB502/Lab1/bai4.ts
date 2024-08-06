let masv: string = 'ps36014';
let hoten: string = 'Diệp Thiện Ngôn';
let lop: string = 'web18324';
let sothich: string = 'Chọc chó';

let html = ` 
    <h4>masv: ${masv}</h4>
    <h4>họ tên : ${hoten}</h4>
    <h4>lop : ${lop}</h4>
    <h4>sothich : ${sothich}</h4>
`
document.getElementById('info').innerHTML = html;
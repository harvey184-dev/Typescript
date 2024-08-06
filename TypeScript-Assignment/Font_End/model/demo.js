// your_script.js

import { editCategoryProduct, ecp } from './admin.js';

let params = new URLSearchParams(location.search)
let id_category_product = Number(params.get('id_category_product'))

document.addEventListener('DOMContentLoaded', async function () {
    await editCategoryProduct(id_category_product);
    document.getElementById('edit_category_form').innerHTML = await ecp(id_category_product);
    CKEDITOR.replace('editor');
});

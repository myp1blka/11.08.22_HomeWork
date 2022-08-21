
const preloader_elem = document.getElementById('preloader');
const products_elem = document.getElementById('products-div');






const GetOverHere = async () => {

        // отримати дані від віддаленого сервера
        const resultProductsObj = await axios.get('/products/');
        console.log('axios');
        console.log(resultProductsObj);
        
        // відмалювати отримані дані в HTML (передаємо об'єкт)
        DrawProducts(resultProductsObj);


}

GetOverHere();

const DrawProducts = (result) => {
    let productParams = ""; // очистити накопичувальну HTML змінну
    for (var key in result.data) { // перелічити всі параметри в об'єкті та їх значення
        productParams += `<div class="product">${key}:   ${result.data[key]} </div>`; // форматуємо виводимі дані
    }
    products_elem.insertAdjacentHTML('beforeend', productParams); // виводимо всі дані накопичені у змінній
    preloader_elem.style.display = 'none';
}













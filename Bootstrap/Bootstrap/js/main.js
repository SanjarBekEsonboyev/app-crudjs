let products = [];
let selectedIndex = -1;

function addProduct(){
    let productName = document.getElementById("product-name").value;
    let productPrice = document.getElementById("product-price").value;
    let productData = document.getElementById("product-data").value;
    let productWrite = document.getElementById("product-write").value;

    document.getElementById("product-name").value = "";
    document.getElementById("product-price").value = "";
    document.getElementById("product-data").value = "";
    document.getElementById("product-write").value = "";

    let newProduct = {
        name: productName,
        surname: productPrice,
        data: productData,
        writee: productWrite,
    };

    if (selectedIndex >= 0){
        products[selectedIndex] = newProduct;
        selectedIndex = -1;
    } else {
        products.push(newProduct);
    }
    console.log(products);
    drawPage();
}

function drawPage(){

    let result = "";
    let education =["Grand", "Kontrakt"]
    for (let i = 0; i < products.length; i++){
        result +=

            "<tr>" +
            "<td>" + (i+ 1) +"</td>" +
            "<td>"+ products[i].name +" "+products[i].surname+"</td>" +
            "<td>"+ products[i].data  +"</td>" +
            "<td>"+education[ products[i].writee ] +"</td>" +
            "<td>"+
            "<button type='button' class='btn btn-success mr-2' onclick='editProduct("+ i +")'>Edit</button>" +
            "<button type='button' class='btn btn-danger' onclick='deleteProduct("+ i +")'>Delete</button>" +
            "</td>" +
            "</tr>"
    }
    document.getElementById("result").innerHTML = result;
    document.getElementById("productName").innerHTML = productName;
    document.getElementById("productPrice").innerHTML= productPrice;
    document.getElementById("productData").innerHTML= productData;
    document.getElementById("productWrite").innerHTML= productWrite;

}

function deleteProduct(index){
    products.splice(index, 1);
    drawPage();
}

function editProduct(index){
    document.getElementById("product-name").value = products[index].name;
    document.getElementById("product-price").value = products[index].price;
    document.getElementById("product-data").value = products[index].data;
    document.getElementById("product-write").value = products[index].writee;
    selectedIndex = index;
}





function buy(){

    const newItem = [];
    let image = document.getElementById("main-img");
    image = image.getAttribute("src");
    newItem.push(image);

    let customerName = document.getElementById("name-box");
    customerName = customerName.value;
    newItem.push(customerName)

    let productName = document.getElementById("product-name");
    productName = productName.innerText;
    newItem.push(productName);

    let price = document.getElementById("price");
    price = price.innerText;
    newItem.push(price);

    let quantity = document.getElementById("quantity-box");
    quantity = quantity.value;
    newItem.push(quantity);
    
    let subTotal = (parseInt(quantity) * parseInt(price)).toString();
    newItem.push(subTotal);
    
    let stallName = document.getElementById("stall-name");
    stallName = stallName.innerText.toUpperCase();

    let roomNo = document.getElementById("room-no");
    roomNo = roomNo.value;

    if(window.localStorage.getItem("Order History") == null){
        window.localStorage.setItem("Order History", JSON.stringify([newItem]));
    }
    
    else{  
        let oldOrders = JSON.parse(window.localStorage.getItem("Order History"));
        let arr = oldOrders;
        arr.push(newItem);
        window.localStorage.setItem("Order History", JSON.stringify(arr));
    };

    window.alert("Thank You, your order placed successfully! Send the details through whatsapp.");


    cpyDetails = `Stall name          : ${stallName}%0aProduct name    : ${productName}%0aPrice                   : ${price}%0aQuantity             : ${quantity}%0aSubtotal             : ${subTotal}%0aRoom no            : ${roomNo} %0aCustomer name : ${customerName}`;


    // Yummy Bites direct tcc, ssh connection
    if(stallName === "YUMMY BITES"){
        window.open(`https://wa.me/+916374274088/?text=${cpyDetails}`);
    }
    // Roll And Shine direct tcc, ssh connection
    else if(stallName === "ROLL AND SHINE"){
        window.open(`https://wa.me/+919787512353/?text=${cpyDetails}`);
    }
    // Home Made Emporium direct tcc, ssh connection
    else if(stallName === "HOME MADE EMPORIUM"){
        window.open(`https://wa.me/+919150056200/?text=${cpyDetails}`);
    }
    // Back Up direct tcc, ssh connection
    else{
        window.open(`https://wa.me/+919042649000/?text=${cpyDetails}`);
    }
};

function level(){
    let quantityBox = document.getElementById("quantity-box");
    quantity = quantityBox.value;
    if (quantity < 1){
        quantityBox.value=1
    };
};
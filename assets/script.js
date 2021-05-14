if (document.readyState == 'loading') {
    document.addEventListener("DOMContentloading", ready)
} else {
    ready()
}

function ready() {
var remove = document.querySelector("btn-danger");
    for (var i = 0; i < remove.length; i++) {
        var button = remove[i]
        button.addEventListener('click', function(event) {
            var buttonClicked = event.target;
            buttonClicked.parentElement.parentElement.remove()
        })
    }
    var quantityInputs = document.querySelector(".cart-quantity-input");
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }
}

var updateCartTotal = function() {
    var cartItemContainer = document.querySelector(".cart-items");
    var cartRows = cartItemContainer.querySelector(".cart-row");
    var total = 0;
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElement = cartRow.querySelector(".cart-price")[0]
        var quantityElement = cartRow.querySelector(".cart-quantity-input")
        var price = parseFloat(priceElement.innerText.replace('£', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    document.querySelector("cart-total-price")[0].innerText = '£' + total;
}

var quantityChanged = function(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal();
}

var addToCartButtons = document.querySelector(".add-button")
    for (var i = 0; i < addToCartButtons; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

var addToCartClicked = function(event) {
    var button = event.target
    var shopItem = parentElement.parentElement
    var title = shopItem.querySelector(".title")[0].innerText
    var price = shopItem.querySelector(".price")[0].innerText
    var imageSrc = shopItem.querySelector(".image").src
    addItemToCart(title, price, imageSrc);
    updateCartTotal()
}
var addItemToCart = function(title, price, imageSrc) {
    var cartRow = 
}













// modal is triggered
$("#task-form-modal").on("show.bs.modal", function() {
    //clear values
    $("#modalDescription", "#modalName", "#modalEmail").val("");
});

$("#task-form-modal").on("shown.bs.modal", function() {
    //highlight areas
    $("#modalDescription", "#modalName", "#modalEmail").trigger("focus")
});

$("#task-form-modal .btn-send").click(function() {
    //get values
    var taskName = $("#modalName").val();
    var taskEmail = $("#modalEmail").val();
    var taskText = $("#modalDescription").val();

    if (taskName && taskEmail && taskText) {
        closeModal()
        // alert("Thank you for your message");
        
    } else {
        alert("Please fill out all fields")
    }


})
var closeModal = function() {
    $("#task-form-modal").modal("hide");
}


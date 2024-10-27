$(document).ready(function () {
    
    /////Menu bar code
    let navigation = document.querySelector('.navigation');
    let main = document.querySelector('.main');
    let menu = document.querySelector('.menu-bar');
    let logo = document.querySelector('.shop-logo');


    menu.onclick = function () {
        main.classList.toggle('active');
        navigation.classList.toggle('active');
        logo.classList.toggle('active');
    }

    ///Change class name when clicked

    //add  event listener to the navigation bar
    let listOfnavigation = document.querySelectorAll('.navigation  li a');
    let loadDynamic =  document.querySelector('.loadContent');



    function activenavigation() {
        listOfnavigation.forEach((navigation) => {
            navigation.classList.remove('active');
        });

        this.classList.add("active")

        //  // Load content based on the active link
        
        if (this.classList.contains('products active')) {
            loadDynamic.innerHTML = '';
            $('.loadContent').load('products.html');
        }


    }

    //event handler for adding active to list
    listOfnavigation.forEach((nav) => nav.addEventListener('click', activenavigation))

     // When the "products" menu item is clicked
     $('.Products').on('click', function(event) {
        event.preventDefault(); // Prevent the default anchor click behavior
        $('#contentForm').load('products.html'); // Load products.html into the form
    });

});




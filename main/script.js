const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(function(item){
    item.addEventListener('click', function(e){
        const currenItems=document.querySelector('.active');
        currenItems.classList.remove('active');
        e.target.classList.add('active');
    });
});

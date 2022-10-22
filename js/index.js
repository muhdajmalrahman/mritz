//toggler

const navLinks = document.getElementById("navbar-opened")
const openNav = document.getElementById("open-nav")
const closeNav = document.getElementById("close-nav")
// const togglePlus = document.getElementById("toggle-plus")
// const toggleMinus = document.getElementById("toggle-minus")

openNav.addEventListener('click', () => {
    navLinks.classList.add('navbar-toggler-opened');
    openNav.classList.add('display-off');
    closeNav.classList.remove('display-off')
    // closeNav.classList.add('display-on');
    // openNav.classList.remove('display-on')
})

closeNav.addEventListener('click', () => {
    navLinks.classList.remove('navbar-toggler-opened');
    openNav.classList.remove('display-off');
    closeNav.classList.add('display-off');
    // closeNav.classList.add('display-off')
})


//Fixed Be-partof button
$(window).scroll(function() {
        
    var windscroll = $(window).scrollTop();
    /*
    Since an average page height is not more than 720px so if windscroll >= 360 then let div appear.
    */
    if (windscroll >= 500) {
    $(".fixedButton").css('display','block');
    
    } else {
    
    $(".fixedButton").css('display','none');
    }
});


$('#read-more-1').click(()=> {
    $('#news-modal-1').show();
    $('#read-more-1').prop('disabled', true);
});

$('#news-modal-close-1').click(()=> {
    $('#news-modal-1').hide();
    $('#read-more-1').prop('disabled', false);
});

$('#read-more-2').click(()=> {
    $('#news-modal-2').show();
    $('#read-more-2').prop('disabled', true);
});

$('#news-modal-close-2').click(()=> {
    $('#news-modal-2').hide();
    $('#read-more-2').prop('disabled', false);
});

$('#read-more-3').click(()=> {
    $('#news-modal-3').show();
    $('#read-more-3').prop('disabled', true);
});

$('#news-modal-close-3').click(()=> {
    $('#news-modal-3').hide();
    $('#read-more-3').prop('disabled', false);
});

$('#read-more-4').click(()=> {
    $('#news-modal-4').show();
    $('#read-more-4').prop('disabled', true);
});

$('#news-modal-close-4').click(()=> {
    $('#news-modal-4').hide();
    $('#read-more-4').prop('disabled', false);
});

$(document).ready(function () {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    $('.add-to-cart').click(function () {
        var str = $("#my-counter").val();
        console.log(str);
        $("#cart-icon-counter").text(str);
        var fprice = str * 125;
        $(".cart-item--price > p").text('$' + fprice);
        $(".cart-item--counter > p").text('$125 x ' + str);
        $(".cart-item").removeClass("cart-item-hidden");
        $(".checkout-button").removeClass("cart-item-hidden");
        $(".cart-empty").addClass("cart-empty-hidden");
    });

    $('.cart-item--delete').click(function () {
        $(".cart-item").addClass("cart-item-hidden");
        $(".checkout-button").addClass("cart-item-hidden");
        $(".cart-empty").removeClass("cart-empty-hidden");
    });

    $('.main-cart').click(function () {
        if ($(".header--right---cart-content").hasClass("cart-hidden")) {
            $(".header--right---cart-content").removeClass("cart-hidden");
        } else {
            $(".header--right---cart-content").addClass("cart-hidden");
        }
    });



    /* swiper */
    const swiper = new Swiper('.swiper', {
        // Default parameters
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerView: 3,
        spaceBetween: 5,
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 640px
            768: {
                slidesPerView: 4,
                spaceBetween: 0
            }
        }
    })
    let nextItem = '';
    let images = ['images/image-product-1.jpg', 'images/image-product-2.jpg', 'images/image-product-3.jpg', 'images/image-product-4.jpg'];
    // let imagesContainer = $(".lightbox-container--thumbnails");

    // images = imagesContainer.find(".image-thumb");

    $(".lightbox-container--bigimg---next").click(function () {
        bigimagesrc = $('.big-image').attr('src');
        for (let i = 0; i < images.length; i++) {
            if (bigimagesrc == images[images.length - 1]) {
                $('.big-image').attr('src', images[0]);
            } else if (bigimagesrc == images[i]) {
                $('.big-image').attr('src', images[i + 1]);
            }
        }
    });
    $(".lightbox-container--bigimg---previous").click(function () {
        bigimagesrc = $('.big-image').attr('src');

        for (let i = 0; i < images.length; i++) {
            if (bigimagesrc == images[0]) {
                $('.big-image').attr('src', images[images.length - 1]);
            } else if (bigimagesrc == images[i]) {
                $('.big-image').attr('src', images[i - 1]);
            }
        }
    });

    $(".image-thumb").click(function () {
        $(".image-thumb").removeClass("active-thumbnail");
        $(this).addClass("active-thumbnail");
        clickedimg = $(this).attr('src');
        var ret = clickedimg.replace('-thumbnail', '');
        console.log(ret);
        $('.big-image').attr('src', ret);
    });


    $(".image-container").click(function () {
        $(".lightbox").css("display", "block");
    });
    $(".lightbox-container--bigimg---button").click(function () {
        $(".lightbox").css("display", "none");
    });

    $(".image-container").click(function () {
        $(".lightbox").css("display", "block");
    });


    $(".header--left-burger").click(function () {
        $(".mobile-menu-container").removeClass("hidden-menu");
    });
    $(".mobile-menu-container--nav---svg").click(function () {
        $(".mobile-menu-container").addClass("hidden-menu");
    });
});
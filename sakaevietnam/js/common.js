(function($) {
    "use strict";
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    }

    //backToTop
    function backToTop() {
        $(window).scroll(function() {
            if ($(window).scrollTop() >= 200) {
                $('#to_top').fadeIn();
            } else {
                $('#to_top').fadeOut();
            }
        });


        $(window).scroll(function() {
            if ($(window).scrollTop() >= 42) {
                $('#wrap-main-nav').addClass('pin');
            } else {
                $('#wrap-main-nav').removeClass('pin');
            }
        });

        $("#to_top").click(function() {
            $("html, body").animate({
                scrollTop: 0
            });
            return false;
        });
    }

    //scrollBar
    function scrollBar() {
        var scrollContainer = $(".scrollbar-inner");
        if (scrollContainer.length > 0) {
            scrollContainer.scrollbar();
        }
    }
    //resizeSite
    function resizeSite() {
        var heightVideo = $('#player_playing').height() - 64;
        $('.detail_right .scrollbar-inner').height(heightVideo);
    }
    //onCLick
    function onCLick() {
        $('.search-btn').click(function() {
            if (!$(this).hasClass('is-clicked')) {
                $(this).addClass('is-clicked');
                $('.search-wrap').fadeIn();
                $('.search-wrap input').focus();
            } else {
                $(this).removeClass('is-clicked');
                $('.search-wrap').fadeOut();
            }
        });
        $(".all-menu-tablet").click(function() {
            $(this).toggleClass("close-menu-tablet");
        });
        $(".all-menu").click(function() {
            $(".overlay-bg").toggle();
            $(".main-nav").toggleClass("show-all-menu");
        });
        $(".overlay-bg").click(function() {
            $(this).hide();
            $(".all-menu").removeClass("close-menu-tablet");
            $(".main-nav").removeClass("show-all-menu");
        });
        $('.sub_menu').click(function() {
            if ($(this).next('.level2').css('display') == 'none') {
                $(this).html('-');
            } else {
                $(this).html('+');
            };
            $(this).next('.level2').slideToggle("slow", function() {});
        });

        $('.tr-lanhdao h3').click(function() {
            if ($(this).next('.list').css('display') == 'none') {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            };
            $(this).next('.list').slideToggle("slow", function() {});
        });

    }
    //slideSwiper
    function slideSwiper() {
        var swiper_bannerhome = new Swiper('.banner-home .swiper-container', {
            loop: false,
            // autoplay: {
            //     delay: 6000,
            // },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: function(index, className) {
                    return '<span class="' + className + '">' + (index + 1) + '</span>';
                },
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
        var slide_duan = new Swiper('#slide-duan', {
            slidesPerView: 4,
            spaceBetween: 16,
            // loop: true,
            // autoplay: {
            //     delay: 4000,
            // },
            // navigation: {
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev',
            // },
            breakpoints: {
                480: {
                    slidesPerView: 2,
                },
                1025: {
                    slidesPerView: 3,
                }
            }
        });

        var slide_history = new Swiper('.slide-history .swiper-container', {
            slidesPerView: 7,
            spaceBetween: 0,
            centeredSlides: true,
            touchRatio: 0.2,
            slideToClickedSlide: true,
            loop: false,
            navigation: {
                nextEl: '.swiper-bc-next',
                prevEl: '.swiper-bc-prev',
            },
            breakpoints: {
                340: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 3,
                },
                991: {
                    slidesPerView: 4,
                },
                1280: {
                    slidesPerView: 6,
                },
            }
        });

        $(document).on("click", ".swiper-slide", function() {
            var el_ID = $('.slide-history .swiper-slide.swiper-slide-active').find(".click-history").attr("data-id");
            $('.slide-history .swiper-container .click-history').removeClass('active');
            $('.tab-content-slide .info-content').removeClass('active');
            // $(this).addClass('active');
            $('#' + el_ID + '-content').addClass("active");
        });
        $(document).on("click", ".swiper-bc-next, .swiper-bc-prev", function() {
            var el_ID = $('.slide-history .swiper-slide.swiper-slide-active').find(".click-history").attr("data-id");
            $('.slide-history .swiper-container .click-history').removeClass('active');
            $('.tab-content-slide .info-content').removeClass('active');
            $(this).addClass('active');
            $('#' + el_ID + '-content').addClass("active");
        });

        var slide_giaithuong = new Swiper('.block-giaithuong .swiper-container', {
            slidesPerView: 4,
            spaceBetween: 30,
            loop: false,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                576: {
                    slidesPerView: 2,
                },
            }
        });

        var slide_congty = new Swiper('.slide-cty-thanhvien .swiper-container', {
            slidesPerView: 5,
            spaceBetween: 32,
            navigation: {
                nextEl: '.swiper-thanhvien-next',
                prevEl: '.swiper-thanhvien-prev',
            },
            pagination: {
                el: '.swiper-pagination1',
                clickable: true,
            },
            breakpoints: {
                576: {
                    slidesPerView: 1,
                },
                1280: {
                    spaceBetween: 16,
                    slidesPerView: 3,
                },
            }
        });

        var swiper_tienich = new Swiper('#tien-ich .swiper-container', {
            effect: "fade",
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

        var slide_hinhanh = new Swiper('.slide_hinhanh .swiper-container', {
            slidesPerView: 3.8,
            spaceBetween: 32,
            // autoplay: {
            //     delay: 4000,
            // },
            pagination: {
                el: '.slide_hinhanh .swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                991: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                600: {
                    slidesPerView: 1.6,
                    spaceBetween: 20
                },
            }
        });

    }

    //magnificPopup
    function magnificPopup() {
        $('.open-popup-link').magnificPopup({
            type: 'inline',
            midClick: true,
            mainClass: 'mfp-with-zoom',
            fixedContentPos: false,
            fixedBgPos: true,
            overflowY: 'auto',
            closeBtnInside: true,
            preloader: false,
            removalDelay: 300,
        });
        $('.magnific_popup .magnific_thumb').magnificPopup({
            type: 'image',
            midClick: true,
            mainClass: 'mfp-with-zoom',
            gallery: {
                enabled: false,
            }
        });

    }

    function slideCongty() {
        var slide_congty2 = new Swiper('.slide-cty-thanhvien .swiper-container', {
            slidesPerView: 5,
            spaceBetween: 32,
            navigation: {
                nextEl: '.swiper-thanhvien-next',
                prevEl: '.swiper-thanhvien-prev',
            },
            pagination: {
                el: '.swiper-pagination2',
                clickable: true,
            },
            breakpoints: {
                576: {
                    slidesPerView: 2,
                },
                991: {
                    slidesPerView: 3,
                    spaceBetween: 8,
                },
                1366: {
                    spaceBetween: 16,
                    slidesPerView: 4,
                },
            }
        });
    }

    function tab() {
        $(".tab-congty a").click(function() {
            $(".tab-congty a").removeClass("active")
            if (!$(this).hasClass("active")) {
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }
            event.preventDefault();
            var tab = $(this).attr("href");
            $(".tab-container > div").not(tab).css("display", "none");
            $(tab).css("display", "block");
            slideCongty();
        });
    }



    $(function() {
        backToTop();
        scrollBar();
        onCLick();
        slideSwiper();
        magnificPopup();
        slideCongty();
        tab();
    });
    $(window).on('load resize', function() {
        resizeSite()
    });
})(jQuery);
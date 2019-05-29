$(document).ready(function () {

    // smothe scroll

    $(".collapse ul li a").on("click", function () {
        $("html, body").animate({
            scrollTop: $("#" + $(this).data('value')).offset().top
        }, 1000);
    });

    //  SIDE NAV
    $('.show-nav').click(function () {
        $('.side-nav a span.title').fadeToggle()
    })

    $('.sm-show-nav').click(function () {
        $('.side-nav a span.title').css('display', 'inline')
        if ($('.side-nav').css('visibility') == 'hidden')
            $('.side-nav').css('visibility', 'visible');
        else
            $('.side-nav').css('visibility', 'hidden');
    })

    // services in landing page
    $(".services #provide").on("click",function(){
        $(".accor").slideToggle();
    });

    $(".set > .click").on("click",function(){
        if($(this).hasClass("actived")){
            $(this).removeClass("actived");
            $(this).siblings(".accor .content").slideUp(200);
            $(".set > .click i").removeClass("fa-minus").addClass("fa-plus");
        }
        else {
            $(".set > .click i").removeClass("fa-minus").addClass("fa-plus");
            $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
            $(".set > .click").removeClass("actived");
            $(this).addClass("actived");
            $(".accor .content").slideUp(200);
            $(this).siblings(".accor .content").slideDown(200);
        }
    });

    $(".set-2 > .clk").on("click",function(){
        if($(this).hasClass("actived")){
            $(this).removeClass("actived");
            $(this).siblings(".accor .cntnt").slideUp(200);
            $(".set-2 > .clk i").removeClass("fa-minus").addClass("fa-plus");
        }
        else {
            $(".set-2 > .clk i").removeClass("fa-minus").addClass("fa-plus");
            $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
            $(".set-2 > .clk").removeClass("actived");
            $(this).addClass("actived");
            $(".accor .cntnt").slideUp(200);
            $(this).siblings(".accor .cntnt").slideDown(200);
        }
    });
    // start according
    var acc = document.getElementsByClassName("accordion");
    var i;
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active");
            /* Toggle between hiding and showing the active panel */
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }

    // start navbar dashboard page
    // choices
    // ANIMATEDLY DISPLAY THE NOTIFICATION COUNTER.
    $('#choices_Counter')
        .css({ opacity: 0 })
        .text('7')  // ADD DYNAMIC VALUE (YOU CAN EXTRACT DATA FROM DATABASE OR XML).
        .css({ top: '-10px' })
        .animate({ top: '-2px', opacity: 1 }, 500);
    $('#choices_Button').click(function () {
        // TOGGLE (SHOW OR HIDE) NOTIFICATION WINDOW.
        $('#choices').fadeToggle('fast', 'linear', function () {
        });
        $('#choices_Counter').fadeOut('slow');     // HIDE THE COUNTER.
        return false;
    });
    // HIDE NOTIFICATIONS WHEN CLICKED ANYWHERE ON THE PAGE.
    $(document).click(function () {
        $('#choices').hide();
    });

    $('#noti_Button, #message_Button').click(function () {
        $('#choices').hide();
    });

    $('#choices').click(function () {
        return false;
    });

    // notifications
    $('#noti_Counter')
        .css({ opacity: 0 })
        .text('14')
        .css({ top: '-10px' })
        .animate({ top: '-2px', opacity: 1 }, 500);

    $('#noti_Button').click(function () {
        $('#notifications').fadeToggle('fast', 'linear', function () {
        });
        $('#noti_Counter').fadeOut('slow');
        return false;
    });
    $(document).click(function () {
        $('#notifications').hide();
    });
    $('#message_Button, #choices_Button').click(function () {
        $('#notifications').hide();
    });
    $('#notifications').click(function () {
        return false;
    });

    //  message
    $('#message_Counter')
        .css({ opacity: 0 })
        .text('3')
        .css({ top: '-10px' })
        .animate({ top: '-2px', opacity: 1 }, 500);

    $('#message_Button').click(function () {
        $('#message').fadeToggle('fast', 'linear', function () {
        });
        $('#message_Counter').fadeOut('slow');
        return false;
    });
    $(document).click(function () {
        $('#message').hide();
    });
    $('#noti_Button, #choices_Button').click(function () {
        $('#message').hide();
    });
    $('#message').click(function () {
        return false;
    });
    // end message


    //popup (gallery)
    $('.view').magnificPopup({
        type: 'image',
    });

    // sign-up
    $(".my-ul li").on("click", function () {
        $(this).addClass("act").siblings().removeClass("act");

        $(".sign").css("display", "none");
        $($(this).data("class")).css("display", "block");

    });

    // services-page
    $(".maintainance").on("click",function(){
        $(this).next().slideToggle();
        $('.maintainance').not($(this)).next().slideUp();

        $(this).css({background:"#ccc"});
        $('.maintainance').not($(this)).css({background:"#fff"});
    });

});

$(document).ready(function () {

    var myVideo = document.getElementById("video1");

    function playPause() {
        if (myVideo.paused)
            myVideo.play();
        else
            myVideo.pause();
    }

    function makeBig() {
        myVideo.width = 560;
    }

    function makeSmall() {
        myVideo.width = 320;
    }

    function makeNormal() {
        myVideo.width = 420;
    }

    //Mouse click scroll
    $(document).ready(function () {
        $(".mouse").click(function () {
            $('html, body').animate({scrollTop: '+=750px'}, 1200);
        });
    });

    //Features appearance
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        //>=, not <=
        if (scroll >= 500) {
            $(".feature-icon").addClass("feature-display");
            $(".feature-head-text").addClass("feature-display");
            $(".feature-subtext").addClass("feature-display");
        }
    });

    //Subscribe to newsletter
    $('#email-form').on('submit', function (e) {
        e.preventDefault();


        $('#newsletter-spinner').css("display", "inline-block");

        var data = {
            email: $('#newsletter-email-input').val()
        }

        $.ajax({
            url: "/mailchimp.php",
            type: 'POST',
            data: data,
            success: function (data) {

                console.log(data);
                $('#newsletter-spinner').css("display", "none");
                $('#newsletter-loading-div').html("Success! Cool things are on their way")
                $('#newsletter-email-input').val("")

                window.location.href = '/nova.zip';
            },
            error: function (error) {
                console.log(error);
                $('#newsletter-spinner').fadeOut()
            }
        });
    })




})

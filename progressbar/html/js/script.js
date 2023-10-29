const jobthreed = document.getElementById('threed_jdraw');
var cancelledTimer = null;

$('document').ready(function() {
    Progressbar = {};

    Progressbar.Hologramprogress = function(data) {
        let xPosition = data.x + '%';
        let yPosition = data.y + '%';

        jobthreed.style.left = xPosition;
        jobthreed.style.top = yPosition;
    }    

    Progressbar.Progress = function(data) {
        clearTimeout(cancelledTimer);
        $("#progress-label").text(data.label);
        Sounds.audio1();
        $(".progress-container").fadeIn('fast', function() {
            $("#progress-bar").stop().css({"width": 0, "background-color": "#1787e2a6"}).animate({
              width: '100%'
            }, {
              duration: parseInt(data.duration),
              complete: function() {
                $(".progress-container").fadeOut('fast', function() {
                    $('#progress-bar').removeClass('cancellable');
                    $("#progress-bar").css("width", 0);
                    $.post('https://progressbar/FinishAction', JSON.stringify({
                        })
                    );
                })
              }
            });
        });
    };

    Sounds = {}

    Sounds.audio1 = function () {
        var audio1s = document.getElementById("Fuckaudio");
        audio1s.volume = 1;
        audio1s.play();
    }


    Progressbar.ProgressCancel = function() {
        $("#progress-label").text("Shooot");
        $("#progress-bar").stop().css( {"width": "100%", "background-color": "rgba(71, 0, 0, 0.8)"});
        $('#progress-bar').removeClass('cancellable');

        cancelledTimer = setTimeout(function () {
            $(".progress-container").fadeOut('fast', function() {
                $("#progress-bar").css("width", 0);
                $.post('https://progressbar/CancelAction', JSON.stringify({
                    })
                );
            });
        }, 1000);
    };

    Progressbar.CloseUI = function() {
        $('.main-container').fadeOut('fast');
    };
    
    window.addEventListener('message', function(event) {
        switch(event.data.action) {
            case 'progress':
                Progressbar.Progress(event.data);
            break;
            case 'Hologramprogress':
                Progressbar.Hologramprogress(event.data);
            break;
            case 'cancel':
                Progressbar.ProgressCancel();
            break;
        }
    });
});
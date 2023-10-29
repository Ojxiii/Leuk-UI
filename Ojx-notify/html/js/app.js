window.addEventListener('message', function (event) {
    switch(event.data.action) {
        default:
            Notify(event.data);
            break;  
    }
});

function Notify(data) {
    if (event.data.type === "success") {
        console.log("success");
        var shittext = "<span style='color: #019020; font-weight: bolder;'><i class='fas fa-bell'></i> Notify : </br></span>" + data.text;
    } else if (event.data.type === "error") {
        console.log("error");
        var shittext = "<span style='color: #ca4c68; font-weight: bolder;'><i class='fas fa-bell'></i> Notify : </br></span>" + data.text;
    } else if (event.data.type === "primary") {
        console.log("primary");
        var shittext = "<span style='color: #0fffd5; font-weight: bolder;'><i class='fas fa-bell'></i> Notify : </br></span>" + data.text;
    }
    
    var $notification = $('.notification.template').clone();
    Sounds.audio1();
    $notification.removeClass('template');
    $notification.addClass(data.type);
    $notification.html(shittext);
    $notification.fadeIn();
    $('.notif-container').append($notification);
    setTimeout(function() {
        $.when($notification.fadeOut()).done(function() {
            $notification.remove()
        });
    }, data.length === undefined ? data.length : 2500);
}

var Sounds = {};
Sounds.audio1 = function() {
    var audio1s = document.getElementById("notifydouble");
    audio1s.volume = 1;
    audio1s.play();
};
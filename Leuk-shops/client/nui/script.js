window.addEventListener('message', function(event) {
    if (event.data.app === "openShop") {
        let shopName = event.data.shopName 
        let shopColor = event.data.shopColor
        let itemsINShop = event.data.items 
        $("#shopitems").html("");

        $.each(itemsINShop, function(i, item){
            let Elem = `
            <div class="shopitem">
              <p>${item.header} <br>${item.txt}</p>
              <div data-itemData="${i}" class="shopitemPurchase" style="background: ${shopColor}"><i class="fas fa-money-bill"></i></div>
            </div>
          `
            $("#shopitems").append(Elem);
            $("[data-itemData='"+i+"']").data('itemData', item.params.args);
        });

        $('.shopforhead').text(` ${shopName} `)
        $('.shopforhead').css('border-color', shopColor);
        $(".mianshoppy").fadeIn(100);
    }
});


$(document).on('click', '.shopitemPurchase', function(e){
    e.preventDefault();
    Sounds.audio1();
    var itemData = $(this).data('itemData');
    $.post(`https://${GetParentResourceName()}/Leuk-shops:Charge`, JSON.stringify(itemData));
    closeMenu()
});

document.onkeyup = function (data) {
    if (data.key == 'Escape') {
        closeMenu()
    } 
};
  
function closeMenu() {
    $(".mianshoppy").fadeOut(350);
    $.post(`https://${GetParentResourceName()}/close`);
}

var Sounds = {};
Sounds.audio1 = function() {
    var audio1s = document.getElementById("ToTsoso");
    audio1s.volume = 1;
    audio1s.play();
}


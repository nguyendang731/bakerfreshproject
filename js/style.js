$(function () {
    $(".icon-search").click(function () {
        $(".search").toggleClass("active");
        $(this).toggleClass("active");
    });

    $(".intro2-click").click(function () {
        $img = $(this).attr("src");
        $(".info-click").attr("src", $img);
    });

    $(".featured-slide").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
    });

    $(".our-menu-slide").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplayspeed: 500,
    });

    $(".ceo-slide").slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false,
    });

    $(".customer-slide").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplayspeed: 500,
    });

    $(".plus").click(function () {
        $input = $(".input-qty").val();
        $input++;
        $(".input-qty").val($input);
    });
    $(".minus").click(function () {
        $input = $(".input-qty").val();
        if ($input > 1) {
            $input--;
            $(".input-qty").val($input);
        }
    });

    $(".phone").click(function () {
        $(".phone").toggleClass("active");
        $(this).toggleClass("active");
    });

    function convertMoney(num, separator) {
        separator = separator === undefined ? "." : separator;
        num = String(num).replace(/[^0-9]/g, "");
        if (!isNaN(num)) {
            var array = num.toString().split("");
            var index = -3;
            while (array.length + index > 0) {
                array.splice(index, 0, separator);
                index -= 4;
            }
            return array.join("");
        }
    }
    function convertNumber(str) {
        return str.replace(/[^0-9]/g, "");
    }
    $(function () {
        $(".typeClick").click(function () {
            $type = $(this).attr("type");
            $quantity = $(this).parent().find("input").val();
            $pricecore = convertNumber($(this).closest(".content_bot").find(".pricecore").text());
            $total = convertNumber($(".s_total .sum span").text());
            $sum = convertNumber($(this).closest(".item_content").find(".price span").text());
            if ($type == "plus") {
                $quantity++;
            } else if ($type == "minus") {
                if ($quantity > 1) {
                    $quantity--;
                }
            } else if ($type == "delete") {
                $total = $total - $sum;
                $(this).closest(".cart-item").fadeOut(300);
            }
            if ($quantity != undefined) {
                $total = $total - $sum;
                $sum = $pricecore * $quantity;
                $total = $total + $sum;
            }

            $(this).parent().find("input").val($quantity);
            $(this).closest(".content_bot").find(".price span").text(convertMoney($sum));
            $(".s_total .sum span").text(convertMoney($total));
        });
    });
});

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
};
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

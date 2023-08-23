// carousel

var owl = $(".owl-carousel");
owl.owlCarousel({
    loop: true,
    margin: 30,
});
$(".slider__btn--right").click(function () {
    owl.trigger("next.owl.carousel");
});
$(".slider__btn--left").click(function () {
    owl.trigger("prev.owl.carousel", [300]);
});

// modals

const modalCall = $("[data-modal]");
const modalClose = $("[data-close]");

modalCall.on("click", function (event) {
    event.preventDefault();

    let $this = $(this);
    let modalId = $this.data("modal");

    $(modalId).addClass("show");
});

modalClose.on("click", function (event) {
    event.preventDefault();

    let $this = $(this);
    let modalParent = $this.parents(".modal");

    modalParent.removeClass("show");
});

$(function () {
  const date = new Date();
  // console.log(`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`);
  const config = {
    opens: "left",
    autoUpdateInput: true,
    minYear: date.getFullYear(),
    startDate: `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`,
    maxYear: date.getFullYear() + 10,
    local: {
      format: "DD MMM YY",
    },
  };

  $("input.daterange-start").daterangepicker(config, function (start, end) {
    $("#check-out").value = end.format("DD MMM YY");
  });

  $("input.daterange-end").daterangepicker(config, function (start, end) {
    $("#check-out").value = end.format("DD MMM YY");
  });
});

$("input.daterange-start").on("apply.daterangepicker", function (ev, picker) {
  $(this).val(
    picker.startDate.format("DD MMM YY") +
      " - " +
      picker.endDate.format("DD MMM YY")
  );
});

$("input.daterange-end").on("apply.daterangepicker", function (ev, picker) {
  $(this).val(
    picker.startDate.format("DD MMM YY") +
      " - " +
      picker.endDate.format("DD MMM YY")
  );
});

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:30,
    nav: true,
 
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[4000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

  // prevArrow: `<button class="btn left prev"><i class="fa-solid fa-chevron-left"></i></button>`,
  // nextArrow: `<button class="btn right next"><i class="fa-solid fa-chevron-right"></i></button>`,

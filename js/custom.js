$((function() {
  var e = $(window);
  e.on("load", (function() {
      var a = e.scrollTop(),
          s = $(".topbar");
      a > 40 ? s.addClass("fixed-header") : s.removeClass("fixed-header")
  })), $('ul.dropdown-menu [data-bs-toggle="dropdown"]').on("click", (function(e) {
      e.preventDefault(), e.stopPropagation(), $(this).siblings().toggleClass("show"), $(this).next().hasClass("show") || $(this).parents(".dropdown-menu").first().find(".show").removeClass("show"), $(this).parents("li.nav-item.dropdown.show").on("hidden.bs.dropdown", (function(e) {
          $(".dropdown-submenu .show").removeClass("show")
      }))
  })), $(window).scroll((function() {
      $(window).scrollTop() >= 200 ? $(".topbar").addClass("fixed-header") : $(".topbar").removeClass("fixed-header")
  })), $(".product-item").isotope({
      itemSelector: ".product-desc",
      layoutMode: "fitRows"
  }), $(".product-tab ul li a").click((function() {
      $(".product-tab ul li a").removeClass("active"), $(this).addClass("active");
      var e = $(this).attr("data-filter");
      return $(".product-item").isotope({
          filter: e
      }), !1
  })), $(".featured-property-carousel").owlCarousel({
      loop: !0,
      margin: 30,
      nav: !1,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      dots: !0,
      autoplay: !0,
      center: !0,
      responsiveClass: !0,
      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 2
          },
          1e3: {
              items: 3
          }
      }
  }), $(".testimonial-carousal").owlCarousel({
      loop: !0,
      margin: 30,
      nav: !1,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      dots: !0,
      autoplay: !1,
      center: !0,
      responsiveClass: !0,
      autoHeight: !1,
      responsive: {
          0: {
              items: 1
          },
          768: {
              items: 1,
              center: !1
          },
          1024: {
              items: 1
          }
      }
  }), $(".testimonial-carousal-st2").owlCarousel({
      loop: !0,
      margin: 30,
      nav: !1,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      dots: !1,
      autoplay: !0,
      responsiveClass: !0,
      responsive: {
          0: {
              items: 1
          },
          768: {
              items: 2,
              center: !1
          },
          1024: {
              items: 3
          }
      }
  }), $(".v1-banner-carousel").owlCarousel({
      animateOut: "fadeOut",
      loop: !0,
      margin: 30,
      nav: !1,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      dots: !1,
      autoplay: !0,
      center: !0,
      smartSpeed: 450,
      responsiveClass: !0,
      responsive: {
          0: {
              items: 1
          },
          768: {
              items: 1,
              center: !1
          },
          1024: {
              items: 1
          }
      }
  }), $(".v2-banner-carousel").owlCarousel({
      animateOut: "fadeOut",
      loop: !0,
      margin: 30,
      nav: !1,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      dots: !1,
      autoplay: !0,
      center: !0,
      smartSpeed: 450,
      responsiveClass: !0,
      responsive: {
          0: {
              items: 1
          },
          768: {
              items: 1,
              center: !1
          },
          1024: {
              items: 1
          }
      }
  }), $(".property-img-carousal").owlCarousel({
      loop: !0,
      margin: 3,
      dots: !1,
      nav: !0,
      navText: [$(".property-prev"), $(".property-next")],
      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 1
          },
          1e3: {
              items: 3
          }
      }
  })
}));


document.addEventListener("DOMContentLoaded", () => {
  const houseWrapper = document.getElementById("top-viewed");

  fetch ("http://localhost:8080/house/get/top/viewed", {
    method: "GET"
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    } 
    
    return null;
  })
  .then((data) => {
    if (data != null) {
      console.log(data);
    } else {
      console.log("Bruh!")
    }
  })
})
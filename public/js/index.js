$(document).ready(() => {
  $("#vid").show();
  $("#vid")
    .get(0)
    .play();

  // NAV BAR
  // open menu
  $("#menu-btn").on("click", () => {
    $(".nav-mobile").animate(
      {
        left: "0%"
      },
      1000
    );

    $("body").css({
      "overflow-y": "hidden"
    });

    // hide menu btn
    $("#menu-btn").fadeOut();
  });

  // close menu
  $("#exit-nav").on("click", () => {
    $(".nav-mobile").animate(
      {
        left: "100%"
      },
      1000
    );

    $("body").css({
      "overflow-y": "auto"
    });

    // show menu btn
    $("#menu-btn").fadeIn(2500);
  });

  // SCROLL TO SECTION ON BUTTON CLICK
  // desktop
  $(".nav-desktop a").on("click", function(e) {
    const el = $(this).attr("data-desktopid");
    $("html, body").animate(
      {
        scrollTop: $(`#${el}`).offset().top
      },
      2000
    );

    e.preventDefault();
  });

  // mobile
  $(".nav-mobile > .nav-group a").on("click", function(e) {
    const el = $(this).attr("data-mobileid");
    $("html, body").animate(
      {
        scrollTop: $(`#${el}`).offset().top
      },
      2000
    );

    $("#exit-nav").trigger("click");

    e.preventDefault();
  });

  // call to action click
  $("#get-your-copy-now-btn").on("click", () => {
    $("html, body").animate(
      {
        scrollTop: $(`#buy-now`).offset().top
      },
      2000
    );
  });

  // ANIMATE ON PAGE SCROLL
  // about the book
  var waypoint = new Waypoint({
    element: $("#about-the-book"),
    handler: function(direction) {
      if (direction === "down") {
        $("#cross").animate(
          {
            opacity: "0.2"
          },
          2000
        );
      }
    },
    offset: "40%"
  });

  // buy now
  var waypoint = new Waypoint({
    element: $("#buy-now"),
    handler: function(direction) {
      if (direction === "down") {
        $("#book-cover").animate(
          {
            opacity: "1"
          },
          1500
        );

        setTimeout(() => {
          $(".links").animate(
            {
              opacity: "1"
            },
            1500
          );
        }, 1000);
      }
    },
    offset: "40%"
  });

  // buy now redirect

  // westbow
  $("#westbow").on("click", () => {
    window.open(
      "https://www.westbowpress.com/en/bookstore/bookdetails/805013-courage-through-the-darkness"
    );
  });

  // amazon
  $("#amazon").on("click", () => {
    window.open(
      "https://www.amazon.com/Courage-Through-Darkness-Journey-Healing/dp/1973687135/ref=sr_1_1?keywords=9781973687139&qid=1583427147&sr=8-1"
    );
  });

  // barnes
  $("#barnes-and-noble").on("click", () => {
    window.open(
      "https://www.barnesandnoble.com/w/courage-through-the-darkness-cynthia-thomas/1136600706?ean=9781973687139"
    );
  });
});

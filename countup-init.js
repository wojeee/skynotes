$(document).ready(function () {
  $(".counter-value").each(function () {
    var endValue = $(this).attr("data-target");

    new Waypoint({
      element: this,
      handler: function () {
        new CountUp(this.element, 0, endValue).start();
        this.destroy(); // Ensures the counter runs only once
      },
      offset: "75%", // Trigger when the element is 75% from the top of the viewport
    });
  });
});

import "./less/style.less";
import "animate.css";
import $ from "jquery";
import jQuery from "jquery";
require ("../node_modules/waypoints/lib/noframework.waypoints.min.js");

// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;

$( document ).ready ( () => {

  const iphoneWp = document.querySelector('.iphone-js-wp');
  const iphoneOn = document.querySelector('.iphone-js-wp > .iphone-on');
  const iphoneBtn = document.querySelector('.iphone-js-wp > .iphone-btn');

  const waypoint = new Waypoint({
    element: iphoneWp,
    handler: direction => {
      $(iphoneWp).addClass('animated slideInUp');
      $(iphoneOn).addClass('animated fadeIn');
    },
    offset: "70%"
  });

  // Animation of pushing and then releasing the iphone button
  $(iphoneBtn).delay(2300).animate({bottom: "+=-3"}, 300);
  $(iphoneBtn).delay(300).animate({bottom: "+=3"}, 100);

});

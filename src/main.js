import "./less/style.less";
import "animate.css";
import "../node_modules/jquery-waypoints/waypoints.min.js";
import $ from 'jquery';
import jQuery from 'jquery';

// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;

$( document ).ready ( () => {
  console.log('readyyyy!!');
});

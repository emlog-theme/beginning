$(function(){var t=document.body.clientWidth<960,n=function(t){var n=$(".toggle-open");t?n.each(function(){$("#"+$(this).data("target")).show()}):n.each(function(){$("#"+$(this).data("target")).slideUp(100)})};$(window).resize(function(o){t=document.body.clientWidth<960,n(!t)}),$(document).on("click",function(o){t&&n(!1)}),$(".toggle-open").each(function(){$("#"+$(this).data("target")).click(function(t){t.stopPropagation()})}),$(document).on("click",".toggle-open",function(t){t.preventDefault(),t.stopPropagation();var n=$(this);$("#"+n.data("target")).slideToggle(100)});var o=$(".gotoup");$(window).on("scroll",function(t){$(window).scrollTop()>400?o.slideDown(100):o.slideUp()}),o.on("click",function(t){t.preventDefault(),$("html,body").animate({scrollTop:"0px"},700)});var i=$("#site-notice");if(i){var e=1,c=i.find("ul"),a=c.find("li"),l=a.length;setInterval(function(){e>=l&&(e=0),c.animate({top:-24*e++})},5e3)}});

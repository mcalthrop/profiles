/**
 * Main JS file for profiles page.
 *
 * Matt Calthrop
 * 26 May 2013
 */require.config({paths:{jquery:"lib/jquery-1.9.1-min",handlebars:"lib/handlebars-1.0.0-rc.3-min"}});require(["jquery","handlebars"],function(e){function t(){var t=e("#template-header").html(),n=Handlebars.compile(t),r=e("#template-profile").html(),i=Handlebars.compile(r),s=e("#template-footer").html(),o=Handlebars.compile(s),u=e(".profiles-container ul"),a=e("title"),f=e(".page-header"),l=e(".page-footer");e.getJSON("svc/pagedata.json").done(function(e){var t=e.header,r=e.profiles,s=e.footer;a.html(e.title);f.append(n(t));for(var c=0,h=r.length;c<h;c++)u.append(i(r[c]));l.append(o(s))}).fail(function(e,t,n){var r=t+", "+n;console.error("Request Failed: "+r,e)})}function n(){var t=e(window).width(),n=e(window).height(),r=t+"x"+n;e(".dimensions").html(r)}function r(){n()}function i(){console.log("$.fn.jquery: ",e.fn.jquery);e(window).resize(r);e(window).resize();t()}e(document).ready(i)});
var elements = {};

//navbar Menu
var navMenu = {
  reservation: document.querySelector(".make-reservation"),
  amenities: document.querySelector(".amenities"),
  services: document.querySelector(".services"),
  accomodations: document.querySelector(".accomodations")
};

var navDropDown = {
  reservation: document.querySelector(".make-reservation"),
  amenities: document.querySelector(".amenities-dropdown"),
  services: document.querySelector(".services-dropdown"),
  accomodations: document.querySelector(".accomadations-dropdown"),
  items: document.querySelector(".dropdown-list")
};

var show = element => {
  element.style.display = "flex";
  element.style.flexDirection = "column";
  element.style.justifyContent = "flex-start";
  element.style.padding = "0";
  element.style.marginTop = "5%";
  element.style.background = "#808080";
  element.style.height = "100%";
  element.style.width = "100%";
};

var hide = element => {
  element.style.display = "none";
};

navMenu.amenities.addEventListener("mouseover", function() {
  show(navDropDown.amenities);
  hide(navDropDown.services);
  hide(navDropDown.accomodations);
});

navMenu.services.addEventListener("mouseover", function() {
  hide(navDropDown.amenities);
  hide(navDropDown.accomodations);
  show(navDropDown.services);
});

navMenu.accomodations.addEventListener("mouseover", function() {
  hide(navDropDown.amenities);
  show(navDropDown.accomodations);
  hide(navDropDown.services);
});

window.onload = function() {
  navDropDown.amenities.style.display = "none";
  navDropDown.services.style.display = "none";
  navDropDown.accomodations.style.display = "none";
};

/*
var clickMakeReservation = document.querySelector(".make-reservation");
var clickAmenities = document.querySelector(".amenities");
var clickServices;
var clickAccommadations;
var clickTransportation;
var clickExcurssions;
var clickAboutUs;
var parentNavButton = document.querySelector(".nav-buttons");
*/
/*
clickAmenities.addEventListener("onclick", function(e) {
  var parent = document.createElement("ul");
  var ulChild = document.createElement("li")`<ul>
    <li class="amenities-js">Hot Water</li>
    <li class="amenities-js">Air Condition</li>
    <li class="Full Bathroom">Full Bathroom</li>
  </ul>`;
});
*/

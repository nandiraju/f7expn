var DataStore = {
  api_url: "https://us-central1-nandiraju-api.cloudfunctions.net/app",
  uuid: function () {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  },
  remove: function (namespace) {
    localStorage.removeItem(namespace);
  },
  set: function (namespace, collection) {
    localStorage.setItem(namespace, JSON.stringify(collection));
  },
  get: function (namespace) {
    let collection = localStorage.getItem(namespace);
    if (collection != undefined && collection != "" && collection != " ") {
      collection = JSON.parse(collection);
    } else {
      collection = [];
    }
    return collection;
  },
  getObject: function (namespace) {
    let collection = localStorage.getItem(namespace);
    if (collection != undefined && collection != "" && collection != " ") {
      collection = JSON.parse(collection);
    } else {
      collection = {};
    }
    return collection;
  },
};

function randDarkColor() {
  var lum = -0.25;
  var hex = String(
    "#" + Math.random().toString(16).slice(2, 8).toUpperCase()
  ).replace(/[^0-9a-f]/gi, "");
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  var rgb = "#",
    c,
    i;
  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
    rgb += ("00" + c).substr(c.length);
  }
  return rgb;
}

// --- Fetch stock images for screens.
function fetchImages() {
  var url =
    "https://api.unsplash.com/search/photos?page=1&query=pharmacy&per_page=20&client_id=WztAjjff7Z9mPXfGCNwmu8qPlVOIjuZaDErzoSy-5Tw";

  fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      // console.log(JSON.stringify(response));
      var images = response.results;
      DataStore.set("STOCK_IMAGES", images);
      STOCK_IMAGES = images;
    });
}
// GLOBALS
// var STOCK_IMAGES = DataStore.get("STOCK_IMAGES");
// if (STOCK_IMAGES == undefined || STOCK_IMAGES.length < 1) {
//   fetchImages();
// }

function debug(msg) {
  console.log(msg);
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var API_URL =
  "https://script.google.com/macros/s/AKfycbw8jJq_412bAkIN8csxpHcPhCtUJKjcbOCjz_FX3WvUmeUNxXLyQl0jw5dIUDqX2whQ/exec?path=";

let FAQS = undefined;
let CONTACTS = undefined;
function getFAQ() {
  if (FAQS) {
    app.emit("faq-data-loaded");
    debug("Returning data already there");
    return;
  }

  fetch(API_URL + "faq", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      FAQS = response;
      debug(response);
      app.emit("faq-data-loaded");
    });
}
getFAQ();

function getContacts() {
  if (CONTACTS) {
    app.emit("contacts-data-loaded");
    debug("Returning data already there");
    return;
  }

  fetch(API_URL + "contacts", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      CONTACTS = response;
      debug(response);
      app.emit("contacts-data-loaded");
    });
}

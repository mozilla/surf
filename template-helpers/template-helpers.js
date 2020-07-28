"use strict";

const websiteCopy = require("./website-content");


function getString(args) {
  return websiteCopy[args];
}

function siteLinks() {
  return [
    {
      "linkTitle": "Home",
      "linkHref": "/",
    },
    {
      "linkTitle": "People",
      "linkHref": "/",
    },
    {
      "linkTitle": "Talks",
      "linkHref": "/",
    },
    {
      "linkTitle": "Links",
      "linkHref": "/",
    },
    {
      "linkTitle": "Summits",
      "linkHref": "/",
    },
  ];
}

function landingCopy() {
  return [
    getString("landing-1"),
    getString("landing-2"),
    getString("landing-3"),
  ]
}

module.exports = {
  getString,
  landingCopy,
  siteLinks,
};

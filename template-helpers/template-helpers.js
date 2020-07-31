"use strict";

const websiteCopy = require("./website-content");


function getString(args) {
  return websiteCopy[args];
}

function siteLinks() {
  return [
    {
      "linkTitle": "Home",
      "linkHref": "#home",
    },
    {
      "linkTitle": "People",
      "linkHref": "#people",
    },
    {
      "linkTitle": "Summits",
      "linkHref": "#summits",
    },
    {
      "linkTitle": "Publications",
      "linkHref": "#publications",
    },
    {
      "linkTitle": "Talks",
      "linkHref": "#talks",
    },
    {
      "linkTitle": "Links",
      "linkHref": "#links",
    },
    // {
    //   "linkTitle": "Funding",
    //   "linkHref": "/",
    // },
  ];
}

function landingCopy() {
  return [ 
    {
      "text": getString("landing-1"),
    },
    {
      "text": getString("landing-2"),
    },
    {
      "text": getString("landing-3"),
      "callout": true,
    },
  ];
}

function publication() {
  return [
    {
      title: "Hardening Firefox against Injection Attacks",
      authors: "Christoph Kerschbaumer, Tom Ritter, Frederik Braun",
      addInfo: "SecWeb - Designing Security for the Web; Genova, Italy, September 2020",
    },
    {
      title: "Designing Reverse Firewalls for the Real World",
      authors: "Angèle Bossuat, Xavier Bultel, Pierre-Alain Fouque, Cristina Onete and Thyla van der Merwe",
      addInfo: "ESORICS 2020 (to appear), September, 2020",
    },
    {
      title: "No boundaries: data exfiltration by third parties embedded on web pages",
      authors: "Gunes Acar, Steven Englehardt, Arvind Narayanan",
      addInfo: "PETS 2020; July, 2020",
    },
    {
      title: "HACL×N: Verified Generic SIMD Crypto (for all your favorite platforms)",
      authors: "Marina Polubelova, Karthikeyan Bhargavan, Jonathan Protzenko, Benjamin Beurdouche, Aymeric Fromherz, Natalia Kulatova, Santiago Zanella-Béguelin",
      addInfo: "Under Submission",
    },
    {
      title: "Extending the Same Origin Policy with Origin Attributes",
      authors: "Tanvi Vyas, Andrea Marchesini, Christoph Kerschbaumer",
      addInfo: "International Conference on Information Systems Security and Privacy; Porto, Portugal, February 2017",
    },
    {
      title: "Enforcing Content Security by Default within Web Browsers",
      authors: "Christoph Kerschbaumer",
      addInfo: "International Conference on Cybersecurity Development; Boston, Massachusetts, November 2016",
    },
  ]

}

function person() {
  return [
    {
      name: "Thyla van der Merwe",
      jobTitle: "Cryptography Engineering Manager",
      bio: `Thyla manages Cryptography Engineering at Mozilla, and her work encompasses security protocol analysis and standardisation efforts. Prior to starting at Mozilla, Thyla completed a PhD at Royal Holloway, University of London as part of the Centre for Doctoral Training in Cyber Security. Thyla's PhD thesis is TLS-focused and presents attacks against TLS 1.2 and below, and an analysis of TLS 1.3, contributing to the newer "analysis-prior-to-deployment" design process followed by the IETF for TLS 1.3.`,
      affiliation: "Mozilla",
      contact: "tvandermerwe@mozilla.com",
      imgClassName: "thyla",
    },
    {
      name: "Christoph Kerschbaumer",
      jobTitle: "Content Security Tech Lead",
      bio: "Christoph is the Content Security Tech Lead at Mozilla with over 10 years of experience in Secure Systems Development. His work ranges from designing systems with fail safe defaults to fighting cross site scripting as well as preventing man-in-the-middle attacks. He received his PhD in Computer Science from the University of California, Irvine where he based his research on information flow tracking techniques within web browsers.",
      affiliation: "Mozilla",
      contact: "ckerschbaumer@mozilla.com",
      imgClassName: "christoph",
    },
    {
      name: "Steven Englehardt",
      jobTitle: "Senior Privacy Engineer",
      bio: "Steven works as a privacy engineer at Mozilla, where he designs and builds privacy features for Firefox. He received a PhD in Computer Science in the Security Group at Princeton University, where he worked in the Center for Information Technology Policy (CITP). His dissertation research focuses on the automated measurement of privacy-invasive practices on the web.",
      affiliation: "Mozilla",
      contact: "senglehardt@mozilla.com",
      imgClassName: "steven",
    },
  ]
}

module.exports = {
  getString,
  landingCopy,
  person,
  publication,
  siteLinks,
};

"use strict";

const websiteCopy = require("./website-content");


function getString(args) {
  return websiteCopy[args];
}

function siteLinks() {
  return [
    {
      "linkTitle": "Home",
      "linkHref": "home",
    },
    {
      "linkTitle": "People",
      "linkHref": "people",
    },
    {
      "linkTitle": "Summits",
      "linkHref": "summits",
    },
    {
      "linkTitle": "Publications",
      "linkHref": "publications",
    },
    {
      "linkTitle": "Talks",
      "linkHref": "talks",
    },
    {
      "linkTitle": "Links",
      "linkHref": "links",
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
      pubHref: "https://www.surrey.ac.uk/esorics-2020",
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
      pubHref: "https://www.semanticscholar.org/paper/Extending-the-Same-Origin-Policy-with-Origin-Vyas-Marchesini/30c71e8da7dffcbb4888861813f752f8d36aca5f",
      authors: "Tanvi Vyas, Andrea Marchesini, Christoph Kerschbaumer",
      addInfo: "International Conference on Information Systems Security and Privacy; Porto, Portugal, February 2017",
    },
    {
      title: "Enforcing Content Security by Default within Web Browsers",
      pubHref: "https://ieeexplore.ieee.org/document/7839802",
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

function speaker() {
  return [
    {
      speakerName: "Thyla",
      talks: [
        {
          talkTitle: "Real World Crypto 2020 (video, 1st talk of the session)",
          talkHref: "https://www.youtube.com/watch?v=kED3K57EV6w",
          isVideo: true,
          talkInfo: "Video, first talk of session",
        },
        {
          talkTitle: "London Crypto Day 2020",
          talkHref: "https://londoncryptoday.github.io/2020/",
          talkInfo: "Fall 2020 at Google London (Soho)",
        },
        {
          talkTitle: "London Crypto Day 2019",
          talkHref: "https://londoncryptoday19.splashthat.com/",
          talkInfo: "CRLite",
        },
        {
          talkTitle: "Newcastle University Women in Mathematics Day 2018",
          talkHref: "https://conferences.ncl.ac.uk/womeninmathsday2018/speakers/",
        },
        
      ],
    },
    {
      speakerName: "Christoph",
      talks: [
        {
          talkTitle: "Hardening the Content Security Landscape of Firefox",
          talkInfo: "Keynote @ German OWASP Day",
          talkHref: "https://god.owasp.de/schedule/",
        },
        {
          talkTitle: "Could we use Information Flow Tracking to generate more sophisticated blacklists?",
          talkInfo: "Web Application Security Seminar, Schloss Dagstuhl; Germany; August 2018",
          talkHref: "https://www.dagstuhl.de/en/program/calendar/semhp/?semnr=18321",
        },
        {
          talkTitle: "Enforcing Security in Firefox",
          talkInfo: "SBA Research; Vienna, Austria; May 2017",
          talkHref: "https://www.sba-research.org/2017/05/18/christoph-kerschbaumer-enforcing-security-in-firefox/",
        }
      ],
    },
  ];
}

function summits() {
  return {
    "vienna": {
      summitName: "Security Research Summit - Vienna",
      summitLocation: "Vienna, Austria",
      summitDate: "November 8, 2019",
      imgClassName: "vienna",
    },
    "san-francisco" : {
      summitName: "Security Research Summit - San Francisco",
      summitLocation: "San Francisco, CA, USA",
      summitDate: "May 24, 2019",
      imgClassName: "san-francisco",
    },
    "london": {
      summitName: "Security Research Summit - London",
      summitLocation: "London, England",
      summitDate: "November 12, 2018",
      imgClassName: "london",
    }
  }
}

function uncategorizedLinks(args) {
  return args.fn(
    { 
      linkList: [
        {
          linkTitle: "SURF @Twitter",
          linkHref: "https://twitter.com/MozillaSurf",
        },
        {
          linkTitle: "Firefox Build Instructions",
          linkHref: "https://wiki.mozilla.org/Building_Firefox/SURF",
        },
      ],
    });
}

function mozLinks(args) {
  return args.fn(
    { 
      listClassName: "Moz-links",
      linkList : [
        {
          linkTitle: "Mozilla Careers",
          linkHref: "https://careers.mozilla.org/",
        },
        {
          linkTitle: "Mozilla Research",
          linkHref: "https://research.mozilla.org/papers-publications/",
        },
        {
          linkTitle: "Mozilla Security Blog",
          linkHref: "https://blog.mozilla.org/security/"
        },
      ],
    })
}

function attackDefenseLinksAndFeed() {
  return [
      {
        linkTitle: "Attack & Defense",
        linkHref: "",
      },
      {
        linkTitle: "Attack & Defense - Twitter",
        linkHref: "https://twitter.com/attackndefense",
      },
    ];
}

module.exports = {
  attackDefenseLinksAndFeed,
  getString,
  landingCopy,
  mozLinks,
  person,
  publication,
  siteLinks,
  speaker,
  summits,
  uncategorizedLinks,
};

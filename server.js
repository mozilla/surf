"use strict";

const express = require("express");
const exphbs = require("express-handlebars");
const helmet = require("helmet");

const TemplateHelpers = require("./template-helpers/template-helpers");

const app = express();

// eslint-disable-next-line no-process-env
const port = process.env.PORT || 8000;


app.use(helmet({
  hsts: false,
}));

app.use(helmet.contentSecurityPolicy({
  directives: {
    baseUri: ["'none'"],
    defaultSrc: ["'self'"],
    connectSrc: ["'self'", "https://blog.mozilla.org/attack-and-defense/feed", "https://www.feedrapp.info/?support=true&version=1.3.0&q=http%3A%2F%2Fblog.mozilla.org%2Fattack-and-defense%2Ffeed%2F", "https://blog.mozilla.org/security/feed/"],
    fontSrc: ["'self'"],
    frameAncestors: ["'self'"],
    mediaSrc: ["'self'"],
    imgSrc: ["'self'", "https://d24wuq6o951i2g.cloudfront.net"],
    objectSrc: ["'self'", "blob"],
    scriptSrc: ["'self'"],
    styleSrc: ["'self'"],
  },
}));

app.use(helmet.referrerPolicy({ policy: "strict-origin-when-cross-origin" }));
app.use(express.static("public", {
  setHeaders: res => res.set("Cache-Control",
    // 10-minute client-side caching; 24-hour server-side caching
    "public, maxage=" + 10 * 60 * 1000 + ", s-maxage=" + 24 * 60 * 60 * 1000
  ),
}));

const hbs = exphbs.create({
  extname: ".hbs",
  layoutsDir: __dirname + "/views/layouts",
  defaultLayout: "default",
  partialsDir: __dirname + "/views/partials",
  helpers: TemplateHelpers,
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("landing-page", {
  });
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Mozilla Sec-Eng University Relationship Framework running on Port ${port}.`));

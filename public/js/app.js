var RSS=function(){"use strict";const t=["doctype","html","head","title","base","link","meta","style","script","noscript","body","article","nav","aside","section","header","footer","h1-h6","hgroup","address","p","hr","pre","blockquote","ol","ul","li","dl","dt","dd","figure","figcaption","div","table","caption","thead","tbody","tfoot","tr","th","td","col","colgroup","form","fieldset","legend","label","input","button","select","datalist","optgroup","option","textarea","keygen","output","progress","meter","details","summary","command","menu","del","ins","img","iframe","embed","object","param","video","audio","source","canvas","track","map","area","a","em","strong","i","b","u","s","small","abbr","q","cite","dfn","sub","sup","time","code","kbd","samp","var","mark","bdi","bdo","ruby","rt","rp","span","br","wbr"];class e{constructor(){this.topics={},this.hop=this.topics.hasOwnProperty}on(t,e){this.hop.call(this.topics,t)||(this.topics[t]=[]);const i=this.topics[t].push(e)-1;return{remove:()=>{this.topics[t].splice(i,1)}}}emit(t,e={}){return this.hop.call(this.topics,t)?this.topics[t].forEach(t=>t(e)):this}}function i(t){let e=document.createElement("template");return e.innerHTML=t.trim(),e.content.firstElementChild}return class{constructor(t,i,n={}){this.version="1.3.0",this.target=t,this.urls=[].concat(i),this.html=[],this.options={dateFormatFunction: (dateString) => {const articleDate = new Date(dateString);return articleDate.toLocaleDateString();},ssl:!0,host:"www.feedrapp.info",support:!0,limit:3,key:null,layoutTemplate:"<ul class='feed-list style-none'>{entries}</ul>",entryTemplate:'<li class="feed-list-item"><a class="feed-list-link" href="{url}">{title}</a><p class="feed-info">{author} <span class="feed-date">{date}</span></p></li>',tokens:{},outputMode:"json",dateFormat:"ddd, DD MMM YYYY",dateLocale:"en",offsetStart:!1,offsetEnd:!1,fetchFeed:null,encoding:null,...n},this.events=new e}on(t,e){return this.events.on(`vanilla-rss/${t}`,e),this}render(){return new Promise(async(t,e)=>{try{const t=await this._load();this.feed=t.responseData.feed,this.entries=t.responseData.feed.entries}catch(t){return this.entries=[],this.feed=null,e(t)}const i=this._generateHTMLForEntries();if(this.target.append(i.layout),0!==i.entries.length){this.events.emit("vanilla-rss/data",{rss:this,feed:this.feed,entries:this.entries});const t=function(t,e){return t.tagName.toLowerCase()===e.toLowerCase()}(i.layout,"entries")?i.layout:i.layout.querySelector("entries");this._appendEntries(t,i.entries)}t()})}_appendEntries(t,e){e.forEach((e,i)=>{var n=this._wrapContent(e);t.insertAdjacentHTML("beforebegin",n.outerHTML)}),t.remove()}_wrapContent(t){return 0!==t.trim().indexOf("<")?i(`<div>${t}</div>`):i(t)}_load(){const t=`${`http${this.options.ssl?"s":""}`}://${this.options.host}`,e={support:this.options.support,version:this.version,q:this.urls.map(t=>encodeURIComponent(t)).join(",")};this.options.offsetStart&&this.options.offsetEnd&&(this.options.limit=this.options.offsetEnd),null!==this.options.limit&&(e.num=this.options.limit),null!==this.options.key&&(e.key=this.options.key),null!==this.options.encoding&&(e.encoding=this.options.encoding),this.options.order&&(e.order=this.options.order);const i=`${t}?${Object.keys(e).map(t=>`${t}=${e[t]}`).join("&")}`;return this._fetchFeed(i)}async _fetchFeed(t){if(this.options.fetchFeed)return await this.options.fetchFeed(t);const e=await fetch(t,{headers:{"Content-Type":"application/json"}});return await e.json()}_generateHTMLForEntries(){const t={entries:[],layout:null};return this.entries.forEach((e,i)=>{const n=this.options.offsetStart,s=this.options.offsetEnd;let o;n&&s?i>=n&&i<=s&&this._isRelevant(e,t.entries)&&(o=this._evaluateStringForEntry(this.options.entryTemplate,e),t.entries.push(o)):this._isRelevant(e,t.entries)&&(o=this._evaluateStringForEntry(this.options.entryTemplate,e),t.entries.push(o))}),this.options.entryTemplate?t.layout=this._wrapContent(this.options.layoutTemplate.replace("{entries}","<entries></entries>")):t.layout=this._wrapContent("<div><entries></entries></div>"),t}_isRelevant(t,e){const i=this._getTokenMap(t);return!this.options.filter||(!this.options.filterLimit||this.options.filterLimit!==e.length)&&this.options.filter(t,i)}_evaluateStringForEntry(t,e){var i=t;return(t.match(/(\{.*?\})/g)||[]).forEach(t=>{i=i.replace(t,this._getValueForToken(t,e))}),i}_getFormattedDate(t){if(this.options.dateFormatFunction)return this.options.dateFormatFunction(t);if("undefined"!=typeof moment){var e=moment(new Date(t));return(e=e.locale?e.locale(this.options.dateLocale):e.lang(this.options.dateLocale)).format(this.options.dateFormat)}return t}_getTokenMap(e){if(!this.feedTokens){var i=JSON.parse(JSON.stringify(this.feed));delete i.entries,this.feedTokens=i}return{feed:this.feedTokens,url:e.link,author:e.author,date:this._getFormattedDate(e.publishedDate),title:e.title,body:e.content,shortBody:e.contentSnippet,bodyPlain:function(e){for(var i=e.content.replace(/<script[\\r\\\s\S]*<\/script>/gim,"").replace(/<\/?[^>]+>/gi,""),n=0;n<t.length;n++)i=i.replace(new RegExp("<"+t[n],"gi"),"");return i}(e),shortBodyPlain:e.contentSnippet.replace(/<\/?[^>]+>/gi,""),index:this.entries.indexOf(e),totalEntries:this.entries.length,teaserImage:function(t){try{return t.content.match(/(<img.*?>)/gi)[0]}catch(t){return""}}(e),teaserImageUrl:function(t){try{return t.content.match(/(<img.*?>)/gi)[0].match(/src=["'](.*?)["']/)[1]}catch(t){return""}}(e),...this.options.tokens}}_getValueForToken(t,e){var i=this._getTokenMap(e),n=i[t.replace(/[\{\}]/g,"")];if(void 0!==n)return"function"==typeof n?n(e,i):n;throw new Error("Unknown token: "+t+", url:"+this.url)}}}();


(() => {
  const mobileMenuButton = document.querySelector(".mobile-menu-button");
  const header = document.querySelector("header");
  const win = window;
  const availableIntersectionObserver = ("IntersectionObserver" in window);
  const mobileMenuLinks = document.querySelector(".mobile-menu-fixed");
  const talksSvg = document.getElementById("mic");

  const micCircles = talksSvg.querySelectorAll("circle");

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  let animationDelay = 0;

  micCircles.forEach((el,index) => {
    if (index % 2 === 0) {
      animationDelay += .25;
      el.style.animationDelay = `${animationDelay}s`;
      el.style.animationDuration = "1s";
    }
  });

  win.onscroll = () => {
    if (win.pageYOffset > 300) {
      header.classList.add("fix-header");
      document.body.classList.add("slide-in-header");
    } else {
      document.body.classList.remove("slide-in-header");
      header.classList.remove("fix-header");
    }
  };

  window.onload = function() {
    const rss = new RSS(
      document.querySelector("#rss-feeds"),
      ["http://blog.mozilla.org/attack-and-defense/feed/"]
    );
    rss.render()
    .then(() => {
      document.querySelector("#rss-feeds").classList.add("feed-loaded");
    });

    const mozrss = new RSS(
      document.querySelector("#moz-feeds"),
      ["https://blog.mozilla.org/security/feed/"]
    );
    mozrss.render()
    .then(() => {
      document.querySelector("#moz-feeds").classList.add("feed-loaded");
    });
  };

  const closeMenu = () => {
    mobileMenuLinks.classList.remove("show-menu");
  }

  const doMobileMenu = () => {
    mobileMenuButton.classList.toggle("open");
    if (mobileMenuButton.classList.contains("open")) {
      mobileMenuLinks.classList.add("show-menu");
      return;
    }
    return closeMenu();
  }


  mobileMenuButton.addEventListener("click", doMobileMenu);


  if (!availableIntersectionObserver) {
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: [0.15, 0.5, 0.65, 1]
  };

  const watchedEls = document.querySelectorAll("[data-observing]");

  let pauseActiveLinkSetting = false;
  const setActiveHeaderLink = (linkId) => {
    const previouslyActiveLinks = document.querySelectorAll(".active");
    if (previouslyActiveLinks.length > 0 && (previouslyActiveLinks[0].dataset.linkId === linkId)) {
      return;
    }

    if (previouslyActiveLinks) {
      previouslyActiveLinks.forEach(linkEl => {
        linkEl.classList.remove("active");
      });
    }

    const newActiveLinks = document.querySelectorAll(`[data-link-id="${linkId}"]`);
    newActiveLinks.forEach(linkEl => {
      linkEl.classList.add("active");
    });
  };

  document.querySelectorAll(".nav-link").forEach(navLink => {
    navLink.addEventListener("click", (e) => {
      e.preventDefault();
      const sectionId = e.target.dataset.linkId;
      const sectionEl = document.querySelector(`#${sectionId}`);

      const innerHeight = window.innerHeight;
      const sectionHeight = sectionEl.offsetHeight;
      let newScrollPosition = sectionEl.offsetTop + 50; // 50 is approx height of header

      // center sections that are smaller than the window height;
      if (sectionHeight < innerHeight) {
        const sectionHeightDifference = (innerHeight - sectionHeight) / 2;
        newScrollPosition = sectionEl.offsetTop - sectionHeightDifference;
      }
      window.scrollTo(0, newScrollPosition);
      
      document.querySelectorAll(".active").forEach(el => {
        el.classList.remove("active");
      });
      e.target.classList.add("active");
      setActiveHeaderLink(sectionId);
      pauseActiveLinkSetting = true; // prevent the intersection observer from flashing active links while scrolling
      setTimeout(() => {
        pauseActiveLinkSetting = false;
      },500);
    });
  });



  const onObservation = (entries, observer) => {
    entries.forEach(entry => {
      const entryTarget = entry.target;
      const sectionId = entryTarget.dataset.sectionId;
      if (sectionId && entry.intersectionRatio >= .65 && !pauseActiveLinkSetting) {
        return setActiveHeaderLink(sectionId);
      }

      if (!entry.isIntersecting || sectionId) {
        return;
      }

      const entryClasses = entryTarget.classList;

      if (entryClasses.contains("resolved")) {
        return;
      }
      if (entryClasses.contains("docs")) {
        entry.target.classList.add("init-pages")
      }
      if (entryClasses.contains("opacity-0")) {
        entry.target.classList.add("opacity-1");
      }
      if (entryClasses.contains("fade-up")) {
        entry.target.classList.add("init-fade-up");
      }

      if (entryClasses.contains("mic")) {
        entry.target.querySelector(".mic-cord").classList.add("dash");
      }

      entry.target.classList.add("resolved");
      observer.unobserve(entry.target);

    });
  };
  const observer = new IntersectionObserver(onObservation, observerOptions);
  watchedEls.forEach(el => {
    observer.observe(el);
  });

})();

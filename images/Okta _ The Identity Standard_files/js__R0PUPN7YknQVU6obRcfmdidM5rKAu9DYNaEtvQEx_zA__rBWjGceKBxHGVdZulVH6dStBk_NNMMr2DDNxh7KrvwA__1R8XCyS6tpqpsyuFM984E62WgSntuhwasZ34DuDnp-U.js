/* Source and licensing information for the line(s) below can be found at https://www.okta.com/sites/all/modules/okta_configuration/js/okta.heap.gtm.js. */
;(function(window){var intervalCount=0;var oktaHeapGtmInterval=setInterval(function(){intervalCount++;if(window.heap&&window.heap.loaded===true){window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:'OktaHeap_Loaded'});clearInterval(oktaHeapGtmInterval);}
else if(intervalCount>20){clearInterval(oktaHeapGtmInterval);}},250);})(window);;
/* Source and licensing information for the above line(s) can be found at https://www.okta.com/sites/all/modules/okta_configuration/js/okta.heap.gtm.js. */
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.okta.com/sites/all/modules/okta_configuration/js/okta.demandbase.vwo.industry.js. */
(function($,Drupal,window){var tries=0;var maxTries=20;var interval;var storageKey='demandbase_industry';if(storageAvailable()===true){interval=setInterval(addDemandBaseIndustryToLocalStorage,250);}
function storageAvailable(){try{var storage=window.localStorage,x='__storage_test__';storage.setItem(x,x);storage.removeItem(x);return true;}
catch(e){return e instanceof DOMException&&(e.code===22||e.code===1014||e.name==='QuotaExceededError'||e.name==='NS_ERROR_DOM_QUOTA_REACHED')&&storage.length!==0;}}
function addDemandBaseIndustryToLocalStorage(){tries++;if(window.Demandbase&&window.Demandbase.IP&&window.Demandbase.IP.CompanyProfile&&window.Demandbase.IP.CompanyProfile.industry&&window.Demandbase.IP.CompanyProfile.industry.length>0){localStorage.setItem(storageKey,window.Demandbase.IP.CompanyProfile.industry.toLowerCase());clearInterval(interval);return true;}
if(tries>maxTries){clearInterval(interval);return false;}}})(jQuery,Drupal,window);;
/* Source and licensing information for the above line(s) can be found at https://www.okta.com/sites/all/modules/okta_configuration/js/okta.demandbase.vwo.industry.js. */
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.okta.com/sites/all/modules/okta_coveo_search/js/okta_coveo_search.js. */
(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports;}
var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports;}
__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter});}};__webpack_require__.r=function(exports){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});}
Object.defineProperty(exports,"__esModule",{value:true});};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if(mode&4&&typeof value==="object"&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value:value});if(mode&2&&typeof value!="string")for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key];}.bind(null,key));return ns;};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"];}:function getModuleExports(){return module;};__webpack_require__.d(getter,"a",getter);return getter;};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=0);})([function(module,exports,__webpack_require__){__webpack_require__(2);module.exports=__webpack_require__(1);},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"../css/okta_coveo_search.css";},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var configure_endpoint=function(){var renewToken=function renewToken(){return fetch("/api/search-token").then(function(response){return response.text();});};var token;if(typeof Drupal.settings.okta_coveo_search.token==="undefined"){renewToken();}
token=Drupal.settings.okta_coveo_search.token;Coveo.SearchEndpoint.configureCloudV2Endpoint("oktaproduction9ounvcxa",token,"https://platform.cloud.coveo.com/rest/search",{renewAccessToken:renewToken});};var config={rootElement:rootElement(),omniboxConfig:{enableQueryExtensionAddon:true,enableQuerySyntax:true,placeholder:"Search our content",triggerQueryOnClear:true},searchboxConfig:{enableOmnibox:true},analyticsConfig:{searchHub:"www-okta-com"},searchInterfaceConfig:{pipeline:"www-okta-com",enableHistory:true,enableAutomaticResponsiveMode:false},facetValueCaptions:{"Okta general":"Okta general","Help center":"Help center","Okta API docs":"Okta API docs",Integrate:"Partner integration docs"},pagerConfig:{numberOfPages:numberOfPages()},resultLinkOnClick:function resultLinkOnClick(event,result){event.preventDefault();if(result.raw.source==="okta-www"){event.currentTarget["CoveoResultLink"].openLink();}else if(result.raw.source==="okta-kb"){event.currentTarget["CoveoResultLink"].options.field="@sfpublicurloktadocumentationonlyc";event.currentTarget["CoveoResultLink"].openLinkInNewWindow();}else{event.currentTarget["CoveoResultLink"].openLinkInNewWindow();}}};function rootElement(){var rootElement=document.querySelector("#searchbox");if(location.pathname==="/search/"){rootElement=document.querySelector("#search-results");}
return rootElement;}
function numberOfPages(){var numberOfPages=10;if(window.innerWidth<=768){numberOfPages=5;}
if(window.innerWidth<=320){numberOfPages=3;}
return numberOfPages;}
var init_search=function(){if(location.pathname!=="/search/"){Coveo.initSearchbox(config.rootElement,"/search/",{Searchbox:config.searchboxConfig,Omnibox:config.omniboxConfig,Analytics:config.analyticsConfig});}else{var searchForm=document.getElementById("searchForm");var searchToggle=document.getElementById("searchToggle");searchForm.classList.add("is-active");searchToggle.classList.add("is-active");Coveo.init(config.rootElement,{externalComponents:[searchForm],Facet:{enableSettings:false},sourceFilter:{valueCaption:config.facetValueCaptions,includeInOmnibox:true},Searchbox:config.searchboxConfig,Omnibox:config.omniboxConfig,Analytics:config.analyticsConfig,SearchInterface:config.searchInterfaceConfig,Pager:config.pagerConfig,ResultLink:{onClick:config.resultLinkOnClick}});}};var template_helpers=function(){Coveo.TemplateHelpers.registerTemplateHelper("sourceTag",function(source){var markup="";var commonSource=this.result.raw.commonoktasource;if(commonSource==="Integrate"){commonSource="Partner Integration docs";}
if(commonSource==="Training"||commonSource==="Products"){commonSource="Okta general";}
if(source==="okta-help"||source==="okta-kb"){markup='\n      <span class="highlight">'.concat(commonSource,'</span>\n      <span class="highlight">').concat(this.result.raw.commoncontenttype,"</span>\n      ");}else{markup='<span class="highlight">'.concat(commonSource,"</span>");}
return markup;});Coveo.TemplateHelpers.registerTemplateHelper("dateFormatter",function(date){var lastUpdated="";var standardDate=Coveo.DateUtils.convertToStandardDate(date);if(Coveo.DateUtils.isValid(standardDate)){var month=Coveo.DateUtils.monthToString(standardDate.getMonth());var day=standardDate.getDate();var year=standardDate.getFullYear();lastUpdated="Last Updated on ".concat(month," ").concat(day,", ").concat(year);}
return lastUpdated;});};var listeners=function(){var body=document.querySelector("body");var header=document.querySelector(".Header");var searchForm=document.querySelector("#searchForm");var searchToggle=document.querySelector("#searchToggle");var omniBox=document.querySelector(".CoveoOmnibox");var pattern=new RegExp("[/]integrate[/]?.*");var isIntegratePath=pattern.test(document.location.href);var changeSearchState=function changeSearchState(){var action=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"toggle";body.classList[action]("has-searchOpen");header.classList[action]("has-searchOpen");searchToggle.classList[action]("is-active");if(searchForm.classList.contains("is-active")&&location.pathname==="/search/"&&window.innerWidth<1060){return;}
searchForm.classList[action]("is-active");};var focusSearchbox=function focusSearchbox(){Coveo.load("Omnibox").then(function(Omnibox){var searchInput=document.querySelector(".magic-box-input > input");if(searchToggle.classList.contains("is-active")){setTimeout(function(){return searchInput.focus();},500);}});};var updateFacet=function updateFacet(){if(location.pathname!=="/search/"){return;}
Coveo.load("Facet").then(function(Facet){var facetElement=document.querySelector("#sourceFilter");var facet=Coveo.get(facetElement);if(facet){var selectedValues=facet.getSelectedValues();var defaultValueSelected=selectedValues[0]==="Okta general";if(selectedValues.length===1&&defaultValueSelected){facet.element.classList.add("is-disabled");}else{facet.element.classList.remove("is-disabled");}}});};searchToggle.addEventListener("click",function(event){event.preventDefault();if(location.pathname==="/search/"){focusSearchbox();return;}
changeSearchState("toggle");focusSearchbox();});config.rootElement.addEventListener("newQuery",function(){if(isIntegratePath){window.sessionStorage.setItem("searchOriginIntegrate",true);}});config.rootElement.addEventListener("buildingQuery",function(event){var searchOriginIntegrate=JSON.parse(window.sessionStorage.getItem("searchOriginIntegrate"))||false;var state=Coveo.state(config.rootElement).getAttributes();var q=state["q"]||false;var aq=state["f:@commonoktasource"]||false;var stateOptions={};if(q){stateOptions={q:q};}
if(!aq){stateOptions={"f:@commonoktasource":["Okta general"]};}
if(searchOriginIntegrate){stateOptions={"f:@commonoktasource":["Integrate"]};window.sessionStorage.removeItem("searchOriginIntegrate");}
if(Object.entries(stateOptions).length>0){Coveo.state(config.rootElement,stateOptions);}
updateFacet();});omniBox.addEventListener("populateOmniboxSuggestions",function(event){var input=event.detail.omnibox.magicBox.displayedResult.input;var magicBoxElement=event.detail.omnibox.magicBox.element;var hasSuggestions=event.detail.omnibox.magicBox.suggestionsManager.hasSuggestions;if(input.length===0){magicBoxElement.classList.add("has-suggestions-hidden");}
if(input.length>0&&hasSuggestions){setTimeout(function(){return magicBoxElement.classList.remove("has-suggestions-hidden");},500);}});config.rootElement.addEventListener("newResultDisplayed",function(event){var maxLength=80;var result=event.detail.result;var resultElement=event.detail.item;var primaryResultLink=resultElement.querySelector(".is-primary");var secondaryResultLink=resultElement.querySelector(".is-secondary");var source=resultElement.CoveoResult.raw.source;var clickUri=resultElement.CoveoResult.clickUri;var title=result.title;if(!title||!primaryResultLink||!secondaryResultLink){return;}
if(source!=="okta-www"){primaryResultLink.classList.add("is-external-link");}
if(title.length>maxLength){title="".concat(title.substring(0,maxLength)," ...");}
primaryResultLink.innerHTML=title;if(source==="okta-kb"){clickUri=result.raw.sfpublicurloktadocumentationonlyc;}
secondaryResultLink.innerHTML=clickUri;primaryResultLink.href=clickUri;secondaryResultLink.href=clickUri;});};document.addEventListener("DOMContentLoaded",function(){configure_endpoint();listeners();template_helpers();init_search();});}]);;
/* Source and licensing information for the above line(s) can be found at https://www.okta.com/sites/all/modules/okta_coveo_search/js/okta_coveo_search.js. */
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.okta.com/sites/all/themes/Okta/js/header-nav-phone-number.js. */
;(function($,Drupal){var drupalContext;var selector='.Header-nav li:has(a[href="/contact-sales/"]) a[href^="tel"]';var phoneNumbers={apac:'+61 283187657',emea:'+44 (20) 38745142'};var updatePhoneLink=function(region){$(selector,drupalContext).attr('href','tel:'+phoneNumbers[region]).html(phoneNumbers[region]);};Drupal.behaviors.oktaHeaderNavPhoneNumber={attach:function(context,settings){drupalContext=context;if(settings.okta_geolocation&&settings.okta_geolocation.inThe){if(settings.okta_geolocation.inThe.apac&&settings.okta_geolocation.inThe.apac===true){updatePhoneLink('apac');}
else if(settings.okta_geolocation.inThe.emea&&settings.okta_geolocation.inThe.emea===true){updatePhoneLink('emea');}
else if(settings.okta_geolocation.inThe.eu&&settings.okta_geolocation.inThe.eu===true){updatePhoneLink('emea');}
else if(settings.okta_geolocation.inThe.nl&&settings.okta_geolocation.inThe.nl===true){updatePhoneLink('emea');}
else{}}}};})(jQuery,Drupal);;
/* Source and licensing information for the above line(s) can be found at https://www.okta.com/sites/all/themes/Okta/js/header-nav-phone-number.js. */
;/*})'"*/
// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/url-polyfill/url-polyfill.js":[function(require,module,exports) {
var global = arguments[3];
(function(global) {
  /**
   * Polyfill URLSearchParams
   *
   * Inspired from : https://github.com/WebReflection/url-search-params/blob/master/src/url-search-params.js
   */

  var checkIfIteratorIsSupported = function() {
    try {
      return !!Symbol.iterator;
    } catch (error) {
      return false;
    }
  };


  var iteratorSupported = checkIfIteratorIsSupported();

  var createIterator = function(items) {
    var iterator = {
      next: function() {
        var value = items.shift();
        return { done: value === void 0, value: value };
      }
    };

    if (iteratorSupported) {
      iterator[Symbol.iterator] = function() {
        return iterator;
      };
    }

    return iterator;
  };

  /**
   * Search param name and values should be encoded according to https://url.spec.whatwg.org/#urlencoded-serializing
   * encodeURIComponent() produces the same result except encoding spaces as `%20` instead of `+`.
   */
  var serializeParam = function(value) {
    return encodeURIComponent(value).replace(/%20/g, '+');
  };

  var deserializeParam = function(value) {
    return decodeURIComponent(String(value).replace(/\+/g, ' '));
  };

  var polyfillURLSearchParams = function() {

    var URLSearchParams = function(searchString) {
      Object.defineProperty(this, '_entries', { writable: true, value: {} });
      var typeofSearchString = typeof searchString;

      if (typeofSearchString === 'undefined') {
        // do nothing
      } else if (typeofSearchString === 'string') {
        if (searchString !== '') {
          this._fromString(searchString);
        }
      } else if (searchString instanceof URLSearchParams) {
        var _this = this;
        searchString.forEach(function(value, name) {
          _this.append(name, value);
        });
      } else if ((searchString !== null) && (typeofSearchString === 'object')) {
        if (Object.prototype.toString.call(searchString) === '[object Array]') {
          for (var i = 0; i < searchString.length; i++) {
            var entry = searchString[i];
            if ((Object.prototype.toString.call(entry) === '[object Array]') || (entry.length !== 2)) {
              this.append(entry[0], entry[1]);
            } else {
              throw new TypeError('Expected [string, any] as entry at index ' + i + ' of URLSearchParams\'s input');
            }
          }
        } else {
          for (var key in searchString) {
            if (searchString.hasOwnProperty(key)) {
              this.append(key, searchString[key]);
            }
          }
        }
      } else {
        throw new TypeError('Unsupported input\'s type for URLSearchParams');
      }
    };

    var proto = URLSearchParams.prototype;

    proto.append = function(name, value) {
      if (name in this._entries) {
        this._entries[name].push(String(value));
      } else {
        this._entries[name] = [String(value)];
      }
    };

    proto.delete = function(name) {
      delete this._entries[name];
    };

    proto.get = function(name) {
      return (name in this._entries) ? this._entries[name][0] : null;
    };

    proto.getAll = function(name) {
      return (name in this._entries) ? this._entries[name].slice(0) : [];
    };

    proto.has = function(name) {
      return (name in this._entries);
    };

    proto.set = function(name, value) {
      this._entries[name] = [String(value)];
    };

    proto.forEach = function(callback, thisArg) {
      var entries;
      for (var name in this._entries) {
        if (this._entries.hasOwnProperty(name)) {
          entries = this._entries[name];
          for (var i = 0; i < entries.length; i++) {
            callback.call(thisArg, entries[i], name, this);
          }
        }
      }
    };

    proto.keys = function() {
      var items = [];
      this.forEach(function(value, name) {
        items.push(name);
      });
      return createIterator(items);
    };

    proto.values = function() {
      var items = [];
      this.forEach(function(value) {
        items.push(value);
      });
      return createIterator(items);
    };

    proto.entries = function() {
      var items = [];
      this.forEach(function(value, name) {
        items.push([name, value]);
      });
      return createIterator(items);
    };

    if (iteratorSupported) {
      proto[Symbol.iterator] = proto.entries;
    }

    proto.toString = function() {
      var searchArray = [];
      this.forEach(function(value, name) {
        searchArray.push(serializeParam(name) + '=' + serializeParam(value));
      });
      return searchArray.join('&');
    };


    global.URLSearchParams = URLSearchParams;
  };

  var checkIfURLSearchParamsSupported = function() {
    try {
      var URLSearchParams = global.URLSearchParams;

      return (new URLSearchParams('?a=1').toString() === 'a=1') && (typeof URLSearchParams.prototype.set === 'function');
    } catch (e) {
      return false;
    }
  };

  if (!checkIfURLSearchParamsSupported()) {
    polyfillURLSearchParams();
  }

  var proto = global.URLSearchParams.prototype;

  if (typeof proto.sort !== 'function') {
    proto.sort = function() {
      var _this = this;
      var items = [];
      this.forEach(function(value, name) {
        items.push([name, value]);
        if (!_this._entries) {
          _this.delete(name);
        }
      });
      items.sort(function(a, b) {
        if (a[0] < b[0]) {
          return -1;
        } else if (a[0] > b[0]) {
          return +1;
        } else {
          return 0;
        }
      });
      if (_this._entries) { // force reset because IE keeps keys index
        _this._entries = {};
      }
      for (var i = 0; i < items.length; i++) {
        this.append(items[i][0], items[i][1]);
      }
    };
  }

  if (typeof proto._fromString !== 'function') {
    Object.defineProperty(proto, '_fromString', {
      enumerable: false,
      configurable: false,
      writable: false,
      value: function(searchString) {
        if (this._entries) {
          this._entries = {};
        } else {
          var keys = [];
          this.forEach(function(value, name) {
            keys.push(name);
          });
          for (var i = 0; i < keys.length; i++) {
            this.delete(keys[i]);
          }
        }

        searchString = searchString.replace(/^\?/, '');
        var attributes = searchString.split('&');
        var attribute;
        for (var i = 0; i < attributes.length; i++) {
          attribute = attributes[i].split('=');
          this.append(
            deserializeParam(attribute[0]),
            (attribute.length > 1) ? deserializeParam(attribute[1]) : ''
          );
        }
      }
    });
  }

  // HTMLAnchorElement

})(
  (typeof global !== 'undefined') ? global
    : ((typeof window !== 'undefined') ? window
    : ((typeof self !== 'undefined') ? self : this))
);

(function(global) {
  /**
   * Polyfill URL
   *
   * Inspired from : https://github.com/arv/DOM-URL-Polyfill/blob/master/src/url.js
   */

  var checkIfURLIsSupported = function() {
    try {
      var u = new global.URL('b', 'http://a');
      u.pathname = 'c%20d';
      return (u.href === 'http://a/c%20d') && u.searchParams;
    } catch (e) {
      return false;
    }
  };


  var polyfillURL = function() {
    var _URL = global.URL;

    var URL = function(url, base) {
      if (typeof url !== 'string') url = String(url);

      // Only create another document if the base is different from current location.
      var doc = document, baseElement;
      if (base && (global.location === void 0 || base !== global.location.href)) {
        doc = document.implementation.createHTMLDocument('');
        baseElement = doc.createElement('base');
        baseElement.href = base;
        doc.head.appendChild(baseElement);
        try {
          if (baseElement.href.indexOf(base) !== 0) throw new Error(baseElement.href);
        } catch (err) {
          throw new Error('URL unable to set base ' + base + ' due to ' + err);
        }
      }

      var anchorElement = doc.createElement('a');
      anchorElement.href = url;
      if (baseElement) {
        doc.body.appendChild(anchorElement);
        anchorElement.href = anchorElement.href; // force href to refresh
      }

      if (anchorElement.protocol === ':' || !/:/.test(anchorElement.href)) {
        throw new TypeError('Invalid URL');
      }

      Object.defineProperty(this, '_anchorElement', {
        value: anchorElement
      });


      // create a linked searchParams which reflect its changes on URL
      var searchParams = new global.URLSearchParams(this.search);
      var enableSearchUpdate = true;
      var enableSearchParamsUpdate = true;
      var _this = this;
      ['append', 'delete', 'set'].forEach(function(methodName) {
        var method = searchParams[methodName];
        searchParams[methodName] = function() {
          method.apply(searchParams, arguments);
          if (enableSearchUpdate) {
            enableSearchParamsUpdate = false;
            _this.search = searchParams.toString();
            enableSearchParamsUpdate = true;
          }
        };
      });

      Object.defineProperty(this, 'searchParams', {
        value: searchParams,
        enumerable: true
      });

      var search = void 0;
      Object.defineProperty(this, '_updateSearchParams', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function() {
          if (this.search !== search) {
            search = this.search;
            if (enableSearchParamsUpdate) {
              enableSearchUpdate = false;
              this.searchParams._fromString(this.search);
              enableSearchUpdate = true;
            }
          }
        }
      });
    };

    var proto = URL.prototype;

    var linkURLWithAnchorAttribute = function(attributeName) {
      Object.defineProperty(proto, attributeName, {
        get: function() {
          return this._anchorElement[attributeName];
        },
        set: function(value) {
          this._anchorElement[attributeName] = value;
        },
        enumerable: true
      });
    };

    ['hash', 'host', 'hostname', 'port', 'protocol']
      .forEach(function(attributeName) {
        linkURLWithAnchorAttribute(attributeName);
      });

    Object.defineProperty(proto, 'search', {
      get: function() {
        return this._anchorElement['search'];
      },
      set: function(value) {
        this._anchorElement['search'] = value;
        this._updateSearchParams();
      },
      enumerable: true
    });

    Object.defineProperties(proto, {

      'toString': {
        get: function() {
          var _this = this;
          return function() {
            return _this.href;
          };
        }
      },

      'href': {
        get: function() {
          return this._anchorElement.href.replace(/\?$/, '');
        },
        set: function(value) {
          this._anchorElement.href = value;
          this._updateSearchParams();
        },
        enumerable: true
      },

      'pathname': {
        get: function() {
          return this._anchorElement.pathname.replace(/(^\/?)/, '/');
        },
        set: function(value) {
          this._anchorElement.pathname = value;
        },
        enumerable: true
      },

      'origin': {
        get: function() {
          // get expected port from protocol
          var expectedPort = { 'http:': 80, 'https:': 443, 'ftp:': 21 }[this._anchorElement.protocol];
          // add port to origin if, expected port is different than actual port
          // and it is not empty f.e http://foo:8080
          // 8080 != 80 && 8080 != ''
          var addPortToOrigin = this._anchorElement.port != expectedPort &&
            this._anchorElement.port !== '';

          return this._anchorElement.protocol +
            '//' +
            this._anchorElement.hostname +
            (addPortToOrigin ? (':' + this._anchorElement.port) : '');
        },
        enumerable: true
      },

      'password': { // TODO
        get: function() {
          return '';
        },
        set: function(value) {
        },
        enumerable: true
      },

      'username': { // TODO
        get: function() {
          return '';
        },
        set: function(value) {
        },
        enumerable: true
      },
    });

    URL.createObjectURL = function(blob) {
      return _URL.createObjectURL.apply(_URL, arguments);
    };

    URL.revokeObjectURL = function(url) {
      return _URL.revokeObjectURL.apply(_URL, arguments);
    };

    global.URL = URL;

  };

  if (!checkIfURLIsSupported()) {
    polyfillURL();
  }

  if ((global.location !== void 0) && !('origin' in global.location)) {
    var getOrigin = function() {
      return global.location.protocol + '//' + global.location.hostname + (global.location.port ? (':' + global.location.port) : '');
    };

    try {
      Object.defineProperty(global.location, 'origin', {
        get: getOrigin,
        enumerable: true
      });
    } catch (e) {
      setInterval(function() {
        global.location.origin = getOrigin();
      }, 100);
    }
  }

})(
  (typeof global !== 'undefined') ? global
    : ((typeof window !== 'undefined') ? window
    : ((typeof self !== 'undefined') ? self : this))
);

},{}],"vidyard-videos.js":[function(require,module,exports) {
"use strict";

require("url-polyfill");

// Polyfill for the URL api.
// Vidyard player functionality
window.vidyardEmbed ? main(window.vidyardEmbed) : window.onVidyardAPI = function (vidyardEmbed) {
  return main(vidyardEmbed);
};

function main(vidyardEmbed) {
  var openLightbox = function openLightbox(video_id) {
    var currentPlayer = vidyardEmbed.api.getPlayersByUUID(video_id)[0];

    if (typeof currentPlayer === "undefined") {
      var embedContainer = document.getElementById("video-lightbox-container");
      var embedMarkup = document.createElement("img");
      embedMarkup.setAttribute("class", "vidyard-player-embed");
      embedMarkup.setAttribute("data-type", "lightbox");
      embedMarkup.setAttribute("data-uuid", "".concat(video_id));
      embedMarkup.setAttribute("data-v", "4");
      embedMarkup.setAttribute("src", "https://play.vidyard.com/".concat(video_id, ".jpg"));
      embedMarkup.setAttribute("data-height", "720");
      embedMarkup.setAttribute("data-width", "1280");
      embedContainer.appendChild(embedMarkup); // Render the player.

      vidyardEmbed.api.renderDOMPlayers(embedContainer);
      currentPlayer = vidyardEmbed.api.getPlayersByUUID(video_id)[0];
    }

    if (currentPlayer) {
      var container = document.querySelector("#vidyard-overlay-wrapper");

      if (container !== null) {
        return;
      } // Open the player in a lightbox.


      currentPlayer.showLightbox();
    }
  };

  var isVidyardURL = function isVidyardURL(url) {
    var urlObject = new URL(url);
    var regex = /(play|embed).vidyard.com/g;
    return urlObject.hostname.match(regex);
  };

  var playVideo = function playVideo(event) {
    if (!event.target && !event.target.href) {
      return;
    }

    var url = new URL(event.target.href);
    var video_id = url.pathname.substring(1);

    if (video_id) {
      openLightbox(video_id);
    }
  }; // Add listener to document in order to retain after AJAX content refresh,
  // for example the Customers page.


  (function ($) {
    $("body").on("click", ".video-lightbox", function (event) {
      event.preventDefault();

      if (isVidyardURL(event.target.href)) {
        playVideo(event);
      }
    });
  })(jQuery);
}
},{"url-polyfill":"../node_modules/url-polyfill/url-polyfill.js"}]},{},["vidyard-videos.js"], null)
;/*})'"*/
;/*})'"*/

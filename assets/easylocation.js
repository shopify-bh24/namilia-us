'use strict';

if( typeof easylocation != 'object' ) {
  document.addEventListener = document.addEventListener || function(e, f){ document.attachEvent('on' + e, f); };
  if( typeof window.CustomEvent !== "function" ) {
    var CustomEvent = function( event, params ) {
      params = params || { bubbles: false, cancelable: false, detail: undefined };
      var evt = document.createEvent( 'CustomEvent' );
      evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
      return evt;
    }
    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
  }

  var easylocation = {
    urlLocation: 'https://geolocation.nexusmedia.workers.dev',
    urlIp: 'https://apps.nexusmedia-ua.com/geoip/ip.php',
    parameters: {
      "redirect_text": "It seems you're in %COUNTRY%. Redirect to %STORENAME%?",
      "yes": "Yes, please",
      "no": "No, thanks",
      "background-color": "0096ff",
      "text-color": "ffffff",
      "yes-background-color": "005493",
      "yes-text-color": "ffffff",
      "no-background-color": "005493",
      "no-text-color": "ffffff",
      "layout-selector": "top",
      "popup_delay": 0,
      "permanent-redirect": 0
    },
    base64: {_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=easylocation.base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=easylocation.base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=0,c1=0,c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);var c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}},
    locales: ["mr","bs","ee_TG","ms","kam_KE","mt","ha","es_HN","ml_IN","ro_MD","kab_DZ","he","es_CO","my","es_PA","az_Latn","mer","en_NZ","xog_UG","sg","fr_GP","sr_Cyrl_BA","hi","fil_PH","lt_LT","si","en_MT","si_LK","luo_KE","it_CH","teo","mfe","sk","uz_Cyrl_UZ","sl","rm_CH","az_Cyrl_AZ","fr_GQ","kde","sn","cgg_UG","so","fr_RW","es_SV","mas_TZ","en_MU","sq","hr","sr","en_PH","ca","hu","mk_MK","fr_TD","nb","sv","kln_KE","sw","nd","sr_Latn","el_GR","hy","ne","el_CY","es_CR","fo_FO","pa_Arab_PK","seh","ar_YE","ja_JP","ur_PK","pa_Guru","gl_ES","zh_Hant_HK","ar_EG","nl","th_TH","es_PE","fr_KM","nn","kk_Cyrl_KZ","kea","lv_LV","kln","tzm_Latn","yo","gsw_CH","ha_Latn_GH","is_IS","pt_BR","cs","en_PK","fa_IR","zh_Hans_SG","luo","ta","fr_TG","kde_TZ","mr_IN","ar_SA","ka_GE","mfe_MU","id","fr_LU","de_LU","ru_MD","cy","zh_Hans_HK","te","bg_BG","shi_Latn","ig","ses","ii","es_BO","th","ko_KR","ti","it_IT","shi_Latn_MA","pt_MZ","ff_SN","haw","zh_Hans","so_KE","bn_IN","en_UM","to","id_ID","uz_Cyrl","en_GU","es_EC","en_US_POSIX","sr_Latn_BA","is","luy","tr","en_NA","it","da","bo_IN","vun_TZ","ar_SD","uz_Latn_UZ","az_Latn_AZ","de","es_GQ","ta_IN","de_DE","fr_FR","rof_TZ","ar_LY","en_BW","asa","zh","ha_Latn","fr_NE","es_MX","bem_ZM","zh_Hans_CN","bn_BD","pt_GW","om","jmc","de_AT","kk_Cyrl","sw_TZ","ar_OM","et_EE","or","da_DK","ro_RO","zh_Hant","bm_ML","ja","fr_CA","naq","zu","en_IE","ar_MA","es_GT","uz_Arab_AF","en_AS","bs_BA","am_ET","ar_TN","haw_US","ar_JO","fa_AF","uz_Latn","en_BZ","nyn_UG","ebu_KE","te_IN","cy_GB","uk","nyn","en_JM","en_US","fil","ar_KW","af_ZA","en_CA","fr_DJ","ti_ER","ig_NG","en_AU","ur","fr_MC","pt_PT","pa","es_419","fr_CD","en_SG","bo_CN","kn_IN","sr_Cyrl_RS","lg_UG","gu_IN","ee","nd_ZW","bem","uz","sw_KE","sq_AL","hr_HR","mas_KE","el","ti_ET","es_AR","pl","en","eo","shi","kok","fr_CF","fr_RE","mas","rof","ru_UA","yo_NG","dav_KE","gv_GB","pa_Arab","es","teo_UG","ps","es_PR","fr_MF","et","pt","eu","ka","rwk_TZ","nb_NO","fr_CG","cgg","zh_Hant_TW","sr_Cyrl_ME","lag","ses_ML","en_ZW","ak_GH","vi_VN","sv_FI","to_TO","fr_MG","fr_GA","fr_CH","de_CH","es_US","ki","my_MM","vi","ar_QA","ga_IE","rwk","bez","ee_GH","kk","as_IN","ca_ES","kl","fr_SN","ne_IN","km","ms_BN","ar_LB","ta_LK","kn","ur_IN","fr_CI","ko","ha_Latn_NG","sg_CF","om_ET","zh_Hant_MO","uk_UA","fa","mt_MT","ki_KE","luy_KE","kw","pa_Guru_IN","en_IN","kab","ar_IQ","ff","en_TT","bez_TZ","es_NI","uz_Arab","ne_NP","fi","khq","gsw","zh_Hans_MO","en_MH","hu_HU","en_GB","fr_BE","de_BE","saq","be_BY","sl_SI","sr_Latn_RS","fo","fr","xog","fr_BF","tzm","sk_SK","fr_ML","he_IL","ha_Latn_NE","ru_RU","fr_CM","teo_KE","seh_MZ","kl_GL","fi_FI","kam","es_ES","af","asa_TZ","cs_CZ","tr_TR","es_PY","tzm_Latn_MA","lg","ebu","en_HK","nl_NL","en_BE","ms_MY","es_UY","ar_BH","kw_GB","ak","chr","dav","lag_TZ","am","so_DJ","shi_Tfng_MA","sr_Latn_ME","sn_ZW","or_IN","ar","as","fr_BI","jmc_TZ","chr_US","eu_ES","saq_KE","vun","lt","naq_NA","ga","af_NA","kea_CV","es_DO","lv","kok_IN","de_LI","fr_BJ","az","guz_KE","rw_RW","mg_MG","km_KH","gl","shi_Tfng","ar_AE","fr_MQ","rm","sv_SE","az_Cyrl","ro","so_ET","en_ZA","ii_CN","fr_BL","hi_IN","gu","mer_KE","nn_NO","gv","ru","ar_DZ","ar_SY","en_MP","nl_BE","rw","be","en_VI","es_CL","bg","mg","hy_AM","zu_ZA","guz","mk","es_VE","ml","bm","khq_ML","bn","ps_AF","so_SO","sr_Cyrl","pl_PL","fr_GN","bo","om_KE"],
    ready: false,
    locationData: null,
    lang: 'en',

    run: function()
    {
      if( !this.getCookie('geoip-redirect-closed') ) this.getLocation();
    },

    getLocation: function()
    {
      const verificationOfCookie = this.getCookie("geoip-location");
      if( !verificationOfCookie ) {
        this.getJSON(this.urlLocation, geo => {
          if( geo && geo.message === 'success' ) {
            const _setData = (data, ip) => {
              data.ip = ip;
              this.locationData = data;
              this.setCookie("geoip-location", data, {expires: 86400});
              this.loadParameters();
            }

            if( geo.is_v4 ) _setData(geo.data, geo.ip);
            else this.getJSON(this.urlIp, ip => { if( ip ) _setData(geo.data, ip) });
          }
        }, {'x-api-key': 'd79f3cf4-f062-41dd-aa75-f1c5c4091f75'});

      } else {
        this.locationData = verificationOfCookie;
        this.loadParameters();
      }
    },

    loadParameters: function()
    {
      var infoMeta = document.querySelector('meta.geo-ip');
      var config = infoMeta ? JSON.parse(easylocation.base64Decode(infoMeta.content)) : null;

      if( config && config.parameters && typeof config.parameters === 'object' ) easylocation.parameters = config.parameters;

      if( config && typeof config.rulesList !== 'undefined') {
        easylocation.implementRules(config.rulesList);
      } else {
        console.error('cant load rules');
      }
    },

    implementRules: function( rules )
    {
      for( var i = 0; i < rules.length; i++ ) {
        if( easylocation.compareCountries(rules[i]) ) {
          easylocation.goRedirect(rules[i]);
          break;
        }
      }
    },

    goRedirect: function( rule )
    {
      if( rule.domain_redirect === '1' && rule.link !== 'about:blank' ) {
        rule.link = easylocation.getDomainLink(rule.link);
      }

      if( (easylocation.parameters['layout-selector'] === 'top' || easylocation.parameters['layout-selector'] === 'popup') && rule.link !== 'about:blank' ) {
        if( easylocation.parameters['permanent-redirect'] && easylocation.getCookie("geoip-permanent-redirect") ) {
          easylocation.pureRedirect(rule);
          return;
        }

        if( easylocation.compareUrls(window.location.href, rule.link) ) easylocation.setCookie('geoip-redirect-closed', true);
        else easylocation.onReady( function(){ easylocation.setTemplateBanner(rule); } );

      } else {
        easylocation.pureRedirect(rule);
      }
    },


    getJSON: function( url, callback, headers )
    {
      let xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);

      xhr.responseType = 'json';
      xhr.onload = () => { xhr.status === 200 ? callback(xhr.response) : callback(null) };
      if( headers ) Object.keys(headers).forEach(h => xhr.setRequestHeader(h, headers[h]));

      xhr.send();
    },

    getDomainLink: function( link )
    {
      let matchProtocol = link.match(/(^(https?:)*?\/\/)/i, '');
      if( !matchProtocol ) link = 'https://' + link;

      // Strip locale from the current URL before redirect
      var u = new URL(window.location.href);
      var p = u.pathname.split("/");
      for (var i = 0; i < easylocation.locales.length; i++) {
        if (p[1].toLowerCase() == easylocation.locales[i].replace("_","-").toLowerCase()) { delete p[1]; break; }
      }
      u.pathname = p.join("/").replace("//", "/");

      // Check if current URL pathname equals new URL pathname, if so strip pathname to avoid duplication
      var re = new RegExp(window.location.protocol + '//' + window.location.host, 'g');
      var link_data = new URL(link.replace(/\/*?$/, ''));

      var preparedLink = window.location.href
                            .replace(window.location.pathname, u.pathname)
                            .replace(re, link_data.href.replace(/\?.+$/, '').replace(/\/$/, ''))
                            .replace(link_data.pathname + link_data.pathname + "/", link_data.pathname + "/");

      // add get-params
      if( link_data.search ) preparedLink += u.search ? link_data.search.replace('?', '&') : link_data.search;

      return preparedLink;
    },

    getCookie: function( name )
    {
      if( easylocation.supportsLocalStorage() && localStorage[name] !== undefined ) {
        var lsObj = JSON.parse(unescape(localStorage[name]));
        var dateString = lsObj.expires;
        if( !dateString ) return lsObj.value;

        var now = new Date().getTime().toString();
        if( now - lsObj.expires  > 0 ) {
          localStorage.removeItem(name);
          return undefined;
        }
        return lsObj.value;
      }

      var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
      ));
      return matches ? JSON.parse(unescape(matches[1])) : undefined;
    },

    setCookie: function( name, value, options )
    {
      options = options || {};

      var lsObj = {value: value, expires: null};
      var expires = options.expires;

      if( expires ) {
        expires = parseInt(expires);
        var d = new Date();
        d.setTime(d.getTime() + (expires * 1000));
        expires = options.expires = d;
        if( expires.toUTCString ) options.expires = expires.toUTCString();
        lsObj.expires = expires.getTime().toString();
      }

      if( easylocation.supportsLocalStorage() ) {
        localStorage[name] = JSON.stringify(lsObj);
        return;
      }

      value = escape(JSON.stringify(value));
      var updatedCookie = name + "=" + value;

      for( var propName in options ) {
        updatedCookie += ";" + propName;
        var propValue = options[propName];
        if( propValue !== true ) {
          updatedCookie += "=" + propValue;
        }
      }
      updatedCookie += ";path=/";

      document.cookie = updatedCookie;
    },

    supportsLocalStorage: function()
    {
      try {
        return 'localStorage' in window && window.localStorage;
      } catch (e) {
        return false;
      }
    },

    compareCountries: function( rule )
    {
      var arrCountries = [];
      var arrExceptionCountries = [];

      if( Array.isArray(rule.countries) ) {
        arrCountries = rule.countries;
      } else if( typeof(rule.countries) != "undefined" && rule.countries !== null ) {
        arrCountries = rule.countries.split(',');
      }

      if( Array.isArray(rule.exceptions) ) {
        arrExceptionCountries = rule.exceptions;
      } else if( typeof(rule.exceptions) != "undefined" && rule.exceptions !== null ) {
        arrExceptionCountries = rule.exceptions.split(',');
      }

      if( easylocation.checkIp(rule.ip) === true ) return true;

      var passed = false;
      for( var i = 0; i < arrCountries.length; i++ ) {
        var position = arrCountries[i];
        if( position === 'All countries' || easylocation.checkCountry(position) || easylocation.checkRegion(position) ) passed = true;
      }

      if( passed ) {
        for( var i = 0; i < arrExceptionCountries.length; i++ ) {
          var position = arrExceptionCountries[i];
          if( position === 'All countries' || easylocation.checkCountry(position) || easylocation.checkRegion(position) ) return false;
        }
        return true;
      }

      return false;
    },

    checkCountry: function( position )
    {
      var currentCountry = easylocation.locationData.country.names.en;
      return currentCountry === position;
    },

    checkRegion: function( position )
    {
      var currentRegion = easylocation.locationData.continent.names.en;
      return currentRegion === position;
    },

    checkIp: function( ipList )
    {
      return (easylocation.locationData && ipList.split(",").indexOf(easylocation.locationData.ip) !== -1);
    },

    pureRedirect: function(item)
    {
      // on/off redirect
      if( window.location.hash == "#redirectoff" ) easylocation.setCookie('easyLocationNoRedirect', true);
      if( window.location.hash == "#redirecton"  ) easylocation.setCookie('easyLocationNoRedirect', false);

      // editor iframe
      if( (typeof Shopify === 'object' && Shopify.designMode) || (window.frameElement && window.frameElement.id && window.frameElement.id == 'theme-editor-iframe') ) return;

      // same url
      if( easylocation.compareUrls(window.location.href, item.link) ) return;

      // preview
      if( window.location.href.indexOf('shopifypreview.com') !== -1 ) return;

      // manualy disabled redirect
      if( easylocation.getCookie('easyLocationNoRedirect') ) return;

      // check locales redirect
      let sameLocale = this.isSameLocale(item);
      if( sameLocale ) return;

      if( sameLocale === false ) {
        if( easylocation.getCookie('easyLocationLocaleRedirect') ) return;
        else easylocation.setCookie('easyLocationLocaleRedirect', true);
      }

      // prepare link
      if( item.link !== 'about:blank' ) {
        let matchProtocol = item.link.match(/(^(https?:)*?\/\/)/i);
        if( !matchProtocol ) {
          let linkParts;
          linkParts = item.link.split('#');
          linkParts = linkParts[0].split('?');
          linkParts = linkParts[0].split('/');

          var hostname = linkParts[0].match(/^\w+([\.-]?\w+)*(\.\w{2,3})+$/i);
          if( hostname ) {
            if( !matchProtocol ) item.link = 'https://' + item.link;
          } else {
            if( ['#','?','/'].indexOf(item.link[0]) < 0 ) item.link = '/' + item.link;
          }
        }
      }

      window.location.href = item.link;
    },

    setTemplateBanner: function( rule )
    {
      if( this.isSameLocale(rule) ) return;

      var storeCountryName = easylocation.setStoreCountryName(rule);
      var event = document.createEvent('Event');
      event.initEvent('easylocation_before_render', true, true);
      document.dispatchEvent(event);

      easylocation.setCookie('easyLocationLocaleRedirect', false);
      var wrapperDiv = document.createElement('div');
      wrapperDiv.id = 'geoip-banner';

      var topDiv = document.createElement('div');
      topDiv.className = 'geoip-' + easylocation.parameters['layout-selector'] + '-banner';
      topDiv.style.backgroundColor = '#' + easylocation.parameters['background-color'];

      if( typeof window.easylocationCustomTemplate !== 'function' ) {
        topDiv.innerHTML = easylocation.getBanner(easylocation.parameters, rule);
      } else {
        topDiv.innerHTML = window.easylocationCustomTemplate(easylocation.parameters);
      }

      var body = document.querySelector('body');
      var delayTime = easylocation.parameters['popup_delay'] ? ( easylocation.parameters['popup_delay'] >= 0 ? easylocation.parameters['popup_delay'] * 1000 : -1 ) : 0;

      function _render()
      {
        wrapperDiv.innerHTML = '';
        wrapperDiv.style.opacity = 1;
        wrapperDiv.appendChild(topDiv);

        body.insertBefore(wrapperDiv, body.firstChild);
        easylocation.addStylesBlock(wrapperDiv);

        var event = new window.CustomEvent('easylocation_render', rule);
        document.dispatchEvent(event);
      }

      if( easylocation.parameters['layout-selector'] === 'popup' ) {
        easylocation.addPopupStyles(wrapperDiv);

        var allCloseButtons = topDiv.querySelectorAll('.geoip-close-icon, .geoip-close-btn');
        for( var j = 0; j < allCloseButtons.length; j++ ) {
          allCloseButtons[j].addEventListener('click', function(e){
            if( delayTime == -1 ) easylocation.closeBanner(e);
            else {
              if( delayTime > 0 ) {
                var now = new Date().getTime().toString();
                easylocation.setCookie('geoip-delay', (+now) + delayTime);
                setTimeout(_render, delayTime);
              }
              easylocation.hideBanner(e);
            }
          });
        }

        if( delayTime > 0 ) {
          var now = new Date().getTime().toString();
          var delaysExpaire = easylocation.getCookie('geoip-delay');

          if( !delaysExpaire ) {
            easylocation.setCookie('geoip-delay', (+now) + delayTime);
            _render();

          } else {
            var shortDelay = delaysExpaire - now;
            if( shortDelay < 0 ) shortDelay = 10;
            setTimeout(_render, shortDelay);
          }
        } else {
          _render();
        }
      } else {
        _render();
      }

      if( topDiv.querySelector('.geoip-no-btn') ) {
        topDiv.querySelector('.geoip-no-btn').addEventListener('click', easylocation.closeBanner);
      }
      if( topDiv.querySelector('.geoip-yes-btn') ) {
        topDiv.querySelector('.geoip-yes-btn').addEventListener('click', function () {
          easylocation.setCookie("geoip-permanent-redirect", 1, {expires: 315360000 });
          easylocation.pureRedirect(rule);
        });
      }
    },

    compareUrls(url1, url2)
    {
      url1 = url1.replace(/(https?:\/\/){0,1}(www\.){0,1}(.+?)\/?$/, "$3");
      url2 = url2.replace(/(https?:\/\/){0,1}(www\.){0,1}(.+?)\/?$/, "$3");

      return url1 === url2;
    },

    isSameLocale: function( item )
    {
      let currentLocale = null;
      let newLocale = null;
      let u, p, re, resC, resN;

      if( typeof URL === "function" ) {
        u = new URL(window.location.href);
        p = u.pathname.split('/');
        if( p && p[1] && easylocation.locales.indexOf(p[1]) >= 0 ) currentLocale = p[1];

        u = new URL(item.link, window.location.href);
        p = u.pathname.split('/');
        if( p && p[1] && easylocation.locales.indexOf(p[1]) >= 0 ) newLocale = p[1];

      } else {
        for( let i = 0; i < easylocation.locales.length; i++ ) {
          re = new RegExp('\/(' + easylocation.locales[i].replace("_", "-") + ')(\/|\\?|#|$)', 'i');

          if( !currentLocale ) {
            resC = window.location.href.match(re);
            if( resC && resC[1] ) currentLocale = resC[1].toLowerCase();
          }

          if( !newLocale ) {
            resN = item.link.match(re);
            if( resN && resN[1] ) newLocale = resN[1].toLowerCase();
          }
        }
      }

      // true - same | false - not same | null - no locale
      return (/*currentLocale ||*/ newLocale) ? currentLocale == newLocale : null;
    },

    getBanner: function( params, rule )
    {
      return [
        '<div class="geoip-main-block">',
          '<div class="geoip-text-block">',
            easylocation.setStoreCountryName(rule),
          '</div>',
          '<div class = "geoip-button-block">',
            '<button class="geoip-yes-btn">',
              easylocation.setTextStoreCountryName( rule, params['yes'] ),
            '</button>',
            '<button class="geoip-no-btn">',
              easylocation.setTextStoreCountryName( rule, params['no'] ),
            '</button>',
          '</div>',
        '</div>',
        '<span class="geoip-close-icon">&times;</span>',
      ].join('');
    },

    addPopupStyles: function( wrapperDiv )
    {
      wrapperDiv.style.height = '100%';
      wrapperDiv.style.width = '100%';
      wrapperDiv.style.position = 'fixed';
      wrapperDiv.style.zIndex = '9999999999999';
      wrapperDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    },

    setStoreCountryName: function( rule )
    {
      var lang = typeof rule.lang === 'string' ? rule.lang : ( typeof easylocation.lang === 'string' ? easylocation.lang : 'en' );
      var countryName = easylocation.locationData.country.names[lang];
      if( lang == 'en' && ['United States', 'Netherlands', 'Czech Republic', 'Vatican City'].indexOf(countryName) >= 0) countryName = 'the ' + countryName;

      var replased = easylocation.parameters.redirect_text.replace(/%STORENAME%/g, '<span class="geoip-store-name"><a href = "' + rule.link + '">' + rule.store_name + '</a></span>');
      return replased.replace(/%COUNTRY%/g, '<span class="geoip-country-name">' + countryName + '</span>');
    },

    setTextStoreCountryName: function( rule, text )
    {
      var lang = typeof rule.lang === 'string' ? rule.lang : ( typeof easylocation.lang === 'string' ? easylocation.lang : 'en' );
      var countryName = easylocation.locationData.country.names[lang];
      if( lang == 'en' && ['United States', 'Netherlands', 'Czech Republic', 'Vatican City'].indexOf(countryName) >= 0) countryName = 'the ' + countryName;

      //var replased = easylocation.parameters.redirect_text.replace(/%STORENAME%/g, '<span class="geoip-store-name"><a href = "' + rule.link + '">' + rule.store_name + '</a></span>');
      return text.replace(/%COUNTRY%/g, '<span class="geoip-country-name">' + countryName + '</span>');
    },


    closeBanner: function( e )
    {
      easylocation.setCookie('geoip-redirect-closed', true);
      easylocation.hideBanner(e);
    },

    hideBanner: function( e )
    {
      var topDiv = document.querySelector('div#geoip-banner');
      topDiv.style.opacity = 0;
      topDiv.style.transition = 'opacity 0.3s';
      setTimeout(function(){
        topDiv.parentNode.removeChild(topDiv);
      }, 300);
    },

    addStylesBlock: function( wrapperDiv )
    {
      var newStyleTag = document.createElement('style');
      var params = easylocation.parameters;
      newStyleTag.innerHTML = [
        '.geoip-store-name a:hover{color:inherit;}',
        '.geoip-popup-banner .geoip-main-block button:first-child{margin-left: 0;}',
        '.geoip-top-banner .geoip-close-icon{display:none}',
        '.geoip-top-banner{position:relative;z-index:9999;text-align:center}',
        '.geoip-top-banner .geoip-button-block{display:inline-block; margin:5px;}',
        '.geoip-top-banner .geoip-text-block{margin-right:20px; display: inline-block;}',
        '.geoip-store-name{font-weight:bolder}',
        '.geoip-store-name a{color:inherit;text-decoration: underline;} ',
        '.geoip-country-name{font-weight:bolder}',
        '.geoip-text-block{line-height:28px; font-size:15px; font-family:sans-serif; margin-right:10px; font-weight:lighter}',
        '.geoip-text-block,.geoip-close-icon{color:#' + params['text-color'] + '}',
        '.geoip-main-block button{background:none; border:0; font-size:14px;  margin-left:10px; cursor:pointer; padding:3px 11px 3px}',
        '.geoip-main-block button:hover{opacity:0.8}',
        '.geoip-popup-banner{z-index:99999999999; position:fixed; left:0; top:0; right:0; bottom:0; margin:auto; width:450px; height:200px}',
        '.geoip-popup-banner .geoip-main-block{position:relative; top:50%; transform:translateY(-50%)}',
        '.geoip-close-icon{position:absolute; right:10px; top:5px; cursor:pointer} ' +
        '.geoip-popup-banner .geoip-text-block{text-align:center; width:60%; margin:0 auto; line-height:16px; padding-bottom:20px}',
        '.geoip-popup-banner .geoip-button-block{margin:0 auto; text-align:center}',
        '.geoip-button-block:first-child{margin-left:0}',
        '.geoip-button-block button{margin-left:20px}',
        '.geoip-button-block .geoip-yes-btn{color:#' + params['yes-text-color'] + ';background-color:#' + params['yes-background-color'] + '}',
        '.geoip-button-block .geoip-no-btn{color:#' + params['no-text-color'] + ';background-color:#' + params['no-background-color'] + '}',
        '@media screen and (max-width:480px){',
          '.geoip-text-block{width:100%; float:left}',
          '.geoip-main-block button{margin-bottom:10px}',
          '.geoip-popup-banner{width:100%}',
          '.geoip-popup-banner .geoip-text-block{width:100%}',
        '}'
      ].join('');
      wrapperDiv.appendChild(newStyleTag);
    },

    base64Decode: function( str )
    {
      return window.atob ? window.atob(str) : easylocation.base64.decode(str);
    },

    onReady: function( handler )
    {
      if( document.readyState != "loading" ) handler();
      else document.addEventListener("DOMContentLoaded", handler);
    }
  };

  document.addEventListener('DOMContentLoaded', function(){ easylocation.ready = true; });

  var event = document.createEvent('Event');
  event.initEvent('easylocation_before_run', true, true);
  document.dispatchEvent(event);

  easylocation.run();
}
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{200:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return u});var r=a(0),i=a.n(r),n=a(203),o=a(209),s=a(206),l=a(207),d=a(201);a(196);var c=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.allMarkdownRemark.edges;return i.a.createElement(s.a,{location:this.props.location,title:t},i.a.createElement(l.a,{title:"All posts"}),i.a.createElement(o.a,null),a.map(function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return i.a.createElement("article",{key:t.fields.slug},i.a.createElement("header",null,i.a.createElement("h3",{style:{marginBottom:Object(d.a)(.25)}},i.a.createElement(n.a,{style:{boxShadow:"none"},to:t.fields.slug},a)),i.a.createElement("section",{className:"meta"},i.a.createElement("small",null,t.frontmatter.date),i.a.createElement("small",{className:"dotDivider"}),i.a.createElement("small",null,t.timeToRead," min read"))),i.a.createElement("section",null,i.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}})))}))},r}(i.a.Component);t.default=c;var u="2181052193"},201:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return d});var r=a(213),i=a.n(r),n=a(214),o=a.n(n);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var s=new i.a(o.a);var l=s.rhythm,d=s.scale},202:function(e,t,a){var r;e.exports=(r=a(204))&&r.default||r},203:function(e,t,a){"use strict";var r=a(0),i=a.n(r),n=a(66),o=a.n(n);a.d(t,"a",function(){return o.a});a(202),a(9).default.enqueue,i.a.createContext({})},204:function(e,t,a){"use strict";a.r(t);a(18);var r=a(0),i=a.n(r),n=a(94);t.default=function(e){var t=e.location,a=e.pageResources;return a?i.a.createElement(n.a,Object.assign({location:t,pageResources:a},a.json)):null}},205:function(e,t,a){"use strict";a(210)("fixed",function(e){return function(){return e(this,"tt","","")}})},206:function(e,t,a){"use strict";a(18);var r=a(0),i=a.n(r),n=a(203),o=a(201);var s=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e,t=this.props,a=t.location,r=t.title,s=t.children;return e="/vladimir-learned-today/"===a.pathname?i.a.createElement("h1",{style:Object.assign({},Object(o.b)(1.5),{marginBottom:Object(o.a)(1.5),marginTop:0})},i.a.createElement(n.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)):i.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},i.a.createElement(n.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)),i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(o.a)(24),padding:Object(o.a)(1.5)+" "+Object(o.a)(.75)}},i.a.createElement("header",null,e),i.a.createElement("main",null,s))},r}(i.a.Component);t.a=s},207:function(e,t,a){"use strict";var r=a(208),i=a(0),n=a.n(i),o=a(215),s=a.n(o);function l(e){var t=e.description,a=e.lang,i=e.meta,o=e.title,l=r.data.site,d=t||l.siteMetadata.description;return n.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:o},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:d}].concat(i)})}l.defaultProps={lang:"en",meta:[],description:""},t.a=l},208:function(e){e.exports={data:{site:{siteMetadata:{title:"Vladimir Learned Today",description:"Vladimir Ivanov's blog on interesting topics of web development",author:"Vladimir Ivanov"}}}}},209:function(e,t,a){"use strict";a(205);var r=a(211),i=a(0),n=a.n(i),o=a(212),s=a.n(o),l=a(201);t.a=function(){var e=r.data,t=e.site.siteMetadata.author;return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(l.a)(2.5)}},n.a.createElement(s.a,{fixed:e.avatar.childImageSharp.fixed,alt:t,style:{marginRight:Object(l.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),n.a.createElement("p",null,"Written by ",n.a.createElement("strong",null,t),", passionate web developer based in Moscow."," "))}},210:function(e,t,a){var r=a(1),i=a(7),n=a(32),o=/"/g,s=function(e,t,a,r){var i=String(n(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(r).replace(o,"&quot;")+'"'),s+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),r(r.P+r.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},211:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIDBAX/xAAUAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHi6IuiFQf/xAAaEAACAgMAAAAAAAAAAAAAAAAAAQIREBIx/9oACAEBAAEFAqJJa1hdP//EABURAQEAAAAAAAAAAAAAAAAAABAR/9oACAEDAQE/Aaf/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAZEAABBQAAAAAAAAAAAAAAAAAAAQIRIHH/2gAIAQEABj8CGwm1/8QAGhAAAgIDAAAAAAAAAAAAAAAAAREAECFBcf/aAAgBAQABPyENDDCCx1TVCn//2gAMAwEAAgADAAAAEBD/AP/EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAEDAQE/EFE//8QAFREBAQAAAAAAAAAAAAAAAAAAEBH/2gAIAQIBAT8Qh//EABsQAAICAwEAAAAAAAAAAAAAAAABETEhYZGx/9oACAEBAAE/EJySIjJbE8vYkVJWo9L94fBJFH//2Q==",width:50,height:50,src:"/vladimir-learned-today/static/95373f6b38b1d20cd221b8c13ad2d049/9b664/profile-pic.jpg",srcSet:"/vladimir-learned-today/static/95373f6b38b1d20cd221b8c13ad2d049/9b664/profile-pic.jpg 1x,\n/vladimir-learned-today/static/95373f6b38b1d20cd221b8c13ad2d049/06a10/profile-pic.jpg 1.5x,\n/vladimir-learned-today/static/95373f6b38b1d20cd221b8c13ad2d049/f1b5a/profile-pic.jpg 2x"}}},site:{siteMetadata:{author:"Vladimir Ivanov",social:{twitter:"https://twitter.com/"}}}}}},212:function(e,t,a){"use strict";a(29),a(30),a(13),a(92),a(133),a(205);var r=a(14);t.__esModule=!0,t.default=void 0;var i,n=r(a(68)),o=r(a(71)),s=r(a(136)),l=r(a(137)),d=r(a(0)),c=r(a(52)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=y([].concat(t.fluid))),t.fixed&&(t.fixed=y([].concat(t.fixed))),t},A=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},f=Object.create({}),p=function(e){var t=u(e),a=A(t);return f[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,m="undefined"!=typeof window,h=m&&window.IntersectionObserver,b=new WeakMap;function E(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),d.default.createElement("source",{media:i,srcSet:a,sizes:n}))})}function y(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function v(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function S(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function w(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var j=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),b.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?w(e,!0):"")+w(e)}).join("")+"<img "+d+o+s+a+r+t+n+i+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=d.default.createElement(x,(0,l.default)({src:t},i));return a.length>1?d.default.createElement("picture",null,r(a),n):n},x=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,o=e.onLoad,c=e.onError,u=e.loading,A=e.draggable,f=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},f,{onLoad:o,onError:c,ref:t,loading:u,draggable:A,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});x.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var L=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=m&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!g&&h&&!t.critical&&!a.seenBefore;var r=t.critical||"eager"==t.loading||m&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=j(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=A(t),f[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,A=void 0===c?{}:c,f=e.placeholderClassName,p=e.fluid,g=e.fixed,m=e.backgroundColor,h=e.durationFadeIn,b=e.Tag,y=e.itemProp,w=e.loading,j=e.draggable,L=!1===this.state.fadeIn||this.state.imgLoaded,O=!0===this.state.fadeIn&&!this.state.imgCached,B=(0,l.default)({opacity:L?1:0,transition:O?"opacity "+h+"ms":"none"},s),C="boolean"==typeof m?"lightgray":m,N={transitionDelay:h+"ms"},V=(0,l.default)({opacity:this.state.imgLoaded?0:1},O&&N,s,A),Q={title:t,alt:this.state.isVisible?"":a,style:V,className:f};if(p){var T=p,M=T[0];return d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},d.default.createElement(b,{style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),C&&d.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},O&&N)}),M.base64&&d.default.createElement(R,{src:M.base64,spreadProps:Q,imageVariants:T,generateSources:S}),M.tracedSVG&&d.default.createElement(R,{src:M.tracedSVG,spreadProps:Q,imageVariants:T,generateSources:v}),this.state.isVisible&&d.default.createElement("picture",null,E(T),d.default.createElement(x,{alt:a,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:B,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:w,draggable:j})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,l.default)({alt:a,title:t,loading:w},M,{imageVariants:T}))}}))}if(g){var z=g,D=z[0],k=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:D.width,height:D.height},n);return"inherit"===n.display&&delete k.display,d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:k,ref:this.handleRef,key:"fixed-"+JSON.stringify(D.srcSet)},C&&d.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:C,width:D.width,opacity:this.state.imgLoaded?0:1,height:D.height},O&&N)}),D.base64&&d.default.createElement(R,{src:D.base64,spreadProps:Q,imageVariants:z,generateSources:S}),D.tracedSVG&&d.default.createElement(R,{src:D.tracedSVG,spreadProps:Q,imageVariants:z,generateSources:v}),this.state.isVisible&&d.default.createElement("picture",null,E(z),d.default.createElement(x,{alt:a,title:t,width:D.width,height:D.height,sizes:D.sizes,src:D.src,crossOrigin:this.props.crossOrigin,srcSet:D.srcSet,style:B,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:w,draggable:j})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,l.default)({alt:a,title:t,loading:w},D,{imageVariants:z}))}}))}return null},t}(d.default.Component);L.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var O=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),B=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});L.propTypes={resolutions:O,sizes:B,fixed:c.default.oneOfType([O,c.default.arrayOf(O)]),fluid:c.default.oneOfType([B,c.default.arrayOf(B)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var C=L;t.default=C}}]);
//# sourceMappingURL=component---src-pages-index-js-3e12eae182ea81826d8d.js.map
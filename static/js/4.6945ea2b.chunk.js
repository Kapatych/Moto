(this.webpackJsonpmoto=this.webpackJsonpmoto||[]).push([[4],{102:function(e,t,a){"use strict";a.r(t);var i=a(0),c=a.n(i),l=(a(70),a(71),a(64)),s=a(72),n=a.n(s),r=a(2),m=a(73),o=a.n(m),d=a(74),_=a.n(d),u=function(e){var t=e.isDynamic,a=e.delay;return c.a.createElement("div",{className:"home__slider content-slider"},c.a.createElement(l.a,{isDynamic:t,delay:a},c.a.createElement("div",{className:"slider__item"},c.a.createElement("img",{src:n.a,alt:"1",className:"slider__item-img"}),c.a.createElement("div",{className:"slider__item-info"},c.a.createElement("div",{className:"slider__item-info-content"},c.a.createElement("div",{className:"slider__title"},"O'Neal 5 Series"),c.a.createElement("div",{className:"slider__subtitle"},"Constructed using a lightweight polycarbonate shell"),c.a.createElement(r.b,{to:"/catalog/O'Neal-5-Series-Wingman",className:"button"},"view product")),c.a.createElement("div",null))),c.a.createElement("div",{className:"slider__item"},c.a.createElement("img",{src:o.a,alt:"2",className:"slider__item-img"}),c.a.createElement("div",{className:"slider__item-info"},c.a.createElement("div",{className:"slider__item-info-content"},c.a.createElement("div",{className:"slider__title"},"Scorpion EXO-R420"),c.a.createElement("div",{className:"slider__subtitle"},"With an advanced polycarbonate shell"),c.a.createElement(r.b,{to:"/catalog/Scorpion-EXO-R420",className:"button"},"view product")),c.a.createElement("div",null))),c.a.createElement("div",{className:"slider__item"},c.a.createElement("img",{src:_.a,alt:"2",className:"slider__item-img"}),c.a.createElement("div",{className:"slider__item-info"},c.a.createElement("div",{className:"slider__item-info-content"},c.a.createElement("div",{className:"slider__title"},"Arai VX Pro 4"),c.a.createElement("div",{className:"slider__subtitle"},"For the serious off-road enthusiasts"),c.a.createElement(r.b,{to:"/catalog/Arai-VX-Pro-4",className:"button"},"view product")),c.a.createElement("div",null)))))},g=(a(75),a(76)),E=a.n(g),N=a(77),f=a.n(N),p=a(78),v=a.n(p),b=a(79),h=a.n(b),x=a(80),y=a.n(x),O=a(81),w=a.n(O),k=function(){return c.a.createElement("div",{className:"categories"},c.a.createElement("div",{className:"wrapper"},c.a.createElement("div",{className:"categories__content"},c.a.createElement(r.b,{to:"/catalog/categories/full-face-helmets",className:"categories__item"},c.a.createElement("img",{src:E.a,alt:"",className:"categories__item-img"}),c.a.createElement("div",{className:"categories__item-title title"},"Full Face")),c.a.createElement(r.b,{to:"/catalog/categories/modular-helmets",className:"categories__item"},c.a.createElement("img",{src:f.a,alt:"",className:"categories__item-img"}),c.a.createElement("div",{className:"categories__item-title title"},"Modular")),c.a.createElement(r.b,{to:"/catalog/categories/dual-sport-helmets",className:"categories__item"},c.a.createElement("img",{src:v.a,alt:"",className:"categories__item-img"}),c.a.createElement("div",{className:"categories__item-title title"},"Dual Sport")),c.a.createElement(r.b,{to:"/catalog/categories/dirt-helmets",className:"categories__item"},c.a.createElement("img",{src:h.a,alt:"",className:"categories__item-img"}),c.a.createElement("div",{className:"categories__item-title title"},"Dirt")),c.a.createElement(r.b,{to:"/catalog/categories/half-helmets",className:"categories__item"},c.a.createElement("img",{src:y.a,alt:"",className:"categories__item-img"}),c.a.createElement("div",{className:"categories__item-title title"},"Half")),c.a.createElement(r.b,{to:"/catalog/categories/open-face-helmets",className:"categories__item"},c.a.createElement("img",{src:w.a,alt:"",className:"categories__item-img"}),c.a.createElement("div",{className:"categories__item-title title"},"Open Face")))))},D=function(){return c.a.createElement("div",{className:"home"},c.a.createElement(u,{isDynamic:!0,delay:4e3}),c.a.createElement(k,null))};t.default=function(e){return c.a.createElement(D,null)}},64:function(e,t,a){"use strict";var i=a(16),c=a(0),l=a.n(c);a(65);t.a=function(e){var t=e.children,a=e.isDynamic,s=e.delay,n=Object(c.useState)(0),r=Object(i.a)(n,2),m=r[0],o=r[1],d=Object(c.useRef)(null);if(Object(c.useEffect)((function(){if(a)return d.current=setTimeout((function(){var e=m;e=e===t.length-1?0:e+1,o(e)}),s),function(){clearTimeout(d.current)}})),1===t.length)return l.a.createElement("img",{src:t[0].props.src,className:"single-image",alt:""});if(void 0===t.length&&"object"===typeof t)return t;var _=function(e){var a=m;return a="next"===e.target.dataset.direction?a===t.length-1?0:a+1:0===a?t.length-1:a-1,clearTimeout(d.current),o(a)},u=function(e){return o(+e.target.dataset.index)};return l.a.createElement("div",{className:"slider"},l.a.createElement("div",{className:"slider__main"},l.a.createElement("button",{onClick:_,"data-direction":"prev",className:"slider__button slider__prev"}),l.a.createElement("div",{className:"slider__content"},t[m]),l.a.createElement("button",{onClick:_,"data-direction":"next",className:"slider__button slider__next"})),l.a.createElement("div",{className:"slider__dots"},t.map((function(e,t){return l.a.createElement("button",{onClick:u,key:t,className:"slider__dots-item".concat(t===m?" slider__dots-item_active":""),"data-index":t})}))))}},65:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){e.exports=a.p+"static/media/slider_1.e86a2dc5.png"},73:function(e,t,a){e.exports=a.p+"static/media/slider_2.87861092.png"},74:function(e,t,a){e.exports=a.p+"static/media/slider_3.551b1caa.png"},75:function(e,t,a){},76:function(e,t,a){e.exports=a.p+"static/media/full_face_helmet.05badab9.png"},77:function(e,t,a){e.exports=a.p+"static/media/modular_helmet.83a2bd8d.png"},78:function(e,t,a){e.exports=a.p+"static/media/dual_sport_helmet.1e4545c2.png"},79:function(e,t,a){e.exports=a.p+"static/media/dirt_helmet.d3b1db72.png"},80:function(e,t,a){e.exports=a.p+"static/media/half_helmet.ec9f1aa2.png"},81:function(e,t,a){e.exports=a.p+"static/media/open_face_helmet.3191f93e.png"}}]);
//# sourceMappingURL=4.6945ea2b.chunk.js.map
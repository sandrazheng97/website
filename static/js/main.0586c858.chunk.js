(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){e.exports={container:"AboutPage_container__1o597",pictureContainer:"AboutPage_pictureContainer__2N78e",picture:"AboutPage_picture__27ULp",aboutDivider:"AboutPage_aboutDivider__UqW-t",info:"AboutPage_info__3upLF",infoTitle:"AboutPage_infoTitle__3FjhK",infoBody:"AboutPage_infoBody__2SZ0i",resume:"AboutPage_resume__4W8tJ"}},17:function(e,a,t){e.exports={container:"ShopPage_container__1SB_X",pictureContainer:"ShopPage_pictureContainer__YIeA0",picture:"ShopPage_picture__1dOGl",aboutDivider:"ShopPage_aboutDivider__1PzJo",info:"ShopPage_info__3jE8P",infoTitle:"ShopPage_infoTitle__1k7Xp",infoBody:"ShopPage_infoBody__281p6"}},22:function(e,a,t){e.exports={app:"App_app__1LrZo",appBody:"App_appBody__1pMwc",copyright:"App_copyright__2DDor"}},25:function(e,a,t){e.exports={thumbnail:"Thumbnail_thumbnail__2pOah",thumbnailSelected:"Thumbnail_thumbnailSelected__3J91e"}},3:function(e,a,t){e.exports={container:"Carousel_container__3yphY",cancelContainer:"Carousel_cancelContainer__QQ54f",cancelButton:"Carousel_cancelButton__1PNl_",carouselContainer:"Carousel_carouselContainer__2Ldtw",carousel:"Carousel_carousel__2ahmb",carouselItem:"Carousel_carouselItem__1SHRV",carouselHeader:"Carousel_carouselHeader__2jmEk",carouselDescription:"Carousel_carouselDescription__2TVuM",carouselItemImage:"Carousel_carouselItemImage__BUWDf",carouselItemPrimary:"Carousel_carouselItemPrimary__3Bs0J",carouselItemSecondary:"Carousel_carouselItemSecondary__BC9rA",arrow:"Carousel_arrow__3FEyE",thumbnailsContainer:"Carousel_thumbnailsContainer__i9cpM",arrowsContainer:"Carousel_arrowsContainer__2m5x7"}},36:function(e,a,t){e.exports=t(61)},41:function(e,a,t){},49:function(e,a,t){},56:function(e,a,t){},61:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(20),s=t.n(i),o=(t(41),t(5)),l=t(6),c=t(8),m=t(7),h=t(9),u=t(11),g=t(16),d=t(22),p=t.n(d),f=t(1),y=t(10),b=t.n(y),w=(t(49),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).state={headerColor:"white"},t.handleScroll=t.handleScroll.bind(Object(f.a)(Object(f.a)(t))),t}return Object(h.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(e){this.setState({headerColor:window.scrollY>20?"#ffe967":"white"})}},{key:"render",value:function(){var e=this.state.headerColor;return r.a.createElement("div",{className:"header-container"},r.a.createElement("div",{className:"header",style:{backgroundColor:e}},r.a.createElement("div",{className:"header-item navigation"},r.a.createElement(u.c,{className:"link",to:"/illustration"},"ILLUSTRATION"),r.a.createElement(u.c,{className:"link",to:"/design"},"DESIGN"),r.a.createElement(u.c,{className:"link",to:"/shop"},"SHOP"),r.a.createElement(u.c,{className:"link",to:"/about"},"ABOUT")),r.a.createElement("div",{className:"header-item title-container"},r.a.createElement(b.a,null,r.a.createElement("img",{className:"header-title",alt:"name",src:"/images/name.png"}))),r.a.createElement("div",{className:"header-item social"},r.a.createElement("a",{href:"https://l.messenger.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fszheng__%2F&h=AT2fmjskgEUTPRRZwuUyEWGzcFrfILiFSlzPvZcdYcefzA2dzlbVLpyE17cyy0vgz1EX4nKHvu36hsKRLJ_kbxFiHBQZqvI9NzSCHLsuYpAabTat0w0PZTKpfjt0QvMcb0q1pBvOduGFgyDm9wza8XxT",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:"social-item fab fa-instagram"})),r.a.createElement("a",{href:"https://l.messenger.com/l.php?u=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fsandra-zheng-8909aa187%2F&h=AT2fmjskgEUTPRRZwuUyEWGzcFrfILiFSlzPvZcdYcefzA2dzlbVLpyE17cyy0vgz1EX4nKHvu36hsKRLJ_kbxFiHBQZqvI9NzSCHLsuYpAabTat0w0PZTKpfjt0QvMcb0q1pBvOduGFgyDm9wza8XxT",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:"social-item fab fa-linkedin-in"})),r.a.createElement("a",{href:"https://l.messenger.com/l.php?u=https%3A%2F%2Fwww.behance.net%2Fsandrazheng&h=AT2fmjskgEUTPRRZwuUyEWGzcFrfILiFSlzPvZcdYcefzA2dzlbVLpyE17cyy0vgz1EX4nKHvu36hsKRLJ_kbxFiHBQZqvI9NzSCHLsuYpAabTat0w0PZTKpfjt0QvMcb0q1pBvOduGFgyDm9wza8XxT",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:"social-item fab fa-behance"})),r.a.createElement("a",{href:"mailto:sandrazhengart@gmail.com",rel:"noopener noreferrer"},r.a.createElement("i",{className:"social-item far fa-envelope"})))),r.a.createElement("div",{className:"placeholder"}))}}]),a}(n.Component)),v=(t(56),[{primary:"Floral",secondary:"Mural Design",src:"images/sweet_compound.jpg",width:6,height:3,imageStyles:{transform:"scale(1.2)",transformOrigin:"40% 35%"}},{primary:"Sleeping Dogs",secondary:"Tote Bag Design",src:"images/dog_tote.jpg",width:2,height:3,imageStyles:{transform:"scale(1.4)",transformOrigin:"40% 35%"}},{primary:"Creature Comforts",secondary:"Exhibt Poster Design",src:"images/poster_ad.jpg",width:4,height:3,imageStyles:{transform:"scale(1.2)",transformOrigin:"12% 35%"}},{primary:"Wander, Discover, Dream",secondary:"3 Series Illustration",src:"images/3_windows.jpg",width:6,height:3,imageStyles:{transform:"scale(1.4)",transformOrigin:"30% 35%"}},{primary:"Day Time",secondary:"Throw Pillow Design",src:"images/owl_pillow.jpg",width:3,height:3,imageStyles:{transform:"scale(1.6)",transformOrigin:"40% 40%"}},{primary:"Night Time",secondary:"Throw Pillow Design",src:"images/bunny_pillow.jpg",width:3,height:3,imageStyles:{transform:"scale(1.6)",transformOrigin:"40% 40%"}},{primary:"Hunter Green",secondary:"Front & Back Cover Illustration",src:"images/turtle_cover.jpg",width:6,height:3,imageStyles:{transform:"scale(1.5)",transformOrigin:"30% 50%"}},{primary:"Tomorrow Land",secondary:"Poster Event Design",src:"images/tmrland_mockup.jpg",width:2,height:3,imageStyles:{transform:"scale(1.8)",transformOrigin:"30% 40%"}},{primary:"Bergamot & Lime",secondary:"Scented Candle Packaging",src:"images/scented_candle.jpg",width:4,height:3,imageStyles:{transform:"scale(1.5)",transformOrigin:"30% 50%"}},{primary:"Lavender Berry",secondary:"Chocolate Flavored Powder Packaging",src:"images/lavender_berry.jpg",width:3,height:3,imageStyles:{transform:"scale(1.6)",transformOrigin:"50% 50%"}},{primary:"Primrose Lemon",secondary:"Chocolate Flavored Powder Packaging",src:"images/primrose_lemon.jpg",width:3,height:3,imageStyles:{transform:"scale(1.6)",transformOrigin:"50% 50%"}}]),_=[{primary:"Wander",secondary:"Digital",src:"images/wander.jpg",width:2,height:2},{primary:"Discover",secondary:"Digital",src:"images/discover.jpg",width:2,height:2},{primary:"Dream",secondary:"Digital",src:"images/dream.jpg",width:2,height:2},{primary:"Radio Snake",secondary:"Watercolor",src:"images/radio_snake.jpg",width:3,height:4},{primary:"Extinct Nature",secondary:"Ink & Watercolor",width:3,src:"images/whale.jpg",imageStyles:{transform:"scale(1.5)",transformOrigin:"40% 40%"}},{primary:"Mug Towers",secondary:"Ink & Watercolor",src:"images/towers.jpg",width:3,height:2,imageStyles:{transform:"scale(1.1)",transformOrigin:"40% 40%"}},{primary:"Egg-Plant",secondary:"Digital",src:"images/final_eggplant.jpg",width:3,height:2,imageStyles:{transform:"scale(1.3)",transformOrigin:"40% 40%"}},{primary:"VANCOUVER",secondary:"Digital",src:"images/finalmap.jpg",width:3,height:4,imageStyles:{transform:"scale(1.8)",transformOrigin:"20% 25%"}},{primary:"Fish Cake",secondary:"Intaglio Print",width:3,src:"images/fishcake.jpg",imageStyles:{transform:"scale(1.2)",transformOrigin:"30% 20%"}},{primary:"Creature Comforts",secondary:"Pen, Watercolor, & Digital",width:3,height:6,src:"images/creature_comforts.jpg",imageStyles:{transform:"scale(1.4)",transformOrigin:"15% 50%"}},{primary:"Living Through Two Shootings",secondary:"Digital",width:3,height:2,src:"images/twoshootings.jpg",imageStyles:{transform:"scale(1.0)",transformOrigin:"30% 70%"}},{primary:"Musical Quintet",secondary:"Ink & Digital",width:3,height:2,src:"images/quintet.jpg",imageStyles:{transform:"scale(0.9)",transformOrigin:"12% 35%"}},{primary:"Sleeping Dogs",secondary:"Silkscreen Print",width:3,height:2,src:"images/sleeping_dog.jpg"}],E=t(34),C={headerHeight:120,copyrightHeight:60,thumbnailContainerHeight:150,arrowsContainerHeight:40,cancelContainerHeight:25,numColumns:6,columnSpacing:10},j=function(e){function a(e){var t;Object(o.a)(this,a),t=Object(c.a)(this,Object(m.a)(a).call(this,e));var n="/"!==e.match.path?e.match.path:"/illustration",i="/illustration"===n?_:v;return t.state={source:n,elements:i},t.onScroll=t.onScroll.bind(Object(f.a)(Object(f.a)(t))),t.profileElement=r.a.createRef(),t}return Object(h.a)(a,e),Object(l.a)(a,[{key:"getGridHeight",value:function(){return Math.floor((this.profileElement.current.offsetWidth-2*C.columnSpacing)/C.numColumns)}},{key:"onScroll",value:function(){this.setState({gridHeight:this.getGridHeight()})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{ref:this.profileElement,className:"profile"},r.a.createElement(E.a,{handleWidth:!0,handleHeight:!0,onResize:this.onScroll}),r.a.createElement("div",{className:"gallery",style:{gridAutoRows:this.state.gridHeight,gridGap:C.columnSpacing}},this.state.elements.map(function(a,t){var n=a.height,i=a.src,s=a.width,o=a.imageStyles,l={};return n&&(l.gridRowEnd="span "+parseInt(n)),s&&(l.gridColumnEnd="span "+parseInt(s)),r.a.createElement("div",{key:t,className:"card",style:l},r.a.createElement(u.b,{to:"/carousel"+e.state.source+"/"+parseInt(t)},r.a.createElement(b.a,null,r.a.createElement("img",{alt:i,src:i,style:o}))))})))}}]),a}(n.Component),k=t(24),O=t.n(k),S=(t(57),t(19)),N=t.n(S),P=t(33),H=t.n(P),T=t(25),I=t.n(T),D=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).handleClick=t.handleClick.bind(Object(f.a)(Object(f.a)(t))),t}return Object(h.a)(a,e),Object(l.a)(a,[{key:"handleClick",value:function(){this.props.onClick&&this.props.onClick(this.props.value)}},{key:"render",value:function(){var e=this.props,a=e.src,t=e.height,n=e.width;return r.a.createElement("div",{className:I.a.thumbnail,onClick:this.handleClick,style:{width:n,height:t}},r.a.createElement(b.a,null,r.a.createElement("img",{alt:a,src:a,align:"middle",className:H()(this.props.selected&&I.a.thumbnailSelected)})))}}]),a}(n.Component),A=t(3),z=t.n(A);function F(e,a){return(e%a+a)%a}var L=function(e){function a(e){var t;Object(o.a)(this,a),t=Object(c.a)(this,Object(m.a)(a).call(this,e));var n=e.match.params.source,i="design"===n?v:_,s=parseInt(e.match.params.index)||0;return console.log(s),t.state={source:n,value:s,thumbnail:s,elements:i,thumbnails:i,showThumbnails:!0,windowWidth:window.innerWidth,windowHeight:window.innerHeight},t.onChangeCarousel=t.onChangeCarousel.bind(Object(f.a)(Object(f.a)(t))),t.onChangeThumbnailsList=t.onChangeThumbnailsList.bind(Object(f.a)(Object(f.a)(t))),t.onClickThumbnail=t.onClickThumbnail.bind(Object(f.a)(Object(f.a)(t))),t.onClickArrow=t.onClickArrow.bind(Object(f.a)(Object(f.a)(t))),t.onResize=t.onResize.bind(Object(f.a)(Object(f.a)(t))),t.carouselContainerElement=r.a.createRef(),t}return Object(h.a)(a,e),Object(l.a)(a,[{key:"onResize",value:function(){this.setState({windowHeight:window.innerHeight,windowWidth:this.carouselContainerElement.current.clientWidth||window.innerWidth})}},{key:"componentDidMount",value:function(){this.onResize(),window.addEventListener("resize",this.onResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onResize)}},{key:"onChangeCarousel",value:function(e){this.props.history.push("/carousel/"+this.state.source+"/"+parseInt(F(e,this.state.thumbnails.length))),this.setState({value:e,thumbnail:e})}},{key:"onChangeThumbnailsList",value:function(e){this.setState({thumbnail:e})}},{key:"onClickThumbnail",value:function(e){this.props.history.push("/carousel/"+this.state.source+"/"+parseInt(F(e,this.state.thumbnails.length)));var a=this.getCarouselIndex(this.state.value,parseInt(e));this.setState({value:a,thumbnail:a})}},{key:"onClickArrow",value:function(e){console.log("click arrow %d d",this.state.value,e),this.setState({value:this.state.value+e})}},{key:"getCarouselIndex",value:function(e,a){var t,n,r=F(e,this.state.elements.length);return a>r?(n=a-r,t=r+this.state.elements.length-a):(t=r-a,n=a+this.state.elements.length-r),n>t?e-t:e+n}},{key:"render",value:function(){var e=this,a=this.state,t=a.windowHeight,n=a.windowWidth,i=a.elements,s=a.thumbnail,o=a.value,l=t-C.headerHeight-C.cancelContainerHeight-C.copyrightHeight,c=n,m=l>=500&&c>=600,h=(m?l-C.thumbnailContainerHeight:l-C.arrowsContainerHeight)-20;return r.a.createElement("div",{className:z.a.container},r.a.createElement("div",{className:z.a.cancelContainer,style:{height:C.cancelContainerHeight}},r.a.createElement(u.b,{to:"/"+this.state.source},r.a.createElement(N.a,{name:"times",className:z.a.cancelButton}))),r.a.createElement("div",{className:z.a.carouselContainer,ref:this.carouselContainerElement},r.a.createElement(O.a,{infinite:!0,centered:!0,value:o,onChange:this.onChangeCarousel,className:z.a.carousel,itemWidth:c,slides:i.map(function(e,a){var t=e.primary,n=e.secondary,i=e.src;return r.a.createElement("div",{key:a,className:z.a.carouselItem,style:{height:h,width:c}},r.a.createElement("div",{className:z.a.carouselHeader},r.a.createElement("div",{className:z.a.carouselDescription},r.a.createElement("div",{className:z.a.carouselItemPrimary},t||"Primary text"),r.a.createElement("div",{className:z.a.carouselItemSecondary},n||"Secondary text"))),r.a.createElement("div",{className:z.a.carouselItemImage},r.a.createElement("img",{alt:i,src:"/"+i})))})}),r.a.createElement("div",{className:z.a.thumbnailsContainer,style:{marginTop:20,height:m?C.thumbnailContainerHeight:C.arrowsContainerHeight}},m?r.a.createElement(O.a,{infinite:!0,centered:!0,arrowLeft:r.a.createElement(N.a,{className:z.a.arrow,name:"angle-left"}),arrowRight:r.a.createElement(N.a,{className:z.a.arrow,name:"angle-right"}),addArrowClickHandler:!0,className:z.a.thumbnails,value:m?s:o,onChange:this.onChangeThumbnailsList,slidesPerScroll:m?3:1,itemWidth:C.thumbnailContainerHeight,slides:i.map(function(a,t){var n=a.src;return r.a.createElement(D,{value:t,src:"/"+n,width:C.thumbnailContainerHeight-20,height:C.thumbnailContainerHeight-20,onClick:e.onClickThumbnail,selected:F(o,e.state.thumbnails.length)===t})})}):r.a.createElement("div",{className:z.a.arrowsContainer,style:{height:C.arrowsContainerHeight}},r.a.createElement(N.a,{className:z.a.arrow,name:"angle-left",onClick:function(){e.onClickArrow(-1)}}),r.a.createElement(N.a,{className:z.a.arrow,name:"angle-right",onClick:function(){e.onClickArrow(1)}})))))}}]),a}(n.Component),B=t(15),W=t.n(B),R=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e="/images/sleeping_village.jpg";return r.a.createElement("div",{className:W.a.container},r.a.createElement("div",{className:W.a.pictureContainer},r.a.createElement("div",{className:W.a.picture},r.a.createElement(b.a,null,r.a.createElement("img",{alt:e,src:e,align:"middle"})))),r.a.createElement("div",{className:W.a.aboutDivider}),r.a.createElement("div",{className:W.a.info},r.a.createElement("div",{className:W.a.infoTitle},"INFO"),r.a.createElement("div",{className:W.a.infoBody},"Sandra Zheng is a Canadian born illustrator and designer who recently graduated from ArtCenter College of Design. She is based in Vancouver, BC. Her illustrations usually depict nature with playful interactions of her own whimsical characters."),r.a.createElement("div",{className:W.a.resume},r.a.createElement("a",{href:"/images/resume.pdf",target:"_blank"},"Resume"))))}}]),a}(n.Component),x=t(17),Z=t.n(x),U=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e="/images/sleeping_village.jpg";return r.a.createElement("div",{className:Z.a.container},r.a.createElement("div",{className:Z.a.pictureContainer},r.a.createElement("div",{className:Z.a.picture},r.a.createElement(b.a,null,r.a.createElement("img",{alt:e,src:e,align:"middle"})))),r.a.createElement("div",{className:Z.a.aboutDivider}),r.a.createElement("div",{className:Z.a.info},r.a.createElement("div",{className:Z.a.infoBody},r.a.createElement("div",null,"We\u2019re working on our site at the moment."),r.a.createElement("p",null,"Please check back soon."))))}}]),a}(n.Component),G=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(u.a,null,r.a.createElement("div",{className:p.a.app},r.a.createElement(w,null),r.a.createElement("div",{className:p.a.appBody,ref:this.profileElement},r.a.createElement(g.a,{exact:!0,path:"/",component:j}),r.a.createElement(g.a,{path:"/illustration",component:j}),r.a.createElement(g.a,{path:"/design",component:j}),"// ",r.a.createElement(g.a,{path:"/about",component:R}),r.a.createElement(g.a,{path:"/shop",component:U}),r.a.createElement(g.a,{exact:!0,path:"/carousel/:source/:index?",component:L}),r.a.createElement("div",{className:p.a.copyright,style:{height:C.copyrightHeight}},"Copyright \xa9 2019 Sandra Zheng"))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,1,2]]]);
//# sourceMappingURL=main.0586c858.chunk.js.map
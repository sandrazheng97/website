(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,i){e.exports={container:"AboutPage_container__12SpZ",containerVertical:"AboutPage_containerVertical__1dcfM",pictureContainer:"AboutPage_pictureContainer__1a44m",pictureContainerHorizontal:"AboutPage_pictureContainerHorizontal__2LQU8",aboutDivider:"AboutPage_aboutDivider__1OjXi",info:"AboutPage_info__3Jzoa",infoHorizontal:"AboutPage_infoHorizontal__1BJpS",infoTitle:"AboutPage_infoTitle__27xqW",infoBody:"AboutPage_infoBody__2yhW9",resume:"AboutPage_resume__1_5X7"}},2:function(e,a,i){e.exports={sideBar:"Header_sideBar__2tXgl",sideBarTitle:"Header_sideBarTitle__1GYdc",blueText:"Header_blueText__3yzNG",pinkText:"Header_pinkText__ktiAo",navigation:"Header_navigation__1owfO",sideBarLink:"Header_sideBarLink__3CAWn",header:"Header_header__2ekMB",active:"Header_active__20d5T",social:"Header_social__bnKpv",socialItem:"Header_socialItem__3qgz6",topHeader:"Header_topHeader__1y__d",miniHeader:"Header_miniHeader__vFTcN",miniHeaderTitle:"Header_miniHeaderTitle__27EXI",dropdown:"Header_dropdown__S6ar0",dropdownContent:"Header_dropdownContent__GPiS8",menuButton:"Header_menuButton__cJ51E",menuItem:"Header_menuItem__2Ac_4",link:"Header_link__-tUOu"}},21:function(e,a,i){e.exports={profile:"Profile_profile__2gAuh",placeHolder:"Profile_placeHolder__3q-DC",mainContent:"Profile_mainContent__1p4Mu",gallery:"Profile_gallery__20PgN",card:"Profile_card__2ATwi",arrow:"Profile_arrow__-VcdT",footer:"Profile_footer__24z9W"}},28:function(e,a,i){e.exports={app:"App_app__sT14H",appBody:"App_appBody__3rxFU",copyright:"App_copyright__2RXHv"}},34:function(e,a,i){e.exports={thumbnail:"Thumbnail_thumbnail__sAJCG",thumbnailSelected:"Thumbnail_thumbnailSelected__1paNG"}},42:function(e,a,i){e.exports=i(78)},47:function(e,a,i){},56:function(e,a,i){},62:function(e,a,i){},7:function(e,a,i){e.exports={container:"Carousel_container__kvBkL",placeHolder:"Carousel_placeHolder__1fCJ9",mainContent:"Carousel_mainContent__4RpDp",carousel:"Carousel_carousel__3_ixk",cancelContainer:"Carousel_cancelContainer__x4xD7",cancelButton:"Carousel_cancelButton__1Eq6N",carouselItem:"Carousel_carouselItem__QUSh8",carouselHeader:"Carousel_carouselHeader__2Cq90",carouselDescription:"Carousel_carouselDescription__3X9X-",carouselItemImage:"Carousel_carouselItemImage__1ri38",carouselItemPrimary:"Carousel_carouselItemPrimary__BWkqB",carouselItemSecondary:"Carousel_carouselItemSecondary__3hcD4",arrow:"Carousel_arrow__vRFZX",thumbnails:"Carousel_thumbnails__PZzRe"}},77:function(e,a,i){},78:function(e,a,i){"use strict";i.r(a);var t=i(0),n=i.n(t),r=i(19),s=i.n(r),o=(i(47),i(9)),l=i(10),c=i(12),m=i(11),d=i(13),h=i(1),g=i(8),u=i(5),p=i(27),_=i(28),f=i.n(_),y=i(23),b=i.n(y),w=i(24),v=i.n(w),j=i(3),k=i.n(j),E={mobileViewMaxWidth:1e3,sideBarWidth:300,headerHeight:120,copyrightHeight:60,thumbnailFullContainerHeight:150,thumbnailSmallContainerHeight:50,cancelContainerHeight:0,numColumns:6,columnSpacing:20,peach:"#f8a178",showThumbnailWidthThreshold:600,showThumbnailHeightThreshold:500,linkedInLink:"https://www.linkedin.com/in/sandra-zheng-8909aa187/",instagramLink:"https://www.instagram.com/szheng__/",behanceLink:"https://www.behance.net/sandrazheng",email:"sandrazhengart@gmail.com"},O=i(2),C=i.n(O),S=(i(56),function(e){function a(e){var i;return Object(o.a)(this,a),(i=Object(c.a)(this,Object(m.a)(a).call(this,e))).state={isMobile:window.innerWidth<=E.mobileViewMaxWidth},i.dropdown=n.a.createRef(),i.handleResize=i.handleResize.bind(Object(h.a)(Object(h.a)(i))),i.onClickDropdownItem=i.onClickDropdownItem.bind(Object(h.a)(Object(h.a)(i))),i}return Object(d.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize)}},{key:"handleResize",value:function(e){this.setState({isMobile:window.innerWidth<=E.mobileViewMaxWidth})}},{key:"sendEmail",value:function(){window.location="mailto:"+E.email}},{key:"onClickDropdownItem",value:function(e){this.dropdown.current.hide()}},{key:"render",value:function(){return this.state.isMobile?n.a.createElement("div",{className:C.a.topHeader,style:{height:E.headerHeight}},n.a.createElement("div",{className:C.a.miniHeader},n.a.createElement(v.a,{className:C.a.dropdown,ref:this.dropdown},n.a.createElement(w.DropdownTrigger,null,n.a.createElement("div",{className:k()(C.a.menuButton,C.a.link)},"menu")),n.a.createElement(w.DropdownContent,{className:C.a.dropdownContent,onClick:this.onClickDropdownItem,style:{borderBottom:"2px solid "+E.peach}},n.a.createElement("div",{className:C.a.menuItem},n.a.createElement(g.c,{className:C.a.link,to:"/illustration"},"illustration")),n.a.createElement("div",{className:C.a.menuItem},n.a.createElement(g.c,{className:C.a.link,to:"/design"},"design")),n.a.createElement("div",{className:C.a.menuItem},n.a.createElement(g.c,{className:C.a.link,to:"/sketchbook"},"sketchbook")),n.a.createElement("div",{className:C.a.menuItem},n.a.createElement("a",{className:C.a.link,href:"https://www.etsy.com/shop/orderlyblue"},"shop")),n.a.createElement("div",{className:C.a.menuItem},n.a.createElement(g.c,{className:C.a.link,to:"/about"},"about")))),n.a.createElement(b.a,null,n.a.createElement("img",{className:C.a.miniHeaderTitle,alt:"name",src:"/images/name.png"})))):n.a.createElement("div",{className:C.a.sideBar},n.a.createElement("div",null,n.a.createElement(b.a,null,n.a.createElement("img",{className:C.a.sideBarTitle,alt:"name",src:"/images/name.png"}))),n.a.createElement("div",{style:{paddingTop:10}},n.a.createElement("span",{className:C.a.blueText},"illustrator")," ",n.a.createElement("span",{className:C.a.pinkText},"&")," ",n.a.createElement("span",{className:C.a.blueText},"designer")),n.a.createElement("div",{className:k()(C.a.navigation)},n.a.createElement(g.c,{className:k()(C.a.pinkText,C.a.sideBarLink),style:{paddingTop:50},to:"/illustration"},"illustration"),n.a.createElement(g.c,{className:k()(C.a.blueText,C.a.sideBarLink),to:"/design"},"design"),n.a.createElement(g.c,{className:k()(C.a.pinkText,C.a.sideBarLink),to:"/sketchbook"},"sketchbook"),n.a.createElement("a",{className:k()(C.a.blueText,C.a.sideBarLink),style:{paddingTop:50},href:"https://www.etsy.com/shop/orderlyblue"},"shop"),n.a.createElement(g.c,{className:k()(C.a.pinkText,C.a.sideBarLink),to:"/about"},"about")),n.a.createElement("div",{className:k()(C.a.social)},n.a.createElement("div",null,n.a.createElement("a",{href:E.instagramLink,rel:"noopener noreferrer",target:"_blank"},n.a.createElement("i",{className:k()(C.a.socialItem,"fab","fa-instagram")}))),n.a.createElement("div",null,n.a.createElement("a",{href:E.linkedInLink,rel:"noopener noreferrer",target:"_blank"},n.a.createElement("i",{className:k()(C.a.socialItem,"fab","fa-linkedin-in")}))),n.a.createElement("div",{onClick:this.sendEmail},n.a.createElement("i",{className:k()(C.a.socialItem,"far","fa-envelope")}))))}}]),a}(t.Component)),M=i(22),N=i.n(M),T=(i(62),function(e){function a(e){var i;return Object(o.a)(this,a),(i=Object(c.a)(this,Object(m.a)(a).call(this,e))).state={loadingIconHidden:!1},i.onLoadedImage=i.onLoadedImage.bind(Object(h.a)(Object(h.a)(i))),i}return Object(d.a)(a,e),Object(l.a)(a,[{key:"onLoadedImage",value:function(){this.setState({loadingIconHidden:!0})}},{key:"render",value:function(){var e=this.props,a=e.src,i=e.imageStyles,t=e.imageClassName,r=this.state.loadingIconHidden;return n.a.createElement(b.a,{offsetVertical:1500,debouce:!1},n.a.createElement("div",{className:k()("lds-default",{"lds-default-hidden":r}),styles:r?{display:"none !important"}:{}},n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null)),n.a.createElement("img",{alt:a,src:a,className:t,style:i,onLoad:this.onLoadedImage}))}}]),a}(t.Component)),H=[{primary:"Floral",secondary:"Mural Design",src:"images/sweet_compound.jpg",srcMini:"images/sweet_compound_mini.jpg",width:6,height:3,imageStyles:{transform:"scale(1.5)",transformOrigin:"40% 35%"}},{primary:"Sleeping Dogs",secondary:"Tote Bag Design",src:"images/dog_tote.jpg",srcMini:"images/dog_tote_mini.jpg",width:2,height:3,imageStyles:{transform:"scale(1.5)",transformOrigin:"40% 35%"}},{primary:"Creature Comforts",secondary:"Exhibt Poster Design",src:"images/poster_ad.jpg",srcMini:"images/poster_ad_mini.jpg",width:4,height:3,imageStyles:{transform:"scale(1.5)",transformOrigin:"12% 35%"}},{primary:"Wander, Discover, Dream",secondary:"3 Series Illustration",src:"images/3_windows.jpg",srcMini:"images/3_windows_mini.jpg",width:6,height:3,imageStyles:{transform:"scale(1.6)",transformOrigin:"40% 35%"}},{primary:"Day Time",secondary:"Throw Pillow Design",src:"images/owl_pillow.jpg",srcMini:"images/owl_pillow_mini.jpg",width:3,height:3,imageStyles:{transform:"scale(1.9)",transformOrigin:"40% 40%"}},{primary:"Night Time",secondary:"Throw Pillow Design",src:"images/bunny_pillow.jpg",srcMini:"images/bunny_pillow_mini.jpg",width:3,height:3,imageStyles:{transform:"scale(1.9)",transformOrigin:"40% 40%"}},{primary:"Hunter Green",secondary:"Front & Back Cover Illustration",src:"images/turtle_cover.jpg",srcMini:"images/turtle_cover_mini.jpg",width:6,height:3,imageStyles:{transform:"scale(1.7)",transformOrigin:"30% 50%"}},{primary:"Tomorrow Land",secondary:"Poster Event Design",src:"images/tmrland_mockup.jpg",srcMini:"images/tmrland_mockup_mini.jpg",width:2,height:3,imageStyles:{transform:"scale(2.6)",transformOrigin:"45% 40%"}},{primary:"Bergamot & Lime",secondary:"Scented Candle Packaging",src:"images/scented_candle.jpg",srcMini:"images/scented_candle_mini.jpg",width:4,height:3,imageStyles:{transform:"scale(1.5)",transformOrigin:"30% 50%"}},{primary:"I PUG YOU",secondary:"Soft Enamel Pin",src:"images/holding_pin.jpg",srcMini:"images/holding_pin.jpg",width:2,height:2,imageStyles:{transform:"scale(1.6)",transformOrigin:"70% 80%"}},{primary:"I PUG YOU",secondary:"Soft Enamel Pin",src:"images/pin_plants.jpg",srcMini:"images/pin_plants.jpg",width:2,height:2,imageStyles:{transform:"scale(1)",transformOrigin:"50% 50%"}},{primary:"I PUG YOU",secondary:"Soft Enamel Pin",src:"images/pin_on_model.JPG",srcMini:"images/pin_on_model.JPG",width:2,height:2,imageStyles:{transform:"scale(1.3)",transformOrigin:"15% 110%"}},{primary:"Lavender Berry",secondary:"Chocolate Flavored Powder Packaging",src:"images/lavender_berry.jpg",srcMini:"images/lavender_berry_mini.jpg",width:3,height:3,imageStyles:{transform:"scale(1.8)",transformOrigin:"50% 60%"}},{primary:"Primrose Lemon",secondary:"Chocolate Flavored Powder Packaging",src:"images/primrose_lemon.jpg",srcMini:"images/primrose_lemon_mini.jpg",width:3,height:3,imageStyles:{transform:"scale(1.8)",transformOrigin:"50% 60%"}},{primary:"Egg Plants",secondary:"Plant clippings kit.",src:"images/suc_kit_closed.jpg",srcMini:"images/suc_kit_closed.jpg",width:3,height:3,imageStyles:{transform:"scale(1.2)",transformOrigin:"40% 60%"}},{primary:"Egg Plants",secondary:"Plant clippings kit.",src:"images/suc_kit_wide.jpg",srcMini:"images/suc_kit_wide.jpg",width:3,height:3,imageStyles:{transform:"scale(1.6)",transformOrigin:"50% 50%"}}],P=[{primary:"Wander",secondary:"Digital",src:"images/wander.jpg",srcMini:"images/wander_mini.jpg",width:2,height:2},{primary:"Discover",secondary:"Digital",src:"images/discover.jpg",srcMini:"images/discover_mini.jpg",width:2,height:2},{primary:"Dream",secondary:"Digital",src:"images/dream.jpg",srcMini:"images/dream_mini.jpg",width:2,height:2},{primary:"Radio Snake",secondary:"Watercolor",src:"images/radio_snake.jpg",srcMini:"images/radio_snake_mini.jpg",width:3,height:4},{primary:"VANCOUVER",secondary:"Digital",src:"images/finalmap.jpg",srcMini:"images/finalmap_mini.jpg",width:3,height:4,imageStyles:{transform:"scale(1.8)",transformOrigin:"20% 25%"}},{primary:"Fish Cake",secondary:"Intaglio Print",width:3,src:"images/fishcake.jpg",srcMini:"images/fishcake_mini.jpg",imageStyles:{transform:"scale(1.2)",transformOrigin:"30% 20%"}},{primary:"Extinct Nature",secondary:"Ink & Watercolor",width:3,src:"images/whale.jpg",srcMini:"images/whale_mini.jpg",imageStyles:{transform:"scale(1.9)",transformOrigin:"40% 40%"}},{primary:"Mug Towers",secondary:"Ink & Watercolor",src:"images/towers.jpg",srcMini:"images/towers_mini.jpg",width:3,height:2,imageStyles:{transform:"scale(1.7)",transformOrigin:"40% 40%"}},{primary:"Just Keep Swimming",secondary:"Digital",src:"images/ocean_fish.JPG",srcMini:"images/ocean_fish.JPG",width:3,height:2,imageStyles:{transform:"scale(1.7)",transformOrigin:"70% 110%"}},{primary:"Sleeping Dogs",secondary:"Silkscreen Print",src:"images/sleeping_dog.jpg",srcMini:"images/sleeping_dog.jpg",width:6,height:2,imageStyles:{transform:"scale(1.2)",transformOrigin:"50% -20%"}},{primary:"Creature Comforts",secondary:"Pen, Watercolor, & Digital",width:3,height:4,src:"images/creature_comforts.jpg",srcMini:"images/creature_comforts_mini.jpg",imageStyles:{transform:"scale(1.5",transformOrigin:"15% 10%"}},{primary:"Egg-Plant",secondary:"Digital",src:"images/final_eggplant.jpg",srcMini:"images/final_eggplant.jpg",width:3,height:2,imageStyles:{transform:"scale(1.6)",transformOrigin:"60% 40%"}},{primary:"Living Through Two Shootings",secondary:"Digital",width:3,height:2,src:"images/twoshootings.jpg",srcMini:"images/twoshootings_mini.jpg",imageStyles:{transform:"scale(1.8)",transformOrigin:"30% 50%"}},{primary:"Musical Quintet",secondary:"Ink & Digital",width:3,height:2,src:"images/quintet.jpg",srcMini:"images/quintet_mini.jpg",imageStyles:{transform:"scale(0.9)",transformOrigin:"12% 35%"}}],I=[{primary:"Fish",secondary:"Posca Markers & Pen",src:"images/fish_shapes.jpg",srcMini:"images/fish_shapes.jpg",width:3,height:3,imageStyles:{transform:"scale(1.4)",transformOrigin:"40% 35%"}},{primary:"Vases",secondary:"Posaca Markers & Coloured Pencils",src:"images/vases.jpg",srcMini:"images/vases.jpg",width:3,height:3,imageStyles:{transform:"scale(1.4)",transformOrigin:"40% 25%"}},{primary:"Gradient",secondary:"Watercolour & Posca Markers",src:"images/fish_gradient.jpg",srcMini:"images/fish_gradient.jpg",width:3,height:5,imageStyles:{transform:"scale(1.3)",transformOrigin:"40% 40%"}},{primary:"Fish Hangout",secondary:"Watercolour & Posca Markers",src:"images/hanging_fish.jpg",srcMini:"images/hanging_fish.jpg",width:3,height:5,imageStyles:{transform:"scale(1.5)",transformOrigin:"40% 55%"}},{primary:"Swimming",secondary:"Posca Markers",src:"images/fish_plants.jpg",srcMini:"images/fish_plants.jpg",width:6,height:3,imageStyles:{transform:"scale(1.2)",transformOrigin:"110% 140%"}}],D=i(21),x=i.n(D),z=function(e){function a(e){var i;Object(o.a)(this,a),i=Object(c.a)(this,Object(m.a)(a).call(this,e));var t="/"!==e.match.path?e.match.path:"/illustration",r="/illustration"===t?P:H;return r="/sketchbook"===t?I:r,i.state={source:t,elements:r,isMobile:window.innerWidth<=E.mobileViewMaxWidth},i.onResize=i.onResize.bind(Object(h.a)(Object(h.a)(i))),i.scrollToTop=i.scrollToTop.bind(Object(h.a)(Object(h.a)(i))),i.profileElement=n.a.createRef(),i}return Object(d.a)(a,e),Object(l.a)(a,[{key:"getGridHeight",value:function(){return Math.floor((this.profileElement.current.offsetWidth-2*E.columnSpacing)/E.numColumns)}},{key:"onResize",value:function(){this.setState({gridHeight:this.getGridHeight(),isMobile:window.innerWidth<=E.mobileViewMaxWidth})}},{key:"scrollToTop",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){var e=this,a=this.state.isMobile;return n.a.createElement("div",{ref:this.profileElement,className:x.a.profile,style:{flexDirection:a?"column":"row"}},n.a.createElement(p.a,{handleWidth:!0,handleHeight:!0,onResize:this.onResize}),n.a.createElement("div",{className:x.a.mainContent},n.a.createElement("div",{className:x.a.gallery,style:{gridAutoRows:this.state.gridHeight,gridGap:E.columnSpacing,paddingLeft:a?50:0,paddingRight:a?50:100}},this.state.elements.map(function(a,i){var t=a.height,r=a.srcMini,s=a.width,o=a.imageStyles,l={};return t&&(l.gridRowEnd="span "+parseInt(t)),s&&(l.gridColumnEnd="span "+parseInt(s)),n.a.createElement("div",{key:i,className:x.a.card,style:l},n.a.createElement(g.b,{to:"/carousel"+e.state.source+"/"+parseInt(i)},n.a.createElement(T,{src:r,imageStyles:o})))})),n.a.createElement("div",{className:x.a.footer,onClick:this.scrollToTop},n.a.createElement(N.a,{className:x.a.arrow,name:"arrow-up"}),"Back to Top")))}}]),a}(t.Component),B=i(14),W=i(33),R=i.n(W),L=i(34),A=i.n(L),U=function(e){function a(e){var i;return Object(o.a)(this,a),(i=Object(c.a)(this,Object(m.a)(a).call(this,e))).handleClick=i.handleClick.bind(Object(h.a)(Object(h.a)(i))),i.state={moveCount:0},i.onMouseDown=i.onMouseDown.bind(Object(h.a)(Object(h.a)(i))),i.onMouseUp=i.onMouseUp.bind(Object(h.a)(Object(h.a)(i))),i.onMouseMove=i.onMouseMove.bind(Object(h.a)(Object(h.a)(i))),i}return Object(d.a)(a,e),Object(l.a)(a,[{key:"handleClick",value:function(){this.props.onClick&&this.props.onClick(this.props.value)}},{key:"onMouseDown",value:function(){this.setState({moveCount:0})}},{key:"onMouseUp",value:function(){this.state.moveCount<5&&this.handleClick(this.props.value)}},{key:"onMouseMove",value:function(){this.setState({moveCount:this.state.moveCount+1})}},{key:"shouldComponentUpdate",value:function(e,a){return this.props.src!==e.src||this.props.selected!==e.selected}},{key:"render",value:function(){var e=this.props,a=e.src,i=e.selected;return n.a.createElement("div",{className:A.a.thumbnail,onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onMouseMove:this.onMouseMove},n.a.createElement(T,{src:a,imageClassName:k()(i&&A.a.thumbnailSelected)}))}}]),a}(t.Component),G=i(7),V=i.n(G),F=(i(77),function(e){function a(e){var i;Object(o.a)(this,a),i=Object(c.a)(this,Object(m.a)(a).call(this,e));var t=e.match.params.source,r="design"===t?H:P;r="sketchbook"===t?I:r;var s=parseInt(e.match.params.index)||0;return i.state={source:t,value:s,initialValue:s,thumbnail:s,elements:r,thumbnails:r,showThumbnails:window.innerWidth>=E.showThumbnailWidthThreshold&&window.innerHeight>=E.ShowThumbnailHeightThreshold},i.carouselSlider=n.a.createRef(),i.thumbnailSlider=n.a.createRef(),i.onChange=i.onChange.bind(Object(h.a)(Object(h.a)(i))),i.onClickThumbnail=i.onClickThumbnail.bind(Object(h.a)(Object(h.a)(i))),i.onNext=i.onNext.bind(Object(h.a)(Object(h.a)(i))),i.onPrev=i.onPrev.bind(Object(h.a)(Object(h.a)(i))),i.handleResize=i.handleResize.bind(Object(h.a)(Object(h.a)(i))),i}return Object(d.a)(a,e),Object(l.a)(a,[{key:"onChange",value:function(e){var a="left"===e?-1:1;this.setState({value:this.state.value+a})}},{key:"onClickThumbnail",value:function(e){this.carouselSlider.current.slickGoTo(e),this.setState({value:e})}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleResize),this.handleResize()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize)}},{key:"handleResize",value:function(e){this.setState({showThumbnails:window.innerWidth>=E.showThumbnailWidthThreshold&&window.innerHeight>=E.showThumbnailHeightThreshold})}},{key:"onNext",value:function(){this.state.showThumbnails?this.thumbnailSlider.current.slickNext():this.carouselSlider.current.slickNext()}},{key:"onPrev",value:function(){this.state.showThumbnails?this.thumbnailSlider.current.slickPrev():this.carouselSlider.current.slickPrev()}},{key:"render",value:function(){var e,a,i=this,t=this.state,r=t.elements,s=t.initialValue,o=t.value,l=t.showThumbnails,c={dots:!1,infinite:!0,slidesToShow:1,slidesToScroll:1,initialSlide:s,onSwipe:this.onChange,arrows:!1},m={dots:!1,infinite:!0,slidesToShow:5,slidesToScroll:5,initialSlide:s,arrows:!1};return n.a.createElement("div",{className:V.a.container},n.a.createElement("div",{className:V.a.mainContent},n.a.createElement("div",{className:V.a.cancelContainer,style:{height:E.cancelContainerHeight}},n.a.createElement(g.b,{to:"/"+this.state.source},n.a.createElement(N.a,{name:"times",className:V.a.cancelButton}))),n.a.createElement("div",{className:k()((e={},Object(B.a)(e,V.a.carousel,!0),Object(B.a)(e,"carousel",!0),e))},n.a.createElement(R.a,Object.assign({},c,{ref:this.carouselSlider}),r.map(function(e,a){var i=e.primary,t=e.secondary,r=e.src;return n.a.createElement("div",{key:a,className:V.a.carouselItem},n.a.createElement("div",{className:V.a.carouselHeader},n.a.createElement("div",{className:V.a.carouselDescription},n.a.createElement("div",{className:V.a.carouselItemPrimary},i||"Primary text"),n.a.createElement("div",{className:V.a.carouselItemSecondary},t||"Secondary text"))),n.a.createElement("div",{className:V.a.carouselItemImage},n.a.createElement("img",{alt:r,src:"/"+r})))}))),n.a.createElement("div",{className:k()((a={},Object(B.a)(a,V.a.thumbnails,!0),Object(B.a)(a,"thumbnail",!0),a)),style:{height:l?E.thumbnailFullContainerHeight:E.thumbnailSmallContainerHeight}},n.a.createElement(N.a,{className:V.a.arrow,name:"angle-left",onClick:this.onPrev}),l&&n.a.createElement(R.a,Object.assign({},m,{ref:this.thumbnailSlider}),r.map(function(e,a){e.primary,e.secondary;var t=e.srcMini;return n.a.createElement("div",{key:a,className:V.a.carouselItem},n.a.createElement(U,{value:a,src:"/"+t,onClick:i.onClickThumbnail,selected:o===a}))})),n.a.createElement(N.a,{className:V.a.arrow,name:"angle-right",onClick:this.onNext}))))}}]),a}(t.Component)),J=i(40),q=i.n(J),X=i(15),Y=i.n(X),Z=function(e){function a(e){var i;return Object(o.a)(this,a),(i=Object(c.a)(this,Object(m.a)(a).call(this,e))).state={width:window.innerWidth,height:window.innerHeight,isAboutPage:"/about"===e.match.path},i.handleResize=i.handleResize.bind(Object(h.a)(Object(h.a)(i))),i}return Object(d.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize)}},{key:"handleResize",value:function(e){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"render",value:function(){var e,a,i,t,r,s=this.state,o=s.width>=600;s.isAboutPage?i=n.a.createElement("div",{className:k()((t={},Object(B.a)(t,Y.a.info,!0),Object(B.a)(t,Y.a.infoHorizontal,o),t))},n.a.createElement("div",{className:Y.a.infoTitle},"Hi There! "),n.a.createElement("div",{className:Y.a.infoBody},"My name is Sandra. I am a Canadian Illustrator and Designer from Vancouver, BC. I recently graduated from ArtCenter College of Design with a BFA in Illustration. My art is primarily inspired by nature and animals that usually depict playful interactions of whimsical characters in their own colorful world."),n.a.createElement("div",{className:Y.a.infoBody},n.a.createElement("div",null,"For jobs, commission enquiries, or simply to say hi:"),n.a.createElement(q.a,{email:E.email}))):i=n.a.createElement("div",{className:k()((r={},Object(B.a)(r,Y.a.info,!0),Object(B.a)(r,Y.a.infoHorizontal,o),r))},n.a.createElement("div",{className:Y.a.infoTitle},"SHOP"),n.a.createElement("div",{className:Y.a.infoBody},n.a.createElement("div",null,"We\u2019re working on our site at the moment."),n.a.createElement("p",null,"Please check back soon.")));return n.a.createElement("div",{className:k()((e={},Object(B.a)(e,Y.a.container,!0),Object(B.a)(e,Y.a.containerVertical,!o),e))},n.a.createElement("div",{className:k()((a={},Object(B.a)(a,Y.a.pictureContainer,!0),Object(B.a)(a,Y.a.pictureContainerHorizontal,o),a)),style:{backgroundImage:"url(/images/sleeping_village.jpg)"}}),i)}}]),a}(t.Component),Q=function(e){function a(e){var i;return Object(o.a)(this,a),(i=Object(c.a)(this,Object(m.a)(a).call(this,e))).state={isMobile:window.innerWidth<=E.mobileViewMaxWidth},i.onResize=i.onResize.bind(Object(h.a)(Object(h.a)(i))),i}return Object(d.a)(a,e),Object(l.a)(a,[{key:"onResize",value:function(){this.setState({isMobile:window.innerWidth<=E.mobileViewMaxWidth})}},{key:"render",value:function(){var e=this.state.isMobile,a=e?{height:E.headerHeight,width:"100%"}:{width:E.sideBarWidth};return n.a.createElement(g.a,null,n.a.createElement(p.a,{handleWidth:!0,handleHeight:!0,onResize:this.onResize}),n.a.createElement("div",{className:f.a.app,style:{flexDirection:e?"column":"row"}},n.a.createElement(S,null),n.a.createElement("div",{style:a}),n.a.createElement("div",{className:f.a.appBody,ref:this.profileElement,style:{marginTop:e?0:100}},n.a.createElement(u.a,{exact:!0,path:"/",component:z}),n.a.createElement(u.a,{path:"/illustration",component:z}),n.a.createElement(u.a,{path:"/design",component:z}),n.a.createElement(u.a,{path:"/sketchbook",component:z}),n.a.createElement(u.a,{path:"/about",component:Z}),n.a.createElement(u.a,{path:"/shop",component:Z}),n.a.createElement(u.a,{exact:!0,path:"/carousel/:source/:index?",component:F}),n.a.createElement("div",{className:f.a.copyright,style:{height:E.copyrightHeight}},"Copyright \xa9 2019-2020 Sandra Zheng"))))}}]),a}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[42,1,2]]]);
//# sourceMappingURL=main.a8b82308.chunk.js.map
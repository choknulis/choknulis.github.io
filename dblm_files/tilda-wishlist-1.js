function twishlist__init(recid){var el=$(".t1002"),recEl=$("#rec"+recid);if("yes"===window.twishlist_initted&&el.length>1){var str="RU"===window.browserLang?"Ошибка: На странице присутствуют "+el.length+" виджета избранного (блок ST110). Пожалуйста, удалите дубликаты. Блоки могут находиться на странице Header или Footer.":"Error: "+el.length+" wishlist widgets (block ST110) on the page. Remove a duplicate. Blocks can be on the Header or Footer page.";return 0===$(".t1002__previewmode-infobox .t1002__previewmode-infobox-error").length&&$(".t1002__previewmode-infobox center").append('<div class="t1002__previewmode-infobox-error" style="color:red">'+str+"</div>"),void(void 0===window.twishlist_erroralert&&(alert(str),window.twishlist_erroralert="yes",console.error("Error: Two wishlist widgets (block ST100) on the page. Remove a duplicate.")))}var maxStoreDays=el.attr("data-wishlist-maxstoredays");void 0!==maxStoreDays&&""!==maxStoreDays&&maxStoreDays>=0&&(window.twishlist_maxstoredays=maxStoreDays),window.twishlist_initted="yes",twishlist__loadLocalObj(),twishlist__drawBottomTotalAmount(),twishlist__reDrawCartIcon(),twishlist__addEvent__links(),twishlist__addEvents(),twishlist__addProductButtons(),setTimeout((function(){var hash=decodeURIComponent(document.location.hash);if(-1!==hash.indexOf("#addtofavorites:")){var button=$('a[href="'+hash+'"]')[0];$(button).click()}})),recEl.attr("data-animationappear","off"),recEl.css("opacity","1"),el.find(".t1002__wishlistwin-totalamount-label").html(twishlist_dict("total")+": "),""==el.find(".t1002__wishlistwin-heading").html()&&el.find(".t1002__wishlistwin-heading").html(twishlist_dict("yourWishlist")+":")}function twishlist_dict(msg){var dict=[];dict.total={EN:"Total",RU:"Сумма",FR:"Total",DE:"Gesamtsumme",ES:"Total",PT:"Total",JA:"合計",ZH:"总额。",UK:"Сума",PL:"Suma",KK:"Жалпы",IT:"Totale",LV:"Kopā"},dict.yourWishlist={EN:"Favorites",RU:"Избранное",FR:"Favoris",DE:"Favoriten",ES:"Favoritos",PT:"Favoritos",JA:"お気に入り",ZH:"收藏",UK:"Вибране",PL:"Ulubione",KK:"Таңдаулылар",IT:"Preferiti",LV:"Izlase"},dict.free={EN:"free",RU:"бесплатно",FR:"gratuit",DE:"kostenlos",ES:"gratis",PT:"livre",UK:"безкоштовно",JA:"無料で",ZH:"免费",PL:"za darmo",KK:"тегін",IT:"gratuito",LV:"bezmaksas"},dict.youRemoved={EN:"You removed",RU:"Вы удалили",FR:"Vous avez retiré",DE:"Sie haben entfernt",ES:"Has eliminado",PT:"Retirou",JA:"除去しました",ZH:"你删除了",UK:"Щойно видалено",PL:"Usunąłeś",KK:"Сіз жойылған",IT:"Hai rimosso",LV:"Jūs izdzēsāt"},dict.youAdd={EN:"added to favorites",RU:"добавлено в избранное",FR:"enregistré dans les favoris",DE:"in favoriten gespeichert",ES:"guardado en favoritos",PT:"guardado nos favoritos",JA:"お気に入り に保存しました",ZH:"已添加到愿望清单",UK:"додано у вибране",PL:"zapisano w ulubionych",KK:"таңдаулыларға қосылды",IT:"salvato nei preferiti",LV:"pievienots izlasei"},dict.undo={EN:"Undo",RU:"Вернуть",FR:"Annuler",DE:"Rückgängig",ES:"Deshacer",PT:"Desfazer",JA:"元に戻す",ZH:"撤销",UK:"Повернути",PL:"Powrót",KK:"Болдырмау",IT:"Disfare",LV:"Atcelt"};var lang=window.browserLang;return void 0!==dict[msg]?void 0!==dict[msg][lang]&&""!=dict[msg][lang]?dict[msg][lang]:dict[msg].EN:"Text not found #"+msg}function twishlist__nullObj(){var twishlist={products:[],prodamount:0,amount:0};return twishlist}function twishlist__loadLocalObj(){var dataJsonStr=null,ts,delta;if("object"==typeof localStorage)try{dataJsonStr=localStorage.getItem("twishlist")}catch(e){console.error("Your web browser does not support storing a Wishlist data locally.")}if(window.twishlist=null===dataJsonStr?twishlist__nullObj():JSON.parse(dataJsonStr),void 0!==window.twishlist.products){var obj=[],oldCountProducts=window.twishlist.products.length,actualCountProducts;$.each(window.twishlist.products,(function(index,product){$.isEmptyObject(product)||"yes"===product.deleted||obj.push(product)})),window.twishlist.products=obj,window.twishlist.products.length!==oldCountProducts&&twishlist__saveLocalObj()}if(void 0!==window.twishlist_maxstoredays&&""!=window.twishlist_maxstoredays){var maxStoreDays=window.twishlist_maxstoredays;maxStoreDays>0?void 0!==window.twishlist.updated&&window.twishlist.updated>0&&(delta=1*(ts=Math.floor(Date.now()/1e3))-1*window.twishlist.updated)>86400*maxStoreDays&&("object"==typeof localStorage&&(window.twishlist.products=[],localStorage.setItem("twishlist",JSON.stringify(window.twishlist))),window.twishlist=twishlist__nullObj()):"0"==maxStoreDays&&(window.twishlist=twishlist__nullObj())}else void 0!==window.twishlist.updated&&window.twishlist.updated>0&&(delta=1*(ts=Math.floor(Date.now()/1e3))-1*window.twishlist.updated)>2592e3&&(window.twishlist=twishlist__nullObj());delete window.twishlist.currency,delete window.twishlist.currency_txt,delete window.twishlist.currency_txt_l,delete window.twishlist.currency_txt_r,delete window.twishlist.currency_side,delete window.twishlist.currency_sep,delete window.twishlist.currency_dec,window.twishlist.currency="$",window.twishlist.currency_side="l",window.twishlist.currency_sep=".",window.twishlist.currency_dec="";var paymentCur=$(".t1002").attr("data-userpayment-currency");void 0!==paymentCur&&""!==paymentCur&&(window.twishlist.currency=paymentCur);var projectCur=$(".t1002").attr("data-project-currency");void 0!==projectCur&&""!==projectCur&&(window.twishlist.currency=projectCur),window.twishlist.currency_txt=window.twishlist.currency,void 0!==(projectCur=$(".t1002").attr("data-project-currency-side"))&&"r"==projectCur&&(window.twishlist.currency_side="r"),"l"==window.twishlist.currency_side?(window.twishlist.currency_txt_l=window.twishlist.currency_txt+"",window.twishlist.currency_txt_r=""):(window.twishlist.currency_txt_r=" "+window.twishlist.currency_txt,window.twishlist.currency_txt_l=""),void 0===(projectCur=$(".t1002").attr("data-project-currency-sep"))||"."!=projectCur&&","!=projectCur?"$"==window.twishlist.currency||"€"==window.twishlist.currency||"USD"==window.twishlist.currency||"EUR"==window.twishlist.currency?window.twishlist.currency_sep=".":window.twishlist.currency_sep=",":window.twishlist.currency_sep=projectCur,projectCur=$(".t1002").attr("data-project-currency-dec"),window.twishlist.currency_dec=void 0!==projectCur&&"00"==projectCur?projectCur:"",twishlist__updateTotalProductsinCartObj()}function twishlist__saveLocalObj(){if((void 0===window.twishlist_maxstoredays||0!=window.twishlist_maxstoredays)&&"object"==typeof window.twishlist){window.twishlist.updated=Math.floor(Date.now()/1e3);var dataJsonStr=JSON.stringify(window.twishlist);if("object"==typeof localStorage)try{localStorage.setItem("twishlist",dataJsonStr)}catch(e){console.error("Your web browser does not support storing a Cart data locally.")}}}function twishlist__syncProductsObject__LStoObj(){if((void 0===window.twishlist_maxstoredays||0!=window.twishlist_maxstoredays)&&"object"==typeof localStorage)try{var lsJsonStr=localStorage.getItem("twishlist"),lsJsonObj=JSON.parse(lsJsonStr);if("object"==typeof lsJsonObj.products){var obj=[],oldCountProducts=lsJsonObj.products.length,actualCountProducts;$.each(lsJsonObj.products,(function(index,product){!$.isEmptyObject(product)&&"yes"!==product.deleted&&product.quantity>0&&obj.push(product)})),window.twishlist.products=obj,window.twishlist.products.length!==oldCountProducts&&twishlist__saveLocalObj(),twishlist__updateTotalProductsinCartObj()}}catch(e){}}function twishlist__addProductButtons(){var pel=$(".js-product"),pos=$(".t1002").attr("data-wishlistbtn-pos");null!=typeof pel&&pel.length>0&&pel.each((function(){var $this=$(this),productObj,productInWishlist="yes"===twishlist__checkIfInWishlist(twishlist__getProductObjFromPel($this)).flag,btnClass,btnSvg,wishlistBtn='<a href="#addtofavorites" class="t1002__addBtn'+(productInWishlist?" t1002__addBtn_active":"")+'">'+'<svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6.32647C20 11.4974 10.5 17 10.5 17C10.5 17 1 11.4974 1 6.32647C1 -0.694364 10.5 -0.599555 10.5 5.57947C10.5 -0.599555 20 -0.507124 20 6.32647Z" stroke="black" stroke-linejoin="round"/></svg>'+"</a>";0===$this.find(".t1002__addBtn").length?($this.hasClass("js-product-single")||$this.hasClass("t-store__product-snippet")||$this.parents(".t-popup").length>0)&&($this.find(".t1002__btns-wrapper").length>0||$this.find(".js-store-buttons-wrapper").length>0||$this.find(".t-store__prod-popup__btn-wrapper").length>0)?($this.find(".t1002__btns-wrapper").append(wishlistBtn),$this.find(".t-store__prod-popup__btn-wrapper").append(wishlistBtn)):"picture"===pos&&($this.find(".t1002__picture-wrapper").length>0||$this.find(".t-store__card__imgwrapper").length>0)?($this.find(".t-store__card__imgwrapper").addClass("t1002__picture-wrapper"),$this.find(".t1002__picture-wrapper").append(wishlistBtn)):"button"===pos&&($this.find(".t1002__btns-wrapper").length>0||$this.find(".js-store-buttons-wrapper").length>0)&&($this.find(".t1002__btns-wrapper").append(wishlistBtn),$this.find(".js-store-buttons-wrapper").append(wishlistBtn)):productInWishlist?$this.find(".t1002__addBtn").addClass("t1002__addBtn_active"):$this.find(".t1002__addBtn").removeClass("t1002__addBtn_active")}))}function twishlist__addEvents(){$("body").on("twishlist_addbtn",(function(){twishlist__addProductButtons()})),$(".t1002__wishlisticon").click((function(){twishlist__openCart()})),$("body").on("click",'a[href="#showfavorites"]',(function(e){twishlist__openCart(),e.preventDefault()})),$(".t1002__wishlistwin-close").click((function(){twishlist__closeCart()})),$(".t1002__wishlistwin-closebtn").click((function(){twishlist__closeCart()})),$(".t1002").find(".js-form-proccess").attr("data-formwishlist","y"),$(".t1002__wishlistwin").mousedown((function(e){if(e.target==this){var windowWidth,maxScrollBarWidth=17,windowWithoutScrollBar=$(window).width()-17;if(e.clientX>windowWithoutScrollBar)return;twishlist__closeCart()}})),$(window).on("storage",(function(e){if(e.originalEvent&&"twishlist"===e.originalEvent.key){try{var lsJsonStr=localStorage.getItem("twishlist"),lsJsonObj=JSON.parse(lsJsonStr);"object"==typeof lsJsonObj.products&&(window.twishlist.products=lsJsonObj.products,twishlist__updateTotalProductsinCartObj())}catch(e){}twishlist__reDrawCartIcon(),$("body").hasClass("t1002__body_wishlistwinshowed")&&twishlist__reDrawProducts()}}))}function twishlist__getProductObjFromPel(pel){var price="0",name="",img="",sku="",lid="",uid="",recid="",inv="",single="",unit="",portion="",pack_label="",pack_m="",pack_x="",pack_y="",pack_z="";if(void 0!==pel){if(""==name&&void 0===(name=pel.find(".js-product-name").text())&&(name=""),""==price||0==price){var el_price=pel.find(".js-product-price");price=twishlist__cleanPrice(price=el_price.hasClass("js-store-prod-price-range-val")?el_price.attr("data-product-price-def"):el_price.text())}if(""==img)if(void 0!==pel.attr("data-product-img")&&""!=pel.attr("data-product-img"))img=pel.attr("data-product-img");else{var imgdiv=pel.find(".js-product-img");if(void 0!==imgdiv){var original=imgdiv.attr("data-original")||"";if(original.length>0)img=original;else if(imgdiv.is("img"))img=imgdiv.attr("src");else if(imgdiv.is("div")){img="";var imgcss=imgdiv.css("background-image");void 0!==imgcss&&""!=imgcss&&(img=imgcss.replace("url(","").replace(")","").replace(/"/gi,""))}}}""==lid&&void 0===(lid=pel.attr("data-product-lid"))&&(lid=""),""==uid&&void 0===(uid=pel.attr("data-product-uid"))&&(uid=""),""==recid&&void 0===(recid=pel.closest(".r").attr("id").replace("rec",""))&&(recid=""),""==inv&&void 0===(inv=pel.attr("data-product-inv"))&&(inv=""),unit=pel.attr("data-product-unit")||"",portion=pel.attr("data-product-portion")||"",single=pel.attr("data-product-single")||"";var options=[];pel.find(".js-product-edition-option").each((function(){var el_opt=$(this),op_option=el_opt.find(".js-product-edition-option-name").text(),op_variant=el_opt.find("option:selected").val(),op_price=el_opt.find("option:selected").attr("data-product-edition-variant-price");if(op_price=twishlist__cleanPrice(op_price),void 0!==op_option&&void 0!==op_variant){var obj={};""!=op_option&&(op_option=twishlist__escapeHtml(op_option)),""!=op_variant&&(op_variant=(op_variant=twishlist__escapeHtml(op_variant)).replace(/(?:\r\n|\r|\n)/g,"")),op_option.length>1&&":"==op_option.charAt(op_option.length-1)&&(op_option=op_option.substring(0,op_option.length-1)),obj.option=op_option,obj.variant=op_variant,obj.price=op_price,options.push(obj)}})),pel.find(".js-product-option").each((function(){var el_opt=$(this),op_option=el_opt.find(".js-product-option-name").text(),op_variant=el_opt.find("option:selected").val(),op_price=el_opt.find("option:selected").attr("data-product-variant-price");if(op_price=twishlist__cleanPrice(op_price),void 0!==op_option&&void 0!==op_variant){var obj={};""!=op_option&&(op_option=twishlist__escapeHtml(op_option)),""!=op_variant&&(op_variant=(op_variant=twishlist__escapeHtml(op_variant)).replace(/(?:\r\n|\r|\n)/g,"")),op_option.length>1&&":"==op_option.charAt(op_option.length-1)&&(op_option=op_option.substring(0,op_option.length-1)),obj.option=op_option,obj.variant=op_variant,obj.price=op_price,options.push(obj)}})),""==sku&&void 0===(sku=pel.find(".js-product-sku").text().trim())&&(sku=""),""==pack_label&&void 0===(pack_label=pel.attr("data-product-pack-label"))&&(pack_label=""),""==pack_m&&void 0===(pack_m=pel.attr("data-product-pack-m"))&&(pack_m=""),""==pack_x&&void 0===(pack_x=pel.attr("data-product-pack-x"))&&(pack_x=""),""==pack_y&&void 0===(pack_y=pel.attr("data-product-pack-y"))&&(pack_y=""),""==pack_z&&void 0===(pack_z=pel.attr("data-product-pack-z"))&&(pack_z="")}var productUrl=pel.attr("data-product-url"),settedLinkInToProduct=pel.find(".js-product-link").not('[href="#prodpopup"]').not('[href="#addtofavorites"]').not('[href="#order"]').attr("href");if(void 0===productUrl&&settedLinkInToProduct?productUrl=settedLinkInToProduct:void 0===productUrl&&recid&&lid?productUrl=window.location.origin+window.location.pathname+"#!/tproduct/"+recid+"-"+lid:void 0===productUrl&&(productUrl=window.location.origin+window.location.pathname+"#rec"+recid),""!=name||""!=price&&0!=price){""==name&&(name="NoName"),""==price&&(price=0),""!=name&&(name=twishlist__escapeHtml(name)),""!=img&&(img=twishlist__escapeHtmlImg(img));var productObj={};return productObj.name=name,productObj.price=price,productObj.img=img,productObj.recid=recid,productObj.lid=lid,productObj.pack_label=pack_label,productObj.pack_m=pack_m,productObj.pack_x=pack_x,productObj.pack_y=pack_y,productObj.pack_z=pack_z,productObj.url=productUrl,void 0!==options&&options.length>0&&(productObj.options=options),void 0!==sku&&""!=sku&&(sku=twishlist__escapeHtml(sku),productObj.sku=sku),void 0!==uid&&""!=uid&&(productObj.uid=uid),void 0!==lid&&""!=lid&&(productObj.lid=lid),void 0!==inv&&inv>0&&(productObj.inv=parseInt(inv,10)),""!==unit&&(productObj.unit=unit),""!==portion&&(productObj.portion=portion),""!==single&&(productObj.single=single),productObj}}function twishlist__addEvent__links(){$(".r").on("click",'[href^="#addtofavorites"]',(function(e){e.preventDefault();var el=$(this),price="0",name="",img="",tmp=el.attr("href"),productObj={name:"",price:"0",recid:""};if("#addtofavorites:"==tmp.substring(0,16)){var str=tmp.substring(16);if(void 0!==str&&""!=str){if(str.indexOf(":::")>0){var bar_pos=str.indexOf(":::");if(str.indexOf("=")>0&&str.indexOf("=")<str.indexOf(":::")){var bar_str=str.substring(bar_pos+3);str=str.substring(0,bar_pos)}}var arr,arr;if(str.indexOf("=")>0)void 0!==(arr=str.split("="))[0]&&(name=arr[0]),void 0!==arr[1]&&(price=arr[1]),price=twishlist__cleanPrice(price);else name=str;if(void 0!==bar_str&&""!=bar_str)if(bar_str.indexOf("=")>0)void 0!==(arr=bar_str.split("="))[0]&&void 0!==arr[1]&&""!=arr[0]&&""!=arr[1]&&"image"==arr[0]&&(arr[1].indexOf("tildacdn.com")>0||arr[1].indexOf("tildacdn.info")>0)&&(img=arr[1]);""==recid&&void 0===(recid=el.closest(".r").attr("id").replace("rec",""))&&(recid="")}productObj.name=name,productObj.price=price,productObj.recid=recid,productObj.img=img}var pel=$(this).closest(".js-product");if(void 0!==pel&&pel.length>0){$(this).addClass("t1002__addBtn_active"),$(this).addClass("t1002__addBtn_neworder"),setTimeout((function(){$(".t1002__addBtn").removeClass("t1002__addBtn_neworder")}),2e3);var price=(productObj=twishlist__getProductObjFromPel(pel)).price,recid=productObj.recid}var objFromWishlist=twishlist__checkIfInWishlist(productObj);if("yes"===objFromWishlist.flag){var i=objFromWishlist.id;window.twishlist.products[i].deleted="yes",twishlist__updateTotalProductsinCartObj(),$(".t1002__wishlisticon-counter").html(window.twishlist.total),twishlist__saveLocalObj(),$(this).removeClass("t1002__addBtn_active"),window.twishlist.products[i]={},$.isEmptyObject(window.twishlist.products[i])&&(window.twishlist.products.splice(i,1),twishlist__reDrawProducts()),twishlist__reDrawCartIcon()}else{var bubbleTxt;twishlist__addProduct(productObj),twishlist__showBubble(productObj.name+" "+twishlist_dict("youAdd"))}twishlist__addProductButtons()}))}function twishlist__checkIfInWishlist(productObj){var obj=window.twishlist.products,flag_inwishlist="",objIndex="";return obj.length>0&&$.each(obj,(function(index,product){var eq_options="y",eq_sku="";if(productObj&&product.name.trim()==productObj.name.trim()&&product.price==productObj.price){if(null==product.options&&null==productObj.options&&null==product.sku&&null==productObj.sku)return objIndex=index,flag_inwishlist="yes",!1;if(null==product.options&&null==productObj.options&&null!=product.sku&&null!=productObj.sku&&product.sku==productObj.sku)return objIndex=index,flag_inwishlist="yes",!1;if("object"==typeof product.options&&"object"==typeof productObj.options&&($.each(product.options,(function(index,option){if("object"==typeof option&&"object"==typeof productObj.options[index]){if(option.option!==productObj.options[index].option||option.variant!==productObj.options[index].variant||option.price!==productObj.options[index].price)return eq_options=!1}else if(null==option||null==productObj.options[index])return eq_options=!1})),product.sku===productObj.sku&&(eq_sku="y"),"y"===eq_options&&"y"===eq_sku))return objIndex=index,flag_inwishlist="yes",!1}})),{id:objIndex,flag:flag_inwishlist}}function twishlist__addProduct(productObj){var ts=Math.floor(Date.now()/1e3),flag_inwishlist;twishlist__syncProductsObject__LStoObj(),""==twishlist__checkIfInWishlist(productObj).flag&&(void 0===productObj.quantity?(productObj.quantity=1,productObj.amount=productObj.price):productObj.amount=twishlist__roundPrice(productObj.price*productObj.quantity),productObj.ts=ts,window.twishlist.products.push(productObj)),twishlist__updateTotalProductsinCartObj(),twishlist__reDrawCartIcon(),twishlist__saveLocalObj(),"yes"==$(".t1002").attr("data-openwishlist-onorder")?setTimeout((function(){twishlist__openCart()}),10):($(".t1002__wishlisticon").addClass("t1002__wishlisticon_neworder"),setTimeout((function(){$(".t1002__wishlisticon").removeClass("t1002__wishlisticon_neworder")}),2e3))}function twishlist__updateProductsPrice(){var now=Math.floor(Date.now()/1e3),ts;void 0!==window.twishlist&&(void 0!==window.twishlist.updated&&(now-parseInt(window.twishlist.updated,10))/3600>12&&$.ajax({type:"POST",url:"https://store.tildacdn.com/api/getpriceproducts/",data:window.twishlist,dataType:"text",success:function(data){"string"==typeof data&&"{"===data.substr(0,1)||console.error("Can't get array.");var productsArr=[];try{var dataObj=jQuery.parseJSON(data);if("error"===dataObj.status)productsArr=dataObj.bad;else if("success"===dataObj.status)return}catch(e){console.error("Can't get JSON.",data)}""!==productsArr?0!==productsArr.length?(Object.keys(productsArr).forEach((function(i){var badUid=productsArr[i].uid||productsArr[i].lid;"PRICE_CHANGED"===productsArr[i].error&&window.twishlist.products.forEach((function(product,index){var uid=product.uid||product.lid;if(badUid===uid&&(void 0!==product.options&&void 0!==productsArr[i].options&&void 0!==productsArr[i].variant&&product.options.forEach((function(option){if(option.variant===productsArr[i].variant)return window.twishlist.products[index].amount=parseFloat(productsArr[i].last_amount),void(window.twishlist.products[index].price=parseFloat(productsArr[i].last_price))})),void 0===product.options&&void 0===productsArr[i].options&&void 0===productsArr[i].variant))return window.twishlist.products[index].amount=parseFloat(productsArr[i].last_amount),void(window.twishlist.products[index].price=parseFloat(productsArr[i].last_price))})),"LESS_PRODUCTS"!==productsArr[i].error&&"NOT_FOUND_PRODUCT"!==productsArr[i].error||window.twishlist.products.forEach((function(product,index){var uid=product.uid||product.lid;badUid===uid&&(window.twishlist.products[index]={})}))})),twishlist__saveLocalObj(),twishlist__reDrawProducts(),twishlist__updateTotalProductsinCartObj(),$(".t1002__wishlisticon-counter").html(window.twishlist.total)):console.error("Nothing to update."):console.error("Something went wrong. Can't get products array.")},timeout:25e3}))}function twishlist__updateTotalProductsinCartObj(){var obj=window.twishlist.products;if(obj.length>0){var total=0,prodamount=0;$.each(obj,(function(index,product){$.isEmptyObject(product)||"yes"===product.deleted||("y"===product.single?total+=1:total+=1*product.quantity,prodamount=1*prodamount+1*product.amount)})),prodamount=twishlist__roundPrice(prodamount),window.twishlist.total=total,window.twishlist.prodamount=prodamount;var amount=prodamount;amount>0&&(amount=twishlist__roundPrice(amount)),window.twishlist.amount=amount}else window.twishlist.total=0,window.twishlist.prodamount=0,window.twishlist.amount=0}function twishlist__reDrawCartIcon(){var twishlist=window.twishlist,el=$(".t1002__wishlisticon");if(1==twishlist.total&&(el.css("opacity",0),el.animate({opacity:1},300)),void 0!==twishlist.products&&twishlist.products.length>0&&twishlist.total>0?(el.addClass("t1002__wishlisticon_showed"),el.find(".t1002__wishlisticon-counter").html(twishlist.total)):(el.removeClass("t1002__wishlisticon_showed"),el.find(".t1002__wishlisticon-counter").html("")),"y"===window.lazy||"yes"===$("#allrecords").attr("data-tilda-lazy"))try{twishlist__onFuncLoad("t_lazyload_update",(function(){t_lazyload_update()}))}catch(e){console.error("js lazyload not loaded")}}function twishlist__openCart(){$(".t1002__wishlisticon").removeClass("t1002__wishlisticon_showed"),$("body").addClass("t1002__body_wishlistwinshowed"),void 0!==window.tildaForm.hideErrors&&window.tildaForm.hideErrors($(".t1002 .t-form")),setTimeout((function(){twishlist__lockScroll()}),500),twishlist__syncProductsObject__LStoObj(),twishlist__updateProductsPrice();var el=$(".t1002__wishlistwin"),contentEl;if(el.css("opacity",0),el.addClass("t1002__wishlistwin_showed"),el.animate({opacity:1},300),$(".t1002__wishlistwin-content").addClass("t1002__wishlistwin-content_showed"),twishlist__reDrawProducts(),$(document).keyup(twishlist__keyUpFunc),"y"===window.lazy||"yes"===$("#allrecords").attr("data-tilda-lazy"))try{twishlist__onFuncLoad("t_lazyload_update",(function(){t_lazyload_update()}))}catch(e){console.error("js lazyload not loaded")}}function twishlist__reDrawProducts(){var el=$(".t1002__wishlistwin-products");if(void 0!==window.twishlist.products){var obj=[],oldCountProducts=window.twishlist.products.length,actualCountProducts;$.each(window.twishlist.products,(function(index,product){!$.isEmptyObject(product)&&"yes"!==product.deleted&&product.quantity>0&&obj.push(product)})),window.twishlist.products=obj,window.twishlist.products.length!==oldCountProducts&&twishlist__saveLocalObj()}var flag_hasimg="";if(obj.length>0&&$.each(obj,(function(index,product){""!=product.img&&(flag_hasimg="yes")})),obj.length>0){var str="";$.each(obj,(function(index,product){str+='<div class="t1002__product" data-wishlist-product-i="'+index+'">',"yes"==flag_hasimg&&(str+='<div class="t1002__product-thumb"><div class="t1002__product-imgdiv"'+(""!==product.img?"style=\"background-image:url('"+product.img+"');\"":"")+"></div></div>"),str+='<div class="t1002__product-title t-descr t-descr_sm">',product.url?str+='<a class="t1002__product-link" target="_blank" style="color: inherit" href="'+product.url+'">'+product.name+"</a>":str+=product.name,void 0!==product.options&&product.options.length>0&&(str+='<div class="t1002__product-title__option">',$.each(product.options,(function(o_index,option){str+="<div>"+option.option+": "+option.variant+"</div>"})),str+="</div>"),void 0!==product.sku&&""!=product.sku&&(str+='<div class="t1002__product-title__option">',str+=product.sku,str+="</div>"),product.portion>0&&(str+='<div class="t1002__product-title__portion">',str+=twishlist__showPrice(product.price)+"/","1"!==product.portion&&(str+=product.portion+" "),str+=t_store_dict(product.unit)+"</div>"),str+="</div>",product.portion>0?(str+='<div class="t1002__product-amount--portion t-descr t-descr_sm">',product.amount>0&&(str+='<span class="t1002__product-amount">'+twishlist__showPrice(product.amount)+"</span>",str+='<span class="t1002__product-portion">'+twishlist__showWeight(product.quantity*product.portion,product.unit)+"</span>"),str+="</div>"):(str+='<div class="t1002__product-amount t-descr t-descr_sm">',product.amount>0&&(str+=twishlist__showPrice(product.amount)),str+="</div>"),str+='<div class="t1002__product-del"><img src="https://static.tildacdn.com/lib/linea/1bec3cd7-e9d1-2879-5880-19b597ef9f1a/arrows_circle_remove.svg" style="width:20px;height:20px;border:0;"></div>',str+="</div>"})),el.html(str),twishlist__addEvents__forProducts()}else el.html("")}function twishlist__addEvents__forProducts(){$(".t1002__product-del").click((function(){twishlist__product__del($(this))}))}function twishlist__closeCart(){var twishlist=window.twishlist;$("body").removeClass("t1002__body_wishlistwinshowed"),twishlist__unlockScroll(),void 0!==twishlist.products&&twishlist.products.length>0&&twishlist.total>0?$(".t1002__wishlisticon").addClass("t1002__wishlisticon_showed"):$(".t1002__wishlisticon").removeClass("t1002__wishlisticon_showed"),twishlist__delZeroquantity_inCartObj(),$(document).unbind("keyup",twishlist__keyUpFunc),$(".t1002__wishlisticon").removeClass("t1002__wishlisticon_neworder"),$(".t1002__wishlistwin").animate({opacity:0},300),$(".t1002__wishlistwin-content").removeClass("t1002__wishlistwin-content_showed"),setTimeout((function(){$(".t1002__wishlistwin").removeClass("t1002__wishlistwin_showed"),$(".t1002__wishlistwin").css("opacity","1")}),300),"yes"==window.twishlist_success&&location.reload(),$("body").trigger("twishlist_addbtn")}function twishlist__keyUpFunc(e){27==e.keyCode&&twishlist__closeCart()}function twishlist__product__del(thiss){var el=thiss.closest(".t1002__product"),i=el.attr("data-wishlist-product-i");void 0===window.twishlist.products[i]&&twishlist__syncProductsObject__LStoObj(),window.twishlist.products.splice(i,1),el.remove(),twishlist__updateTotalProductsinCartObj(),$(".t1002__wishlisticon-counter").html(window.twishlist.total),twishlist__saveLocalObj(),twishlist__reDrawProducts(),0===window.twishlist.products.length&&twishlist__closeCart(),$("body").trigger("twishlist_addbtn")}function twishlist__delZeroquantity_inCartObj(){var obj=window.twishlist.products,flag_ismod="";obj.length>0&&$.each(obj,(function(index,product){void 0!==product&&0==product.quantity&&(window.twishlist.products.splice(index,1),flag_ismod="yes")})),"yes"==flag_ismod&&twishlist__saveLocalObj()}function twishlist__drawBottomTotalAmount(){var str="";str+='<div class="t1002__wishlistwin-totalamount-wrap t-descr t-descr_xl">',str+='<div class="t1002__wishlistwin-totalamount-info" style="margin-top: 10px; font-size:14px; font-weight:400;"></div>',str+='<span class="t1002__wishlistwin-totalamount-label">'+twishlist_dict("total")+": </span>",str+='<span class="t1002__wishlistwin-totalamount"></span>',str+="</div>",$(".t1002 .t-form__errorbox-middle").before(str)}function twishlist__showBubble(text){var delay=3e3,id=1,bubbleEl=$(".t1002__bubble");bubbleEl.length>0&&(id=bubbleEl.length+1);var str='<div class="t1002__bubble" data-wishlist-bubble="'+id+'"><div class="t1002__bubble-close">&times;</div><div class="t1002__bubble-text">'+text+"</div></div>";$("body").append(str);var el=$('.t1002__bubble[data-wishlist-bubble="'+id+'"]');if(id>1){var prevel=$('.t1002__bubble[data-wishlist-bubble="'+(id-1)+'"]');if(prevel.length>0){var elBottom=prevel.css("bottom"),elHeight=prevel.css("height");elBottom=parseInt(elBottom),elHeight=parseInt(elHeight)}id<5?el.css("bottom",elBottom+elHeight+5+"px"):el.css("bottom",elBottom+25+"px")}el.animate({opacity:"100",right:"20px"},400,(function(){setTimeout((function(){twishlist__closeBubble(id)}),3e3)})),el.find(".t1002__bubble-close").click((function(){var id;twishlist__closeBubble($(this).parent().attr("data-wishlist-bubble"))}))}function twishlist__closeBubble(id){var el;(el=void 0!==id&&id>0?$('.t1002__bubble[data-wishlist-bubble="'+id+'"]'):$(".t1002__bubble")).length&&el.animate({opacity:"0",right:"0"},300,(function(){$(this).remove()}))}function twishlist__escapeHtml(text){var map={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"};return text.replace(/[<>"']/g,(function(m){return map[m]}))}function twishlist__escapeHtmlImg(text){var map={"<":"&lt;",">":"&gt;",'"':"&quot;"};return text.replace(/[<>"]/g,(function(m){return map[m]}))}function twishlist__cleanPrice(price){return void 0===price||""==price||0==price?price=0:(price=(price=price.replace(",",".")).replace(/[^0-9\.]/g,""),price=parseFloat(price).toFixed(2),isNaN(price)&&(price=0),price=parseFloat(price),(price*=1)<0&&(price=0)),price}function twishlist__roundPrice(price){return void 0===price||""==price||0==price?price=0:(price=parseFloat(price).toFixed(2),price=parseFloat(price),(price*=1)<0&&(price=0)),price}function twishlist__showWeight(weight,unit){if(isNaN(parseInt(weight,10)))return"";var convertedUnits={lites:{value:1e3,units:["MLT","LTR"]},gramms:{value:1e3,units:["MGM","GRM","KGM","TNE"]},meters:{value:10,units:["MMT","CMT","DMT","MTR"]}},pos=-1,key="";if(Object.keys(convertedUnits).forEach((function(el){var index=convertedUnits[el].units.indexOf(unit);index>=0&&(pos=index,key=el)})),pos>=0&&""!==key)for(var value=convertedUnits[key].value,i=pos+1;i<convertedUnits[key].units.length;i++)weight>value&&(weight/=value,unit=convertedUnits[key].units[i]);return twishlist__roundPrice(weight)+" "+t_store_dict(unit)}function twishlist__showPrice(price){if(void 0===price||0==price||""==price)price="";else{var foo;if(price=price.toString(),void 0!==window.twishlist.currency_dec&&"00"==window.twishlist.currency_dec)if(-1===price.indexOf(".")&&-1===price.indexOf(","))price+=".00";else 1===price.substr(price.indexOf(".")+1).length&&(price+="0");price=price.replace(/\B(?=(\d{3})+(?!\d))/g," "),void 0!==window.twishlist.currency_sep&&","==window.twishlist.currency_sep&&(price=price.replace(".",",")),price=window.twishlist.currency_txt_l+price+window.twishlist.currency_txt_r}return price}function twishlist__lockScroll(){if(window.isiOS&&!window.MSStream&&""!==window.isiOSVersion&&void 0!==window.isiOSVersion&&11===window.isiOSVersion[0]){var body=$("body");if(!body.hasClass("t-body_scroll-locked")){var bodyScrollTop=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;body.addClass("t-body_scroll-locked"),body.css("top","-"+bodyScrollTop+"px"),body.attr("data-popup-scrolltop",bodyScrollTop)}}}function twishlist__unlockScroll(){if(window.isiOS&&!window.MSStream&&""!==window.isiOSVersion&&void 0!==window.isiOSVersion&&11===window.isiOSVersion[0]){var body=$("body");if(body.hasClass("t-body_scroll-locked")){var bodyScrollTop=$("body").attr("data-popup-scrolltop");body.removeClass("t-body_scroll-locked"),body.css("top",""),body.removeAttr("data-popup-scrolltop"),window.scrollTo(0,bodyScrollTop)}}}function twishlist__onFuncLoad(funcName,okFunc,time){if("function"==typeof window[funcName])okFunc();else{var startTime=Date.now();setTimeout((function checkFuncExist(){var currentTime=Date.now();if("function"!=typeof window[funcName]){if("complete"===document.readyState&&currentTime-startTime>5e3&&"function"!=typeof window[funcName])throw new Error(funcName+" is undefined");setTimeout(checkFuncExist,time||100)}else okFunc()}))}}
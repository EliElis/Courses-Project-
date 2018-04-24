app.controller('catalogCtrl', function ($scope, $filter, cartGlobal, itemGlobal, selectedCategory, wishGlobal, mainSearch) {
	var vm = this;
	vm.itemsLocal = itemGlobal.getItems();
	vm.cart = cartGlobal.getItems();
	vm.cartLocal = cartGlobal.getItems();
	vm.wish = wishGlobal.getItems();
	vm.wishLocal = wishGlobal.getItems();
	vm.currentItem = {};
	vm.limitValue = 10;
	vm.limitRange = [3, 5, 10, 15];
	vm.search = "";
	
	vm.add = function (item) {
		vm.currentItem = item;
		if (vm.inCart(vm.currentItem) == false) {
			vm.currentItem.count = 1;
			vm.cart.push(vm.currentItem);
		}
		else {
			vm.currentItem.count += 1;
		}
		cartGlobal.setItems(vm.cart);
		vm.cartLocal = cartGlobal.getItems();
		vm.currentItem = {};
	}
	
	
	vm.wish_it = function (item) {
		vm.currentItem = item;
		/*Add in wish, only once*/
		if (vm.inWish(vm.currentItem) == false) {
		vm.wish.push(vm.currentItem);
		wishGlobal.setItems(vm.wish);
		}
		vm.wishLocal = wishGlobal.getItems();
		vm.currentItem = {};
	}
	$scope.$watch("catalog.search", function (newValue, oldValue) {
		if (newValue !== oldValue) {
			vm.updatePage();
		}
	})
	vm.updatePage = function () {
		var array = $filter('minMaxPrice')(array, vm.min, vm.max);
		vm.pageCount = array.length;
		vm.allinCart();
	}
		//FILTER FOR SELECTED CATEGORY
	vm.selectCategories = function (categoryElem) {
		if (selectedCategory.getSelected() == -1) {
			return categoryElem.category.name;
		}
		else {
			vm.tmp = selectedCategory.getSelected();
			return categoryElem.category.name == vm.tmp;
		}
	}
	
	
	if (mainSearch.getSearchQuery() != null) {
		vm.search = mainSearch.getSearchQuery();
		//console.log(vm.search);
		mainSearch.cleanSearchQuery();
	}
	/*If element is in cart, button becomes green*/
	vm.cartBtnTxt = "В кошик";			
	vm.cartBtnTxt2 = "Перейти в кошик";
	
	vm.cartReplace = function (){
		location.replace("#!/cart");}
	
	vm.inCart = function (elem) {
		for (var j = 0; j < vm.cartLocal.length; j++) {
			if (elem.id === vm.cartLocal[j].id) {
				//console.log('t'+elem.id);

				return true;
			}
		}
		return false;
	}
	vm.allinCart = function () {
		for (var i = 0; i < vm.itemsLocal.length; i++) {
			vm.inCart(vm.itemsLocal[i].id);
		}
	}
	vm.allinCart();
	
		/*If element is in wish, button becomes green*/
	vm.inWish = function (elem) {
		for (var j = 0; j < vm.wishLocal.length; j++) {
			if (elem.id === vm.wishLocal[j].id) {
				//console.log('t'+elem.id);
				return true;
			}
		}
		return false;
	}
	vm.allinWish = function () {
		for (var i = 0; i < vm.wishLocal.length; i++) {
			vm.inWish(vm.wishLocal[i].id);
		}
	}
	vm.allinWish();
	
	vm.showVar = false;
	vm.shownElem = {};
	
	vm.show = function (elem) {
		vm.showVar = true;
		vm.shownElem = elem;
	};
	vm.hide = function () {
		vm.showVar = false;
		vm.shownElem = {};
	};

	
//	vm.maxVal = function(){
//		if(vm.itemsLocal.length>0){
//			var max = vm.itemsLocal[0].price;
//			for(var i=0; i<vm.itemsLocal.length; i++){
//				if(max<vm.itemsLocal[i].price){
//					max = vm.itemsLocal[i].price;
//				}
//			}
//		}
//		console.log(max);
//		return max;
//		
//	}
	
	// for(var i=0; i<vm.itemsLocal.length; i++){
	//	if(vm.itemsLocal[i].url==null){
	//	vm.imgUrl="../images/newLogo.png"; 
	//	}else{
	//		vm.imgUrl=vm.itemsLocal[0].url;
	//	}
	//	 
	// }
})
app.controller('cartCtrl', function ($scope, $filter, cartGlobal, itemGlobal) {
	var vm = this;
	vm.cartLocal = cartGlobal.getItems();
	vm.cart = cartGlobal.getItems();
	vm.currentItem = {};
	
	vm.delete = function (item) {
		vm.currentItem = item;
		var index = vm.cart.indexOf(vm.currentItem);
		vm.cart.splice(index, 1);
		cartGlobal.removeItems();
		cartGlobal.setItems(vm.cart);
		vm.cartLocal = cartGlobal.getItems();
		vm.currentItem = {};
	}
	
	vm.bgCart= function(){
		if(	vm.cartLocal.length < 1){
			console.log(true);
			return true;
		}else{return false;}
	}
//			
//		}
//	
	
})
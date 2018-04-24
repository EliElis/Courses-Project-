app.controller('wishCtrl', function ($scope, $filter, wishGlobal) {
	var vm = this;
	vm.wishLocal = wishGlobal.getItems();
	vm.wish = [];
	vm.wish = wishGlobal.getItems();
	vm.currentItem = {};
	
	vm.delete = function (item) {
		vm.currentItem = item;
		var index = vm.wish.indexOf(vm.currentItem);
		vm.wish.splice(index, 1);
		wishGlobal.removeItems();
		wishGlobal.setItems(vm.wish);
		vm.wishLocal = wishGlobal.getItems();
		vm.currentItem = {};
	}
	
		vm.bgWish= function(){
		if(	vm.wishLocal.length < 1){
			console.log(true);
			return true;
		}else{return false;}
	}
})
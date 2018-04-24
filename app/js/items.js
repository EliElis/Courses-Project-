app.controller("itemCtrl", function ($scope, $filter, itemGlobal, categoryGlobal) {
	var vm = this;
	vm.items = [];
	vm.items = itemGlobal.getItems();
	vm.itemsLocal = itemGlobal.getItems();
	vm.categories = categoryGlobal.getCategories();
	vm.itemUpdateBool = false;
	vm.currentItem = {};
	//	LimitTo
	vm.limitValue = 5;
	vm.limitRange = [3, 5, 10, 15];
	//min, max, search
	vm.search = "";
	vm.min = "";
	vm.max = "";
	vm.page = 1;
	vm.size = 5;
    vm.pageCount = Math.ceil(vm.items.length/vm.size);
	
	vm.save = function () {
		if (vm.itemUpdateBool == false) {
			var id = itemGlobal.getItemId();
			vm.currentItem.id = ++id;
			itemGlobal.setItemId(vm.currentItem.id);
			vm.items.push(vm.currentItem);
		}
		
		itemGlobal.setItems(vm.items);
		vm.itemsLocal = itemGlobal.getItems();
		vm.currentItem = {};
		vm.itemUpdateBool = false;
	}
	vm.update = function (item) {
		vm.currentItem = item;
		vm.itemUpdateBool = true;
	}
	vm.delete = function (item) {
		vm.currentItem = item;
		var index = vm.items.indexOf(vm.currentItem);
		vm.items.splice(index, 1);
		itemGlobal.removeItems();
		itemGlobal.setItems(vm.items);
		vm.itemsLocal = itemGlobal.getItems();
		vm.currentItem = {};
	}
	vm.orderedMe = function (x) {
		vm.orderedBy = x;
	}
	
	    vm.previous = function (event) {
        event.preventDefault();
        if (vm.page > 1) {
            vm.page--;
        }
    }
    vm.next = function (event) {
        event.preventDefault();
        if (vm.page < vm.pageCount) {
            vm.page++;
        }
    }
	    $scope.$watch('item.search', function (newValue, oldValue) {
//        console.log('old value', oldValue);
//        console.log('new value', newValue);
        if (newValue !== oldValue) {
            vm.updatePage();
        }
    })
    vm.updatePage = function () {
//        var array = $filter('searchItem')(vm.items, vm.search);
        var array = $filter('minMaxPrice')(array, vm.min, vm.max);
        vm.pageCount = Math.ceil(array.length/vm.size);
    }
})

//
//function MyController($scope) {
//
//    $scope.myVar = 1;
//
//    $scope.$watch('myVar', function() {
//        alert('hey, myVar has changed!');
//    });
//
//    $scope.buttonClicked = function() {
//        $scope.myVar = 2; // This will trigger $watch expression to kick in
//    };
//}
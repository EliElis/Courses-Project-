app.controller('categoryCtrl', function ($scope, $filter, categoryGlobal) {
	var vm = this;
	vm.categories = [];
	vm.categories = categoryGlobal.getCategories();
	vm.categoriesLocal = categoryGlobal.getCategories();
	vm.currentCategory = {};
	vm.limitValue = 15;
	vm.limitRange = [3, 5, 10, 15];
	vm.categoryUpdateBool = false;
	vm.save = function () {
		if (vm.categoryUpdateBool == false) {
			var id = categoryGlobal.getCategoryId();
			vm.currentCategory.id = ++id;
			categoryGlobal.setCategoryId(vm.currentCategory.id);
			vm.categories.push(vm.currentCategory);
		}
		categoryGlobal.removeCategories();
		categoryGlobal.setCategories(vm.categories);
		vm.categoriesLocal = categoryGlobal.getCategories();
		vm.currentCategory = {};
		vm.categoryUpdateBool = false;
	}
	vm.update = function (categoryObj) {
		vm.currentCategory = categoryObj;
		vm.categoryUpdateBool = true;
	}
	vm.delete = function (categoryObj) {
		vm.currentCategory = categoryObj;
		var index = vm.categories.indexOf(vm.currentCategory);
		vm.categories.splice(index, 1);
		categoryGlobal.removeCategories();
		categoryGlobal.setCategories(vm.categories);
		vm.categoriesLocal = categoryGlobal.getCategories();
		vm.currentCategory = {};
	}
	
		vm.orderedMe = function (x) {
		vm.orderedBy = x;
	}
	$scope.$watch("category.search", function (newValue, oldValue) {
			if (newValue !== oldValue) {
				vm.updatePage();
			}
		})
		    vm.updatePage=function(){
		        var array=$filter('searchItem')(vm.items, vm.search)
//		        array=$filter('minMaxPrice')(array,vm.min,vm.max);
		        //vm.pageCount=array.length;
		    }
})
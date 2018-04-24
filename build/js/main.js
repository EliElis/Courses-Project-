var app = angular.module("shopApp", ["ngRoute", "ngStorage"]);
app.config(function ($routeProvider, $locationProvider) {
	$routeProvider.when('/', {
		templateUrl: '/home.html'
		, controller: 'homeCtrl'
		, controllerAs: 'home'
	});
	$routeProvider.when('/about', {
		templateUrl: '/about.html'
		, controller: 'aboutCtrl'
		, controllerAs: 'about'
	});
	$routeProvider.when('/catalog', {
		templateUrl: '/catalog.html'
		, controller: 'catalogCtrl'
		, controllerAs: 'catalog'
	});
	$routeProvider.when('/contacts', {
		templateUrl: '/contact.html'
		, controller: 'contactCtrl'
		, controllerAs: 'contact'
	});
	$routeProvider.when('/cart', {
		templateUrl: '/cart.html'
		, controller: 'cartCtrl'
		, controllerAs: 'cart'
	});
	$routeProvider.when('/wish', {
		templateUrl: '/wish.html'
		, controller: 'wishCtrl'
		, controllerAs: 'wish'
	});
	$routeProvider.when('/admin/login', {
		templateUrl: '/admin.html'
		, controller: 'adminCtrl'
		, controllerAs: 'admin'
	});
	$routeProvider.when('/admin/items', {
		templateUrl: '/items.html'
		, controller: 'itemCtrl'
		, controllerAs: 'item'
	});
	$routeProvider.when('/admin/category', {
		templateUrl: '/category.html'
		, controller: 'categoryCtrl'
		, controllerAs: 'category'
	});
	$routeProvider.otherwise({
		redirectTo: '/'
	});
});
app.controller('indexCtrl', function ($scope, $filter, categoryGlobal, itemGlobal, selectedCategory, mainSearch) {
	var vm = this;
	vm.search = "";
	vm.categoriesLocal = categoryGlobal.getCategories();
	vm.index_select = function (cat) {
		selectedCategory.select(cat);
		//		console.log(selectedCategory.getSelected());
	}
	selectedCategory.select(-1);
	vm.select_catalog = function () {
		selectedCategory.select(-1);
	};
	vm.search_click = function (model) {
		//console.log(model);
		mainSearch.searchQuery(model);
		console.log(mainSearch.getSearchQuery());
	};
	vm.showVar = false;
	vm.show = function () {
		vm.showVar = true;
	};
	vm.hide = function () {
		vm.showVar = false;
		vm.activeTopnav = 'Home';
		var inp = document.getElementsByClassName('form-inp');
		for (var i = 0; i < inp.length; i++) {
			inp[i].value = "";
		}
	};
	vm.topnavDisplay = function () {
		var x = document.getElementById("Topnav");
		if (x.className === "topnav") {
			x.className += " responsive";
		}
		else {
			x.className = "topnav";
		}
	}
	vm.activeTopnav = 'Home';

});
				  
				  
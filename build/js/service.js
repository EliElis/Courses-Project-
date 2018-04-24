//Category Factory
app.factory('categoryGlobal', function () {
		var _categories = [];
		var _categoryId;
		var checkStorageCategories = JSON.parse(localStorage.getItem('categories'));
		if (checkStorageCategories == null) {
			_categories = [];
			_categoryId = 0;
//		    _categories = JSON.parse(cat);
//			_categoryId = _categories[_categories.length - 1].id+1;
		}
		else {
			_categories = JSON.parse(localStorage.getItem('categories'));
			if (_categories.length > 0) {
				_categoryId = _categories[_categories.length - 1].id+1;
			}
		}
		return {
			getCategories: function () {
				return _categories;
			}
			, getCategoryId: function () {
				return _categoryId;
			}
			, setCategoryId: function (categoryId) {
				if (categoryId < _categoryId) throw new Error("categoryId can't be lesser that _categoryId")
				_categoryId = categoryId;
			}
			, setCategories: function (categoryArr) {
				localStorage.setItem('categories', JSON.stringify(categoryArr));
			}
			, removeCategories: function () {
				localStorage.removeItem('categories');
			}
		}
	})

//Item service
app.factory('itemGlobal', function () {
	var _items = [];
	var _itemId;
	var checkStorageItems = JSON.parse(localStorage.getItem('items'));
	if (checkStorageItems == null) {
		_items = [];
		_itemId = 0;
//		   _items = JSON.parse(it);
//			_itemId = _items[_items.length - 1].id+1;
	}
	else {
		_items = JSON.parse(localStorage.getItem('items'));
		if (_items.length > 0) _itemId= _items[_items.length - 1].id+1;
	}
	return {
		getItems: function () {
			return _items;
		}
		, getItemId: function () {
			return _itemId;
		}
		, setItemId: function (itemId) {
			if (itemId < _itemId) throw new Error("itemId can't be lesser that _itemId")
			_itemId = itemId;
		}
		, setItems: function (itemsArr) {
			localStorage.setItem('items', JSON.stringify(itemsArr));
		}
		, removeItems: function () {
			localStorage.removeItem('items');
		}
	}
})

//Cart Factory

app.factory('cartGlobal', function () {
	var _cartItems = [];
	var _cartItemId;
	var checkStorageCartItems = JSON.parse(localStorage.getItem('cart'));
	if (checkStorageCartItems == null) {
		_cartItems = [];
		_cartItemId = 0;
	}
	else {
		_cartItems = JSON.parse(localStorage.getItem('cart'));
		if (_cartItems.length > 0) _cartItemId= _cartItems[_cartItems.length - 1].id+1;
	}
	return {
		getItems: function () {
			return _cartItems;
		}
		, getItemId: function () {
			return _cartItemId;
		}
		, setItemId: function (cartItemId) {
			if (cartItemId < _cartItemId) throw new Error("itemId can't be lesser that _itemId")
			_cartItemId = cartItemId;
		}
		, setItems: function (itemsArr) {
			localStorage.setItem('cart', JSON.stringify(itemsArr));
		}
		, removeItems: function () {
			localStorage.removeItem('cart');
		}
	}
})

//Wish factory
app.factory('wishGlobal', function () {
	var _wishItems = [];
	var _wishItemId;
	var checkStorageWishItems = JSON.parse(localStorage.getItem('wish'));
	if (checkStorageWishItems == null) {
		_wishItems = [];
		_wishItemId = 0;
	}
	else {
		_wishItems = JSON.parse(localStorage.getItem('wish'));
		if (_wishItems.length > 0) _wishItemId= _wishItems[_wishItems.length - 1].id+1;
	}
	return {
		getItems: function () {
			return _wishItems;
		}
		, getItemId: function () {
			return _wishItemId;
		}
		, setItemId: function (wishItemId) {
			if (wishItemId < _wishItemId) throw new Error("itemId can't be lesser that _itemId")
			_wishItemId = wishItemId;
		}
		, setItems: function (itemsArr) {
			localStorage.setItem('wish', JSON.stringify(itemsArr));
		}
		, removeItems: function () {
			localStorage.removeItem('wish');
		}
	}
})

//Select Category Menu 

app.factory('selectedCategory', function () {	
	var _cat;
	return{
		select: function(cat){
			_cat=cat;
		},
		getSelected: function(){
			return _cat;
		}//,
//		cleanSelected: function(){
//			_cat=0;
//		}
	}
	
})

app.factory('mainSearch', function () {	
	var _search;
	return{
		searchQuery: function(search){
			_search=search;
		},
		getSearchQuery: function(){
			return _search;
		},
		cleanSearchQuery: function(){
			_search="";
		}
	}
})

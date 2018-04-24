app.controller("adminCtrl", function ($scope, $filter) {
	var vm = this;
	vm.adminArr = JSON.parse(admin);
	vm.currentAdm = {};
	console.log(vm.adminArr[0].login);
	vm.login = function () {
		var i;
		vm.logBool = false;
		for (i = 0; i < vm.adminArr.length; i++) {
			if (vm.currentAdm.login == vm.adminArr[i].login && vm.currentAdm.password == vm.adminArr[i].password) {
				vm.logBool = true;
				break;
			}
		}
		if (vm.logBool == true) {
			location.replace("#!/admin/items");
		}
		else {
			alert('Wrong password');
		}
	}
})
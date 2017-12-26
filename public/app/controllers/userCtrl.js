angular.module('userCtrl', ['userService'])

.controller('userController', function(User) {

	var vm = this;
	vm.processing = true;
	User.all()


	 .then(function(data) {
		 	vm.processing = false;
		 	vm.users = data;
		 });

// $scope.message="hello";

});
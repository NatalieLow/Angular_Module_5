(function() {
'use strict';

angular.module('public')
.controller('UserController', UserController);

UserController.$inject['UserInfoService'];
function UserController(UserInfoService) {
	var user = this;
	
	user.submit = function () {
		user.completed = true;
	};
}

})();
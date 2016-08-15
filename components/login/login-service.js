(function(){
  angular
    .module('nightmare.login.login-service', [])
    .service('loginService', loginService);
    loginService.$inject = ['$http', '$location'];
    function loginService($http, $location){
      var user = {};
      return {
        getToken: getToken,
        getUserId: getUserId,
        loginUser: loginUser
      };
    function _setUserData(data){
      user = data;
    }
    function getToken(){
      return user.token;
    }
    function getUserId(){
      return user.userId
    }
    function loginUser(userName, password) {
      $http({
        method: 'post',
        params: {
          userName: userName,
          password: password
        },
        url: 'http://localhost:8080/auth/login'
      }).then(function successCallback(response){
        console.log(response);
        _setUserData(response.data);
        $location.path('/list');
      }, function errorCallback(err){
        console.log(err);
      });
    }
  }
})();

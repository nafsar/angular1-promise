(function (angular) {
  'use strict';
  angular
    .module("myApp", [])
    .service("listService", listService)
    .controller("ListController", ListController)
    .directive("listDisplay", listDisplay);

  function ListController($http, listService) {
    var lstblk = this;
    listService.then(function (data) {    
      lstblk.listItems = data;
    });
  };

  function listService($http) {
    return $http.get("./lib/data.json").then(function (response) {
      return response.data;
    }, function (rejected) {
      console.log("No data found!");
      window.alert("No data found!\n\n" + JSON.stringify(rejected.data));
    });
  };
 
  function listDisplay() {
    var directive = {
      restrict: "EA",
      templateUrl: "./display.html"
    }
    return directive;
  };
})(window.angular);





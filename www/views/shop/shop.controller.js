(function () {
  'use strict';
  angular.module('starter.controllers').controller('ShopCtrl',['$scope','localStorageService','$state',function ($scope,localStorageService,$state) {
    $scope.shop={};

    $scope.editShop=function (titleValue,propertyValue) {
      $state.go('app.shop-edit',{
        title:titleValue,
        property:propertyValue
      });
    };

    $scope.$on('$stateChangeSuccess',function () {
      $scope.shop=localStorageService.get('Shop',{
        name:'徐怡祥',
        ab:'',
        name1:'徐怡祥',
        phone:'13559253344',
        phone1:'13559253344',
        createTime:'2017-9-29 15:30:00',
        email:'875864750@qq.com',
        hylx:'132'
      });
    });
  }])
})();

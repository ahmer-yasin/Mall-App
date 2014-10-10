// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var starter = angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('index', {
            url: '/',
            templateUrl: 'partials/home.html'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'partials/login-form.html'
        })
        .state('signUp',{
            url:'/signup',
            templateUrl: 'partials/signUp-form.html'
        })
        .state('main',{
            templateUrl:'partials/main.html'
        })
        .state('main.promotions',{
            url:'/promotions',
            templateUrl:'partials/promotions.html',
            controller:'promotions'

        })
        .state('brandInfo',{
            url:'/brandInfo',
            templateUrl:'partials/brandInfo.html'

        })
        .state('main.favourite',{
            url:'/favourite',
            templateUrl:'partials/favourite.html',
            controller:'promotions'
        })
        .state('main.search',{
            url:'/search',
            templateUrl:'partials/search.html',
            controller:'promotions'
        })
        .state('discount',{
            url:'/discount',
            templateUrl:'partials/disscount.html'
        })
        .state('main.new',{
            url:'/new',
            templateUrl:'partials/new.html',
            controller:'promotions'
        })

        $urlRouterProvider.otherwise('/');

});
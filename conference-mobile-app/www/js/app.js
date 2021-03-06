// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html"
    })
    .state('app.facttic', {
      url: "/facttic",
      views: {
        'menuContent' :{
          templateUrl: "templates/facttic.html"
        }
      }
    })
    .state('app.about', {
      url: "/about",
      views: {
        'menuContent' :{
          templateUrl: "templates/about.html",
          controller: 'AboutCtrl'
        }
      }
    })
    .state('app.sessions', {
      url: "/sessions",
      views: {
        'menuContent' :{
          templateUrl: "templates/sessions.html",
          controller: 'SessionsCtrl'
        }
      }
    })
    .state('app.speakers', {
      url: "/speakers",
      views: {
        'menuContent' :{
          templateUrl: "templates/speakers.html",
          controller: 'SpeakersCtrl'
        }
      }
    })
    .state('app.speaker', {
      url: "/speaker/:SpeakerId",
      views: {
        'menuContent' :{
          templateUrl: "templates/speaker.html",
          controller: 'SpeakerCtrl'
        }
      }
    })
    .state('app.location', {
      url: "/location",
      views: {
        'menuContent' :{
          templateUrl: "templates/location.html",
          controller: 'LocationCtrl'
        }
      }
    })
    .state('app.talk', {
      url: "/session/:SessionId",
      views: {
        'menuContent' :{
          templateUrl: "templates/talk.html",
          controller: 'TalkCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/sessions');
});


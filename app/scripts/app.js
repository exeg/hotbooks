var hotbookApp = angular.module('hotbookApp', ['ui.router']);

hotbookApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
        $stateProvider
        
            // route for the home page
            .state('home', {
                    url:'/',
                    views: {
                    '': { templateUrl: 'views/partial-home.html' },
                    'header@home': {
                        templateUrl : 'views/header.html',
                        controller  : 'HeaderController'
                    },
                    'jumbotron@home': {
                        templateUrl : 'views/jumbotron.html',
                        controller  : 'scotchController'
                    },
                    'sidebar@home': { 
                        templateUrl : 'views/sidebar.html',
                        controller  : 'scotchController'
                    },
                     'content@home': { 
                        templateUrl: 'views/home.html',
                        controller: 'scotchController'
                    },
                    'footer': {
                        templateUrl : 'views/footer.html',
                    }
                    

               
            }
        })
                /*views: {
                     '': { templateUrl: 'index.html' },
                     'sidebar@app': { 
                        templateUrl : 'views/jumbotron.html',
                        controller  : 'scotchController'
                    },
                     'content@app': { 
                        templateUrl: 'views/home.html',
                        controller: 'scotchController'
                    },
                    'header': {
                        templateUrl : 'views/header.html',
                        controller  : 'scotchController'
                    },
                    'jumbotron': {
                        templateUrl : 'views/jumbotron.html',
                        controller  : 'scotchController'
                    },
                    'footer': {
                        templateUrl : 'views/footer.html',
                    }
                }
            })*/
        

            

            });





    hotbookApp.controller('scotchController', function($scope) {
    
    $scope.message = 'test';
   
    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];
    
});

    hotbookApp.controller('HeaderController', ['$scope', '$state', '$rootScope', function ($scope, $state, $rootScope) {

    /*$scope.loggedIn = false;
    $scope.username = '';
    
    if(AuthService.isAuthenticated()) {
        $scope.loggedIn = true;
        $scope.username = AuthService.getUsername();
    }
        
    $scope.openLogin = function () {
        ngDialog.open({ template: 'views/login.html', scope: $scope, className: 'ngdialog-theme-default', controller:"LoginController" });
    };
    
    $scope.logOut = function() {
       AuthService.logout();
        $scope.loggedIn = false;
        $scope.username = '';
    };
    
    $rootScope.$on('login:Successful', function () {
        $scope.loggedIn = AuthService.isAuthenticated();
        $scope.username = AuthService.getUsername();
    });
        
    $rootScope.$on('registration:Successful', function () {
        $scope.loggedIn = AuthService.isAuthenticated();
        $scope.username = AuthService.getUsername();
    });
    */
    $scope.stateis = function(curstate) {
       return $state.is(curstate);  
    };
    
}])
        
      /*     // route for the aboutus page
            .state('app.aboutus', {
                url:'aboutus',
                views: {
                    'content@': {
                        templateUrl : 'views/aboutus.html',
                        controller  : 'AboutController'                  
                    }
                }
            })
        
            // route for the contactus page
            .state('app.contactus', {
                url:'contactus',
                views: {
                    'content@': {
                        templateUrl : 'views/contactus.html',
                        controller  : 'ContactController'                  
                    }
                }
            })

            // route for the menu page
            .state('app.menu', {
                url: 'menu',
                views: {
                    'content@': {
                        templateUrl : 'views/menu.html',
                        controller  : 'MenuController'
                    }
                }
            })

            // route for the dishdetail page
            .state('app.dishdetails', {
                url: 'menu/:id',
                views: {
                    'content@': {
                        templateUrl : 'views/dishdetail.html',
                        controller  : 'DishDetailController'
                   }
                }
            })
        
            // route for the dishdetail page
            .state('app.favorites', {
                url: 'favorites',
                views: {
                    'content@': {
                        templateUrl : 'views/favorites.html',
                        controller  : 'FavoriteController'
                   }
                }
            });
*/
'use strict';

angular.module('hotbookApp', ['ui.router','ngResource','lbServices','ngDialog'])
.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
        $stateProvider
        
            // route for the home page'app'
            .state('app', {
                    url:'/',
                    views: {
                    'header': {
                        templateUrl : 'views/header.html',
                        controller  : 'HeaderController'
                    },
                    'jumbotron': {
                        templateUrl : 'views/jumbotron.html',
                        controller  : 'RegisterController'
                        
                    },
                    'sidebar': { 
                        templateUrl : 'views/sidebar.html',
                        controller  : 'SidebarController'
                       
                    },
                     'content': { 
                        templateUrl : 'views/home.html',
                        controller  : 'HomeController'
                    },
                    'footer': {
                        templateUrl : 'views/footer.html',
                    }
        
            }
        })

 // route for the about page'app.about'

            .state('app.about', {
                    url:'about',
                    views: {
                    'jumbotron@': {
                        templateUrl : 'views/jumbotron-about.html'
                        
                    },
                    'sidebar@': {
                    },
                     'content@': { 
                        templateUrl: 'views/about.html'
                        
                    }
               
            }
        })
             .state('app.bookdetails', {
                    url:'books/:id',
                    views: {
                    'jumbotron@': {
                        templateUrl : 'views/jumbotron-about.html'
                       
                    },
                     'content@': { 
                        templateUrl: 'views/bookdetail.html',
                        controller  : 'BooksDetailController'
                        
                    }
          
            }
        })
             .state('app.bookmenu', {
                    url:'booksmenu/',
                    views: {
                    'jumbotron@': {
                        templateUrl : 'views/jumbotron-books.html'
                  
                    },
                     'content@': { 
                        templateUrl: 'views/bookmenu.html',
                        controller  : 'BooksMenuController'
                        
                    }
          
            }
        })

             .state('app.categorymenu', {
                    url:'books/:id/',
                    views: {
                    'jumbotron@': {
                        templateUrl : 'views/jumbotron-books.html'
                    
                    },
                     'content@': { 
                        templateUrl: 'views/categorymenu.html',
                        controller  : 'CategoryController'
                        
                    }
      
               
            }
        })
              .state('app.contact', {
                    url:'contact',
                    views: {
                    'jumbotron@': {
                    },
                     'content@': { 
                        templateUrl: 'views/contact.html',
                        controller  : 'ContactController'
                        
                    }
               
            }
        })


            });



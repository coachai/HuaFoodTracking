foodTrackingApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'tmpl/home.html',
            controller: 'foodTrackingController'
        }).when('/food/:foodName', {
            templateUrl: 'tmpl/fruitDetail.html',
            controller: 'FoodDetailCtrl'
         }).when('/newMeat', {
            templateUrl: 'tmpl/meatList.html',
            controller: 'meatController'
         }).when('/:meatName', {
             templateUrl: 'tmpl/meatDetail.html',
            controller: 'MeatDetailCtrl' 
		 }).when('/veg/vegetableList', {
             templateUrl: 'tmpl/vegetableList.html',
            controller: 'VegetableTrackingController'
		}).when('/vegetableDetail/:vegName', {
             templateUrl: 'tmpl/vegetableDetail.html',
            controller: 'vegetableDetailCtrl' 
         /*  }).when('/bookings', {
             templateUrl: 'tmpl/bookings.html',
            controller: 'ContactController'  */
			/* }).when('/vegetableList', {
             templateUrl: 'tmpl/country-list.html',
            controller: 'VegetableTrackingController' */ 
			/* }).when('/vegDetail', {
             templateUrl: 'tmpl/bookTickets.html',
            controller: 'VegetableDetailController'  */
			}).otherwise({ redirectTo: ''
        });
});

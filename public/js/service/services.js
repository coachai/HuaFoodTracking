


foodTrackingApp.factory('movieStubFactory', function ($resource) {
    return $resource('/foods');
});
foodTrackingApp.factory('movieStubBookingsFactory', function ($resource) {
    return $resource('/bookings');
});
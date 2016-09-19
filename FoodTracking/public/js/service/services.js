foodTrackingApp.factory('movieStubFactory', function ($resource) {
    return $resource('/movies');
});
foodTrackingApp.factory('movieStubBookingsFactory', function ($resource) {
    return $resource('/bookings');
});
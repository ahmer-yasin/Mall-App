/**
 * Created by AHMER on 9/20/2014.
 */
starter.controller('promotions',function($scope,$ionicPopover){
    $ionicPopover.fromTemplateUrl('partials/categoryList.html', {
        scope: $scope
    }).then(function(popover) {
        $scope.popover = popover;
    });

    $scope.image =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p']
    $scope.discount = ['15%','25%','35%','45%','55%','65%','75%'];
    $scope.category = ['Category 1','Category 2','Category 3','Category 4','Category 5','Category 6','Category 7','Category 8','Category 9'];
})
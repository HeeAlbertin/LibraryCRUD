(function () {
    'use strict';

    angular
        .module('app')
        .directive('confirmActionClick', confirmActionClick)

    function confirmActionClick() {
        linkAction.$inject = ['$scope', '$element', 'attrs'];

        function linkAction($scope, $element, attrs) {
            $element.bind('click', function () {
                var message = attrs.confirmActionMessage;
                if (message && confirm(message)) {
                    $scope.$apply(attrs.confirmActionClick);
                }
            });
        }

        return {
            restrict: 'A',
            link: linkAction
        };
    }
})();
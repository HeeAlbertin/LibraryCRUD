(function () {
    'use strict';

    angular
        .module('app')
        .directive('inputRequired', inputRequired);

    inputRequired.$inject = [];

    function inputRequired() {
        var directive = {
            replace: true,
            templateUrl: '/Scripts/Angular/app/directives/input-required/input-required.directive.html',
            restrict: 'E',
            scope: {
                id: '@',
                nome: '@',
                tipo: '@',
                descricao: '@',
                placeholder: '@',
                form: '=',
                modelo: '=',
                pattern: '@',
                minLength: '@',
                maxLength: '@',
                decimalStep: '@'
            }
        };

        return directive;
    }

})();

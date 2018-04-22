(function () {
    'use strict';

    angular
        .module('app.livro')
        .config(livroConfig);

    livroConfig.$inject = ['$routeProvider', '$locationProvider'];

    function livroConfig($routeProvider, $locationProvider) {
        console.log('config');
        $routeProvider
            .when('/Livro', {
                templateUrl: 'Livro/Index',  
                controller: 'LivroCtrl',
                controllerAs: 'vm'
            });
    }
})();
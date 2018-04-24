(function () {
    'use strict';

    angular
        .module('app.livro')
        .config(livroConfig);

    livroConfig.$inject = ['$routeProvider'];

    function livroConfig($routeProvider) {
        $routeProvider
            .when('/Livro/:id', {
                templateUrl: 'Livro/Index',  
                controller: 'LivroCtrl',
                controllerAs: 'vm'
            });
    }
})();
(function () {
    'use strict';

    angular
        .module('app.livro')
        .controller('LivroFormCtrl', livroFormCtrl);

    livroFormCtrl.$inject = ['$scope', 'apiCall', '$window', '$location', '$filter'];

    function livroFormCtrl($scope, apiCall, $window, $location, $filter) {
        var vm = this;

        vm.bookForm = {};
        vm.saveBook = saveBook;
        vm.bookOnEdit = 0;
        vm.idiomas = [
            {
                id: "0",
                nome: "Português"
            },
            {
                id: "1",
                nome: "Espanhol"
            },
            {
                id: "2",
                nome: "Inglês"
            }
        ];

        definirEdicao();

        function definirEdicao() {
            var url = $location.absUrl();
            var id = 0;

            if ($location.absUrl().split('/').length >= 6) {
                var id = url.substring(url.indexOf("Livro/NovoLivro/") + "Livro/NovoLivro/".length);
            }
            
            if (id > 0) {
                vm.bookOnEdit = id;
                getOneBook();
            }

            function getOneBook() {
                apiCall.getOneBook(vm.bookOnEdit).then(
                    function (response) {
                        vm.bookForm = response;
                    }
                );
            }
        }

        function saveBook(form) {
            if (form.$valid) {
                if (vm.bookOnEdit > 0) {
                    apiCall.updateBook(vm.bookForm, vm.bookOnEdit).then(
                        function (response) {
                            alert('Atualizado com sucesso!');
                            $window.location.href = '/Livro';
                        }
                    );
                } else {
                    apiCall.saveBook(vm.bookForm).then(
                        function (response) {
                            alert('Salvo com sucesso!');
                            $window.location.href = '/Livro';
                        }
                    );
                }
            }
        }
    }
})();
(function () {
    'use strict';

    angular
        .module('app.livro')
        .controller('LivroCtrl', livroCtrl);

    livroCtrl.$inject = ['$scope', 'apiCall', '$window'];

    function livroCtrl($scope, apiCall, $window) {
        var vm = this;

        vm.books = {};
        vm.bookForm = {};
        vm.deleteBook = deleteBook;
        vm.newBook = newBook;
        vm.saveBook = saveBook;

        loadBooks();

        function loadBooks() {
            apiCall.getBooks().then(
                function (response) {
                    vm.books = response;
                }
            );
        }

        function deleteBook(id) {
            apiCall.deleteBook(id).then(
                function (response) {
                    alert('Deletado com Sucesso!');
                    loadBooks();
                }
            );
        }

        function newBook() {
            $window.location.href = '/Livro/NovoLivro'
        }

        function saveBook(form) {
            if (form.$valid) {
                console.log(vm.bookForm);
                apiCall.saveBook(vm.bookForm);
            }
        }
    }
})();
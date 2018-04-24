(function () {
    'use strict';

    angular
        .module('app.livro')
        .controller('LivroCtrl', livroCtrl);

    livroCtrl.$inject = ['$scope', 'apiCall', '$window'];

    function livroCtrl($scope, apiCall, $window) {
        var vm = this;

        vm.books = {};
        vm.deleteBook = deleteBook;
        vm.newBook = newBook;
        vm.editBook = editBook;

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

        function editBook(id) {
            $window.location.href = '/Livro/NovoLivro/' + id;
        }

        function newBook() {
            $window.location.href = '/Livro/NovoLivro';
        }
    }
})();
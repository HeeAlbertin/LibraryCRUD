(function () {
    'use strict';

    angular
        .module('app.livro')
        .controller('LivroCtrl', livroCtrl);

    livroCtrl.$inject = ['$scope', 'apiCall'];

    function livroCtrl($scope, apiCall) {
        var vm = this;

        vm.books = {};
        vm.deleteBook = deleteBook;

        loadBooks();

        function loadBooks() {
            apiCall.getBooks().then(
                function (response) {
                    vm.books = response;
                    console.log(vm.books);
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
    }
})();
(function () {
    'use strict';

    angular
        .module('app')
        .factory('apiCall', api);

    api.$inject = ['$q', '$http', 'constants'];

    function api($q, $http, constants) {
        var service = {
            'getBooks': getBooks,
            'getOneBook': getOneBook,
            'deleteBook': deleteBook,
            'saveBook': saveBook,
            'updateBook': updateBook
        };
        return service;

        /**
         * getBooks
         *
         * Function that return all books
         *
         * @access public
         * @author Hebert Albertin
         * @since  04/2018
         * @return array data (data)
         */
        function getBooks() {
            //Call API
            return callApi('data');
        }

        /**
         * getOneBook
         *
         * Function that return one book by an id
         *
         * @access public
         * @author Hebert Albertin
         * @since  04/2018
         * @return array data (data)
         */
        function getOneBook(id) {
            //Call API
            return callApi('data/' + id);
        }

        /**
         * deleteBook
         *
         * Function that delete a book
         *
         * @access public
         * @author Hebert Albertin
         * @since  04/2018
         * @return void
         */
        function deleteBook(id) {
            //Call API
            return callApi('data/' + id, 'DELETE');
        }

        /**
         * saveBook
         *
         * Function that saves a book
         *
         * @access public
         * @author Hebert Albertin
         * @since  04/2018
         * @return void
         */
        function saveBook(data) {
            //Call API
            return callApi('data', 'POST', data);
        }

        /**
         * updateBook
         *
         * Function that updates a book by id
         *
         * @access public
         * @author Hebert Albertin
         * @since  04/2018
         * @return void
         */
        function updateBook(data, id) {
            //Call API
            return callApi('data/' + id, 'PUT', data);
        }

        /**
         * callAPi
         *
         * Function for communication with the api
         *
         * @access private
         * @author Hebert Albertin
         * @since  04/2018
         * @param  string
         * @param  string
         * @param  array
         * @return object
         */
        var callApi = callApi;

        function callApi(action, method, data) {
            //Defer promess
            var q = $q.defer();

            //Start data (if need)
            if (!data)
                data = {};

            //Set method
            if (!method)
                method = 'GET';

            var headers = {};
            headers['Content-Type'] = 'application/json';

            //Send data to api
            $http({
                url: constants.url + action,
                headers: headers,
                method: method,
                data: angular.toJson(data)
            })
                .then(function (retorno) {
                    q.resolve(retorno.data);
                }, function (error) {
                    console.error(error);
                    if (error.status == 401) {
                    }

                    q.reject(error);
                });
            //return promise
            return q.promise;

        };
    }
})();
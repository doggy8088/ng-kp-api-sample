(function(){

    angular.module('kpApp')

    // 用來讀取 API 資料的 Service
    .service('kptService', ['$http','API',
        function kptService($http,API){

            this.getCategory = function(id) {
                console.log(API.SERVER+"category/"+id+"?accessToken="+API.KEY);
                return $http({
                    method:"GET",
                    url: API.SERVER+"category/"+id+"?accessToken="+API.KEY,
                    cache: true
                });
            };

            this.getAlbums = function(id){
                console.log(API.SERVER+"albums/"+id+"?accessToken="+API.KEY);
                return $http({
                    method:"GET",
                    url: API.SERVER+"albums/"+id+"?accessToken="+API.KEY,
                    cache: true
                })
            };

            this.getVideos = function(id){
                console.log(API.SERVER+"videos/"+id+"?accessToken="+API.KEY);
                return $http({
                    method:"GET",
                    url: API.SERVER+"videos/"+id+"?accessToken="+API.KEY,
                    cache: true
                })
            }
        }
    ]);

})();
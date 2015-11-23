/// <reference path="0_typings/angularjs/angular.d.ts" />
var angularToFilter;
(function (angularToFilter) {
    var To = (function () {
        function To() {
            this.Filter = function (items, dotItem, dotItemProperty) {
                try {
                    dotItem[dotItemProperty] = items;
                }
                catch (error) {
                    console.log(error);
                    throw error;
                }
                return items;
            };
        }
        To.Alias = "To";
        return To;
    })();
    angularToFilter.To = To;
    angular.module('ngEvadeIsolatedStorageFilter', []).filter(To.Alias, function () { return new To().Filter; });
})(angularToFilter || (angularToFilter = {}));
//# sourceMappingURL=angular_to_filter.js.map
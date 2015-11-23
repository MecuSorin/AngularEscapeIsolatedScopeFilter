/// <reference path="0_typings/angularjs/angular.d.ts" />

module angularToFilter {
    export class To<T> {
        public static Alias: string = "To";

        public Filter = (items: T[], dotItem: any, dotItemProperty: string): T[] => {
            try {
                dotItem[dotItemProperty] = items;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
            return items;
        }
    }
   
    angular.module('ngEvadeIsolatedStorageFilter',[]).filter(To.Alias, () => new To().Filter);
}


/// <reference path="../0_typings/angularjs/angular.d.ts" />
declare module angularToFilter {
    class To<T> {
        static Alias: string;
        Filter: (items: T[], dotItem: any, dotItemProperty: string) => T[];
    }
}

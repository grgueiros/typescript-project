System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DateHelper;
    return {
        setters: [],
        execute: function () {
            DateHelper = class DateHelper {
                static stringToDate(string) {
                    if (/\d{4}-\d{2}-\d{2}/.test(string))
                        return new Date(string.replace(/-/g, "/"));
                    throw new Error('O formato de string passado deve ser aaaa-MM-dd');
                }
                static dateToString(date) {
                    return `${date.getUTCDate()}/${date.getUTCMonth() + 1}/${date.getUTCFullYear()}`;
                }
            };
            exports_1("DateHelper", DateHelper);
        }
    };
});

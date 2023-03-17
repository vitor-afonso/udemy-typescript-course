"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myExportFunction = exports.b = exports.a = void 0;
exports.a = 7;
exports.b = 'Testing';
function myExportFunction() {
    console.log('Function from multiple exports');
}
exports.myExportFunction = myExportFunction;

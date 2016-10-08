"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var directives_1 = require('./directives');
var pipes_1 = require('./pipes');
var services_1 = require('./services');
__export(require('./directives'));
__export(require('./services'));
__export(require('./pipes'));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    directives: [directives_1.DIRECTIVES],
    pipes: [pipes_1.PIPES],
    providers: [services_1.PROVIDERS]
};
//# sourceMappingURL=index.js.map
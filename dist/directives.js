"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
// Import all directives
var sample_directive_1 = require('./directives/sample.directive');
var sample_component_1 = require('./directives/sample.component');
// Export all directives
__export(require('./directives/sample.directive'));
__export(require('./directives/sample.component'));
// Export convenience property
exports.DIRECTIVES = [
    sample_directive_1.SampleDirective,
    sample_component_1.SampleComponent
];
//# sourceMappingURL=directives.js.map
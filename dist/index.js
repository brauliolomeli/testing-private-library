"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var door_builder_module_1 = require('./door-builder.module');
var select_door_component_1 = require('./select-door/select-door.component');
__export(require('./door-builder.module'));
__export(require('./select-door/select-door.component'));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    DoorBuilderModule: door_builder_module_1.DoorBuilderModule,
    components: [
        select_door_component_1.SelectDoorComponent
    ]
};
//# sourceMappingURL=index.js.map
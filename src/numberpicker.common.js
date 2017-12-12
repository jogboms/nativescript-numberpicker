"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = require("tns-core-modules/ui/core/view");
var properties_1 = require("tns-core-modules/ui/core/properties");
var NumberPicker = (function (_super) {
    __extends(NumberPicker, _super);
    function NumberPicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NumberPicker.valueChangedEvent = "valueChanged";
    NumberPicker.minValueChangedEvent = "minValueChanged";
    NumberPicker.maxValueChangedEvent = "maxValueChanged";
    return NumberPicker;
}(view_1.View));
exports.NumberPicker = NumberPicker;
exports.minValueProperty = new properties_1.Property({
    name: "minValue",
    defaultValue: 0,
    affectsLayout: true
});
exports.minValueProperty.register(NumberPicker);
exports.maxValueProperty = new properties_1.Property({
    name: "maxValue",
    defaultValue: 0,
    affectsLayout: true
});
exports.maxValueProperty.register(NumberPicker);
exports.valueProperty = new properties_1.Property({
    name: "value",
    defaultValue: 0,
    affectsLayout: true
});
exports.valueProperty.register(NumberPicker);
//# sourceMappingURL=numberpicker.common.js.map
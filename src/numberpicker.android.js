"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var numberpicker_common_1 = require("./numberpicker.common");
var NumberPicker = (function (_super) {
    __extends(NumberPicker, _super);
    function NumberPicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(NumberPicker.prototype, "android", {
        get: function () {
            return this.nativeView;
        },
        enumerable: true,
        configurable: true
    });
    NumberPicker.prototype.createNativeView = function () {
        var that = new WeakRef(this);
        this._android = new android.widget.NumberPicker(this._context);
        this._android.setOnValueChangedListener(new android.widget.NumberPicker.OnValueChangeListener({
            get owner() {
                return that.get();
            },
            onValueChange: function (picker, oldVal, newVal) {
                var owner = that.get();
                if (owner) {
                    owner.value = newVal;
                }
            }
        }));
        this._android.setDescendantFocusability(android.widget.NumberPicker.FOCUS_BLOCK_DESCENDANTS);
        this._android.setWrapSelectorWheel(true);
        return this._android;
    };
    NumberPicker.prototype[numberpicker_common_1.valueProperty.setNative] = function (value) {
        this.nativeView.setValue(value);
    };
    NumberPicker.prototype[numberpicker_common_1.minValueProperty.setNative] = function (value) {
        this.nativeView.setMinValue(value);
    };
    NumberPicker.prototype[numberpicker_common_1.maxValueProperty.setNative] = function (value) {
        this.nativeView.setMaxValue(value);
    };
    NumberPicker.prototype.disposeNativeView = function () {
        this._android = void 0;
    };
    return NumberPicker;
}(numberpicker_common_1.NumberPicker));
exports.NumberPicker = NumberPicker;
//# sourceMappingURL=numberpicker.android.js.map
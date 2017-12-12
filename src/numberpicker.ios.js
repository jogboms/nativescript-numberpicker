"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var numberpicker_common_1 = require("./numberpicker.common");
var NumberPicker = (function (_super) {
    __extends(NumberPicker, _super);
    function NumberPicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(NumberPicker.prototype, "ios", {
        get: function () {
            return this.nativeView;
        },
        enumerable: true,
        configurable: true
    });
    NumberPicker.prototype.createNativeView = function () {
        this._ios = new UIStepper();
        this._changeHandler = NumberPickerChangeHandlerImpl.initWithOwner(new WeakRef(this));
        this._ios.addTargetActionForControlEvents(this._changeHandler, "valueChanged", 4096);
        return this._ios;
    };
    NumberPicker.prototype[numberpicker_common_1.valueProperty.setNative] = function (value) {
        this.nativeView.value = value;
    };
    NumberPicker.prototype[numberpicker_common_1.minValueProperty.setNative] = function (value) {
        this.nativeView.minimumValue = value;
    };
    NumberPicker.prototype[numberpicker_common_1.maxValueProperty.setNative] = function (value) {
        this.nativeView.maximumValue = value;
    };
    NumberPicker.prototype.disposeNativeView = function () {
        this._ios = void 0;
    };
    return NumberPicker;
}(numberpicker_common_1.NumberPicker));
exports.NumberPicker = NumberPicker;
var NumberPickerChangeHandlerImpl = (function (_super) {
    __extends(NumberPickerChangeHandlerImpl, _super);
    function NumberPickerChangeHandlerImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NumberPickerChangeHandlerImpl.initWithOwner = function (owner) {
        var impl = NumberPickerChangeHandlerImpl.new();
        impl._owner = owner;
        return impl;
    };
    NumberPickerChangeHandlerImpl.prototype.valueChanged = function (sender) {
        var owner = this._owner.get();
        if (!owner) {
            return;
        }
        if (owner) {
            owner.value = sender.value;
        }
    };
    NumberPickerChangeHandlerImpl.ObjCExposedMethods = {
        "valueChanged": { returns: interop.types.void, params: [UIStepper] }
    };
    return NumberPickerChangeHandlerImpl;
}(NSObject));
//# sourceMappingURL=numberpicker.ios.js.map
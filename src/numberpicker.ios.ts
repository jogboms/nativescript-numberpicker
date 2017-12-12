import { NumberPicker as Common, valueProperty, minValueProperty, maxValueProperty } from "./numberpicker.common";

declare const UIStepper: any;

export class NumberPicker extends Common {
    private _ios: UIStepper;
    public _changeHandler: NSObject;

    get ios(): UIStepper {
        return this.nativeView;
    }

    public createNativeView() {
        this._ios = new UIStepper();
        this._changeHandler = NumberPickerChangeHandlerImpl.initWithOwner(new WeakRef(this));
        this._ios.addTargetActionForControlEvents(this._changeHandler, "valueChanged", UIControlEvents.ValueChanged);
        return this._ios;
    }

    [valueProperty.setNative](value: number) {
        this.nativeView.value = value;
    }

    [minValueProperty.setNative](value: number) {
        this.nativeView.minimumValue = value;
    }

    [maxValueProperty.setNative](value: number) {
        this.nativeView.maximumValue = value;
    }

    public disposeNativeView() {
        this._ios = void 0;
    }
}

class NumberPickerChangeHandlerImpl extends NSObject {
    private _owner: WeakRef<NumberPicker>;

    public static initWithOwner(owner: WeakRef<NumberPicker>): NumberPickerChangeHandlerImpl {
        const impl = <NumberPickerChangeHandlerImpl>NumberPickerChangeHandlerImpl.new();
        impl._owner = owner;
        return impl;
    }

    public valueChanged(sender: UIStepper) {
        const owner = this._owner.get();
        if (!owner) {
            return;
        }

        if (owner) {
            owner.value = sender.value;
        }
    }

    public static ObjCExposedMethods = {
        "valueChanged": { returns: interop.types.void, params: [UIStepper] }
    };
}

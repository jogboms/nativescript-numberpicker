import { NumberPicker as Common, valueProperty, minValueProperty, maxValueProperty } from "./numberpicker.common";

export class NumberPicker extends Common {
    private _android: android.widget.NumberPicker;

    get android(): android.widget.NumberPicker {
        return this.nativeView;
    }

    public createNativeView() {
        const that = new WeakRef(this);

        this._android = new android.widget.NumberPicker(this._context);
        this._android.setOnValueChangedListener(new android.widget.NumberPicker.OnValueChangeListener(
            <android.widget.NumberPicker.IOnValueChangeListener>{
                get owner() {
                    return that.get();
                },
                onValueChange: (picker: android.widget.NumberPicker, oldVal: number, newVal: number) => {
                    const owner = that.get();
                    if (owner) {
                        owner.value = newVal;
                    }
                }
            }
        ));
        this._android.setDescendantFocusability(android.widget.NumberPicker.FOCUS_BLOCK_DESCENDANTS);
        this._android.setWrapSelectorWheel(true);
        return this._android;
    }

    [valueProperty.setNative](value: number) {
        this.nativeView.setValue(value);
    }

    [minValueProperty.setNative](value: number) {
        this.nativeView.setMinValue(value);
    }

    [maxValueProperty.setNative](value: number) {
        this.nativeView.setMaxValue(value);
    }

    public disposeNativeView() {
        this._android = void 0;
    }
}

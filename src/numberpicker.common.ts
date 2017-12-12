import { View } from "tns-core-modules/ui/core/view";
import { Property } from "tns-core-modules/ui/core/properties";

export class NumberPicker extends View {
    public value: number;
    public static valueChangedEvent = "valueChanged";
    public minValue: number;
    public static minValueChangedEvent = "minValueChanged";
    public maxValue: number;
    public static maxValueChangedEvent = "maxValueChanged";
}

export const minValueProperty = new Property<NumberPicker, number>({
    name: "minValue",
    defaultValue: 0,
    affectsLayout: true
});
minValueProperty.register(NumberPicker);

export const maxValueProperty = new Property<NumberPicker, number>({
    name: "maxValue",
    defaultValue: 0,
    affectsLayout: true
});
maxValueProperty.register(NumberPicker);

export const valueProperty = new Property<NumberPicker, number>({
    name: "value",
    defaultValue: 0,
    affectsLayout: true
});
valueProperty.register(NumberPicker);

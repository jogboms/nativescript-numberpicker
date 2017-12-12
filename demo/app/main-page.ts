import { NumberPicker } from "nativescript-numberpicker";
import { Page } from "tns-core-modules/ui/page";

export function loaded({ object: page }: { object: Page }) {
    let np = <NumberPicker>page.getViewById("np");
    console.log("value of numberpicker is ", np.value);
}

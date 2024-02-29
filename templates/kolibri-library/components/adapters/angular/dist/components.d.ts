import { ChangeDetectorRef, ElementRef, NgZone } from '@angular/core';
import { Components } from '@public-ui/library-components';
import * as i0 from "@angular/core";
export declare class DemoButton {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<DemoButton, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DemoButton, "demo-button", never, {}, {}, never, ["*"], false, never>;
}
export declare interface DemoButton extends Components.DemoButton {
}

import { __decorate } from "tslib";
/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProxyCmp } from './angular-component-lib/utils';
import * as i0 from "@angular/core";
const _c0 = ["*"];
let DemoButton = class DemoButton {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
DemoButton.ɵfac = function DemoButton_Factory(t) { return new (t || DemoButton)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
DemoButton.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DemoButton, selectors: [["demo-button"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function DemoButton_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
DemoButton = __decorate([
    ProxyCmp({})
], DemoButton);
export { DemoButton };
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DemoButton, [{
        type: Component,
        args: [{
                selector: 'demo-button',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: [],
            }]
    }], () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DemoButton, { className: "DemoButton" }); })();

/* AutoGen NgModule */
import { NgModule } from '@angular/core';
import { DemoButton } from './components';
import * as i0 from "@angular/core";
export { DemoButton };
export class KoliBriModule {
}
KoliBriModule.ɵfac = function KoliBriModule_Factory(t) { return new (t || KoliBriModule)(); };
KoliBriModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: KoliBriModule });
KoliBriModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({});
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(KoliBriModule, [{
        type: NgModule,
        args: [{
                declarations: [DemoButton],
                exports: [DemoButton],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(KoliBriModule, { declarations: [DemoButton], exports: [DemoButton] }); })();

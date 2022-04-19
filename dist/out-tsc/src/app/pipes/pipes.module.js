import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { DomSanitizerPipe } from './dom-sanitizer.pipe';
import { ImageSanitizerPipe } from './image-sanitizer.pipe';
let PipesModule = class PipesModule {
};
PipesModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            DomSanitizerPipe,
            ImageSanitizerPipe
        ],
        exports: [
            DomSanitizerPipe,
            ImageSanitizerPipe
        ]
    })
], PipesModule);
export { PipesModule };
//# sourceMappingURL=pipes.module.js.map
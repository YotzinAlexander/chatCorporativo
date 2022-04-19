import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
let DomSanitizerPipe = class DomSanitizerPipe {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    transform(img) {
        const domImg = `background-image: url('${img}')`;
        return this.domSanitizer.bypassSecurityTrustStyle(domImg);
    }
};
DomSanitizerPipe = tslib_1.__decorate([
    Pipe({
        name: 'domSanitizer'
    }),
    tslib_1.__metadata("design:paramtypes", [DomSanitizer])
], DomSanitizerPipe);
export { DomSanitizerPipe };
//# sourceMappingURL=dom-sanitizer.pipe.js.map
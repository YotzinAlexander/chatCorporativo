import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
let ImageSanitizerPipe = class ImageSanitizerPipe {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    transform(img, ...args) {
        return this.domSanitizer.bypassSecurityTrustUrl(img);
    }
};
ImageSanitizerPipe = tslib_1.__decorate([
    Pipe({
        name: 'imageSanitizer'
    }),
    tslib_1.__metadata("design:paramtypes", [DomSanitizer])
], ImageSanitizerPipe);
export { ImageSanitizerPipe };
//# sourceMappingURL=image-sanitizer.pipe.js.map
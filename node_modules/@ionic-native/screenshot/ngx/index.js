var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { IonicNativePlugin, Plugin, getPromise } from '@ionic-native/core';
var Screenshot = /** @class */ (function (_super) {
    __extends(Screenshot, _super);
    function Screenshot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     *  Takes screenshot and saves the image
     *
     * @param format {string} Format can take the value of either 'jpg' or 'png'
     * On ios, only 'jpg' format is supported
     * @param quality {number}  Determines the quality of the screenshot.
     *        Default quality is set to 100.
     * @param filename {string} Name of the file as stored on the storage
     * @returns {Promise<any>}
     */
    Screenshot.prototype.save = function (format, quality, filename) {
        return getPromise(function (resolve, reject) {
            navigator.screenshot.save(function (error, result) {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(result);
                }
            }, format, quality, filename);
        });
    };
    /**
     *  Takes screenshot and returns the image as an URI
     *
     * @param quality {number} Determines the quality of the screenshot.
     *        Default quality is set to 100.
     * @returns {Promise<any>}
     */
    Screenshot.prototype.URI = function (quality) {
        return getPromise(function (resolve, reject) {
            navigator.screenshot.URI(function (error, result) {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(result);
                }
            }, quality);
        });
    };
    Screenshot.pluginName = "Screenshot";
    Screenshot.plugin = "com.darktalker.cordova.screenshot";
    Screenshot.pluginRef = "navigator.screenshot";
    Screenshot.repo = "https://github.com/gitawego/cordova-screenshot";
    Screenshot.platforms = ["Android", "iOS", "macOS"];
    Screenshot = __decorate([
        Injectable()
    ], Screenshot);
    return Screenshot;
}(IonicNativePlugin));
export { Screenshot };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NjcmVlbnNob3Qvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0lBOEIzQyw4QkFBaUI7Ozs7SUFFL0M7Ozs7Ozs7OztPQVNHO0lBQ0gseUJBQUksR0FBSixVQUFLLE1BQWUsRUFBRSxPQUFnQixFQUFFLFFBQWlCO1FBQ3ZELE9BQU8sVUFBVSxDQUNmLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDZCxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FDdkIsVUFBQyxLQUFVLEVBQUUsTUFBVztnQkFDdEIsSUFBSSxLQUFLLEVBQUU7b0JBQ1QsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNmO3FCQUFNO29CQUNMLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDakI7WUFDSCxDQUFDLEVBQ0QsTUFBTSxFQUNOLE9BQU8sRUFDUCxRQUFRLENBQ1QsQ0FBQztRQUNKLENBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILHdCQUFHLEdBQUgsVUFBSSxPQUFnQjtRQUNsQixPQUFPLFVBQVUsQ0FDZixVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2QsU0FBUyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQ3RCLFVBQUMsS0FBVSxFQUFFLE1BQVc7Z0JBQ3RCLElBQUksS0FBSyxFQUFFO29CQUNULE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDZjtxQkFBTTtvQkFDTCxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ2pCO1lBQ0gsQ0FBQyxFQUNELE9BQU8sQ0FDUixDQUFDO1FBQ0osQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFyRFUsVUFBVTtRQUR0QixVQUFVLEVBQUU7T0FDQSxVQUFVO3FCQS9CdkI7RUErQmdDLGlCQUFpQjtTQUFwQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiwgZ2V0UHJvbWlzZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmRlY2xhcmUgY29uc3QgbmF2aWdhdG9yOiBhbnk7XG5cbi8qKlxuICogQG5hbWUgU2NyZWVuc2hvdFxuICogQGRlc2NyaXB0aW9uIENhcHR1cmVzIGEgc2NyZWVuIHNob3RcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgU2NyZWVuc2hvdCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc2NyZWVuc2hvdC9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc2NyZWVuc2hvdDogU2NyZWVuc2hvdCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogLy8gVGFrZSBhIHNjcmVlbnNob3QgYW5kIHNhdmUgdG8gZmlsZVxuICogdGhpcy5zY3JlZW5zaG90LnNhdmUoJ2pwZycsIDgwLCAnbXlzY3JlZW5zaG90LmpwZycpLnRoZW4ob25TdWNjZXNzLCBvbkVycm9yKTtcbiAqXG4gKiAvLyBUYWtlIGEgc2NyZWVuc2hvdCBhbmQgZ2V0IHRlbXBvcmFyeSBmaWxlIFVSSVxuICogdGhpcy5zY3JlZW5zaG90LlVSSSg4MCkudGhlbihvblN1Y2Nlc3MsIG9uRXJyb3IpO1xuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnU2NyZWVuc2hvdCcsXG4gIHBsdWdpbjogJ2NvbS5kYXJrdGFsa2VyLmNvcmRvdmEuc2NyZWVuc2hvdCcsXG4gIHBsdWdpblJlZjogJ25hdmlnYXRvci5zY3JlZW5zaG90JyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9naXRhd2Vnby9jb3Jkb3ZhLXNjcmVlbnNob3QnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnbWFjT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTY3JlZW5zaG90IGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIC8qKlxuICAgKiAgVGFrZXMgc2NyZWVuc2hvdCBhbmQgc2F2ZXMgdGhlIGltYWdlXG4gICAqXG4gICAqIEBwYXJhbSBmb3JtYXQge3N0cmluZ30gRm9ybWF0IGNhbiB0YWtlIHRoZSB2YWx1ZSBvZiBlaXRoZXIgJ2pwZycgb3IgJ3BuZydcbiAgICogT24gaW9zLCBvbmx5ICdqcGcnIGZvcm1hdCBpcyBzdXBwb3J0ZWRcbiAgICogQHBhcmFtIHF1YWxpdHkge251bWJlcn0gIERldGVybWluZXMgdGhlIHF1YWxpdHkgb2YgdGhlIHNjcmVlbnNob3QuXG4gICAqICAgICAgICBEZWZhdWx0IHF1YWxpdHkgaXMgc2V0IHRvIDEwMC5cbiAgICogQHBhcmFtIGZpbGVuYW1lIHtzdHJpbmd9IE5hbWUgb2YgdGhlIGZpbGUgYXMgc3RvcmVkIG9uIHRoZSBzdG9yYWdlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBzYXZlKGZvcm1hdD86IHN0cmluZywgcXVhbGl0eT86IG51bWJlciwgZmlsZW5hbWU/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBnZXRQcm9taXNlPGFueT4oXG4gICAgICAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIG5hdmlnYXRvci5zY3JlZW5zaG90LnNhdmUoXG4gICAgICAgICAgKGVycm9yOiBhbnksIHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGZvcm1hdCxcbiAgICAgICAgICBxdWFsaXR5LFxuICAgICAgICAgIGZpbGVuYW1lXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgVGFrZXMgc2NyZWVuc2hvdCBhbmQgcmV0dXJucyB0aGUgaW1hZ2UgYXMgYW4gVVJJXG4gICAqXG4gICAqIEBwYXJhbSBxdWFsaXR5IHtudW1iZXJ9IERldGVybWluZXMgdGhlIHF1YWxpdHkgb2YgdGhlIHNjcmVlbnNob3QuXG4gICAqICAgICAgICBEZWZhdWx0IHF1YWxpdHkgaXMgc2V0IHRvIDEwMC5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIFVSSShxdWFsaXR5PzogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxhbnk+KFxuICAgICAgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBuYXZpZ2F0b3Iuc2NyZWVuc2hvdC5VUkkoXG4gICAgICAgICAgKGVycm9yOiBhbnksIHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHF1YWxpdHlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG59XG4iXX0=
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
import { IonicNativePlugin, Plugin, getPromise } from '@ionic-native/core';
var ScreenshotOriginal = /** @class */ (function (_super) {
    __extends(ScreenshotOriginal, _super);
    function ScreenshotOriginal() {
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
    ScreenshotOriginal.prototype.save = function (format, quality, filename) {
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
    ScreenshotOriginal.prototype.URI = function (quality) {
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
    ScreenshotOriginal.pluginName = "Screenshot";
    ScreenshotOriginal.plugin = "com.darktalker.cordova.screenshot";
    ScreenshotOriginal.pluginRef = "navigator.screenshot";
    ScreenshotOriginal.repo = "https://github.com/gitawego/cordova-screenshot";
    ScreenshotOriginal.platforms = ["Android", "iOS", "macOS"];
    return ScreenshotOriginal;
}(IonicNativePlugin));
var Screenshot = new ScreenshotOriginal();
export { Screenshot };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NjcmVlbnNob3QvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0lBOEIzQyw4QkFBaUI7Ozs7SUFFL0M7Ozs7Ozs7OztPQVNHO0lBQ0gseUJBQUksR0FBSixVQUFLLE1BQWUsRUFBRSxPQUFnQixFQUFFLFFBQWlCO1FBQ3ZELE9BQU8sVUFBVSxDQUNmLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDZCxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FDdkIsVUFBQyxLQUFVLEVBQUUsTUFBVztnQkFDdEIsSUFBSSxLQUFLLEVBQUU7b0JBQ1QsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNmO3FCQUFNO29CQUNMLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDakI7WUFDSCxDQUFDLEVBQ0QsTUFBTSxFQUNOLE9BQU8sRUFDUCxRQUFRLENBQ1QsQ0FBQztRQUNKLENBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILHdCQUFHLEdBQUgsVUFBSSxPQUFnQjtRQUNsQixPQUFPLFVBQVUsQ0FDZixVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2QsU0FBUyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQ3RCLFVBQUMsS0FBVSxFQUFFLE1BQVc7Z0JBQ3RCLElBQUksS0FBSyxFQUFFO29CQUNULE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDZjtxQkFBTTtvQkFDTCxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ2pCO1lBQ0gsQ0FBQyxFQUNELE9BQU8sQ0FDUixDQUFDO1FBQ0osQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDOzs7Ozs7cUJBcEZIO0VBK0JnQyxpQkFBaUI7U0FBcEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4sIGdldFByb21pc2UgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5kZWNsYXJlIGNvbnN0IG5hdmlnYXRvcjogYW55O1xuXG4vKipcbiAqIEBuYW1lIFNjcmVlbnNob3RcbiAqIEBkZXNjcmlwdGlvbiBDYXB0dXJlcyBhIHNjcmVlbiBzaG90XG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFNjcmVlbnNob3QgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3NjcmVlbnNob3Qvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHNjcmVlbnNob3Q6IFNjcmVlbnNob3QpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIC8vIFRha2UgYSBzY3JlZW5zaG90IGFuZCBzYXZlIHRvIGZpbGVcbiAqIHRoaXMuc2NyZWVuc2hvdC5zYXZlKCdqcGcnLCA4MCwgJ215c2NyZWVuc2hvdC5qcGcnKS50aGVuKG9uU3VjY2Vzcywgb25FcnJvcik7XG4gKlxuICogLy8gVGFrZSBhIHNjcmVlbnNob3QgYW5kIGdldCB0ZW1wb3JhcnkgZmlsZSBVUklcbiAqIHRoaXMuc2NyZWVuc2hvdC5VUkkoODApLnRoZW4ob25TdWNjZXNzLCBvbkVycm9yKTtcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1NjcmVlbnNob3QnLFxuICBwbHVnaW46ICdjb20uZGFya3RhbGtlci5jb3Jkb3ZhLnNjcmVlbnNob3QnLFxuICBwbHVnaW5SZWY6ICduYXZpZ2F0b3Iuc2NyZWVuc2hvdCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vZ2l0YXdlZ28vY29yZG92YS1zY3JlZW5zaG90JyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ21hY09TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2NyZWVuc2hvdCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICAvKipcbiAgICogIFRha2VzIHNjcmVlbnNob3QgYW5kIHNhdmVzIHRoZSBpbWFnZVxuICAgKlxuICAgKiBAcGFyYW0gZm9ybWF0IHtzdHJpbmd9IEZvcm1hdCBjYW4gdGFrZSB0aGUgdmFsdWUgb2YgZWl0aGVyICdqcGcnIG9yICdwbmcnXG4gICAqIE9uIGlvcywgb25seSAnanBnJyBmb3JtYXQgaXMgc3VwcG9ydGVkXG4gICAqIEBwYXJhbSBxdWFsaXR5IHtudW1iZXJ9ICBEZXRlcm1pbmVzIHRoZSBxdWFsaXR5IG9mIHRoZSBzY3JlZW5zaG90LlxuICAgKiAgICAgICAgRGVmYXVsdCBxdWFsaXR5IGlzIHNldCB0byAxMDAuXG4gICAqIEBwYXJhbSBmaWxlbmFtZSB7c3RyaW5nfSBOYW1lIG9mIHRoZSBmaWxlIGFzIHN0b3JlZCBvbiB0aGUgc3RvcmFnZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgc2F2ZShmb3JtYXQ/OiBzdHJpbmcsIHF1YWxpdHk/OiBudW1iZXIsIGZpbGVuYW1lPzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxhbnk+KFxuICAgICAgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBuYXZpZ2F0b3Iuc2NyZWVuc2hvdC5zYXZlKFxuICAgICAgICAgIChlcnJvcjogYW55LCByZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmb3JtYXQsXG4gICAgICAgICAgcXVhbGl0eSxcbiAgICAgICAgICBmaWxlbmFtZVxuICAgICAgICApO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogIFRha2VzIHNjcmVlbnNob3QgYW5kIHJldHVybnMgdGhlIGltYWdlIGFzIGFuIFVSSVxuICAgKlxuICAgKiBAcGFyYW0gcXVhbGl0eSB7bnVtYmVyfSBEZXRlcm1pbmVzIHRoZSBxdWFsaXR5IG9mIHRoZSBzY3JlZW5zaG90LlxuICAgKiAgICAgICAgRGVmYXVsdCBxdWFsaXR5IGlzIHNldCB0byAxMDAuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBVUkkocXVhbGl0eT86IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8YW55PihcbiAgICAgIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgbmF2aWdhdG9yLnNjcmVlbnNob3QuVVJJKFxuICAgICAgICAgIChlcnJvcjogYW55LCByZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBxdWFsaXR5XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxufVxuIl19
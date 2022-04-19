import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name iOS DocumentPicker
 * @description
 *
 * Opens the file picker on iOS for the user to select a file, returns a file URI.
 * Allows the user to upload files from iCloud
 *
 * @usage
 * ```typescript
 * import { DocumentPicker } from '@ionic-native/document-picker/ngx';
 *
 * constructor(private docPicker: DocumentPicker) { }
 *
 * ...
 *
 * this.docPicker.getFile('all')
 *   .then(uri => console.log(uri))
 *   .catch(e => console.log(e));
 *
 * ```
 */
export declare class DocumentPicker extends IonicNativePlugin {
    /**
     * Open a file
     * @param {string} [option] files between 'image', 'pdf' or 'all'
     * @returns {Promise<string>}
     */
    getFile(option?: string): Promise<string>;
}

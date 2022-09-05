import { Buffer } from "buffer";

export class Encoding{

    static arrayBufferToB64String(buffer:ArrayBuffer): string{
        var binary = '';
        var bytes = new Uint8Array(buffer);
        var len = bytes.byteLength;
        for(var i=0; i<len; i++){
            binary += String.fromCharCode(bytes[i]);
        }
        return btoa(binary);
    }

    /**
     * Decodes a base64 encoded string to UTF-8 encoded string
     * @param b64String The base64 encoded string
     * @returns The utf-8 encoded string
     */
    static fromB4String(b64String:string): string{
        return Buffer.from(b64String, 'base64').toString();
    }
}
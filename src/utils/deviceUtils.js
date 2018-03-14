import Fingerprint from 'fingerprintjs'

export default class DeviceUtils {

    /**
    * get device msisdn number using the browser's fingerprint
    */
    static getDeviceId() {
        return new Fingerprint().get()
    }

    static getAppToken() {
        return "a9254a85362ebc932e145a924a4ba5";
    }
}
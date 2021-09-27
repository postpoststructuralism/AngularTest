import { Device } from "./device";
import { DeviceType } from "./device-type";
import { DeviceStatus } from "./device-status";

export interface RelatedDevice {
    rootDeviceId: number;
    relatedDeviceId: number;
    relatedDevice: Device;
}
import { Device } from "./device";
import { DeviceType } from "./device-type";
import { DeviceStatus } from "./device-status";

export interface RelatedDevice {
    id: number;
    name: string;
    temperature: number;
    deviceStatusId: number;
    deviceStatusName: string;
    deviceTypeId: number;
    deviceTypeName: string;
}
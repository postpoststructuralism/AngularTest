import { DeviceStatus } from "./device-status";
import { DeviceType } from "./device-type";
import { RelatedDevice } from "./related-device";

export interface Device {
    id: number;
    name: string;
    temperature: number;
    deviceStatusId: number;
    deviceStatusName: string;
    deviceTypeId: number;
    deviceTypeName: string;
    relatedDevices: RelatedDevice[];
  }
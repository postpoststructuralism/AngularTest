import { Device } from "./device";

export const DEVICES: Device[] = [
  {
    "deviceStatus": {
      "id": 1,
      "name": "Available"
    },
    "deviceType": {
      "id": 1,
      "name": "Mobile"
    },
    "relatedDevices": [],
    "id": 1,
    "name": "Device 1",
    "temperature": 0,
    "deviceStatusId": 1,
    "deviceTypeId": 1
  },
  {
    "deviceStatus": {
      "id": 2,
      "name": "Offline"
    },
    "deviceType": {
      "id": 3,
      "name": "Desktop"
    },
    "relatedDevices": [],
    "id": 2,
    "name": "Device 2",
    "temperature": 0,
    "deviceStatusId": 2,
    "deviceTypeId": 3
  },
  {
    "deviceStatus": {
      "id": 1,
      "name": "Available"
    },
    "deviceType": {
      "id": 3,
      "name": "Desktop"
    },
    "relatedDevices": [],
    "id": 3,
    "name": "Device 3",
    "temperature": 0,
    "deviceStatusId": 1,
    "deviceTypeId": 3
  },
  {
    "deviceStatus": {
      "id": 2,
      "name": "Offline"
    },
    "deviceType": {
      "id": 1,
      "name": "Mobile"
    },
    "relatedDevices": [
      {
        "relatedDevice": {
          "deviceStatus": {
            "id": 2,
            "name": "Offline"
          },
          "deviceType": {
            "id": 3,
            "name": "Desktop"
          },
          "relatedDevices": [],
          "id": 2,
          "name": "Device 2",
          "temperature": 0,
          "deviceStatusId": 2,
          "deviceTypeId": 3
        },
        "rootDeviceId": 4,
        "relatedDeviceId": 2
      }
    ],
    "id": 4,
    "name": "Device 4",
    "temperature": 0,
    "deviceStatusId": 2,
    "deviceTypeId": 1
  },
  {
    "deviceStatus": {
      "id": 1,
      "name": "Available"
    },
    "deviceType": {
      "id": 2,
      "name": "Tablet"
    },
    "relatedDevices": [],
    "id": 5,
    "name": "Device 5",
    "temperature": 0,
    "deviceStatusId": 1,
    "deviceTypeId": 2
  },
  {
    "deviceStatus": {
      "id": 1,
      "name": "Available"
    },
    "deviceType": {
      "id": 3,
      "name": "Desktop"
    },
    "relatedDevices": [
      {
        "relatedDevice": {
          "deviceStatus": {
            "id": 1,
            "name": "Available"
          },
          "deviceType": {
            "id": 1,
            "name": "Mobile"
          },
          "relatedDevices": [],
          "id": 1,
          "name": "Device 1",
          "temperature": 0,
          "deviceStatusId": 1,
          "deviceTypeId": 1
        },
        "rootDeviceId": 6,
        "relatedDeviceId": 1
      },
      {
        "relatedDevice": {
          "deviceStatus": {
            "id": 2,
            "name": "Offline"
          },
          "deviceType": {
            "id": 1,
            "name": "Mobile"
          },
          "relatedDevices": [
            {
              "relatedDevice": {
                "deviceStatus": {
                  "id": 2,
                  "name": "Offline"
                },
                "deviceType": {
                  "id": 3,
                  "name": "Desktop"
                },
                "relatedDevices": [],
                "id": 2,
                "name": "Device 2",
                "temperature": 0,
                "deviceStatusId": 2,
                "deviceTypeId": 3
              },
              "rootDeviceId": 4,
              "relatedDeviceId": 2
            }
          ],
          "id": 4,
          "name": "Device 4",
          "temperature": 0,
          "deviceStatusId": 2,
          "deviceTypeId": 1
        },
        "rootDeviceId": 6,
        "relatedDeviceId": 4
      },
      {
        "relatedDevice": {
          "deviceStatus": {
            "id": 2,
            "name": "Offline"
          },
          "deviceType": {
            "id": 2,
            "name": "Tablet"
          },
          "relatedDevices": [],
          "id": 7,
          "name": "Device 7",
          "temperature": 0,
          "deviceStatusId": 2,
          "deviceTypeId": 2
        },
        "rootDeviceId": 6,
        "relatedDeviceId": 7
      }
    ],
    "id": 6,
    "name": "Device 6",
    "temperature": 0,
    "deviceStatusId": 1,
    "deviceTypeId": 3
  },
  {
    "deviceStatus": {
      "id": 2,
      "name": "Offline"
    },
    "deviceType": {
      "id": 2,
      "name": "Tablet"
    },
    "relatedDevices": [],
    "id": 7,
    "name": "Device 7",
    "temperature": 0,
    "deviceStatusId": 2,
    "deviceTypeId": 2
  },
  {
    "deviceStatus": {
      "id": 2,
      "name": "Offline"
    },
    "deviceType": {
      "id": 2,
      "name": "Tablet"
    },
    "relatedDevices": [],
    "id": 8,
    "name": "Device 8",
    "temperature": 0,
    "deviceStatusId": 2,
    "deviceTypeId": 2
  },
  {
    "deviceStatus": {
      "id": 1,
      "name": "Available"
    },
    "deviceType": {
      "id": 1,
      "name": "Mobile"
    },
    "relatedDevices": [],
    "id": 9,
    "name": "Device 9",
    "temperature": 0,
    "deviceStatusId": 1,
    "deviceTypeId": 1
  },
  {
    "deviceStatus": {
      "id": 2,
      "name": "Offline"
    },
    "deviceType": {
      "id": 3,
      "name": "Desktop"
    },
    "relatedDevices": [],
    "id": 10,
    "name": "Device 10",
    "temperature": 0,
    "deviceStatusId": 2,
    "deviceTypeId": 3
  },
  {
    "deviceStatus": {
      "id": 2,
      "name": "Offline"
    },
    "deviceType": {
      "id": 2,
      "name": "Tablet"
    },
    "relatedDevices": [],
    "id": 11,
    "name": "Device 11",
    "temperature": 0,
    "deviceStatusId": 2,
    "deviceTypeId": 2
  }
]
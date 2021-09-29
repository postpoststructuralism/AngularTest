# DevicesApp - Demo Project

Angular app hosted on Azure, prepared as a part of a job competition.

## Testing Instructions
1. The app is currently being hosted on Azure and is available here: [DevicesApp](https://purple-rock-0c229b210.azurestaticapps.net/)
2. The app is set to pull from the the API project that is also being hosted in Azure.

## Local Testing Instructions
1. Open a command prompt on your local system and navigate to the directory where the application will be run.
2. Run the following commands: 
  > -git clone https://github.com/postpoststructuralism/DevicesApp.git
  > -cd DevicesApp
  > -npm update 
  > -ng s -o
3. This will launch a browser and navigate to the deployed version of the app.
4. The app can be set to target the local version of the the Web API project by:
   - Navigating to ./DevicesApp/src/app/device.service.ts
   - Then commenting out the current baseUrl variable and uncommenting the other one.

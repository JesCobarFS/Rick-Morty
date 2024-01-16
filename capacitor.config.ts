import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'rick-and-morty-ionic',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;

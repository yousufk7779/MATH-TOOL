import { useEffect } from 'react';
import { Alert, Linking, Platform } from 'react-native';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UPDATE_CHECK_KEY = '@last_update_check_time';
const PACKAGE_NAME = 'com.jiguu.mathtool';

export const useUpdateCheck = () => {
  useEffect(() => {
    const checkVersion = async () => {
      try {
        // 1. Throttle check (once every 24 hours)
        const lastCheck = await AsyncStorage.getItem(UPDATE_CHECK_KEY);
        const now = Date.now();
        const oneDay = 24 * 60 * 60 * 1000;
        
        if (lastCheck && now - parseInt(lastCheck, 10) < oneDay) {
          return;
        }

        // 2. Get current version
        const currentVersion = Constants.expoConfig?.version || '1.0.0';

        // 3. Fetch latest version from Play Store (Android)
        // Note: For iOS, you would check the App Store. 
        // This is a robust manual implementation to avoid buggy libraries.
        if (Platform.OS === 'android') {
          const response = await fetch(`https://play.google.com/store/apps/details?id=${PACKAGE_NAME}&hl=en`);
          const text = await response.text();
          
          // Match version pattern in Play Store HTML (this is a common reliable regex)
          const match = text.match(/\[\[\["(\d+\.\d+\.\d+)"\]\]/);
          const latestVersion = match ? match[1] : null;

          if (latestVersion && isVersionNewer(currentVersion, latestVersion)) {
            showUpdateAlert(latestVersion);
          }
        }

        // Update last check time
        await AsyncStorage.setItem(UPDATE_CHECK_KEY, now.toString());
      } catch (error) {
        console.log('Update check failed:', error);
      }
    };

    checkVersion();
  }, []);
};

const isVersionNewer = (current: string, latest: string) => {
  const c = current.split('.').map(Number);
  const l = latest.split('.').map(Number);
  
  for (let i = 0; i < 3; i++) {
    if (l[i] > (c[i] || 0)) return true;
    if (l[i] < (c[i] || 0)) return false;
  }
  return false;
};

const showUpdateAlert = (latestVersion: string) => {
  Alert.alert(
    'New Update Available',
    `A new version (${latestVersion}) of the app is available. Please update now to get the latest features.`,
    [
      { text: 'Later', style: 'cancel' },
      { 
        text: 'Update Now', 
        onPress: () => {
          const url = Platform.OS === 'android'
            ? `market://details?id=${PACKAGE_NAME}`
            : `https://apps.apple.com/app/idYOUR_APP_ID`;
          Linking.openURL(url).catch(() => {
            Linking.openURL(`https://play.google.com/store/apps/details?id=${PACKAGE_NAME}`);
          });
        }
      }
    ],
    { cancelable: true }
  );
};

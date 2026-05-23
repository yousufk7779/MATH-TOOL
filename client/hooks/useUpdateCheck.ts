import { useEffect } from 'react';
import { Alert, Linking, Platform } from 'react-native';
import Constants from 'expo-constants';
import { getApiUrl } from '@/lib/query-client';

const PACKAGE_NAME = 'com.jiguu.mathtool';

export const useUpdateCheck = () => {
  useEffect(() => {
    const checkVersion = async () => {
      try {
        // 1. Get current version
        const currentVersion = Constants.expoConfig?.version || '1.0.0';
        let latestVersion: string | null = null;

        // 2. Try fetching from the backend server first (Fast & Robust)
        try {
          const baseUrl = getApiUrl();
          const response = await fetch(`${baseUrl}api/latest-version`);
          if (response.ok) {
            const data = await response.json();
            latestVersion = data.latestVersion || null;
          }
        } catch (serverError) {
          console.log('Server update check failed, falling back to Play Store:', serverError);
        }

        // 3. Fallback: Parse Google Play Store HTML directly (Android only)
        if (!latestVersion && Platform.OS === 'android') {
          try {
            const response = await fetch(`https://play.google.com/store/apps/details?id=${PACKAGE_NAME}&hl=en`);
            const text = await response.text();
            
            // Match version pattern in Play Store HTML
            const match = text.match(/\[\[\["(\d+\.\d+\.\d+)"\]\]/);
            latestVersion = match ? match[1] : null;
          } catch (scrapeError) {
            console.log('Play Store scraping check failed:', scrapeError);
          }
        }

        // 4. If newer version exists, show the update alert
        if (latestVersion && isVersionNewer(currentVersion, latestVersion)) {
          showUpdateAlert(latestVersion);
        }
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

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
// The code between this comment and the next one is designed to 
// show how the app icon appears before the content shows, and 
// is also the icon that will appear on the phone 
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);
// End comment

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="light" />
    </>
  );
}

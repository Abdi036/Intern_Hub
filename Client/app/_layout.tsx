import "../global.css";
import { Stack } from "expo-router";
import AuthContextProvider from "./context/AuthContext";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <AuthContextProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="(pages)/internship-details"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(pages)/applyInternship"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(pages)/application-details"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(pages)/own-internship-details"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(pages)/applicants"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(pages)/applicants-detail"
          options={{ headerShown: false }}
        />
      </Stack>
      <StatusBar backgroundColor="#161622" style="light" />
    </AuthContextProvider>
  );
}

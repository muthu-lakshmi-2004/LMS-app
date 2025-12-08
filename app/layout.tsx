// app/_layout.tsx
import { Stack } from "expo-router";

export default function RootLayout() {
  // Root Stack navigator
  return <Stack screenOptions={{ headerShown: false }} />;
}

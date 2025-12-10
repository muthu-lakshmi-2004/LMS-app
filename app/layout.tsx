import { Stack } from "expo-router";
import * as Font from "expo-font";
import { useEffect, useState } from "react";

export default function RootLayout() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        DaysOne: require("../assets/fonts/DaysOne-Regular.ttf"),
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // Wait until fonts load
  }

  return <Stack />;
}

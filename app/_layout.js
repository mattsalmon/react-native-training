import {Slot, Stack} from "expo-router"
import {View, Text, StyleSheet} from "react-native"
import { Tabs } from "expo-router/tabs"
import {FontAwesome} from "@expo/vector-icons/FontAwesome"
import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
    return (
    <Drawer>
        <Drawer.Screen
          name="index"
          options={{
            drawLabel: "Home screen",
          }}
        />
    </Drawer>
    )
}
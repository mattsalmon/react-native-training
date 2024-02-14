import {Text, View} from "react-native";
import {Link} from "expo-router"

export default function About() {
    return (
        <View>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/webview">Webview</Link>
        <Link href="/form">Form</Link>
        <Text>The about page!</Text>
        </View>
        );
}
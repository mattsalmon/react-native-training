import React from "react";
import {Text, View, SafeAreaView} from "react-native";
import {Link} from "expo-router"
import { WebView } from 'react-native-webview';
import getStyles from "../styles";

export default function Webview() {
    const [isDarkMode, setIsDarkMode] = React.useState(true);
    const styles = getStyles(isDarkMode);
    return (
        <>
            <SafeAreaView style={styles.container}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/webview">Webview</Link>
            <Link href="/form">Form</Link>
            <WebView
                style={styles.container}
                source={{ uri: 'https://www.mmu.ac.uk' }}
            />
            </SafeAreaView>
        </>
    );
}
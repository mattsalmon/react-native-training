import React from "react";
import {SafeAreaView} from "react-native";
import {Link} from "expo-router"
import getStyles from "../styles";

export default function Form() {
    const [isDarkMode, setIsDarkMode] = React.useState(true);
    const styles = getStyles(isDarkMode);
    return (
        <>
            <SafeAreaView style={styles.container}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/webview">Webview</Link>
            <Link href="/form">Form</Link>
            </SafeAreaView>
        </>
    );
}
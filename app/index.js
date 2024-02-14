import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList, SafeAreaView, Switch } from 'react-native';

import {Link} from "expo-router"
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";
import NewsArticle from "../components/NewsArticle";
import User from "../components/User";
import Weather from "../components/Weather";
import getStyles from "../styles";
import { newsData } from "../data";

export default function Index() {
    const [isDarkMode, setIsDarkMode] = React.useState(true);
    const styles = getStyles(isDarkMode);
  
    return (
        <SafeAreaView style={styles.container}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/webview">Webview</Link>
        <Link href="/form">Form</Link>
        <StatusBar style="auto" />
        <Header isDarkMode={isDarkMode}></Header>
        <Switch 
          onValueChange={setIsDarkMode}
          value={isDarkMode}
        >
        </Switch>
        <FlatList
          data={newsData}
          renderItem={({ item }) => (
            <NewsArticle
              title={item.title}
              
              summary={item.summary}
              isDarkMode={isDarkMode}
            />
          )}
          keyExtractor={(item) => item.id} >
        </FlatList>
        <Footer isDarkMode={isDarkMode}></Footer>
        </SafeAreaView>
    );
}
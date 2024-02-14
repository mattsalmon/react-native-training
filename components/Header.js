import React from "react";
import { View, Text } from "react-native";
import getStyles from "../styles";

const Header = ({ isDarkMode = false }) => {
    const styles = getStyles(isDarkMode);

    return (
        <View style={styles.header}>
        <Text style={styles.headerText}>MMU News</Text>
      </View>
    );
  };

export default Header;
import React from "react";
import { View, Text } from "react-native";
import getStyles from "../../styles";

const Footer = ({ isDarkMode = true }) => {
    const styles = getStyles(isDarkMode);
    return (
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 MMU</Text>
      </View>
    );
  }

export default Footer;
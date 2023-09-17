import React from 'react';
import { View, Text, StyleSheet , StatusBar, Platform, SafeAreaView } from 'react-native';
import { Constants } from 'expo';


const HomePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My React Native Home Page</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>
          Welcome to my awesome home page!
        </Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2023 MyHomePage</Text>
      </View>
    </SafeAreaView>
  );
};
const STATUSBAR_HEIGHT = Platform.OS === 'android' ? StatusBar.currentHeight : 0;
const styles = StyleSheet.create({
  container: {
    paddingTop: STATUSBAR_HEIGHT,
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    backgroundColor: '#3498db',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: {
    fontSize: 18,
  },
  footer: {
    padding: 10,
    backgroundColor: '#3498db',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#fff',
  },
});

export default HomePage;

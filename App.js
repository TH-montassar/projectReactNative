import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.header}>
         <Text style={styles.boldtext}>hello monta</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.boldtext}>
        <Text>you can do batter</Text> <Text>you can do batter</Text> <Text>you can do batter</Text>

        </Text>

        <Text>you can do batter</Text>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    backgroundColor: 'pink',
    padding:20,
  },

  boldtext:{
    fontWeight:'bold'
  },
  body:{
    backgroundColor:'yellow',
    padding:20,
  }

});

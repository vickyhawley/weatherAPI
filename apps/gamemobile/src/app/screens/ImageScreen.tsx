import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export const ImageScreen = () => {

    return (
      <View>
        <Text style={styles.happy}>Details Screen</Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    happy: {
        fontSize: 40,
        fontWeight: '600'
    }
  });
  
  export default ImageScreen;
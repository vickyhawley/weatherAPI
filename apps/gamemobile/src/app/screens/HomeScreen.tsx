/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useRef} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';


import LinearGradient from 'react-native-linear-gradient';
import Heart from '../icons/heart.svg';


export const HomeScreen = () => {
  const scrollViewRef = useRef<null | ScrollView>(null);

  return (

<ScrollView
ref={(ref) => {
  scrollViewRef.current = ref;
}}
contentInsetAdjustmentBehavior="automatic"
style={styles.scrollView}
>

<View style={styles.section}>
 <Text style={styles.title}>Hi</Text>
 <Heart width={40} height={40} fill="#ed4264" />
</View>
<LinearGradient  start={{ x: 0.0, y: 0.25 }}
end={{ x: 0.5, y: 1.0 }} colors={['#5b86e5', '#36d1dc']}>
<View style={styles.secondRow}>
  <Text style={styles.secondTitle}>Game app</Text>
</View>
</LinearGradient>
</ScrollView>
  )
};

const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: '#ffffff',
    },
    secondRow: {
      height: 200,
      width: '100%',
      padding: 50
  
    },
    title:{
      fontSize: 40,
      fontWeight: '600',
      color: '#5b86e5',
      textAlign: 'center'
    },
    secondTitle:{
      fontSize: 62,
      fontWeight: '600',
      color: 'white'
    },
    codeBlock: {
      backgroundColor: 'rgba(55, 65, 81, 1)',
      marginVertical: 12,
      padding: 12,
      borderRadius: 4,
    },
    monospace: {
      color: '#ffffff',
      fontFamily: 'Courier New',
      marginVertical: 4,
    },
    comment: {
      color: '#cccccc',
    },
    marginBottomSm: {
      marginBottom: 6,
    },
    marginBottomMd: {
      marginBottom: 18,
    },
    marginBottomLg: {
      marginBottom: 24,
    },
    textLight: {
      fontWeight: '300',
    },
    textBold: {
      fontWeight: '500',
    },
    textCenter: {
      textAlign: 'center',
    },
    text2XS: {
      fontSize: 12,
    },
    textXS: {
      fontSize: 14,
    },
    textSm: {
      fontSize: 16,
    },
    textMd: {
      fontSize: 18,
    },
    textLg: {
      fontSize: 24,
    },
    textXL: {
      fontSize: 48,
    },
    textContainer: {
      marginVertical: 12,
    },
    textSubtle: {
      color: '#6b7280',
    },
    section: {
      marginVertical: 24,
      marginHorizontal: 12,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center'
    },
    shadowBox: {
      backgroundColor: 'white',
      borderRadius: 24,
      shadowColor: 'black',
      shadowOpacity: 0.15,
      shadowOffset: {
        width: 1,
        height: 4,
      },
      shadowRadius: 12,
      padding: 24,
      marginBottom: 24,
    },
    listItem: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    listItemTextContainer: {
      marginLeft: 12,
      flex: 1,
    },
    appTitleText: {
      paddingTop: 12,
      fontWeight: '500',
    },
    hero: {
      borderRadius: 12,
      backgroundColor: '#143055',
      padding: 36,
      marginBottom: 24,
    },
    heroTitle: {
      flex: 1,
      flexDirection: 'row',
    },
    heroTitleText: {
      color: '#ffffff',
      marginLeft: 12,
    },
    heroText: {
      color: '#ffffff',
      marginVertical: 12,
    },
    whatsNextButton: {
      backgroundColor: '#ffffff',
      paddingVertical: 16,
      borderRadius: 8,
      width: '50%',
      marginTop: 24,
    },
    learning: {
      marginVertical: 12,
    },
    love: {
      marginTop: 12,
      justifyContent: 'center',
    },
  });
  
  export default HomeScreen;
  
/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useRef, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Heart from './icons/heart.svg';

const api = {
  key:'45185b5e8a7f944eef598a5d36fde903',
  base: 'https://api.openweathermap.org/data/2.5/'
}

export const Weather = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const scrollViewRef = useRef<null | ScrollView>(null);

  const search = evt => {
      if (evt.key === 'Enter'){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
          setWeather(result)
          setQuery('')
          console.log(result);
      });
  }
  }


   const dateBuilder = (d) => {
      let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      let day=days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();

      return `${day} ${date} ${month} ${year}`
   }

   return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView ref={(ref) => {
            scrollViewRef.current = ref;
          }}
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View>
      <div style={[styles.container, styles.main, styles.rounded, styles.flex, styles.shadow]}>
      <Text style={[styles.title]} >What's the weather like?</Text>
     
         

          <div style={[styles.container]}>
              <div style={[styles.userInput]}>
                  <input style={[styles.rounded, styles.shadow]} type='text' id='name' name='name' placeholder='Enter a city' onChange={e=> setQuery(e.target.value)}
                  value={query}
                  onKeyPress={search}
                   required></input>
                  <input style={[styles.submitBtn, styles.buttonPill]} type='submit' value='Submit'></input>
              </div>

              {(typeof weather.main != "undefined") ? (<div style={[styles.weatherBox, styles.container]}>
              <div style={[styles.display]}>
                  <Text style={[styles.location]}>{weather.name}, {weather.sys.country}</Text>
                  <Text style={[styles.date]}>{dateBuilder(new Date())}</Text>
              </div>
                  <Text style={[styles.temp]}>
                      {Math.round(weather.main.temp)}°C
                  </Text>
                  <Text style={[styles.weather]}>{weather.weather[0].main}</Text>
              </div>) : ('')}
              
           
          </div>
      </div>
      </View>
      <View style={[styles.listItem, styles.love]}>
              <Text style={styles.textSubtle}>Carefully crafted with </Text>
              <Heart width={24} height={24} fill="rgba(252, 165, 165, 1)" />
            </View>
      </ScrollView>
    </SafeAreaView>
  </>
);
};
const styles = StyleSheet.create({
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 768,
    paddingBottom: 3,
    paddingLeft: 1,
    paddingRight: 1,
    color: 'rgba(55, 65, 81, 1)',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  rounded: {},
  shadow: {},
  flex: {

  },
  main: {
    backgroundImage: "url('https://images.unsplash.com/photo-1509475248198-5dc930abd885?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=784&q=80')",
    width: 'auto',
    height: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'cover',
    marginTop: '10%',
    paddingTop: 50,
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    display: 'flex',
    color: 'white',
    marginBottom: 35,
    marginTop: 10,
    fontWeight: 800,
    fontSize: 48,
    justifyContent: 'center',
  },
  userInput: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  submitBtn: {
    color: 'white',
    borderRadius: 15,
    border: '2px solid white',
  marginLeft: -10,
  padding: 10,
  textAlign: 'center',
  },
  date: {
    fontSize: 20,
  fontWeight:200,
  },
  temp: {
    textAlign: 'center',
    color: 'white',
    fontSize: 64,
    fontWeight: 800,
  },
  buttonPill: {
    alignItems: 'center',
    display: 'flex',
  },
  weather: {
    textAlign: 'center',
    color: 'white',
    fontSize: 32,
    fontWeight: 600,
  },
  weatherBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    width: 600,
    borderRadius: 20,
    padding: 50,
    marginTop: 50,
  },

  scrollView: {
    backgroundColor: '#ffffff',
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

export default Weather;

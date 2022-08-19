/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  View,
  Text,
  StatusBar,
  ImageBackground,
  ScrollView,
} from 'react-native';

import {
  StyledInput
} from './Components';

import LinearGradient from 'react-native-linear-gradient';
import Heart from './icons/heart.svg';

import { WeatherData } from '@weather/api';

export const App = (props) => {
  const api = {
    key: '45185b5e8a7f944eef598a5d36fde903',
    base: 'https://api.openweathermap.org/data/2.5/',
  };
  const [query, setQuery] = useState('');

  const [weather, setWeather] = useState<WeatherData | null>(null);
  const { onPress } = props;

  const image = {
    uri: 'https://images.unsplash.com/photo-1509475248198-5dc930abd885?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=784&q=80',
  };
  const search = (evt) => {
    if (evt.key === 'Enter') {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  };
  const dateBuilder = (d) => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const day = days[d.getDay()];
    const date = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <ScrollView style={styles.scrollView}>
      <StatusBar barStyle="dark-content" />
      <View style={{ display: 'flex', alignItems: 'center' }}>
        <ImageBackground
          source={image}
          style={[styles.image, styles.main]}
          imageStyle={{ borderRadius: 30 }}
        >
          <View style={[styles.section]}>
            <Text style={[styles.title]}>What's the weather like?</Text>
            
            <View style={[styles.container, styles.userInput]}>
              <StyledInput defaultValue={query} onChangeText={setQuery} onKeyPress={search} placeholder={"Enter a city"}/>
            </View>

            <LinearGradient
              colors={['#FF232A', '#FF6F00', '#5A8DFF', '#FF56EA']}
              style={styles.linearGradient}
            >
              <Pressable style={styles.submitBtn} onPress={onPress}>
                <Text style={styles.btn}>Submit</Text>
              </Pressable>
            </LinearGradient>
            {weather ? (
              <View style={[styles.weatherBox, styles.container]}>
                <Text>
                  {weather.main.temp}, {weather.sys.country}
                </Text>
                <Text style={[styles.date]}>{dateBuilder(new Date())}</Text>

                <Text style={styles.temp}>
                  {Math.round(weather.main.temp)}°C
                </Text>
                <Text style={styles.weather}>{weather.weather[0].main}</Text>
              </View>
            ) : (
              <></>
            )}
          </View>
        </ImageBackground>
      </View>
      <Footer />
    </ScrollView>
  );
};

function Footer() {
  return (
    <View style={[styles.listItem, styles.love]}>
      <Text style={styles.textSubtle}>Carefully crafted with </Text>
      <Heart width={24} height={24} fill="rgba(252, 165, 165, 1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  date: {
    fontSize: 20,
    fontWeight: '200',
  },
  display: {
    fontWeight: '700',
    fontSize: 40,
    textAlign: 'center',
    color: 'white',
  },
  buttonPill: {
    alignItems: 'center',
    display: 'flex',
  },
  searchBar: {
    height: 60,
    width: 400,
    backgroundColor: '#e7e7e7',
    padding: 10,
  },
  rounded: {
    borderRadius: 50,
  },
  location: {},
  userInput: {
    display: 'flex',
    fontSize: 32,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 2,
    color: 'black',
    width: 270,
    marginBottom: 50,
    marginHorizontal: 20,
  },
  submitBtn: {
    color: 'black',
    fontWeight: '500',
    borderRadius: 15,
    marginLeft: -10,
    padding: 10,
    textAlign: 'center',
  },
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
  title: {
    textAlign: 'center',
    display: 'flex',
    color: 'white',
    marginBottom: 35,
    marginTop: 10,
    fontWeight: '800',
    fontSize: 48,
    justifyContent: 'center',
    border: 'yellow',
    textShadow: '-1px 0 yellow, 0 1px yellow, 1px 0 yellow, 0 -1px yellow',
  },
  weatherBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    width: 600,
    height: 400,
    borderRadius: 20,
    padding: 50,
    marginTop: 50,
  },
  weather: {
    textAlign: 'center',
    color: 'white',
    fontSize: 32,
    fontWeight: '600',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    marginHorizontal: 20,
    paddingHorizontal: 30,
  },
  main: {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1509475248198-5dc930abd885?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=784&q=80')",
    width: 'auto',
    height: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'cover',
    marginTop: '10%',
    paddingTop: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  temp: {
    textAlign: 'center',
    color: 'white',
    fontSize: 64,
    fontWeight: '800',
  },
  btn: {
    textAlign: 'center',
    color: 'white',
    fontSize: 32,
    fontWeight: '600',
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
    marginHorizontal: 22,
    paddingBottom: 100,
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

export default App;

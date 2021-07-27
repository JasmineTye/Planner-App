/*
  Group Members: Jasmine Tye (p2036137), Yuhanaa Binte Izam (p2002145)
*/

import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, ScrollView, Button, Alert, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-shadow-cards';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      label: moment().format('ddd, DD MMMM YYYY')
    };

  }

  //===lifecycle hooks===
  componentDidMount() {
    this.timerID = setInterval(
      () =>
        this.setState({
          label: moment().format('ddd, DD MMMM YYYY')
        }),
      1000 // the 2 states are changed every second
    );
  }

  //---runs before the component is removed---
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  myfunction() {
    Alert.alert('Clicked');
    var d = new Date();
    console.log(moment().utcOffset("+08:00").format('h'));
    console.log();
  }

  render() {
    const { navigation } = this.props;
    const currentDay = moment().format('dddd');
    return (
      <ScrollView>
        <LinearGradient
          colors={['#7222B0', '#8035BC', '#9857CC', '#AE53CE', '#CF6DDF', '#D97BE9']}
          style={styles.linearGradient}>

          <View style={styles.container}>
            <View style={{ flexDirection: 'row', marginVertical: 10 }}>
              <Text style={styles.dayText}>{`${currentDay}`}</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Settings")} style={{ justifyContent: 'flex-end' }}>
                <Image source={require('../images/icons8-settings-55.png')} />
              </TouchableOpacity>
            </View>

            <View style={styles.iconImageContainer}>
              <Image
                source={require('../images/icons8-moon-and-stars-100.png')}
                style={{ marginVertical: 15, minHeight: 80, minWidth: 80 }}
              />
            </View>

            <View style={styles.nightLabel}>
              <Text style={{ textAlign: 'center', fontSize: 20, color: 'white', textTransform: 'uppercase' }}>Night</Text>
            </View>

            <View style={styles.iconContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('Day')}>
                <Image
                  style={styles.roundButton}
                  source={require('../images/icons8-calendar-10-64.png')} />
                <Text style={styles.iconLabel}> Day </Text>
              </TouchableOpacity>


              <TouchableOpacity onPress={() => navigation.navigate('Week')}>
                <Image
                  style={styles.roundButton}
                  source={require('../images//icons8-thursday-64.png')} />
                <Text style={styles.iconLabel}> Week </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('Month')}>
                <Image
                  style={styles.roundButton}
                  source={require('../images/icons8-december-64.png')} />
                <Text style={styles.iconLabel}> Month </Text>
              </TouchableOpacity>
            </View>

            <View style={{ flex: 1, marginRight: 20, marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ flex: 0.1 }} />
              <Text style={{ flex: 1, textAlign: 'center', fontSize: 24, color: "white" }}>
                Your Plan Today: </Text>

              <TouchableOpacity onPress={() => navigation.navigate('NewTask')}>
                <View style={{ flex: 1, justifyContent: 'space-between' }} >
                  <Image
                    style={{ height: 40, width: 40 }}
                    source={require('../images/icons8-plus-48.png')} />
                </View>
              </TouchableOpacity>

            </View>

            <View style={{ flexDirection: 'row', marginBottom: 15 }}>
              <View style={{ flex: 0.5, justifyContent: 'center' }}>
                <TouchableOpacity onPress={this.myfunction}>
                  <Image
                    style={{ height: 40, width: 40 }}
                    source={require('../images/icons8-left-48.png')} />
                </TouchableOpacity>
              </View>

              <View style={{ flex: 4 }}>
                <Card style={styles.card}>
                  <View style={{ flex: 0.5, backgroundColor: 'pink', borderTopLeftRadius: 25, borderTopRightRadius: 25, padding: 15 }}>
                    <Text style={{ textAlign: 'center', fontSize: 22, justifyContent: 'center' }}> 08:30 PM - 10:00 PM </Text>
                  </View>
                  <View style={{ flex: 3, justifyContent: 'center' }}>
                    <Text style={{ textTransform: 'uppercase', textAlign: 'center', fontSize: 26, marginTop: 5, marginBottom: 10, marginHorizontal: 40 }}>Revision for Test</Text>
                    <Text style={{ textAlign: 'center', fontSize: 20, marginTop: 15, marginBottom: 10 }}>Math - 15/12</Text>
                  </View>
                </Card>
              </View>

              <View style={{ flex: 0.5, justifyContent: 'center' }}>
                <TouchableOpacity onPress={this.myfunction}>
                  <Image
                    style={{ height: 40, width: 40 }}
                    source={require('../images/icons8-right-48.png')} />
                </TouchableOpacity>
              </View>

            </View>

          </View>
        </LinearGradient>
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    minHeight: Dimensions.get("window").height,
  },

  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },

  iconImageContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },

  nightLabel: {
    backgroundColor: '#532EA4',
    borderRadius: 100,
    width: Dimensions.get("window").width / 3,
    paddingVertical: 8,
    marginBottom: 30,
    alignSelf: 'center',
  },

  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingHorizontal: 25,

  },

  menuIcons: {
    alignSelf: "center",
    justifyContent: 'space-between',
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },

  iconLabel: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10
  },

  roundButton: {
    width: 75,
    height: 75,
    justifyContent: 'center',
    alignSelf: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },

  dayText: {
    flex: 1,
    color: 'white',
    fontSize: 25,
    textTransform: 'uppercase',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 55
  },

  timeText: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
  },

  dateText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },

  card: {
    flexDirection: 'column',
    margin: 10,
    marginHorizontal: 15,
    borderRadius: 25,
    height: Dimensions.get("window").height / 3.2,
    width: 'auto',
  },
});





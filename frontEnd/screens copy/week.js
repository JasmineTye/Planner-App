/*
  Group Members: Jasmine Tye (p2036137), Yuhanaa Binte Izam (p2002145)
*/

import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions, Alert, ScrollView } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import moment from 'moment';
import DeletePopUp from '../components/deletePopUp';
import DayWeekMonthHeader from '../components/dayWeekMonthHeader';
import DATA from './data';
import CheckBox from '../components/checkBox';
import AddButton from '../components/addBtn';

export default class Week extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: 0,
      isHidden: true
    }
  }

  myfunction() {
    Alert.alert('Clicked');
  }

  render() {
    const { navigation } = this.props;

    const daysInWeek = [moment().format('dddd'), moment().add(1, 'd').format('dddd'), moment().add(2, 'd').format('dddd'), moment().add(3, 'd').format('dddd'), moment().add(4, 'd').format('dddd'), moment().add(5, 'd').format('dddd'), moment().add(6, 'd').format('dddd')];

    const datesInWeek = [moment().format('DD-MM-YYYY'), moment().add(1, 'd').format('DD-MM-YYYY'), moment().add(2, 'd').format('DD-MM-YYYY'), moment().add(3, 'd').format('DD-MM-YYYY'), moment().add(4, 'd').format('DD-MM-YYYY'), moment().add(5, 'd').format('DD-MM-YYYY'), moment().add(6, 'd').format('DD-MM-YYYY'),];
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{ backgroundColor: '#D484E1', marginBottom: 15 }}>

            <DayWeekMonthHeader navigation={navigation} />

            <View style={{ justifyContent: 'space-evenly', flexDirection: 'row', alignItems: 'center', padding: 10, margin: 10 }}>
              <View style={styles.buttons}>
                <TouchableOpacity onPress={() => navigation.navigate('Day')}>
                  <Text style={styles.buttons}> Day   </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Week')}>
                  <Text style={[styles.buttons, styles.buttonSelected]}>Week</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Month')}>
                  <Text style={styles.buttons}>Month</Text>
                </TouchableOpacity>
              </View>
            </View>

            <DropDownPicker
              items={[
                { label: daysInWeek[0] + '\n' + datesInWeek[0], value: 'mon', data: 0 },
                { label: daysInWeek[1] + '\n' + datesInWeek[1], value: 'tue', data: 1 },
                { label: daysInWeek[2] + '\n' + datesInWeek[2], value: 'wed', data: 2 },
                { label: daysInWeek[3] + '\n' + datesInWeek[3], value: 'thu', data: 3 },
                { label: daysInWeek[4] + '\n' + datesInWeek[4], value: 'fri', data: 4 },
                { label: daysInWeek[5] + '\n' + datesInWeek[5], value: 'sat', data: 5 },
                { label: daysInWeek[6] + '\n' + datesInWeek[6], value: 'sun', data: 6 },
              ]}
              placeholder="Select a Day"
              arrowSize={20}
              style={{ paddingVertical: 12, backgroundColor: '#f9edfb' }}
              placeholderStyle={{ textAlign: 'center', color: 'black', fontSize: 18 }}
              labelStyle={{ textAlign: 'center', fontSize: 18, color: 'black' }}
              containerStyle={{ height: 'auto', marginTop: 20 }}
              itemStyle={{ borderBottomWidth: 1, borderBottomColor: '#707070' }}
              dropDownStyle={{ backgroundColor: '#C486ED', paddingHorizontal: -20, minHeight: 450 }}
              onChangeItem={item => this.setState({
                day: item.value,
                data: item.data,
                isHidden: false
              })
              }

              dropDownMaxHeight={Dimensions.get("window").height / 1.5}
            />

            <View style={[styles.taskList, (this.state.data == 0) ? { marginTop: -25 } : { marginTop: 0 }]}>
              {
                this.state.isHidden ? (<View style={{ marginTop: Dimensions.get("screen").height / 4 }}><Text style={{
                  justifyContent: "center",
                  textAlignVertical: 'center',
                  alignContent: 'center',
                  alignSelf: 'center',
                  alignItems: 'center',
                  height: "auto",
                  textAlign: "center",
                  fontSize: 24,
                }}>Select a date above!</Text></View>)
                  :
                  (DATA[this.state.data].map(function (item) {
                    if (item.key == 0) {
                      if (item.note == null) {
                        return <View style={{ flexDirection: 'row', marginBottom: -25, borderBottomColor: 'rgba(0, 0, 0, 0.1)', borderBottomWidth: 1 }} key={item.key}>
                          <Text style={{ flex: 1.5, backgroundColor: item.color, fontSize: 20, padding: 15, paddingHorizontal: 15, textAlign: 'center' }}>{item.start} - {item.end}</Text>
                          <View style={{ backgroundColor: '#eac2f0', alignSelf: 'center', justifyContent: 'center', height: 80 }}>
                            <CheckBox />
                          </View>
                          <Text style={{ flex: 4, backgroundColor: '#eac2f0', fontSize: 20, textAlign: 'center', textAlignVertical: 'center', paddingRight: 20, }}>{item.title}</Text>
                        </View>
                      } else {
                        return <View style={{ flexDirection: 'row', marginBottom: -25, marginRight: 20, borderBottomColor: 'rgba(0, 0, 0, 0.1)', borderBottomWidth: 1 }} key={item.key}>
                          <Text style={{ flex: 1.5, backgroundColor: item.color, fontSize: 20, padding: 15, paddingHorizontal: 15, textAlign: 'center' }}>{item.start} - {item.end}</Text>
                          <View style={{ backgroundColor: '#eac2f0', alignSelf: 'center', justifyContent: 'center', height: 80 }}>
                            <CheckBox />
                          </View>
                          <View style={{ flex: 4, flexDirection: 'column', backgroundColor: '#eac2f0', marginRight: 20, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, textAlign: 'center', textAlignVertical: 'center' }}>{item.title}</Text>
                            <Text style={{ fontSize: 20, textAlign: 'center', textAlignVertical: 'center', color: 'grey' }}>{item.note}</Text>
                          </View>

                        </View>
                      }
                    } else {
                      if (item.note == null) {
                        return <View style={{ flexDirection: 'row', marginTop: 25, marginBottom: -25, borderBottomColor: 'rgba(0, 0, 0, 0.1)', borderBottomWidth: 1 }} key={item.key}>
                          <Text style={{ flex: 1.5, backgroundColor: item.color, fontSize: 20, padding: 15, paddingHorizontal: 15, textAlign: 'center' }}>{item.start} - {item.end}</Text>
                          <View style={{ backgroundColor: '#eac2f0', alignSelf: 'center', justifyContent: 'center', height: 80 }}>
                            <CheckBox />
                          </View>
                          <Text style={{ flex: 4, backgroundColor: '#eac2f0', fontSize: 20, paddingHorizontal: 10, textAlign: 'center', textAlignVertical: 'center' }}>{item.title}</Text>

                        </View>
                      } else {
                        return <View style={{ flexDirection: 'row', marginTop: 25, marginBottom: -25, borderBottomColor: 'rgba(0, 0, 0, 0.1)', borderBottomWidth: 1 }} key={item.key}>
                          <Text style={{ flex: 1.5, backgroundColor: item.color, fontSize: 20, padding: 15, paddingHorizontal: 15, textAlign: 'center' }}>{item.start} - {item.end}</Text>
                          <View style={{ backgroundColor: '#eac2f0', alignSelf: 'center', justifyContent: 'center', height: 80 }}>
                            <CheckBox />
                          </View>
                          <View style={{ flex: 4, flexDirection: 'column', backgroundColor: '#eac2f0', justifyContent: 'center', paddingHorizontal: 15 }}>
                            <Text style={{ fontSize: 20, textAlign: 'center', textAlignVertical: 'center' }}>{item.title}</Text>
                            <Text style={{ fontSize: 20, textAlign: 'center', textAlignVertical: 'center', color: 'grey' }}>{item.note}</Text>
                          </View>

                        </View>
                      }
                    }


                  }))
              }
            </View>
          </View>
        </ScrollView>

        <AddButton navigation={navigation} />
        <DeletePopUp />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D484E1',
  },

  taskList: {
    minHeight: 560
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 20,
    paddingVertical: 10,
    fontSize: 20,
    textTransform: 'uppercase',
    textAlign: 'center'
  },

  buttonSelected: {
    color: 'white',
    paddingHorizontal: 35,
    marginLeft: 5,
    backgroundColor: "rgba(101, 34, 187, 0.5)",
    borderRadius: 100 / 5,
  },

  chosenLabel: {
    backgroundColor: '#9d53ce',
    borderRadius: 100,
    width: Dimensions.get("window").width / 3.5,
    paddingVertical: 10,
    alignItems: 'center'
  },

  textStyle: {
    margin: 24,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  pickerStyle: {
    flex: 1,
    height: "auto",
    marginTop: 20,
    paddingVertical: 30,
    backgroundColor: '#f9edfb',
    justifyContent: 'center',
  },

  chooseWeek: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: 'auto',
    height: 'auto',
    alignSelf: 'center',
  },
})  

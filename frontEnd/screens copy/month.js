/*
  Group Members: Jasmine Tye (p2036137), Yuhanaa Binte Izam (p2002145)
*/

import React, { useState, Component } from "react";
import moment from 'moment';
import {
  Text, View, StyleSheet, Image, Dimensions,
  ScrollView, Switch, Alert, TouchableOpacity
} from 'react-native';
import DayWeekMonthHeader from '../components/dayWeekMonthHeader';
import DeletePopUp from '../components/deletePopUp';
import { Calendar } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';
import CheckBox from '../components/checkBox';
import DATA from './data';
import AddButton from '../components/addBtn';

const Separator = () => (
  <View style={styles.separator} />
);

const TimeSeparator = () => (
  <View style={styles.timeSeparator} />
);

export default class Month extends Component {


  constructor(props) {
    super(props);

    this.state = {
      data: 0,
      selectedDate: moment().format('YYYY-MM-DD'),
      date: moment().format('YYYY-MM-DD'),
      begin: moment().format("YYYY-MM-01"),
      isHidden: false
    }
  }


  render() {
    const { navigation } = this.props;
    const daysInWeek = [moment().format('YYYY-MM-DD'), moment().add(1, 'd').format('YYYY-MM-DD'), moment().add(2, 'd').format('YYYY-MM-DD'), moment().add(3, 'd').format('YYYY-MM-DD'), moment().add(4, 'd').format('YYYY-MM-DD'), moment().add(5, 'd').format('YYYY-MM-DD'), moment().add(6, 'd').format('YYYY-MM-DD'),];

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{ backgroundColor: '#D484E1' }}>

          <DayWeekMonthHeader navigation = {navigation}/>

          </View>

          <View style={[styles.container, {padding: 10}]}>
            <View style={styles.buttons}>
              <TouchableOpacity onPress={() => navigation.navigate('Day')}>
                <Text style={styles.buttons}>Day</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Week')}>
                <Text style={styles.buttons}>Week</Text>
              </TouchableOpacity>

              <Text style={[styles.buttons, styles.buttonSelected]}>Month</Text>
            </View>

            <Separator />

            <Calendar
              current={this.state.date}
              minDate={this.state.begin}
              style={styles.calendar}
              markedDates={{
                [this.state.selectedDate]: { selected: true, startingDay: true, endingDay: true, color: 'rgba(101, 34, 187, 0.5)' },
              }}
              markingType={'period'}
              theme={{
                arrowColor: 'rgba(101, 34, 187, 0.5)'

              }}
              onDayPress={(day) => {

                console.log("Selected day: " + JSON.stringify(day));
                for (i = 0; i < DATA.length; i++) {
                  for (j = 0; j < DATA[i].length; j++) {
                    var selectedDate = day.dateString;
                    this.setState({
                      selectedDate: selectedDate
                    })
                    if (selectedDate == daysInWeek[j]) {
                      var key = j;
                      this.setState({
                        data: key,
                        isHidden: false
                      })
                      break;
                    } else {
                      this.setState({
                        isHidden: true
                      })
                    }
                  }
                  break;
                }
              }}
            />

            <Separator />
            <Separator />
            <Separator />
            <Text style={{
              padding: 10,
              marginLeft: 15,
              fontSize: 20,
            }}>Schedule List:</Text>
            <Separator />
            {
              this.state.isHidden ? (
                <View><Text style={{
                  padding: 5,
                  paddingHorizontal: 10,
                  marginLeft: 15,
                  fontSize: 18,
                }}>There are no tasks for this date.</Text></View>
              ) :
                DATA[this.state.data].map(function (item) {
                  if (item.note == null) {
                    return <View key={item.key}>
                      <View style={styles.task} >
                        <Text style={styles.taskTime}>{item.start} - {item.end}</Text>
                        <TimeSeparator />
                      </View>
                      <View style={styles.task}>
                        <View style={{ backgroundColor: item.color, flex: 0.1, marginRight: 20 }}></View>
                        <CheckBox />
                        <Text style={styles.taskNote}>{item.title}</Text>

                      </View>
                    </View>
                  } else {
                    return <View key={item.key}>
                      <View style={styles.task}>
                        <Text style={styles.taskTime}>{item.start} - {item.end}</Text>
                        <TimeSeparator />
                      </View>
                      <View style={styles.task}>
                        <View style={{ backgroundColor: item.color, flex: 0.1, marginRight: 20 }}></View>
                        <CheckBox />
                        <Text style={[styles.taskNote, styles.noteWithDet]}>{item.title}</Text>
                        <Text style={styles.taskDetail}>{item.note}</Text>
                      </View>
                    </View>
                  }
                })
            }
          </View>

        </ScrollView>
        <AddButton navigation={navigation} />
        <DeletePopUp />
      </View>
    );
  }


};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D484E1',
    minHeight: Dimensions.get("window").height,
    marginBottom: 60
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 10,
    marginHorizontal: 20,
    fontSize: 20,
    textTransform: 'uppercase'
  },
  buttonSelected: {
    color: 'white',
    paddingHorizontal: 15,
    marginHorizontal: 5,
    backgroundColor: "rgba(101, 34, 187, 0.5)",
    borderRadius: 100 / 5
  },
  separator: {
    marginVertical: 5
  },
  calendar: {
    marginHorizontal: -10
  },
  task: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 5,
    marginLeft: 30,
    marginBottom: 5
  },
  taskNote: {
    flex: 2,
    paddingHorizontal: 20,
    paddingVertical: 20,
    fontSize: 20,
  },
  noteWithDet: {
    paddingTop: 10,
    paddingBottom: 30
  },
  taskDetail: {
    fontSize: 17.5,
    position: 'absolute',
    bottom: 7.5,
    left: 106,
    color: '#424242',
  },
  taskTime: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    paddingTop: 10,
    fontSize: 20,
    textAlign: 'left'
  },
  timeSeparator: {
    flex: 1,
    alignSelf: 'center',
    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
    borderBottomWidth: 3
  }
});
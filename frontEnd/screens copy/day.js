/*
  Group Members: Jasmine Tye (p2036137), Yuhanaa Binte Izam (p2002145)
*/

import React, { useState, Component } from "react";

import {
  Text, View, StyleSheet, Image, Dimensions,
  ScrollView, Switch, Alert, TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DATA from './data';
import DeletePopUp from '../components/deletePopUp';
import DayWeekMonthHeader from '../components/dayWeekMonthHeader';
import CheckBox from '../components/checkBox';


const Separator = () => (
  <View style={styles.separator} />
);



const Day = () => {
  const navigation = useNavigation();

  return (
    <View style={{ marginBottom: -10 }}>
      <ScrollView>
      <DayWeekMonthHeader navigation = {navigation}/>
        
        <View style={styles.container}>
          <View style={styles.buttons}>
            <Text style={[styles.buttons, styles.buttonSelected]}>Day</Text>

            <TouchableOpacity onPress={() => navigation.navigate('Week')}>
              <Text style={styles.buttons}>Week</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Month')}>
              <Text style={styles.buttons}>Month</Text>
            </TouchableOpacity>
          </View>

          <Separator />

          {
            DATA[0].map((item, key) => (
              <View style={styles.task} key={item.key}>
                <View style={{ backgroundColor: item.color, flex: 0.15 }}></View>
                <Text style={styles.taskTime}>{item.start} - {item.end}</Text>
                <CheckBox />
                <Text style={styles.taskNote}>{item.title}</Text>
                <Text style={styles.taskDetail}>{item.note}</Text>

              </View>
            ))
          }

        </View>

      </ScrollView>

      <DeletePopUp></DeletePopUp>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D484E1',
    padding: 10,
    minHeight: Dimensions.get("window").height,
    marginBottom: 5
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
  separator: {
    marginVertical: 5
  },
  task: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: -10,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    borderBottomWidth: 1
  },
  taskAlt: {
    backgroundColor: 'rgba(255, 255, 255, 0.35)'
  },
  taskNote: {
    flex: 4,
    paddingHorizontal: 20,
    paddingVertical: 35,
    fontSize: 20,
    alignItems: 'center',
  },
  taskDetail: {
    fontSize: 17.5,
    position: 'absolute',
    bottom: 15,
    left: 190,
    color: 'gray',
    alignItems: 'center',
  },
  taskTime: {
    flex: 1.5,
    paddingHorizontal: 10,
    paddingVertical: 25,
    fontSize: 20,
    textAlign: 'center'
  },
});

export default Day;
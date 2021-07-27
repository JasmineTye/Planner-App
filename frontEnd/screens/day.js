/*
  Group Members: Jasmine Tye (p2036137), Yuhanaa Binte Izam (p2002145)
*/

import React, { useState, Component, useEffect } from "react";
import axios from 'axios';
import {
  Text, View, StyleSheet, Image, Dimensions,
  ScrollView, Switch, Alert, TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import DATA from './data';
import DayWeekMonthHeader from '../components/dayWeekMonthHeader';
import AddButton from '../components/addBtn';

//const hostname = '192.168.1.116';
// const hostname = '172.22.90.176';
// const port = 3000;
// const baseURL = `http://${hostname}:${port}`;
var data = [];

const publicIp = require("public-ip");

const getIP = () => {
  publicIp.v4()
  .then((response) => {
    console.log("Response (TYPE OF): " + typeof(response));
    console.log("Response: " + response);
    return response;
  })
  .catch((error) => {
    console.log(error);
  });
}

console.log("GetIP() TYPE OF: " + typeof(getIP()));
console.log("GetIp(): " + getIP());

const port = 3000;
const baseURL = `http://${getIP()}:${port}`;

const Separator = () => (
  <View style={styles.separator} />
);

const getTaskByDate = () => {
  axios.get(`${baseURL}/task/${moment().format('DD-MM-YYYY')}`, {params: {date: moment().format('DD-MM-YYYY')}})
  .then((response) => {
    data = response.data;
    return data;
  })
  .catch((error) => {
    console.log(error);
  });
}


const Day = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const intervalId = setInterval(() => { 
      getTaskByDate()
    }, 10)
  
    return () => clearInterval(intervalId); //This is important
  });


  return (
    <View style={{ marginBottom: -10 }}>
      <ScrollView>
        <DayWeekMonthHeader navigation={navigation} />

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

          {(data.map((item) => (
            <TouchableOpacity onPress={ () => {navigation.navigate('SelectedTask', { data: item.taskID });}}>
            <View style={styles.task} key={item.taskID}>
              <View style={{ backgroundColor: item.colorTag, flex: 0.15 }}></View>
              <Text style={styles.taskTime}>{item.timeFrom} - {item.timeTo}</Text>
              <Text style={styles.taskTitle}>{item.title}</Text>
              <Text style={styles.taskDetail}>{item.notes}</Text>
            </View>
            </TouchableOpacity>
          ))
          )
         }

        </View>

      </ScrollView>
         <AddButton navigation={navigation}/>
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
    fontSize: 18,
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
  taskTitle: {
    flex: 4,
    fontSize: 19,
    paddingVertical: 35,
    marginTop: -10,
    alignItems: 'center',
  },
  taskDetail: {
    fontSize: 17.5,
    position: 'absolute',
    left: 140,
    bottom: 18,
    color: 'gray',
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
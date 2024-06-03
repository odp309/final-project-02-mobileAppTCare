import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Calendar } from 'react-native-calendars';

const Kalender = ({ onDayPress }) => {
  return (
    <View style={styles.calendarContainer}>
      <Calendar
        onDayPress={onDayPress}
        style={styles.calendar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  calendarContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
  },
  calendar: {
    borderWidth: 1,
    borderColor: '#ddd',
  },
});

export default Kalender;

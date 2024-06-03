import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Modal } from 'react-native';
import Kalender from './Kalender';

const PilihTanggal = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [activeField, setActiveField] = useState(null);

  const handleDateChange = (date) => {
    if (activeField === 'start') {
      setStartDate(date.dateString);
    } else if (activeField === 'end') {
      setEndDate(date.dateString);
    }
    setCalendarVisible(false);
  };

  const showCalendar = (field) => {
    setActiveField(field);
    setCalendarVisible(true);
  };

  return (
    <View>
      <View style={styles.dateContainer}>
        <View style={styles.dateInputContainer}>
          <Text style={styles.label}>Tanggal Awal</Text>
          <TouchableOpacity onPress={() => showCalendar('start')}>
            <TextInput 
              style={styles.input} 
              placeholder="DD/MM/YYYY" 
              value={startDate} 
              editable={false} 
              pointerEvents="none"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.dateInputContainer}>
          <Text style={styles.label}>Tanggal Akhir</Text>
          <TouchableOpacity onPress={() => showCalendar('end')}>
            <TextInput 
              style={styles.input} 
              placeholder="DD/MM/YYYY" 
              value={endDate} 
              editable={false} 
              pointerEvents="none"
            />
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        transparent={true}
        animationType="fade"
        visible={calendarVisible}
        onRequestClose={() => setCalendarVisible(false)}
      >
        <TouchableOpacity style={styles.modalOverlay} onPress={() => setCalendarVisible(false)}>
          <View style={styles.modalContent}>
            <Kalender onDayPress={handleDateChange} />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateInputContainer: {
    flex: 1,
    marginRight: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 14,
    color: '#333',
    backgroundColor: '#fff',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
});

export default PilihTanggal;

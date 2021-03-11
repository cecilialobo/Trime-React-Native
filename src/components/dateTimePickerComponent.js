import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";


export default function DateTimePickerComponent ( { type, input, setInput } ){

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (output) => {
        if (type === 'date') {
            let date, month
            output.getDate() < 10 
                ? date = '0' + output.getDate()
                : date = output.getDate();

            output.getMonth() < 10
                ? month = '0' + output.getMonth()
                : month = output.getMonth()

            var year = output.getFullYear();
            setInput(date + '-' + month + '-' + year)
            console.log(date + '-' + month + '-' + year);
        }
        if (type === 'time') {
            let min, hours;
            
            hours = output.getHours(); 
            output.getMinutes() < 10
                ? min = '0' + output.getMinutes()
                : min = output.getMinutes()

            setInput(hours + ':' + min)
            console.log(hours + ':' + min)
        }

      hideDatePicker();
    };
    
    return (
        <View>
            <TouchableOpacity style={styles.inputStyle} onPress={showDatePicker}>
                <Text>{input}</Text>
            </TouchableOpacity>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode={type}
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </View>
    )
  }
 

const styles = StyleSheet.create({
    inputStyle: {
        width: 167,
        marginRight: '5%',
        borderRadius: 7,
        padding: 7,
        backgroundColor: '#eee',
        borderColor: '#eee',
      }
});

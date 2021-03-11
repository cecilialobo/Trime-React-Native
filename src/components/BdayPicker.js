
import React, { useState } from 'react';
import { StyleSheet, View, Button, TouchableOpacity, Text, Dimensions } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';

const { width, height} = Dimensions.get('window');

export default function BdayPicker ( { day, setDay, month, setMonth, year, setYear } ){

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (output) => {
        let date, month

        output.getDate() < 10 
            ? date = '0' + output.getDate()
            : date = output.getDate();

        // output.getMonth() < 10
        //     ? month = '0' + (output.getMonth() + 1)
        //     : month = (output.getMonth() + 1)

        if (output.getMonth() + 1 === 1 ) month = 'January'
        else if (output.getMonth()+ 1 === 2 ) month = 'February'
        else if (output.getMonth() + 1 === 3 ) month = 'March'
        else if (output.getMonth() + 1 === 4 ) month = 'April'
        else if (output.getMonth() + 1 === 5 ) month = 'May'
        else if (output.getMonth() + 1 === 6 ) month = 'June'
        else if (output.getMonth() + 1 === 7 ) month = 'July'
        else if (output.getMonth() + 1 === 8 ) month = 'August'
        else if (output.getMonth() + 1 === 9 ) month = 'September'
        else if (output.getMonth() + 1 === 10 ) month = 'Oktober'
        else if (output.getMonth() + 1 === 11 ) month = 'November'
        else if (output.getMonth() + 1 === 12 ) month = 'December'

        var year = output.getFullYear();
        setDay(date)
        setMonth(month)
        setYear(year)

        console.log(date + '-' + month + '-' + year);//format: dd-mm-yyyy;

        hideDatePicker();
    };
    
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Birth Day</Text>
            <View style={styles.inputContainer}>
                <TouchableOpacity style={styles.inputStyle} onPress={showDatePicker}>
                    <Text style={styles.text}>{month}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.inputStyle} onPress={showDatePicker}>
                    <Text style={styles.text}>{day}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.inputStyle} onPress={showDatePicker}>
                    <Text style={styles.text}>{year}</Text>
                </TouchableOpacity>
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode='date'
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                    date={'1990-01-01T20:59:21.239Z'}
                />
            </View>
        </View>
    )
  }
 

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        width: 393, 
        padding: 20,
        paddingRight: 0
        

    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    label: {
        color: '#fff',
        fontSize: 13,
        padding: 4,
    },
    inputStyle: {
        width: 100,
        marginRight: '5%',
        borderRadius: 7,
        padding: 7,
        height: 44, 
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    text: {
        textAlign: 'center'
    }

});

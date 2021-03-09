
import React from 'react';
import { StyleSheet } from 'react-native';
import DatePicker from 'react-native-datepicker';


// export default function BigButton ( { BGColor, text, linkTo } ) 
export default function DatePickerComponent ( { date, setDate } ){

    return (
        <DatePicker
            style={styles.datePickerStyle}
            date={date} //initial date from state
            mode="date" //The enum of date, datetime and time
            placeholder="From date"
            format="DD-MM-YYYY"
            minDate="03-01-2021"
            maxDate="01-01-2022"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                display: 'none',
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: '5%',
                borderRadius: 7,
                backgroundColor: '#eee',
                borderColor: '#eee',
              },
            }}
            onDateChange={(date) => {
              setDate(date);
            }}
          />
    )
  }
 

const styles = StyleSheet.create({
    datePickerStyle: {
        width: 200,
        marginTop: 20,
      },
});

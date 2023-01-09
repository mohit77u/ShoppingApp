import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ScrollView, Modal, Pressable, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { styles } from '../assets/style';
const appStyles = require('../assets/style').styles
import DatePicker from 'react-native-modern-datepicker';
import axios from 'axios';
const apiHelper = require('../utils/api')

export default function Donate({navigation}) {
    const [timemodalVisible, setTimeModalVisible] = useState(false);
    const [datemodalVisible, setDateModalVisible] = useState(false);
    const [time, setTime] = useState('')
    const [date, setDate] = useState('')
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [pincode, setPincode] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleSubmit = () => {
        let payloadData = {
            address: address,
            city: city,
            pincode: pincode,
            person_quantity: quantity,
            time: time,
            date: date,
        }
        // console.log(payloadData)
        let response = apiHelper.postApiData('/donations/create', payloadData)
        console.log(response)
    }

    const preferredTime = [
        '9AM - 11AM',
        '11AM - 1PM',
        '1PM - 3PM',
        '3PM - 5PM',
        '5PM - 7PM',
    ]

    const getTodayDate = () => {
        // show current date
        let date = new Date()
        let day = date.getDate()
        let month = date.getMonth()
        let year = date.getFullYear()
        day = day < 10 ? '0' + day : day
        month = parseInt(month) + 1
        month = month < 10 ? '0' + month : month
        let currentDate = year + '/' + month + '/' + day;
        setDate(currentDate)
    }

    useEffect(() => {
        // set navigation options
        navigation.setOptions({
          headerStyle: { 
            backgroundColor: '#8BC43F'
          }, 
          headerTintColor: '#fff',
        });
        
        // show first time as preferred time on load
        setTime(preferredTime[0])
        // get today date
        getTodayDate();

    }, [navigation])
  return (
    <View>
        <ScrollView>
            <View style={appStyles.container}>
                <Text style={appStyles.heading}>Donate food details</Text>
                <Text style={appStyles.normalText}>Get in the holiday mood; donate some food.</Text>
                <View style={{marginTop: 15}}>
                    {/* address field */}
                    <Text style={appStyles.label}>Pickup address</Text>
                    <TextInput style={appStyles.textInput} onChangeText={(newText) => {setAddress(newText)}} />

                    {/* city field */}
                    <Text style={appStyles.label}>City</Text>
                    <TextInput style={appStyles.textInput} onChangeText={(newText) => {setCity(newText)}} />

                    {/* pincode field */}
                    <Text style={appStyles.label}>Pincode</Text>
                    <TextInput style={appStyles.textInput} onChangeText={(newText) => {setPincode(newText)}} />

                    {/* date field */}
                    <Text style={[appStyles.label]}>Pickup date</Text>
                    {/* show selected date */}
                    <Text style={appStyles.buttonTypeValue} onPress={() => setDateModalVisible(true)}>{date}</Text>
                    
                    {/* date modal */}
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={datemodalVisible}
                    >
                        <View style={styles.centeredView}>
                            <View style={[styles.modalView, {paddingVertical: 20}]}>
                                <Text style={[styles.label, {marginBottom: 5, paddingHorizontal: 20}]}>Pickup date</Text>
                                <DatePicker options={styles.calendar} mode="calendar" disableDateChange={true} onDateChange={(date) => {setDate(date); setDateModalVisible(false)} }/>
                            </View>
                        </View>
                    </Modal>
                    

                    {/* time field */}
                    <Text style={[appStyles.label, {marginTop: 20,}]} onPress={() => setTimeModalVisible(true)}>Select Preferred time</Text>
                    {/* show selected time slot */}
                    <Text style={appStyles.buttonTypeValue} onPress={() => setTimeModalVisible(true)}>{time}</Text>

                    {/* time modal */}
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={timemodalVisible}
                    >
                        <View style={[styles.centeredView]}>
                            <View style={[styles.modalView, {paddingHorizontal: 20,paddingVertical: 20}]}>
                                <Text style={[styles.label, {marginBottom: 5, }]}>Preferred time slots</Text>
                                {preferredTime.map((time, i) => (
                                    <Text key={i} style={[styles.text, {marginVertical: 5, }]} onPress={() => {setTimeModalVisible(!timemodalVisible); setTime(time) }}>
                                        {time}
                                    </Text>
                                ))}
                            </View>
                        </View>
                    </Modal>

                    {/* quantity field */}
                    <Text style={appStyles.label}>Quantity (per person)</Text>
                    <TextInput style={appStyles.textInput} onChangeText={(newText) => {setQuantity(newText)}} />

                    {/* submit button */}
                    <TouchableOpacity style={styles.centeredButton} onPress={() => {handleSubmit()}}>
                        <Text style={appStyles.secondaryButton}>
                            Submit
                        </Text>
                    </TouchableOpacity >
                </View>
            </View>
        </ScrollView>
        {/* status bar */}
        <StatusBar style="auto" />
    </View>
  );
}


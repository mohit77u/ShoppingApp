import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from '../assets/style';
const appStyles = require('../assets/style').styles


export default function Welcome({ navigation })
{
    const [ step, setStep ] = useState(1);

    // change step
    const changeStep = () =>
    {
        if (step != 4)
        {
            setStep(step + 1)
        } else
        {
            navigation.navigate('Shop')
        }
    }
    
    return (
        <View style={ appStyles.cenetredContainer }>
            {/* step 1 */ }
            { step === 1 && (
                <>
                    <Image style={ appStyles.stepImage } source={ { uri: 'https://res.cloudinary.com/db7uzqtf7/image/upload/v1673265569/AccessoriesWorld/shopping_g0y77o.png' } } />
                    <Text style={ appStyles.stepTitle }>Accessories World</Text>
                    <Text style={ appStyles.text }>Get your favorite accessories here.</Text>
                </>
            ) }
            {/* step 2 */ }
            { step === 2 && (
                <>
                    <Image style={ appStyles.stepImage } source={ { uri: 'https://res.cloudinary.com/db7uzqtf7/image/upload/v1673265569/AccessoriesWorld/purchase_w3bvim.png' } } />
                    <Text style={ appStyles.stepTitle }>Products purchase</Text>
                    <Text style={ appStyles.text }>Get your favorite accessories here.</Text>
                </>
            ) }
            {/* step 3 */ }
            { step === 3 && (
                <>
                    <Image style={ appStyles.stepImage } source={ { uri: 'https://res.cloudinary.com/db7uzqtf7/image/upload/v1673265568/AccessoriesWorld/delivery_ijneao.png' } } />
                    <Text style={ appStyles.stepTitle }>Products deliver</Text>
                    <Text style={ appStyles.text }>Get your favorite accessories here.</Text>
                </>
            ) }
            {/* step 4 */ }
            { step === 4 && (
                <>
                    <Image style={ appStyles.stepImage } source={ { uri: 'https://res.cloudinary.com/db7uzqtf7/image/upload/v1673265569/AccessoriesWorld/happy_m3uc5s.png' } } />
                    <Text style={ appStyles.stepTitle }>Happy</Text>
                    <Text style={ appStyles.text }>Get your favorite accessories here.</Text>
                </>
            ) }
            {/* circle paginations */ }
            <View style={ styles.circleButtons }>
                <View style={[styles.singleCircle, {backgroundColor: step === 1 ? '#e94a47' : '#fff'}]}></View>
                <View style={[styles.singleCircle, {backgroundColor: step === 2 ? '#e94a47' : '#fff'}]}></View>
                <View style={[styles.singleCircle, {backgroundColor: step === 3 ? '#e94a47' : '#fff'}]}></View>
                <View style={[styles.singleCircle, {backgroundColor: step === 4 ? '#e94a47' : '#fff'}]}></View>
            </View>
            {/* next button */}
            <TouchableOpacity
                    style={ styles.buttonWithRightIcon }
                    activeOpacity={ 0.5 }
                    onPress={ () => changeStep() }
                >
                    <Text style={ styles.buttonTextStyle }>Next</Text>
                    <Icon
                        color="#fff"
                        name="east"
                        raised
                        size={ 17 }
                        type="material"
                        style={ styles.buttonIconStyle }
                    />
            </TouchableOpacity>

            {/* status bar */ }
            <StatusBar style="auto" />
        </View>
    );
}


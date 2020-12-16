import React, { useState, useContext } from 'react';
import { View, StyleSheet, Text, Dimensions, StatusBar } from 'react-native';
import Icon from "react-native-vector-icons/Fontisto"
import { baseContext, convertToContext } from '../store/Store';
import EntryComponent from '../components/EntryComponent';
import MyModal from '../components/MyModal';
import colors from '../assets/colors'

const { width, height } = Dimensions.get('window');


const Home = () => {

    const [baseVisible, setBaseVisible] = useState(false)
    const [convertVisible, setConvertVisible] = useState(false)
    const [base, setBase] = useContext(baseContext)
    const [convertTo, setConvertTo] = useContext(convertToContext)
    const [baseVal, setBaseVal] = useState('')
    const [resultVal, setResultVal] = useState('0.00')

    const currencies = ["TRY", "USD", "EUR", "BTC", "ETH", "DOGE"]

    const calculate = (text) => {
        const val = Number(text)
        fetch(`https://min-api.cryptocompare.com/data/price?fsym=${base}&tsyms=${convertTo}`)
            .then(res => res.json())
            .then(data => {
                setResultVal((data[Object.keys(data)[0]] * val).toFixed(2))
            });
    }

    return (
        <View style={styles.container} >
            <StatusBar backgroundColor={colors.dark} />
            <View style={styles.topContainer} >
                <Icon
                    name={'money-symbol'}
                    color="#61dafb"
                    size={width*0.3}
                />
                <Text style={styles.headerText}>SIMPLE CURRENCY CONVERTER</Text>
            </View>
            <View style={styles.bottomContainer} >
                <EntryComponent
                    type={'base'}
                    text={base}
                    onButtonPress={() => setBaseVisible(true)}
                    value={baseVal}
                    onChangeText={(text) => { setBaseVal(text); calculate(text) }}
                />
                <EntryComponent
                    resultVal={resultVal}
                    type={'convertTo'}
                    text={convertTo}
                    onButtonPress={() => setConvertVisible(true)}
                />
                <MyModal
                    type={'base'}
                    visible={baseVisible}
                    currencies={currencies}
                    onPress={() => { setBaseVisible(false); setBaseVal(''); setResultVal('0.00') }}
                />
                <MyModal
                    type={'contertTo'}
                    visible={convertVisible}
                    currencies={currencies}
                    onPress={() => { setConvertVisible(false); setBaseVal(''); setResultVal('0.00') }}
                />
            </View>
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.dark
    },
    topContainer: {
        flex: 3,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    headerText: {
        fontSize: width*0.044,
        fontWeight: 'bold',
        color: colors.lightBlue
    },
    bottomContainer: {
        flex: 7,
    }
});





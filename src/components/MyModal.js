import React, { useContext } from 'react'
import { Text, View, Modal, TouchableHighlight, StyleSheet, Dimensions } from 'react-native'
import { baseContext, convertToContext } from '../store/Store';
import colors from '../assets/colors';
//props => visible =>currencies =>onPress

const { width, height } = Dimensions.get('window');

const MyModal = ({ ...props }) => {

    const [base, setBase] = useContext(baseContext)
    const [convertTo, setConvertTo] = useContext(convertToContext)

    const onPress = (item) => {
        if (props.type === 'base') {
            setBase(item);
            props.onPress();
        }
        else {
            setConvertTo(item);
            props.onPress();
        }
    }
    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.visible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        {props.currencies.map((item) => {
                            return (
                                <TouchableHighlight
                                    style={styles.openButton}
                                    key={item}
                                    onPress={() => onPress(item)}
                                >
                                    <Text style={styles.textStyle}>{item}</Text>
                                </TouchableHighlight>
                            )
                        })}
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default MyModal;


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        paddingTop: height*0.55,
        alignItems: "center",
    },
    modalView: {
        flexDirection: 'row',
    },
    openButton: {
        width: width* 0.12,
        height: height*0.054,
        marginHorizontal: 5,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.white
    },
    textStyle: {
        color: colors.white,
        fontWeight: "bold",
        textAlign: "center"
    }
});


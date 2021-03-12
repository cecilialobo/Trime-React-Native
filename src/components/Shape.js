import React from 'react';
import { StyleSheet, View } from 'react-native';

import ShapeBackground from '../../assets/images/shape-background.svg';

export default function Shape() {
    return(
        <View style={styles.container}>
            <ShapeBackground style={styles.shape}></ShapeBackground>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        zIndex: -150,
        width: '100%',
    },
    shape: {
        top: 220,
    },
});
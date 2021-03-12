import React from 'react';
import { StyleSheet, View } from 'react-native';

import EmojiLeft from '../../assets/images/emoji-left.svg';
import EmojiRight from '../../assets/images/emoji-right.svg';

export default function Emoticons () {

    return (
        <View style={styles.emoticonContainer}>
            <EmojiLeft style={styles.emojiLeft}></EmojiLeft>
            <EmojiRight style={styles.emojiRight}></EmojiRight>
        </View>
    )
}

const styles = StyleSheet.create({
    emoticonContainer: {
        flexDirection: 'row',
        width: '100%',
        position: 'absolute',
        justifyContent: 'space-between',

      },
    emojiLeft: {
        top: 120,
    },
    emojiRight: {
        top: 30,
    },
    });
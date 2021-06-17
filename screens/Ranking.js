import React from 'react'
import { View, Text, StyleSheet, Image,ScrollView } from 'react-native'
import UserRanking from '../components/UserRanking';

import {StylesApp} from '../styles/StylesApp';


const Ranking = () => {
    return (
        <View style={StylesApp.containerScreen}>
            <ScrollView  style={{paddingLeft:10, paddingRight:10,}}>
            <UserRanking/>
            <UserRanking/>
            <UserRanking/>
            <UserRanking/>
            <UserRanking/>
            <UserRanking/>
            <UserRanking/>
            <UserRanking/>
            <UserRanking/>
            <UserRanking/>
            <UserRanking/>

            </ScrollView>
        </View>
    )
}

export default Ranking
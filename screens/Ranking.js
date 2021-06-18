import React from 'react'
import { View, Text, StyleSheet, Image,ScrollView } from 'react-native'
import UserRanking from '../components/UserRanking';

import {StylesApp} from '../styles/StylesApp';


const Ranking = () => {
    return (
        <View style={StylesApp.containerScreen}>
            <ScrollView  style={{paddingLeft:10, paddingRight:10,}}>
            <UserRanking
            position ="1"
            nameUser = "Randy Orton"
            points = "1500"
            />
            <UserRanking
            position ="2"
            nameUser = "Martha Peña"
            points = "1400"
            />
            <UserRanking
            position ="3"
            nameUser = "Milton Lima"
            points = "1300"
            />
            <UserRanking
            position ="4"
            nameUser = "Mariana Sanches"
            points = "1280"
            />
            <UserRanking
            position ="5"
            nameUser = "Pedrito Kilman"
            points = "1270"
            />
            <UserRanking
            position ="6"
            nameUser = "Fernado Manzanero"
            points = "1220"
            />
            <UserRanking
            position ="7"
            nameUser = "Monica Piters"
            points = "1200"
            />
            <UserRanking
            position ="8"
            nameUser = "Raquel Loza"
            points = "1150"
            />
            <UserRanking
            position ="9"
            nameUser = "Carla Miranda"
            points = "1130"
            />
            

            </ScrollView>
        </View>
    )
}

export default Ranking
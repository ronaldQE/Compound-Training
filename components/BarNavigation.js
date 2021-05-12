import React, { Component } from 'react';
import { View } from 'react-native';
import { Text,Image, TouchableOpacity, StyleSheet } from 'react-native';

class BarNavigation extends Component {

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    
                    <TouchableOpacity style={styles.option}>
                    <Image style={styles.icoon}
                    source={require('../assets/iconNavbar/home.svg')}
                    />
                    </TouchableOpacity>
                    
                    
                    <TouchableOpacity style={styles.option}>
                    <Image style={styles.icoon}
                    source={require('../assets/iconNavbar/stats-dots.svg')}
                    />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option}>
                    <Image style={styles.icoon}
                    source={require('../assets/iconNavbar/rocket.svg')}
                    />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option}>
                    <Image style={styles.icoon}
                    source={require('../assets/iconNavbar/star-full.svg')}
                    />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option}>
                    <Image style={styles.icoon}
                    source={require('../assets/iconNavbar/accessibility.svg')}
                    />
                    </TouchableOpacity>
                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#455A64',
        flex: 1,
        justifyContent: 'center',
        

    },
    subContainer: {
        height: 50,
        with:'100%',
        flexDirection:'row',
        justifyContent: 'center',
        
    },
    option:{
        justifyContent: 'center',

        backgroundColor:'#00BCD4',
        //width:50
        flex:1,
        alignItems:'center',
        
    },
    icoon:{
        width:30,
        height:30,
        color:'#FFFFFF',
    }
});
export default BarNavigation
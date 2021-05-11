import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

class BarNavigation extends Component {

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    
                    <TouchableOpacity style={styles.option}>
                        <Text>A</Text>
                    </TouchableOpacity>
                    
                    
                    <TouchableOpacity style={styles.option}>
                        <Text>B</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option}>
                        <Text>C</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option}>
                        <Text>D</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option}>
                        <Text>F</Text>
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
        backgroundColor:'#00BCD4',
        //width:50
        flex:1
    }
});
export default BarNavigation
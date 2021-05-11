import  React  from 'react'
import { View, Button, TextInput, ScrollView, StyleSheet, Text} from 'react-native'
import { RadioButton} from 'react-native-paper'
const CreateUser = () =>{
    const [value, setValue] = React.useState('first');
    return (
        
        <ScrollView    style={styles.container}>
            <Text style={styles.labelTitle}>Registrarse</Text>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Ingrese Nombre Completo"/>
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder= "Ingrese Email"/>
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Ingrese Contraseña"/>
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Ingrese Estatura"/>
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Ingrese Peso"/>
            </View>
            <Text style={styles.labelTitle2}>Seleccione Sexo</Text>
            
            <RadioButton.Group style={styles.radioButtons} onValueChange={value => setValue(value)} value={value}>
                 <RadioButton.Item label="Masculino"/>  
                 <RadioButton.Item label="Femenino"/>
            </RadioButton.Group>

            <View > 
                <Button style={styles.registerButton} title="Registrar"/>
            </View>
            <View style={styles.cancelButton}>
                <Button  title="Cancelar"/>
            </View>
        </ScrollView>
    )   
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 35,
        backgroundColor: '#4F4F4F'
    },
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#FFFFFF',
        textShadowColor: '#FFFFFF',
    },
    radioButtons:{
        flexDirection:'row',
        backgroundColor: '#FFFFFF'
    },
    registerButton:{
        marginTop: '10%',
        backgroundColor: '#00aeef',
        color: '#00aeef',
        borderColor: '#00aeef'
        
    },
    cancelButton:{
        marginTop: '5%',
        color: '#000000'
    },
    labelTitle:{
        textAlign: 'center',
        color: '#FFFFFF'
    },
    labelTitle2:{
        color: '#FFFFFF'
    }

})
export default CreateUser;
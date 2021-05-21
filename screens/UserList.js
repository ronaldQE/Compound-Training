import React, { useEffect, useState} from 'react';
import {View, Text, ScrollView, Button} from 'react-native';
import firebase from '../database/firebase';
import {ListItem, Avatar} from 'react-native-elements';

const UserList =(props)=>{

    const [users, setUsers] = useState([]);

    useEffect(() => {
        firebase.db.collection('users').onSnapshot(querySnapshot =>{
            const users= [];
            querySnapshot.docs.forEach(doc =>{
                const {name, email, password,height,weight,sex}=doc.data()
                users.push({
                    id: doc.id,
                    name,
                    email,
                    password,
                    height,
                    weight,
                    sex
                })
            });
            setUsers(users) 
        })
    }, []);
    return(
        <ScrollView>
            <Button 
            title="Create User" 
            onPress={()=>props.navigation.navigate('CreateUser')}
            />
            {
                users.map(user=>{
                    return (
                        <ListItem
                        key={user.id}
                        >
                            <ListItem.Chevron/>
                            <ListItem.Content>
                                <ListItem.Title>{user.name}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                    )
                })
            }
        </ScrollView>
    )
}
export default UserList;
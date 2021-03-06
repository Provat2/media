import React from 'react';
import { StyleSheet, Text, View,} from 'react-native';

export default class FacebookScreen extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.displayText}>Facebook</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    displayText: {
        fontFamily: "Algerian",
        fontSize: 10,
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 80,
    }
  });
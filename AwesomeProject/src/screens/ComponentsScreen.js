import React, { createElement } from 'react'; // library to make different components work together
import {Text, StyleSheet} from 'react-native'; // take info from components => show content on mobile devices

/* Import Note:
use {} => small parts
no use => entire lib   */

const ComponentsScreen = () => {
    return (
        <Text style={styles.textStyle}>This is component screen</Text>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default ComponentsScreen
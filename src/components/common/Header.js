// info-1: import libraries for making a component
import React from 'react';
import { View, Text } from 'react-native';

// info-2: Make a component
const Header = (props) => {
    const { viewStyle, textStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F8F8F8',
        paddingTop: 15,
        paddingBottom: 15,
        height: 60,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 7,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20,
        color: '#000000'
    }
};

// info-3: Make the component available to other parts of the app
export { Header };
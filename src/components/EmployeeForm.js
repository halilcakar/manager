import React, { Component } from 'react';
import { View, Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';

class EmployeeForm extends Component {
    render() {
        return (
            <View>
                <CardSection>
                    <Input
                        value={this.props.name}
                        label={'Name'}
                        placeholder={'Sabrina'}
                        onChangeText={(value) => this.props.employeeUpdate({ prop: 'name', value })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        value={this.props.phone}
                        label={'Phone'}
                        placeholder={'555-55-55'}
                        onChangeText={(value) => this.props.employeeUpdate({ prop: 'phone', value })}
                    />
                </CardSection>
                <CardSection>
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                    <Picker
                        style={{ flex: 1 }}
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
                    >
                        <Picker.Item label={'Monday'} value={'Monday'}/>
                        <Picker.Item label={'Tuesday'} value={'Tuesday'}/>
                        <Picker.Item label={'Wednesday'} value={'Wednesday'}/>
                        <Picker.Item label={'Thursday'} value={'Thursday'}/>
                        <Picker.Item label={'Friday'} value={'Friday'}/>
                        <Picker.Item label={'Saturday'} value={'Saturday'}/>
                        <Picker.Item label={'Sunday'} value={'Sunday'}/>
                    </Picker>
                </CardSection>
            </View>
        );
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20,
        alignSelf: 'center'
    }
};

const mapStateToProps = state => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
import React from 'react';
import { Text, View, StatusBar, SafeAreaView, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { CustomHeader } from '../components/Header';
import { homeString, ADD_CAT } from '../commons/Strings';
import HomeStyle from '../style/HomeStyle';
import AsyncStorage from '@react-native-community/async-storage';
import * as action from '../actions/AddCat'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

import { connect } from 'react-redux';
import Modal from 'react-native-modal';
import AddCatsStyle from '../style/AddCatsStyle';
import { CustomTextInput } from '../components/CustomTextInput';
import TextInputStyles from '../style/TextInputStyles';
import { storecCat } from '../commons/Methods';
var arr = []
var k = 0
class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [],
            isModalVisible: false,
            name: '',
            breed: '',
            desc: '',
        }
    }
    async componentDidMount() {
        const val = await AsyncStorage.getItem(ADD_CAT)
        let value
        this.state.data = []
        if (val !== null) {
            value = JSON.parse(val)
            arr = [...value]
            this.setState({ data: value })
           
        }
        const { navigation } = this.props; this.focusListener = navigation.addListener("focus", async () => {
            const val = await AsyncStorage.getItem(ADD_CAT)
            let value
            this.state.data = []
            if (val !== null) {
                value = JSON.parse(val)
                arr = [...value]
                this.setState({ data: value })
             
            }   


        });
    }
    //Function For Deleting Cat
    deleteCat = (ind) => {
        try {


            const { addCat } = this.props
            this.setState({

                data: this.state.data.filter((item, index) => index != ind)
            })
            data = { key: ADD_CAT, object: JSON.stringify(this.state.data.filter((item, index) => index != ind)) }

            addCat(data).then((res) => {

            })
        } catch (error) {

        }

    }
    //Function for showing modal for editing
    toggleModal = (item) => {
        this.setState({ isModalVisible: !this.state.isModalVisible, name: item.name, breed: item.breed, desc: item.desc });
    };
    //Function for editing data
    onEdit = (index) => {
        const { addCat } = this.props
        let data
        this.state.data[index] = { name: this.state.name, breed: this.state.breed, desc: this.state.desc }
        data = { key: ADD_CAT, object: JSON.stringify(this.state.data) }
        addCat(data).then((res) => {
            this.setState({ isModalVisible: false, data: this.state.data })
            alert('Data Updated Successfully')
        })
    }
    render() {
        return <View style={HomeStyle.container}>

            <StatusBar barStyle="light-content"></StatusBar>
            <SafeAreaView style={HomeStyle.safeAreaStyles} ></SafeAreaView>
            {CustomHeader(homeString)}

            <FlatList
                extraData={this.state}
                data={this.state.data}
                keyExtractor={item => k + 1}
                renderItem={({ item, index }) => (
                    <View>
                        <Modal isVisible={this.state.isModalVisible}>
                            <View style={HomeStyle.modalContainer}>
                                <CustomTextInput value={this.state.name} onChangeText={(text) => this.setState({ name: text })} placeholder={'Tom...'} title={'Cat Name'}></CustomTextInput>
                                <CustomTextInput value={this.state.breed} onChangeText={(text) => this.setState({ breed: text })} placeholder={'Breed...'} title={'Breed'}></CustomTextInput>



                                <Text style={TextInputStyles.headingText}>Description</Text>
                                <View style={TextInputStyles.desContainer}>
                                    <TextInput value={this.state.desc} onChangeText={(text) => this.setState({ desc: text })} placeholder={'Description...'} style={TextInputStyles.textInput} ></TextInput>
                                </View>
                                <TouchableOpacity onPress={() => this.onEdit(index)} style={AddCatsStyle.addButton}>
                                    <Text style={AddCatsStyle.addButtonText}>Submit</Text>
                                </TouchableOpacity>
                            </View>
                        </Modal>
                        <View style={HomeStyle.listContainer}>
                            <Text style={HomeStyle.nameText}>{(index + 1) + '. ' + item.name + '(' + item.breed + ')'}</Text>
                            <Text style={HomeStyle.descriptionText}>     {item.desc}</Text>


                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <TouchableOpacity onPress={() => this.deleteCat(index)} style={HomeStyle.editStyle}>
                                <Text style={HomeStyle.editTextStyle} >Remove</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.toggleModal(item)} style={HomeStyle.editStyle}>
                                <Text style={HomeStyle.editTextStyle} >Edit</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={HomeStyle.divider}></View>
                    </View>

                )}
            />
        </View>
    }
}
const mapDispatchToProps = dispatch => ({
    addCat: (data) => dispatch(action.saveCats(data))
})
export default connect(null, mapDispatchToProps)(Home)
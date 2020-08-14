import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white'

    },
    safeAreaStyles: {
        backgroundColor: 'blue'
    },
    listContainer: { backgroundColor: 'white', height: hp('8%'), width: wp('100%') },
    divider: { width: '100%', height: 1, backgroundColor: 'gray' },
    nameText: {
        marginTop: 10,
        width: '99%',
        color: 'black',
        alignSelf: 'center',
        fontWeight: '600',
        fontSize: 14,
    },
    descriptionText: {
        width: '99%',
        fontSize: 12,
        alignSelf: 'center',

    },
    editStyle:
    {
        height: hp('4%'),
        width: hp('10%'),
        backgroundColor: 'blue',
        borderRadius: 10,
        alignSelf: 'center',
        margin: 5,
        justifyContent: 'center'
    },
    modalContainer:
    {
        height: hp('50%')
        , width: '90%'
        , backgroundColor: 'white'
        , alignSelf: 'center'
        , marginTop: hp('15%')
    },


    editTextStyle:
    {
        color: 'white',
        fontWeight: '700',
        fontSize: 12,
        alignSelf: 'center'
    }


})
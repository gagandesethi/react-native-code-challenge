import AsyncStorage from '@react-native-community/async-storage';
export async function storecCat(data){
    await AsyncStorage.setItem(data.key, data.object)
    return data.object
}
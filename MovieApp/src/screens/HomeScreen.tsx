import React, { useEffect } from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { useMovies } from '../hooks/useMovies';


export const HomeScreen = () => {
    const {peliculasEnCine, isLoading} = useMovies();


    if (isLoading){
        <view style={{flex:1, justifyContent: 'center', alignContent: 'center'}}>
            <ActivityIndicator color='red' size={100}></ActivityIndicator>
        </view>
    }
    return (
        <View>
            <Text>HomeScreen</Text>
        </View>
    )
}

import React, { useEffect } from 'react'
import { Dimensions } from 'react-native';
import { ActivityIndicator, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';

import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';

const {width: windowWidth } = Dimensions.get('window');
export const HomeScreen = () => {
    const {peliculasEnCine, isLoading} = useMovies();
    const {top} = useSafeAreaInsets();

    if (isLoading){
        return (
            <View style={{flex:1, justifyContent: 'center', alignContent: 'center'}}>
                <ActivityIndicator color='red' size={100}></ActivityIndicator>
            </View>
        )
    }
    return (
        <View style={{ marginTop : top + 20 }}>
            {/* <MoviePoster
                movie={ peliculasEnCine[0] } 
            /> */}
            <View style={{
                height: 440,
            
            }}>
                <Carousel 
                    data={peliculasEnCine}
                    renderItem={ ({item}: any) => <MoviePoster movie={item}/>}
                    itemWidth={300}
                    sliderWidth={windowWidth}
                />
            </View>
        </View>
    )
}

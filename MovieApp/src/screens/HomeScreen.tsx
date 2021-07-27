import React, { useEffect } from 'react'
import { Dimensions, FlatList, ScrollView } from 'react-native';
import { ActivityIndicator, Text, View } from 'react-native'
//import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';

import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';

const {width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {
    const {peliculasEnCine, peliculasPopulares, isLoading} = useMovies();
    const {top} = useSafeAreaInsets();

    if (isLoading){
        return (
            <View style={{flex:1, justifyContent: 'center', alignContent: 'center'}}>
                <ActivityIndicator color='red' size={100}></ActivityIndicator>
            </View>
        )
    }
    return (

        <ScrollView>
        <View style={{ marginTop : top + 20 }}>
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

            {/* Peliculas populares */}
            <HorizontalSlider title="En Cine" movies={peliculasEnCine}/>
            <HorizontalSlider title="Populares" movies={peliculasPopulares}/>
        </View>
        </ScrollView>
    )
}

import React, { useEffect } from 'react'
import { Dimensions, FlatList, ScrollView } from 'react-native';
import { ActivityIndicator, Text, View } from 'react-native'
//import { ScrollView } from 'react-native-gesture-handler';
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

        <ScrollView>
        <View style={{ marginTop : top + 20 }}>
            {/* <MoviePoster
                movie={ peliculasEnCine[0] } 
            /> */}

            {/*Carousel Principal*/}
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
            <View
                style={{backgroundColor: 'red', height: 250 }}
            >
                <Text style={{fontSize:30, fontWeight: 'bold'}}>
                    En Cine
                </Text>
                <FlatList
                    data={peliculasEnCine}
                    renderItem={ ( { item }: any) => (
                        <MoviePoster 
                            movie={ item }
                            height={ 200 }
                            width={ 140 } 
                        />
                    )}
                    keyExtractor={ (item)=> item.id.toString() }
                    horizontal={ true }
                    showsHorizontalScrollIndicator={ false }
                ></FlatList>
            </View>
        </View>
        </ScrollView>
    )
}

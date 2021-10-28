import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View, Image, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { RootStackParams } from '../navigation/Navigation';
import { Movie } from '../interfaces/movieInterface';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useMovieDetails } from '../hooks/useMoviesDetails';
import { MovieDetails } from '../components/MovieDetails';
const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'>{};


export const DetailScreen = ({route}: Props) => {
    
    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path}`;

    const {isLoading, cast, movieFull} = useMovieDetails(movie.id);

    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                <View style={styles.imageBorder}>
                     <Image
                        source ={{uri}}
                        style={styles.posterImage}
                    />
                </View>
            </View>

            <View style={styles.marginContainer}>
                <Text style={ styles.subTitle } >{ movie.original_title}</Text>
                <Text style={ styles.title } >{ movie.title}</Text>
            </View>

            <View style={{}}>
                {isLoading 
                    ? <ActivityIndicator size={30} color='grey' style = {{marginTop: 20}}/> 
                    : <MovieDetails movieFull = {movieFull!} cast={cast}/>
                }
                
                {/* <Icon
                    name='star-outline'
                    color='grey'
                    size={ 20 }
                /> */}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    imageContainer:{
        width: '100%',
        height: screenHeight * 0.7,
        //overflow:'hidden',
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 9,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25
    },
    imageBorder: {
        flex: 1,
        overflow:'hidden',
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25
    },
    posterImage: {
        flex: 1,
        //borderBottomEndRadius: 25
    },
   
    marginContainer:{
        marginHorizontal: 20,
        marginTop: 20,
    },
    subTitle:{
        fontSize: 16,
        opacity: 0.8,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    }

})  
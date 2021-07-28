import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Image, Text, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';

//recibir toda la pelicula
interface Props {
    movie: Movie;
    height?: number;
    width?: number;
}

export const MoviePoster = ({movie, height=420, width=300}: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            activeOpacity={ 0.8 }  
            onPress={() => navigation.navigate('DetailScreen', movie)}
            style={{
                width, 
                height, 
                marginHorizontal: 5,
            }}>
            <View style={styles.imageContainer}>
                <Image
                    source ={{uri}}
                    style={ styles.image }
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18,
                
    },
    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 10,
    }

});

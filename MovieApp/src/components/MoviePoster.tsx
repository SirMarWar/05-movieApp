import React from 'react'
import { StyleSheet } from 'react-native';
import { Image, Text, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';

//recibir toda la pelicula
interface Props {
    movie: Movie;
}

export const MoviePoster = ({movie}: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    console.log(uri);
    return (
        <View style={{
                width: 300, 
                height: 420, 
            }}>
            <View style={styles.imageContainer}>
                <Image
                    source ={{uri}}
                    style={ styles.image }
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        //width: 100,
        //height: 100,
        flex: 1,
        borderRadius: 18,
                
    },
    imageContainer: {
        flex: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.24,
        shadowRadius: 3.84,
        elevation: 10,
    }

});

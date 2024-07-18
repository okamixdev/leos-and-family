import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';





export default function Profile() {
    const insets = useSafeAreaInsets();
    const loads = [
        {
            id: 1,
            from: 'San Antonio',
            to: 'Dallas',
            date: '07/20/2024',
            time: '6:00 PM',
            location: '673 Pasadena Drive, Laredo, TX'
        },
        {
            id: 2,
            from: 'Laredo',
            to: 'Dallas',
            date: '07/20/2024',
            time: '6:00 PM',
            location: '673 Pasadena Drive, Laredo, TX'
        },
        {
            id: 3,
            from: 'Laredo',
            to: 'San Antonio',
            date: '07/20/2024',
            time: '6:00 PM',
            location: '673 Pasadena Drive, Laredo, TX'
        },
        {
            id: 4,
            from: 'Dallas',
            to: 'San Antonio',
            date: '07/20/2024',
            time: '6:00 PM',
            location: '673 Pasadena Drive, Laredo, TX'
        }
    ]
    return (
        <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 40, color: 'white' }}>John Doe</Text>
            <Image
                source={{ uri: 'https://robohash.org/mail@ashallendesign.co.uk' }}
                style={styles.image}
            />
            <Text style={{ fontSize: 30, color: 'white' }}>My Loads</Text>
            <View style={styles.container}>
                <ScrollView>
                    {loads.map((load) => {
                        console.log(load);
                        <Text style={{ color: 'black', fontSize: 30 }}>{load.from} {load.to}</Text>
                    })}
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        width: 400,
        borderRadius: 20,
        marginVertical: 20
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        backgroundColor: 'white',
        borderRadius: 50,
        padding: 20,
        marginVertical: 20,
        marginBottom: 50
    }
});

import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity,
    ScrollView
} from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function DetectTextInImage({ navigation }) {

    // State to hold the selected image 
    const [image, setImage] = useState(null);

    // State to hold extracted text 
    const [extractedText, setExtractedText] =
        useState("");

    // Function to pick an image from the  
    // device's gallery 
    const pickImageGallery = async () => {
        let result =
            await ImagePicker.launchImageLibraryAsync({
                mediaTypes:
                    ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                base64: true,
                allowsMultipleSelection: false,
            });
        if (!result.canceled) {

            // Perform OCR on the selected image 
            performOCR(result.assets[0]);

            // Set the selected image in state 
            setImage(result.assets[0].uri);
        }
    };

    // Function to capture an image using the  
    // device's camera 
    const pickImageCamera = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            base64: true,
            allowsMultipleSelection: false,
        });
        if (!result.canceled) {

            // Perform OCR on the captured image 
            // Set the captured image in state 
            performOCR(result.assets[0]);
            setImage(result.assets[0].uri);
        }
    };

    // Function to perform OCR on an image  
    // and extract text 
    const performOCR = (file) => {
        let myHeaders = new Headers();
        myHeaders.append(
            "apikey",

            // ADDD YOUR API KEY HERE  
            "FEmvQr5uj99ZUvk3essuYb6P5lLLBS20"
        );
        myHeaders.append(
            "Content-Type",
            "multipart/form-data"
        );

        let raw = file;
        let requestOptions = {
            method: "POST",
            redirect: "follow",
            headers: myHeaders,
            body: raw,
        };

        // Send a POST request to the OCR API 
        fetch(
            "https://api.apilayer.com/image_to_text/upload",
            requestOptions
        )
            .then((response) => response.json())
            .then((result) => {

                // Set the extracted text in state 
                setExtractedText(result["all_text"]);
            })
            .catch((error) => console.log("error", error));
    };

    return (
        <View>
            <View>
                <TouchableOpacity style={styles.topContainer} onPress={() => navigation.navigate('Home')}>
                    <Image source={require('../assets/back.png')} style={styles.backbanner}></Image>
                    <Text style={styles.banner}>
                        Detect text in image
                    </Text>
                </TouchableOpacity>
            </View>

            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.heading}>
                        Image To Text
                    </Text>
                    <View style={styles.button}>
                        <TouchableOpacity style={styles.btn}
                            onPress={pickImageGallery}
                        >
                            <Text style={styles.textBtn}>Pick an image from gallery</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.button}>
                        <TouchableOpacity style={{ ...styles.btn, ...styles.aquaColor }}
                            onPress={pickImageCamera}
                        >
                            <Text style={styles.textBtn}>Pick an image from camera</Text>
                        </TouchableOpacity>
                    </View>

                    {image && (
                        <Image
                            source={{ uri: image }}
                            style={{
                                width: 400,
                                height: 300,
                                objectFit: "contain",
                            }}
                        />
                    )}

                    <Text style={styles.text1}>
                        Extracted text:
                    </Text>
                    <Text style={styles.text1} selectable={true}>
                        {extractedText}
                    </Text>
                    <StatusBar style="auto" />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    topContainer: {
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: 20,
        alignItems: 'center',
    },
    banner: {
        marginLeft: 20,
        marginTop: 50,
        fontSize: 30,
        fontWeight: 'bold',
    },
    backbanner: {
        // verticalAlign:'middle',
        marginLeft: 20,
        marginTop: 50,
    },
    container: {
        display: "flex",
        // alignContent: "center", 
        // alignItems: "center", 
        // justifyContent: "space-evenly", 
        height: 'auto',
        marginBottom:200
    },
    heading: {
        fontSize: 40,
        fontWeight: "bold",
        marginBottom: 10,
        color: "green",
        textAlign: "center",
    },
    text1: {
        fontSize: 20,
        marginBottom: 10,
        color: "black",
        fontWeight: "bold",
        alignSelf: 'center',
        marginTop: 30
    },
    button: {
        marginTop: 30,
        alignSelf: 'center'
    },
    btn: {
        backgroundColor: 'gold',
        width: 'auto', borderRadius: 15,
        padding: 10
    },
    textBtn: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    aquaColor: {
        backgroundColor: 'aqua',
    }
});
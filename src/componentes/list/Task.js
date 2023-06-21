import react from "react";
import {StyleSheet, View} from "react-native"

const Task = ({task}) => {
return(
    <View>
        <View>
            <Image source={{uri:task.urls.raw}}/>
            <Text>{task.alt_description}</Text>
        </View>
    </View>
)
}

const styles = StyleSheet.create({
    item:
})
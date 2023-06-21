import react, { useEffect, useState } from "react";
import { View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-web";

const ListComponent = (props) => {

    const [taskItems, setTaskItems] = useState([]);



    //Use effect => existe un cambio y tiene que actualizarse
    useEffect(() => {
        fetchData
    }, [])


    const fetchData = async () => {
        try {
            const response = fetch("https://api.unsplash.com/photos/?client_id=ZXjOAAdwefwfYGtyhjJmAerkWnGDxNNnEwTlnHkSqk4%27");
            const jsonData = await response.json();
            setTaskItems(
                jsonData
            )

        } catch (error) {
            console.error("Error", error)
        }
    }

    const Item = () => {
        return (
            <TouchableOpacity>

            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.taskWrapper}>
                <Text>Se lista:</Text>
                <View>
                    <FlatList>
                        data={taskItems}
                        renderItem={({ item, i }) => <Item task={item} i={i} />}
                    </FlatList>
                </View>

            </View>
            Hola
        </View>
    )
}


export default ListComponent
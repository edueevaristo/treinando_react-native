import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    formContext: {
        flex: 1,
        backgroundColor: "#ffffff",
        alignItems: "center",
        paddingTop: 30,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },

    form: {
        width: "100%",
        height: "auto",
        marginLeft: 20,
    },

    formLabel: {
        color: "#000000",
        fontSize: 18,
        paddingLeft: 20,
    },

    formInput: {
        width: "90%",
        borderRadius: 10,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },

    buttonCalculator: {
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#ff0043",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 30,
    },

    textButtonCalculator: {
        fontSize: 20,
        color: "white",
    },

    errorMessage: {
        fontSize: 12,
        color: "red",
        fontWeight: "bold",
        paddingLeft: 20,
    }
});

export default styles
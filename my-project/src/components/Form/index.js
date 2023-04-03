import React, { useState } from "react";
import { TextInput, View, Text, TouchableOpacity, Vibration, Pressable, Keyboard } from 'react-native'
import styles from "./style";
import ResultImc from "./ResultImc/";

export default function Form() {

    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageImc, setMessageImc] = useState("Preencha o peso e a altura.");
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");
    const [errorMessage, setErrorMessage] = useState(null);

    function imcCalculator() {
        let heightFormat = height.replace(",", ".")
        let weightFormat = weight.replace(",", ".")
        return setImc((weightFormat / (heightFormat * heightFormat)).toFixed(2));
    }

    function validationImc() {

        if (weight != null && height != null) {
            imcCalculator();
            setHeight(null);
            setWeight(null);
            setMessageImc("Seu Índice de Massa Corporal é igual a: ");
            setTextButton("Calcular Novamente");
            setErrorMessage(null);
            return;
        }

        verificationImc();
        setImc(null);
        setTextButton("Calcular");
        setMessageImc("Preencha o peso e a altura.");
    }

    function verificationImc() {

        Vibration.vibrate();
        if (imc == null) {
            setErrorMessage("Campo obrigatório*");
        }
    }

    return (
        <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                    style={styles.formInput}
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Digite sua Altura, Ex: 1.75"
                    keyboardType="numeric" />

                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>

                <TextInput
                    style={styles.formInput}
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="Digite seu peso, Ex: 75.2"
                    keyboardType="numeric" />

                {/* <Button
                    onPress={() => validationImc()}
                    title={textButton} /> */}
                <TouchableOpacity
                    style={styles.buttonCalculator}
                    onPress={() => validationImc()}>
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc} />
        </Pressable>
    );
}
import React from "react";
import { useState, useEffect } from 'react'
import BeautifulScreen from "./BeautifulScreen";
import AmazingNumberButton from './AmazingNumberButton';
//formulaire 
import { useForm } from "react-hook-form";
//import { getDatabase, ref, set } from "firebase/database";
import "firebase/auth"
import firebase from 'firebase/compat/app';


// Import the functions you need from the SDKs you need
import 'firebase/database';
// // import axios from "axios";
// import Resultat from "../models/Resultat";
// import ResultatService from "../service/resultat-service";
//import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getDatabase, ref, set } from "firebase/database";

import { initializeApp } from "firebase/app";
// import { getMessaging, getToken } from "firebase/messaging";
import "firebase/auth";

//import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Import the functions you need from the SDKs you need
import 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration


const firebaseConfig = {
    apiKey: "AIzaSyCEWB5yee9tr_cprjnOvMqg_LEXvWyiFJU",
    authDomain: "calculator-deuxieme.firebaseapp.com",
    projectId: "calculator-deuxieme",
    storageBucket: "calculator-deuxieme.appspot.com",
    // databaseURL: "https://calculator-deuxieme-default-rtdb.europe-west1.firebasedatabase.app/",
    messagingSenderId: "859773837128",
    appId: "1:859773837128:web:b8f9d1df41aa60bdcd1d7d"
};


const app = initializeApp(firebaseConfig);

const database = getDatabase();



























function Calculator () {

//     // useEffect(() => {
//     //     ResultatService.getResutat(1).then(input => setInput (input));
//     // }, []);
//   const createResult = () => {  
//     const resultatDB = firebase.database().ref("resultatDB");
//     const results = {
//         input
//     }
//       resultatDB.push(results)
//       setInput(''); 
// }

  

    function createResult(input) {
        const db = getDatabase();
        set(ref(db, 'input'), {
            input: input,
        });
    }





    const[input, setInput] = useState("0")
    const[curState, setCurState] = useState("")
    const[preState, setPreState] = useState("")
    const[operator, setOperator] = useState(null)
    const[total, setTotal] = useState(false)



    const inputNum = (e) => {
        if (curState.includes(".") && e.target.innerText === ".") return

        if (total) {
            setPreState("");
        }

        curState ? setCurState((pre) => pre + e.target.innerText)
            : setCurState(e.target.innerText);
        setTotal(false)
    };

    useEffect(() => {
        setInput(curState);
    }, [curState])


useEffect(() => {
    setInput("0");
}, [])
// ne rien assigner ligne 34 car c'est pour venir remplir l'imput


const operatorType = (e) => {
    setTotal(false)
    setOperator(e.target.innerText)
    if (curState === "") return;
    if (preState !== "") {
        equals();
    } else {
        setPreState(curState)
        setCurState("")
    }
}
const equals = (e) => {
    if (e?.target.innerText === "=") {
        setTotal(true)
    };

    let calc
    switch (operator) {
        case "/":
            calc = String(parseFloat(preState) / parseFloat(curState)
            );
            break;
        case "+":
            calc = String(parseFloat(preState) + parseFloat(curState)
            );
            break;
        case "X":
            calc = String(parseFloat(preState) * parseFloat(curState)
            );
            break;
        case "-":
            calc = String(parseFloat(preState) - parseFloat(curState)
            );
            break;
        default:
            return;

    }
    setInput("")
    setPreState(calc)
    setCurState("")
}


const minusPlus = () => {
    if (curState.charAt(0) === "-") {
        setCurState(curState.substring(1));
    } else {
        setCurState("-" + curState);
    }
}


const percent = () => {
    preState
        ? setCurState(String(parseFloat(curState) / 100 * preState))
        : setCurState(String(parseFloat(curState) / 100))
}


//Le set Input reviens a zero lors du reset
//SetCurState à 0 
const reset = () => {
    setPreState("");
    //    setCurState("0");
    setCurState("");
    setInput("0")
}









// gestion du formulaire
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => console.log(input);

    // // useEffect(() => {
    // //     fetch("https://dog.ceo/api/breeds/image/random")
    // //         .then(response => response.json())
    // //         // 4. Setting *dogImage* to the image url that we received from the response above
    // //         .then(data => setInput(data.message))
    // // }, [])
    
    // const db = firebase.firestore();
    // const createGroceryList = (userName) => {
    //     return db.collection('groceryLists')
    //         .add({
    //             created: firebase.firestore.FieldValue.serverTimestamp(),
    //             users: [{ name: userName }]
    //         });
    // };

        return (
        <div className="mere">
                <form className="mere2" onSubmit={handleSubmit(onSubmit)}>
            <BeautifulScreen 
                input={input}
                preState={preState}>
            </BeautifulScreen>
            <AmazingNumberButton
                reset={reset}
                percent={percent}
                minusPlus={minusPlus}
                operatorType={operatorType}
                inputNum={inputNum}
                equals={equals}>
            </AmazingNumberButton>
            <button type='submit' 
                onClick={createResult}> Enregistrer 
            </button>
            </form>
        </div>
        );
   
}
export default Calculator;
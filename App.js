import { useState } from "react";
import { StyleSheet, View, Text, Button,TextInput } from "react-native";

export default function App(){
  
  const [goals, setGoals] = useState("")
  const [lisArr, setListArr] = useState([])

  function handleTextChange(text){
    setGoals(text)
  }
  function listHandler(){
    setListArr(prev=> [...prev, goals])

  }

  
  return(
    <View style={styles.container}>
        <Text>Day today Goals </Text>
        <View style={styles.textInput}>        
        <TextInput style={styles.input} placeholder="Enter your goals.." onChangeText={handleTextChange}></TextInput>
        <Button title="Submit Goals" onPress={listHandler} />
        </View>
        <View style={styles.borderCover}></View>
        <View>
          <Text> Your Goals..</Text>
        </View>
        <View style={styles.keyAnswers}>
          {lisArr.map((elem,index)=>{
            return(
              <Text key={index} style={styles.paddingRendered}>
                {elem}
              </Text>
            )
          })}

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginTop : 70,
  },
  textInput:{
  flexDirection: "row",
  justifyContent: "space-around",
  paddingTop : 20,
  paddingBottom : 20,
},
  input:{
    borderWidth : 1,
    borderColor: "black",
    width: "60%"
  },
  borderCover :{
    borderBottomWidth : 1,
    borderBottomColor : "black",
    width : "100%"
  },
  keyAnswers:{
    marginTop: 30,
    marginLeft: 30,
  },
  paddingRendered: {
    paddingTop: 20
  }
})

import React from "react";
import { FlatList, StyleSheet, Text, View, StatusBar, Button, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useState, useEffect } from "react";
import axios from 'axios';



const AgreeContainer =()=>{
  const styles = StyleSheet.create({
        container: {
            // flex: 1,
            paddingLeft: 25,
            paddingRight: 25,
            marginTop: 15,
            alignItems: 'center',
            justifyContent: 'center',
          },
        
          hapBox: {
            backgroundColor: '#EFEFEF',
            width: 90,
            padding: 3,
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'flex-end',
            marginBottom: 12,
            marginTop: 5,
          },
          hap:{
            fontSize: 10
          },
          goRight: {
            alignItems: 'flex-end'
          },
          textBox:{
            marginTop: 10,
            marginBottom: 3,
            padding: 20,
            height: "100%",
            // backgroundColor: 'pink',
            // flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          },
          text:{
            fontSize: 17,
            color: 'black',
            fontWeight: '900',
            // marginLeft: '20%'
          },
          vs:{
            
          },
          contentBox:{
            backgroundColor: 'white',
            // flex: 5,
            flexShrink: 1,
            flexBasis: '0%',
            flexGrow: 1,
            padding: 15,
            borderRadius: 15,
            
            // css에서 하던 shadow와 비슷하지만 사용 방법이 다름 
            // ios는 아래 방법 대로, android는 두 번째 방법 대로 설정해 줘야 함
            ...Platform.select({
              ios:{
                shadowColor: '#B3B3B3',
                shadowOffset: {width: 2, height: 2, },
                shadowOpacity: 0.2,
                shadowRadius: 10,
              },
              android:{
                elevation: 20,
              }
            })
        
          },
          AgreeButton:{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
            marginBottom: 10,
            height: 50
          },
          deadLineBox:{
            alignItems: 'center',
            justifyContent: 'center',
          },
          goodImage:{
            width: 30,
            height: 30
          },
          badImage:{
            width: 30,
            height: 30
          },
          AgreeBox:{
            alignItems: 'center',
            justifyContent: 'center',
          },
          disAgreeBox:{
            marginLeft: 30,
            alignItems: 'center',
            justifyContent: 'center',
          },
          Agree:{
            fontSize: 10,
            margin: 3,
            fontWeight: '600'
          },
          disAgree:{
            fontSize: 10,
            margin: 3,
            fontWeight: '600'
          },
          deadLineText:{
            color: '#B3B3B3',
            fontSize: 10,
            marginBottom: 30
          }
    });
    
    
    // const [data, setData] = useState([
    //   { id: '1', text1: '송강호 떡 사주기 \n vs \n송강 떡 사주기', state: 1},

    // ]);

    const [message, setMessage] = useState('');

  //   useEffect(() => {
  //   // AgreeContainer 엔드포인트로 GET 요청 보내기
  //   fetch('http://localhost:3001/AgreeContainer')
  //     .then(response => response.json())
  //     .then(data => {
  //       // 서버에서 전송한 데이터를 처리
  //       setMessage(data.message);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //       setMessage('서버와의 통신 중 오류가 발생했습니다.');
  //     });
  // }, []);
    const randomText = ({ item }) => (
      <View style={styles.textBox}> 
        <Text style={styles.text}>{item.text}</Text>
      </View>
    )

    return(
        <View style={[styles.container,{flexDirection: 'row',}]}>
      

          <View style={styles.contentBox}>
            <View style={styles.goRight}>
              <View style={styles.hapBox}>
                <Text style={styles.hap}>현재 n명 참여</Text>
              </View>
            </View>
        
            {/* <ScrollView style={styles.textBox}> */}
            {/* // 서버로 전송 받은 채팅 데이터 화면에 출력 */}
            <FlatList
            // data={message}
             renderItem={randomText}
             keyExtractor={(item) => item.id}
            >
            </FlatList>
            
            {/* </ScrollView> */}

            <View style={styles.AgreeButton}>
              <TouchableOpacity style={styles.AgreeBox} >
                <Image style={styles.goodImage} source={require('../../assets/good.png')}></Image>
                  <Text style={styles.Agree}>뭐라</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.disAgreeBox} >
                <Image style={styles.badImage} source={require('../../assets/bad.png')}></Image>
                  <Text style={styles.disAgree}>하지</Text>
              </TouchableOpacity>
            </View>

              <View style={styles.deadLineBox}>
                <Text style={styles.deadLineText}>n일 뒤에 종료됩니다.</Text>
              </View>
              </View>
            <StatusBar style="auto" />
      </View>
    )
}

export default AgreeContainer;
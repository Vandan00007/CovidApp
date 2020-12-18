import firebase from 'firebase';
import { TouchableHighlightBase } from 'react-native';

class backend{
    uid='';
    messagesRef = null;

    Constructor() {
        firebase.initializeApp({
        apiKey: "AIzaSyBZZ9g1SmCK-DPBBfbsvXFJYxYUf4vKyLw",
    authDomain: "covidapp-c3996.firebaseapp.com",
    projectId: "covidapp-c3996",
    storageBucket: "covidapp-c3996.appspot.com",
    messagingSenderId: "121533892176",
    appId: "1:121533892176:web:1044e139e6d3e368963355"
        });
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setUid(user.uid);

            }else{
                firebase.auth().signInAnonymously().catch((error) => {
                    alert(error.message)
                });
            }
        })

    }
    setUid(value) {
        this.uid =value;

    }
    getUid(){
        return this.uid;
    }
    loadMessages(callback){
        this.messageRef = firebase.database().ref('messages');
        this.messageRef.off();
        const onReceive = (data) => {
            const message = data.val();
            callback({
                _id: data.key,
                text: message.text,
                createdAt: new Date(message.createdAt),
                user: {
                    id: message.user.id,
                    name: message.user.name,
                }
            })
        };
        this.messageRef.limitToLast(20).on('child_added', onReceive);

    }
}
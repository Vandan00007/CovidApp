import React, { Component } from'react';
import {GiftedChat} from 'react-native-gifted-chat';
import {
    View,
    Text,

} from 'react-native';

import App from './src/App';
import Backend from '../components/backend';

AppRegistry.registerComponent('ChatApp', () => App);

export default class Chat extends React.Component{
    state = {
        messages:[]
    };
    componentWillMount(){
        
    }
    rennder(){
        return(
        <GiftedChat
        messages={this.state.messages}
        onSend={(message) => {
            Backend.sendMessage(message);
         }}
        user={{
            _id:Backend.getUid(),
            name: this.props.name,
        }}
        />
        );
    }


ComponentDidMount() {
    Backend.loadMessages((message) => {
        this.setState((previousState) => {
            return{
                messages: GigtedChat.appennd(previousState.messages, message),

            }
        })
    })
}
componentWillUnmount() {
    Backend.closeChat();

}
}
Chat.defaultProps = {
    name: 'John',

}
Chat.propTypes = {
    name: React.propTypes.string,

};

export default Chat;
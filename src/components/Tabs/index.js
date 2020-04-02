import React from 'react';

import { Container, TabsContainer, TabItem, TabText } from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Header({translateY}) {
    return(
        <Container style={{
            transform: [{
                translateY: translateY.interpolate({
                    inputRange: [0, 380],
                    outputRange: [0, 30],
                    extrapolate: 'clamp',
                })
            }],
            opacity: translateY.interpolate({
                inputRange: [0, 380],
                outputRange: [1, 0.3],
                extrapolate: 'clamp',
            })
        }}>
            <TabsContainer>
                <TabItem>
                    <Icon name="person-add" size={24} color="#FFF" />
                    <TabText>Indicar amigos</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="person-add" size={24} color="#FFF" />
                    <TabText>Indicar amigos</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="person-add" size={24} color="#FFF" />
                    <TabText>Indicar amigos</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="person-add" size={24} color="#FFF" />
                    <TabText>Indicar amigos</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="person-add" size={24} color="#FFF" />
                    <TabText>Indicar amigos</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="person-add" size={24} color="#FFF" />
                    <TabText>Indicar amigos</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="person-add" size={24} color="#FFF" />
                    <TabText>Indicar amigos</TabText>
                </TabItem>
            </TabsContainer>
        </Container>
    );
}
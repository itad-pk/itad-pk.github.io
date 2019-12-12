import React from 'react';
import { View, Mask, Animation, Button } from 'mdbreact';

export default class Hero extends React.Component {
    render() {
        return (
            <div className="hero" id="home">
                <View className="random" src={require("../photos/background.jpg")}>
                    <Mask overlay="stylish-strong" style={{ flexDirection: "column" }} className="flex-center text-white text-center">
                        <h1>Dzień IT Politechniki Krakowskiej<span>22.01.2020</span></h1>
                        <Animation className="mt-4" type="pulse slow" infinite>
                            <Button href="https://evenea.pl/event/itadpk2020/" target="_blank" size="lg" color="info">
                                Dołącz do wydarzenia
                            </Button>
                        </Animation>
                    </Mask>
                </View>
            </div>
        );
    }
} 
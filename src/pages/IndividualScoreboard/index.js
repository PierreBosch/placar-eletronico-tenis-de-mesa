import React, { useState } from 'react';

import { Container, Score, ScoreContainer, ScoreActions, Serve, Wrap } from './styles';

export default function IndividualScoreboard() {

    let [playerOneScore, setPlayerOneScore] = useState(0);
    let [playerTwoScore, setPlayerTwoScore] = useState(0);
    let [playerOneName, setPlayerOneName] = useState(null);
    let [playerTwoName, setPlayerTwoName] = useState(null)
    let [serveCount, setServeCount] = useState(1);
    let [serve, setServe] = useState(true);
    let [invert, setInvert] = useState(true);

    function setPoint(player, sum = true) {
        if (playerOneScore >= 10 && playerTwoScore >= 10) {
            if ((playerOneScore - playerTwoScore === 2) || (playerTwoScore - playerOneScore === 2)) {
                setPlayerOneScore(0);
                setPlayerTwoScore(0);
                setServeCount(1);
                setServe(!serve);
                return;
            }
        }

        if ((playerOneScore === 11 && playerTwoScore < 10) || (playerTwoScore === 11 && playerOneScore < 10)) {
            setPlayerOneScore(0);
            setPlayerTwoScore(0);
            setServeCount(1);
            setServe(!serve);
            return;
        }

        if (player === 1) {
            const scoreOne = sum ? playerOneScore + 1 : playerOneScore - 1;
            if (scoreOne < 0) return;
            setPlayerOneScore(scoreOne)

        } else {
            const scoreTwo = sum ? playerTwoScore + 1 : playerTwoScore - 1;
            if (scoreTwo < 0) return;
            setPlayerTwoScore(scoreTwo)
        }

        if (playerOneScore >= 10 && playerTwoScore >= 10) {
            setServe(!serve);
            setServeCount(1);
            return;
        }


        if (serveCount % 2 === 0) {
            setServe(!serve);
            setServeCount(0);
        }

        setServeCount(serveCount + 1)

    }

    return (
        <Container>
            <Wrap>
                <ScoreContainer order={invert}>
                    <input placeholder="Jogador 1" onChange={(e) => setPlayerOneName(e.target.value)} />
                    <Score class="no-select" onClick={() => setPoint(1)}>
                        {playerOneScore}
                    </Score>
                    <Serve serve={serve}>
                        <span>SAQUE</span>
                    </Serve>
                </ScoreContainer>


                <ScoreActions>
                    <button onClick={() => { setInvert(!invert) }}>
                        Inverter
                    </button>
                    <button onClick={() => { setServe(!serve) }}>
                        Trocar Saque
                    </button>
                    <button onClick={() => { setPlayerOneScore(0); setPlayerTwoScore(0); setServeCount(1); setServe(!serve) }}>
                        Zerar Placar
                    </button>
                    <button onClick={() => { setPoint(1, false) }}>
                        Subtrair Placar de {playerOneName === null ? "Jogador 1" : playerOneName}
                    </button>
                    <button onClick={() => { setPoint(2, false) }}>
                        Subtrair Placar de {playerTwoName === null ? "Jogador 2" : playerTwoName}
                    </button>
                </ScoreActions>

                <ScoreContainer order={!invert}>
                    <input placeholder="Jogador 2" onChange={(e) => setPlayerTwoName(e.target.value)} />
                    <Score class="no-select" onClick={() => setPoint(2)}>
                        {playerTwoScore}
                    </Score>
                    <Serve serve={!serve}>
                        <span>SAQUE</span>
                    </Serve>
                </ScoreContainer>
            </Wrap>

        </Container>
    );
}

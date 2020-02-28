import React, { useState } from 'react';

import { Container, Score, ScoreContainer, ScoreActions, Serve, Wrap, InitContainer, Choice } from './styles';

export default function DoublesScoreboard() {

    let [playerOneScore, setPlayerOneScore] = useState(0);
    let [playerTwoScore, setPlayerTwoScore] = useState(0);
    let [playerOneName, setPlayerOneName] = useState(null);
    let [playerTwoName, setPlayerTwoName] = useState(null)
    let [serveCount, setServeCount] = useState(1);
    let [serve, setServe] = useState(true);
    let [invert, setInvert] = useState(true);
    let [a, setA] = useState(null);
    let [b, setB] = useState(null);
    let [c, setC] = useState(null);
    let [d, setD] = useState(null);
    let [saca, setSaca] = useState(null);
    let [recepciona, setRecepciona] = useState(null);
    let [init, setInit] = useState(true);


    function verifyDoublesServe() {

        if (saca === a && recepciona === d) {
            setSaca(d);
            setRecepciona(b)
        } else if (saca === d && recepciona === b) {
            setSaca(b);
            setRecepciona(c)
        } else if (saca === b && recepciona === c) {
            setSaca(c);
            setRecepciona(a)
        } else if (saca === c && recepciona === a) {
            setSaca(a);
            setRecepciona(d)
        } else if (saca === a && recepciona === c) {
            setSaca(c);
            setRecepciona(b)
        } else if (saca === c && recepciona === b) {
            setSaca(b);
            setRecepciona(d)
        } else if (saca === b && recepciona === d) {
            setSaca(d);
            setRecepciona(a)
        } else if (saca === d && recepciona === a) {
            setSaca(a);
            setRecepciona(c)
        }
    }

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
            verifyDoublesServe();
            setServe(!serve);
            setServeCount(1);
            return;
        }


        if (serveCount % 2 === 0) {
            verifyDoublesServe();
            setServe(!serve);
            setServeCount(0);
        }

        setServeCount(serveCount + 1)
    }

    return (
        <Container>
            {!init && (
                <Wrap>
                    <ScoreContainer order={invert}>
                        <input placeholder="DUPLA 1" defaultValue={a + "/" + b} onChange={(e) => setPlayerOneName(e.target.value)} />
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
                            Subtrair Placar de {playerOneName === null ? "DUPLA 1" : playerOneName}
                        </button>
                        <button onClick={() => { setPoint(2, false) }}>
                            Subtrair Placar de {playerTwoName === null ? "DUPLA 2" : playerTwoName}
                        </button>
                        <button onClick={() => { setPoint(2, false) }}>
                            SACA: {saca}
                        </button>
                        <button onClick={() => { setPoint(2, false) }}>
                            RECEPCIONA: {recepciona}
                        </button>
                    </ScoreActions>

                    <ScoreContainer order={!invert}>
                        <input placeholder="DUPLA 2" defaultValue={c + "/" + d} onChange={(e) => setPlayerTwoName(e.target.value)} />
                        <Score class="no-select" onClick={() => setPoint(2)}>
                            {playerTwoScore}
                        </Score>
                        <Serve serve={!serve}>
                            <span>SAQUE</span>
                        </Serve>
                    </ScoreContainer>
                </Wrap>
            )}

            {init && (
                <>
                    <InitContainer>
                        <div className="doubles-input-container">
                            <div className="input-container">
                                <p>Dupla 1</p>
                                <input type="text" placeholder="Jogador A" onChange={(e) => setA(e.target.value)} />
                                <input type="text" placeholder="Jogador B" onChange={(e) => setB(e.target.value)} />
                            </div>
                            <div className="input-container">
                                <p>Dupla 2</p>
                                <input type="text" placeholder="Jogador C" onChange={(e) => setC(e.target.value)} />
                                <input type="text" placeholder="Jogador D" onChange={(e) => setD(e.target.value)} />
                            </div>
                        </div>

                        <Choice>
                            <div>
                                <ul>
                                    <span style={{ color: "#fff" }}>Quem saca?</span>
                                    <li className={saca === a && a !== null ? 'selected' : null} onClick={() => setSaca(a)} style={{ color: "#fff" }}>{a}</li>
                                    <li className={saca === b && b !== null ? 'selected' : null} onClick={() => setSaca(b)} style={{ color: "#fff" }}>{b}</li>
                                    <li className={saca === c && c !== null ? 'selected' : null} onClick={() => setSaca(c)} style={{ color: "#fff" }}>{c}</li>
                                    <li className={saca === d && d !== null ? 'selected' : null} onClick={() => setSaca(d)} style={{ color: "#fff" }}>{d}</li>
                                </ul>

                                <ul>
                                    <span style={{ color: "#fff" }}>Quem recepciona?</span>
                                    <li className={recepciona === a && a !== null ? 'selected' : null} onClick={() => setRecepciona(a)} style={{ color: "#fff" }}>{a}</li>
                                    <li className={recepciona === b && b !== null ? 'selected' : null} onClick={() => setRecepciona(b)} style={{ color: "#fff" }}>{b}</li>
                                    <li className={recepciona === c && c !== null ? 'selected' : null} onClick={() => setRecepciona(c)} style={{ color: "#fff" }}>{c}</li>
                                    <li className={recepciona === d && d !== null ? 'selected' : null} onClick={() => setRecepciona(d)} style={{ color: "#fff" }}>{d}</li>
                                </ul>
                            </div>

                            <button onClick={() => setInit(false)}>Começar</button>
                        </Choice>
                    </InitContainer>
                </>

            )
            }
        </Container >
    );
}

import React, { useEffect, useState } from 'react'
import {
    useSupernowaAuthenticationMutation,
    useSupernowaCasinoGameListQuery
} from '../../Services/supernowa/SupernowaCasino'
import './style.scss'
import Loader from '../../component/Loader/Loader';
import { Box, Grid } from '@mui/material';
import ModalComponent from '../../component/modal/Modal';
import CasinoRuleModalContent from '../../component/casinoRuleModalContent/CasinoRuleModalContent';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
const SupernowaCasino = () => {
    const [gameName, setGameName] = useState('')
    const [isSupernowa, setIsSuperNowa] = useState(true)
    const [casinoRuleModal, setCasinoRuleModal] = useState(false);
    const { data: gameListData, isLoading } = useSupernowaCasinoGameListQuery({})
    const [authenticationTrigger, { data: authenticationdata }] = useSupernowaAuthenticationMutation()
    const nav = useNavigate();
    const handleSuperNowaClick = () => {
        setIsSuperNowa(false)
    }

    const handleClose = () => {
        setCasinoRuleModal(false);
    };

    const handlerClick = (gameCode, providerCode, gameN) => {
        setGameName(gameN)
        authenticationTrigger(
            {
                game: {
                    gameCode,
                    providerCode,
                },
                timestamp: Date.now(),
                user: {
                    backUrl: window.location.hostname,
                    currency: "INR"
                }
            }
        )
        setCasinoRuleModal(true)
    }

    const handlerGoBack = () => {
        handleClose()
    }

    const handlerNavigate = () => {
        nav('/')
    }

    return (

        <>
            {isLoading ? <Loader /> : <Grid container sx={{ justifyContent: 'space-between', paddingInline: '2px', gap: '2px' }}>
                <CloseIcon sx={{ padding: '10px 0', backgroundColor: '#B88831', color: '#ffffff', fontSize: 16, cursor: 'pointer', width: '100%', }} onClick={handlerNavigate} />
                {gameListData?.data?.games.map((games, index) => (
                    <Grid key={index} xs={5.9} md={2.9} item sx={{ cursor: 'pointer', overflow: 'hidden', }} onClick={() => handlerClick(games?.code, games?.providerCode, games?.name)}>
                        <img src={games?.thumb} alt='' style={{ objectFit: 'contain', width: '100%', height: '100%', }} />
                    </Grid>
                ))}
            </Grid>}

            <ModalComponent
                Elememt={
                    isSupernowa ? <CasinoRuleModalContent handleClose={handleClose}
                        gameName={gameName}
                        isSupernowa={isSupernowa}
                        handleSuperNowaClick={handleSuperNowaClick}
                    /> :
                        <>
                            <CloseIcon sx={{
                                padding: '10px 0', backgroundColor: '#B88831', color: '#ffffff',
                                fontSize: 16, cursor: 'pointer', width: '100%',
                            }} onClick={handlerGoBack} />
                            <iframe className='_iframe' src={authenticationdata?.data?.launchURL} frameborder="0" />
                        </>
                }
                open={casinoRuleModal}
                setOpen={setCasinoRuleModal}
            />
        </>

    )
}

export default SupernowaCasino
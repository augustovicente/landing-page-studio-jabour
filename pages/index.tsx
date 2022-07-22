import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'

const Home: NextPage = () => {
    // changin the title of the page
    useEffect(() => {
        document.title = 'Studio Jabour'
    }, []);

    return (
        <div className='page'>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
            </Head>
            <div className='section-1'>
                <div className='header'>
                    <div className='logo'>
                        <img src='/assets/imgs/logo.png' />
                    </div>
                    <div className='links'>
                        <a href="">Home</a>
                        <a href="">Serviços</a>
                        <a href="">Promoções</a>
                        <a href="">Contato</a>
                    </div>
                </div>
                <div className='content'>
                    
                </div>
            </div>
        </div>
    )
}

export default Home

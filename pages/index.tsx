import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import * as Scroll from 'react-scroll';


const Home: NextPage = () => {
    // changin the title of the page
    useEffect(() => {
        document.title = 'Studio Jabour'
    }, []);

    const promos = [
        {
            img: '/assets/imgs/promo-1.png',
            product: 'PROGRESSIVA',
            price: '90',
        },
        {
            img: '/assets/imgs/promo-2.png',
            product: 'BOTOX',
            price: '69',
        },
        {
            img: '/assets/imgs/promo-3.png',
            product: 'ESMALTAÇÃO EM GEL',
            price: '59',
        },
        {
            img: '/assets/imgs/promo-4.png',
            product: 'FIBRA DE VIDRO',
            price: '99',
        }
    ]

    return (
        <div className='page'>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
                <link href='https://fonts.googleapis.com/css?family=JetBrains Mono' rel='stylesheet' />
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
                    <span className='text-brand'>
                        STUDIOJABOUR
                    </span>
                    <span className='text-slogan'>
                        SINTA-SE BEM E FIQUE AINDA MAIS INCRÍVEL
                    </span>
                    <div className='check-service-btn'>
                       <span>VER SERVIÇOS</span>
                    </div>
                </div>
            </div>
            <div className='section-2'>
                <div className='content'>
                    <div className='left-div'>
                        <span className='header'>CABELO</span>
                        <span>CORTE</span>
                        <span>ESCOVA</span>
                        <span>OMBRE HAIR</span>
                        <span>LUZES</span>
                        <span>HIDRATAÇÃO</span>
                        <span>PROGRESSIVA</span>
                        <span>BOTOX</span>
                    </div>
                    <div className='right-div'>
                        <span className='header'>UNHAS</span>
                        <span>MANICURE</span>
                        <span>PEDICURE</span>
                        <span>ESMALTAÇÃO EM GEL</span>
                        <span>ALONGAMENTO FIBRA DE VIDRO</span>
                        <span>ALONGAMENTO EM GEL</span>
                    </div>
                </div>
            </div>
            <div className='section-3'>
                <div className='header'>
                    <span>APROVEITE AS PROMOÇÕES</span>
                </div>
                <div className='promos'>
                    {promos.map((promo, index) => (
                        <div className='promo' key={index}>
                            <img
                                src={promo.img}
                                className='the-img' 
                                alt={"Studio Jabur "+promo.product}
                            />
                            <div className='product'>
                                <span>{promo.product}</span>
                                <span>
                                    {(+promo.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='section-4'>
                <div className='center-content'>
                    <img src="/assets/imgs/footer.png" alt="Studio Jabour Logo Dourada" />
                    <div className='infos'>
                        <div className='info-contact'>
                            <span>ENTRE EM CONTATO</span>
                            <span>WHATSAPP</span>
                        </div>
                        <span className='info-question'>
                            QUER MARCAR <br/>
                            SEU HORÁRIO?
                        </span>
                    </div>
                </div>
                <div className='footer-content'>
                    <span>R. JULIO CESAR RIBEIRO, 415</span>
                    <span>ACESSE A LOCALIZAÇÃO</span>
                </div>
            </div>
        </div>
    )
}

export default Home

import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import * as Scroll from 'react-scroll';
import { Element, scroller, Link } from 'react-scroll'

const Home: NextPage = () => {
    // changin the title of the page
    useEffect(() => {
        document.title = 'Studio Jabour'
    }, []);
    const [sidebar_open, setSidebar_open] = useState(false);

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

    const scroll_services = () =>
    {
        scroller.scrollTo('section-2', {
            duration: 1000,
            delay: 0,
            smooth: true,
        })
    }

    return (
        <div className={'page '+(sidebar_open?'sidebar':'')}>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
                <link href='https://fonts.googleapis.com/css?family=JetBrains Mono' rel='stylesheet' />
            </Head>
            { sidebar_open && (<div className='sidebar-menu'>
                <div className='menu-item'>
                    <img src="/assets/imgs/close.svg" className='close' onClick={() => setSidebar_open(false)}/>
                    <Link
                        duration={1000}
                        smooth={true}
                        delay={500}
                        to={'section-1'} 
                        onClick={() => setSidebar_open(false)}
                    >
                        Home
                    </Link>
                    <Link
                        duration={1000}
                        smooth={true}
                        delay={500}
                        to={'section-2'} 
                        onClick={() => setSidebar_open(false)}
                    >
                        Serviços
                    </Link>
                    <Link
                        duration={1000}
                        smooth={true}
                        delay={500}
                        to={'section-3'} 
                        onClick={() => setSidebar_open(false)}
                    >
                        Promoções
                    </Link>
                    <Link
                        duration={1000}
                        smooth={true}
                        delay={500}
                        to={'section-4'} 
                        onClick={() => setSidebar_open(false)}
                    >
                        Contato
                    </Link>
                </div>
            </div>) }
            <Element name='section-1' className='section-1'>
                <div className='header'>
                    <div className='logo'>
                        <img src='/assets/imgs/logo.png' />
                    </div>
                    <div className='links'>
                        <Link duration={1000} smooth={true} delay={0} to={'section-1'}>Home</Link>
                        <Link duration={1000} smooth={true} delay={0} to={'section-2'}>Serviços</Link>
                        <Link duration={1000} smooth={true} delay={0} to={'section-3'}>Promoções</Link>
                        <Link duration={1000} smooth={true} delay={0} to={'section-4'}>Contato</Link>
                    </div>
                </div>
                <nav className='mobile-header'>
                    <div className='logo'>
                        <img src='/assets/imgs/logo.png' />
                    </div>
                    <div className='menu' onClick={() => setSidebar_open(true)}>
                        <img src='/assets/imgs/hamburguer.svg' />
                    </div>
                </nav>
                <div className='content'>
                    <span className='text-brand'>
                        STUDIOJABOUR
                    </span>
                    <span className='text-slogan'>
                        SINTA-SE BEM E FIQUE AINDA MAIS INCRÍVEL
                    </span>
                    <div className='check-service-btn'>
                       <span onClick={scroll_services}>VER SERVIÇOS</span>
                    </div>
                </div>
            </Element>
            <Element name='section-2' className='section-2'>
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
            </Element>
            <Element name='section-3' className='section-3'>
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
            </Element>
            <Element name='section-4' className='section-4'>
                <div className='center-content'>
                    <img src="/assets/imgs/footer.png" alt="Studio Jabour Logo Dourada" />
                    <div className='infos'>
                        <div className='info-contact'>
                            <span>ENTRE EM CONTATO</span>
                            <span onClick={() => window.open('https://api.whatsapp.com/send?phone=5543996463569', '_blank')}>
                                WHATSAPP
                            </span>
                        </div>
                        <span className='info-question'>
                            QUER MARCAR <br/>
                            SEU HORÁRIO?
                        </span>
                    </div>
                </div>
                <div className='footer-content'>
                    <span>R. JULIO CESAR RIBEIRO, 415</span>
                    <span onClick={() => window.open('https://goo.gl/maps/EaQoc1vstdnatxRU6', '_blank')}>
                        ACESSE A LOCALIZAÇÃO
                    </span>
                </div>
            </Element>

        </div>
    )
}

export default Home

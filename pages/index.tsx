import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
    // changin the title of the page
    useEffect(() => {
        document.title = 'Studio Jabour'
    }, [])
    return (
        <div className={styles.container}>
            
        </div>
    )
}

export default Home

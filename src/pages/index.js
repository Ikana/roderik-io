import React, { Fragment } from 'react'
import {Helmet} from 'react-helmet';
import styled from 'styled-components'

import Graph from '../components/Graph'

// import github from '../img/github-alt-brands.svg'

const Main = styled.main`
    background-color: #fefefe;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
`

const TextCont = styled.section`
    position: absolute;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Text = styled.section`
    font-size: 2rem;
`

const Logos = styled.section`
    a {
        &:not(:first-child) {
            margin-left: 2rem;
        }
    }
    img {
        width: 2.5rem;

    }
`

const social = [
    {alt: 'github profile', src: require('../img/github-alt-brands.svg'), url: 'https://github.com/ikana'},
    {alt: 'medium profile', src: require('../img/medium-m-brands.svg'), url: 'https://medium.com/@roderik.ikana'},
    {alt: 'instagram profile', src: require('../img/instagram-brands.svg'), url: 'https://www.instagram.com/quezada4637/'},
    {alt: 'twitter profile', src: require('../img/twitter-brands.svg'), url: 'https://twitter.com/rodikana'},
]

export default () => (<Fragment>
    <Helmet>
        <meta charSet="utf-8" />
        <title>rq</title>
        <link rel="canonical" href="https:/roderik.io" />
    </Helmet>
    <Main>
        <Graph />
        <TextCont>
            <Text>
                rodrigo quezada
            </Text>
            <Logos>
                {social.map(({ src, alt, url }) =>
                    <a key={src} href={url} target="_blank" rel="noopener noreferrer"><img src={src} alt={alt}/></a>
                )}
            </Logos>
        </TextCont>
    </Main>
</Fragment>)

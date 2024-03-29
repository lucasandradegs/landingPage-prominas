"use client";

import styled from "styled-components";

import { Krona_One } from 'next/font/google'

const krona = Krona_One({ weight: '400', style: 'normal', subsets: ['latin'] })

export const Container = styled.div`
    width: 18.75rem;
    height: 40.2rem;
    position: relative;
    overflow: hidden;

    @media (min-width: 1440px) {
        width: 36rem;
        height: 96.4rem;
    }

    .cardTitle {
        display: flex;
        justify-content: center;

        button {
            position: absolute;
            width: 12.7rem;
            height: 2rem;
            margin-top: 33.7rem;
            font-size: 1rem;
            border: 1px solid #FFF;
            border-radius: .6rem;
            background-color: transparent;
            color: #FFF;
            z-index: 1;
            cursor: pointer;
            transition: background-color 0.3s ease-in-out;

            &:hover {
                background-color: rgba(3, 3, 3, 0.5);
            }

            @media (min-width: 1440px) {
                
                margin-top: 82rem;
                width: 24.5rem;
                height: 4.7rem;
                font-size: 1.4rem;
                z-index: 1;

            }
        }

        .titleAndButton {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            @media (min-width: 1440px) {
            }

            h2 {
                margin-top: 27.8rem;
                text-transform: uppercase;
                font-size: 1.6rem;
                z-index: 1;
                color: white;
                transition: color 0.3s ease-in-out;


                @media (min-width: 1440px) {
                    margin-top: 68.9rem;
                    font-size: 3.2rem;
                }
            }

        }

        img {
            position: absolute;
            opacity: ${(props) => (props.theme.body === '#000' ? '50%' : '100%')};
            border-radius: .4rem;
            z-index: 0;
            transition: opacity 0.3s ease-in-out;
        }

        &:hover img {
            opacity: ${(props) => (props.theme.body === '#000' ? '100%' : '50%')};
        }
    }
`;

export function EigthSectionCard({ image, title }) {
    return (
        <Container>
            <div className="cardTitle">
                <img src={image} alt="Imagem do card" />
                <div className="titleAndButton">
                    <h2 className={krona.className}>{title}</h2>
                </div>
                    <button className={krona.className}>SAIBA MAIS</button>
            </div>
        </Container>
    )
}

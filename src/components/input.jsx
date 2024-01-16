"use client";

import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;


    > input {
        height: 2.2rem;
        width: 100%;

        padding: 1rem;

        border: 0;
        border-radius: .2rem;

        &::placeholder {
            color: #666464;
            font-size: 1.2rem;
        }
    }

`;

export function Input({icon: Icon, ...rest}) {
    return (
        <Container>
            {Icon && <Icon size={20}/>}
            <input {...rest} />
        </Container>
    )
}
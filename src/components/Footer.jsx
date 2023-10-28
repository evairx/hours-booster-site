import styled from "@emotion/styled"

const Content = styled.section` 
    border-top:1px solid rgb(173, 173, 173);
    padding: 1.5rem 2rem;
    font-weight:550;
    transition: all 0.2s;

    @media screen and (max-width: 550px){
        padding:1.5rem 1rem;
    }
`

export default function Footer() {
    return(
        <Content>
            <p>Copyright © HoursBooster</p>
        </Content>
    )
}
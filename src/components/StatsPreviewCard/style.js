import styled from "styled-components";

const CardContainer = styled.section `
    display: flex;

    width: 100%;
    max-width: 1150px;
    border-radius: 8px;
    overflow: hidden;
    background-color:  hsl(244, 38%, 16%);

    .card-content {
        height: 100%;
        
        display: flex;
        flex-direction: column;
        padding: 64px;
        padding-right: 80px;
    }

    .card-title {
        font-size: 2.375rem;
        font-weight: 700;
        letter-spacing: 1px;
        margin-bottom: 24px;
        color: hsl(0, 0%, 100%);
    }

    .title-emphasis {
        color: hsl(277, 64%, 61%);
    }

    .card-description {
        font-weight: 400;
        line-height: 1.5;
        letter-spacing: 0.081rem;
        padding-right: 58px;
        margin-bottom: 80px;
    }

    .card-stats-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-right: 76px;
    }

    .stats {
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        text-transform: uppercase;
        color: hsla(0, 0%, 100%, 0.6);
    }

    .stats-emphasis {
        font-family: 'Inter', sans-serif;
        font-size: 1.75rem;
        font-weight: 700;
        margin-bottom: 8px;
        display: block;
        color:  hsl(0, 0%, 100%);
    }

    .card-img {
        position: relative;
    }

    .bg-img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #550985;
        opacity: .6;
    }
    
    .card-img img {
        height: 100%;
        
    }

    @media screen and (max-width: 965px) {
        flex-direction: column-reverse;
        border-radius: 14px;

        .bg-img {
            height: 99.5%;
        }

        .card-img img {
            height: auto;
            width: 100%;
        }

        .card-content {
            text-align: center;
            padding: 24px;
        }

        .card-title {
            font-size: 1.75rem;
        }

        .card-description {
            font-size: 0.875rem;
            padding-right: 0;
            margin-bottom: 40px;
        }

        .card-stats-container {
            flex-direction: column;
            padding-right: 0;
            gap: 24px;
        }
    }


`

export default CardContainer
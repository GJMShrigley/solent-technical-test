import styled from 'styled-components';
import HeaderImage from 'Public/images/background.jpg';
import SearchIcon from 'Public/icons/seach.svg';
import EmailIcon from 'Public/icons/email.svg';
import DobIcon from 'Public/icons/dob.svg';
import PhoneIcon from 'Public/icons/phone.svg';
import ArrowIcon from 'Public/icons/circle-arrow.svg';

export const PageContainer = styled.div`
    height: 100vh;
`

export const HeaderContainer = styled.div`
    width: 100vw;
    height: 15rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(${HeaderImage});
    background-size: auto 130%;
    background-position: center;
    background-repeat: no-repeat;

    @media only screen and (min-width : 700px) {
        height: 18.7rem;
        background-size: cover;
    }
`

export const HeaderTitle = styled.h1`
    position: relative;
    top: .7rem;
    width: 17rem;
    font-family: Calibri, 'Trebuchet MS', sans-serif;
    font-size: 2.7rem;
    font-weight: 700;
    text-align: center;
    line-height: 2.5rem;
    color: #fff;

    @media only screen and (min-width : 700px) {
        top: 2rem;
        left: -1.3rem;
        width: 20rem;
        font-size: 3.2rem;
        font-weight: 700;
        text-align: left;
        line-height: 3rem;
    }
`

export const HeaderText = styled.p`
    position: relative;
    top: -1.5rem;
    font-family: Calibri, 'Trebuchet MS', sans-serif;
    color: #fff;

    @media only screen and (min-width : 700px) {
        top: -1rem;
        left: -4.6rem;
        font-weight: 300;
    }
`

export const HeaderInputContainer = styled.div`
    position: relative;
    top: -1.1rem;
    width: 85%;
    height: 2.4rem;

    @media only screen and (min-width : 700px) {
        top: -.4rem;
        left: 1%;
        width: 54vw;
        height: 1.9rem;
    }
`

export const HeaderInput = styled.input`
    border: none;
    border-radius: 6px;
    width: 100%;
    height: 100%;

    &::placeholder {
        padding-left: .4rem ; 
        font-weight: 500;
        letter-spacing: .02rem ; 
        color: #ddd;
    }

    @media only screen and (min-width : 700px) {
        border-radius: 3px;
        width: 90%;
        height: 100%;
    }
`

export const HeaderIcon = styled(SearchIcon)`
    position: absolute;
    top: .5rem;
    right: .8vw;
    width: 22px;
    height: 22px;

    @media only screen and (min-width : 700px) {
        top: .6rem;
        right: 7.2vw;
        width: 13px;
        height: 13px;
    }
`

export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 95vw;
    height: 90vh;
    
    @media only screen and (min-width : 700px) {
        height: 80vh;
}
`

export const ProfileElement = styled.div`
    position: relative;
    top: 1rem;
    left: .5rem;
    margin-bottom: 1.1rem;
    border: 1.8px solid #6d6d6d;
    border-radius: 3px;
    width: 90%;
    height: 8.5vh;
    min-height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;

    @media only screen and (min-width : 700px) {
        top: 2.2rem;
        left: .5rem;
        margin-bottom: .75rem;
        width: 51%;
        height: 4.5vh;
        min-height: 35px;
    }
`  

export const ProfileContainer = styled.div`
    position: relative;
    left: .3rem;
    height: 100%;
    display: flex;
    align-items: center;
`

export const ProfileImage = styled.img`
    border: 1px solid #6d6d6d;
    border-radius: 50%;
    width: auto;
    height: 5vh;
    min-height: 34px;

    @media only screen and (min-width : 700px) {
        height: 1vh;
        min-height: 30px;        
    }
`

export const ProfileName = styled.h1`
    position: relative;
    left: .3rem;
    font-family: Calibri, 'Trebuchet MS', sans-serif;
    font-size: .7rem;
    font-weight: 700;
    color: #6d6d6d;

    @media only screen and (min-width : 500px) {
        font-size: .9rem;
    }

    @media only screen and (min-width : 700px) {
        font-size: 1rem;
    }
`

export const ProfileArrow = styled(ArrowIcon)`
    position: relative;
    right: .5rem;
    width: auto;
    height: 25px;
    min-height: 25px;

    @media only screen and (min-width : 700px) {
        height: 3.2vh;
        min-height: 22px;
    }
`

export const ModalElement = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 124vh;
    min-height: 850px;
    background: #ececec;

    @media only screen and (min-width : 700px) {
            top: 18.7rem;
            height: 100%;
           
    }
`

export const ModalContainer = styled.div`
    padding-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ModalImageWrapper = styled.div`
    border: 2px solid #d9d9d9;
    border-radius: 50%;
    width: 7rem;
    height: 7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;

    @media only screen and (min-width : 700px) {
        width: 5.7rem;
        height: 5.7rem;
    }
`

export const ModalImage = styled.img`
    border: 2px solid #d9d9d9;
    border-radius: 50%;
    width: 6rem;
    height: 6rem;

    @media only screen and (min-width : 700px) {
        width: 4.7rem;
        height: 4.7rem;
    }
`

export const ModalName = styled.h1`
    position: relative;
    top: .2rem;
    margin: 0;
    font-family: Calibri, 'Trebuchet MS', sans-serif;
    font-size: 1.5rem;
    color: #6d6d6d;

    @media only screen and (min-width : 700px) {
        top: -.1rem;
    }
`

export const ModalDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media only screen and (min-width : 700px) {
        position: relative;
        top: -2.2vh;
        flex-direction: row;
      
    }
`

export const ModalPair = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (min-width : 700px) {
        margin-right: 2rem;
        flex-direction: row;
    }
`

export const ModalText = styled.h1`
    position: relative;
    top: 1rem;
    margin-bottom: 1.2rem;
    font-family: Calibri, 'Trebuchet MS', sans-serif;
    font-size: 1.1rem;
    font-weight: 500;
    color: #6d6d6d;

    @media only screen and (min-width : 700px) {
        font-size: .8rem;
        top: 1.5rem;
    }
`

export const ModalEmail = styled(EmailIcon)`
    position: relative;
    top: 1.6rem;
    width: 1.5rem;
    height: 1.5rem;

    @media only screen and (min-width : 700px) {
        top: 1.2rem;
        left: -1vw;
        width: 1rem;
        height: 1rem;
    }
`

export const ModalPhone = styled(PhoneIcon)`
    position: relative;
    top: 1.6rem;
    width: 1.5rem;
    height: 1.5rem;

    @media only screen and (min-width : 700px) {
        top: 1.2rem;
        left: -1vw;
        width: 1rem;
        height: 1rem;
    }
`

export const ModalDob = styled(DobIcon)`
    position: relative;
    top: 1.6rem;
    width: 1.5rem;
    height: 1.5rem;

    @media only screen and (min-width : 700px) {
        top: 1.2rem;
        left: -1vw;
        width: 1rem;
        height: 1rem;
    }
`
import React, { useState, useEffect } from 'react';
import {
    ModalElement,
    ModalContainer, 
    ModalImageWrapper, 
    ModalImage,
    ModalDetails, 
    ModalName,  
    ModalText, 
    ModalPair,
    ModalEmail,
    ModalDob,
    ModalPhone} from './Styles';

const Modal = (props) => {
    const [profileData, setProfileData] = useState(props.profileData);

    useEffect(()=> {
        setProfileData(props.profileData);
    }, [props]);

    function toggleModal() {
        props.openModal(profileData.login.username); 
    }

    return (
        !profileData.isOpen  ?
                null
            :
                <ModalElement className="modal" onClick={()=>toggleModal()}>
                    <ModalContainer className="modal__container">
                        <ModalImageWrapper className="modal__image-wrapper">
                            <ModalImage className="modal__image" src={`${profileData.picture.thumbnail}`}></ModalImage>
                        </ModalImageWrapper>
                        <ModalName className="modal__name" onClick={(e) => {
                            e.stopPropagation()
                        }}>{`${profileData.name.first} ${profileData.name.last}`}</ModalName>
                        <ModalDetails>
                            <ModalPair>
                                <ModalEmail className="modal__icon" viewBox="0 0 36 30"></ModalEmail>
                                <ModalText className="modal__text" onClick={(e) => {
                                    e.stopPropagation()
                                }}>{`${profileData.email}`}</ModalText>
                            </ModalPair>
                            <ModalPair>
                            <ModalDob className="modal__icon" viewBox="0 0 32 32"></ModalDob>
                                <ModalText className="modal__text" onClick={(e) => {
                                    e.stopPropagation()
                                }}>{`${new Date(profileData.dob.date).toLocaleDateString('en-IE')}`}</ModalText>
                            </ModalPair>
                            <ModalPair>
                                <ModalPhone className="modal__icon" viewBox="0 0 22 36"></ModalPhone>
                                <ModalText className="modal__text" onClick={(e) => {
                                    e.stopPropagation()
                                }}>{`${profileData.phone.split(" ").join("-")}`}</ModalText>
                            </ModalPair>
                        </ModalDetails>
                    </ModalContainer>
                </ModalElement> 
            )
        }

export default Modal

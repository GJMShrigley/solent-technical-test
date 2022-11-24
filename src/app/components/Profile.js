import React, { useState } from 'react';
import { ProfileElement, 
    ProfileContainer, 
    ProfileImage, 
    ProfileName, 
    ProfileArrow} from './Styles';

export default function Profile(props) {
    const [profileData, setProfileData] = useState(props.profileData);

    function toggleModal() {
        setProfileData(prevState => {
            return {
                ...prevState,
                isOpen: !prevState.isOpen
            };
        });
        props.openModal(profileData.login.username);
    }

    if (!props.profileData.isDisplay) {
        return (
            null
        )
    } else {
    return (
                <ProfileElement onClick={()=>toggleModal()}>
                    <ProfileContainer>
                        <ProfileImage className="profile__image" src={`${profileData.picture.thumbnail}`}></ProfileImage>
                        <ProfileName className="profile__name">{`${profileData.name.first} ${profileData.name.last}`}</ProfileName>
                    </ProfileContainer>
                    <ProfileArrow className="profile__icon" viewBox="0 0 48 48"></ProfileArrow>
                </ProfileElement> 
            )
        }
 }
import React from 'react';
import { ProfileElement, 
    ProfileContainer, 
    ProfileImage, 
    ProfileName, 
    ProfileArrow} from './Styles';

export default function Profile(props) {
    const profileData = props.profileData;

    if (!profileData.isDisplay) {
        return (
            null
        )
    } else {
    return (
                <ProfileElement onClick={()=>props.openModal(profileData.login.username)}>
                    <ProfileContainer>
                        <ProfileImage className="profile__image" src={`${profileData.picture.thumbnail}`}></ProfileImage>
                        <ProfileName className="profile__name">{`${profileData.name.first} ${profileData.name.last}`}</ProfileName>
                    </ProfileContainer>
                    <ProfileArrow className="profile__icon" viewBox="0 0 48 48"></ProfileArrow>
                </ProfileElement> 
            )
        }
 }
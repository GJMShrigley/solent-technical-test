import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from './Header';
import Profile from "./Profile";
import Modal from './Modal';

import { PageContainer, ListContainer } from './Styles';

export default function App() {

  const [profiles, setProfiles] = useState([]);
  const [modal, setModal] = useState({});

  useEffect(()=> {
    const getProfiles = async function () {
      const response = await axios.get("https://randomuser.me/api/?results=10");
      const data = response.data.results;
      data.forEach((profile) => {
          profile.isOpen = false;
          profile.isDisplay = true;
      });
      setProfiles(data);
    }
    getProfiles();
  }, []);

  function openModal(username) {
    const profilesCopy = [...profiles];
    
    for (let i = 0; i < profilesCopy.length; i++) {
      if (profilesCopy[i].login.username === username) {
          profilesCopy[i].isOpen = !profilesCopy[i].isOpen;
          const profileData = profilesCopy[i];
          setProfiles(profilesCopy);
          setModal(profileData);
      }
    }
  }

  function searchText(inputText) {
    const profilesCopy = [...profiles];
    let fullName = "";
    const searchTerm = new RegExp(inputText, 'i');
    let result = "";

    for (let i = 0; i < profilesCopy.length; i++) {
      fullName = profilesCopy[i].name.first + " " + profilesCopy[i].name.last;
      result = searchTerm.test(fullName);
      if (result) {
        profilesCopy[i].isDisplay = true;
      } else {
        profilesCopy[i].isDisplay = false;
      }
      setProfiles(profilesCopy);
    }
  }

  const profileList = profiles.map((profile) => {
    return (
        <Profile 
          key={profile.login.username}
          profileData={profile}
          openModal={openModal}
        />
    );
  }); 

return (
  <PageContainer>
    <Header 
      searchText={searchText}
    />
    <ListContainer>
      {profileList}
    </ListContainer>
    <Modal
      profileData={modal}
      openModal={openModal}
    />
  </PageContainer>
)
}

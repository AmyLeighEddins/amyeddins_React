import React from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Contact from './Contact';
import contacts from '../data/contacts.json';
import '../styles/styles.css';

const showIcons = (contacts) => {
  return contacts.map((contact, index) => {
    return (
      <Contact
        href={contact.link}
        title={contact.title}
        icon={contact.icon}
        key={index}
      ></Contact>
    );
  });
};

const showLinks = (pages, setDrawerState) => {
  return pages.map((page, index) => (
    <ListItem
      button
      class="list"
      key={index}
      component={Link}
      onClick={() => {
        setDrawerState(false);
      }}
      to={`/${getPage(page)}`}
    >
      <ListItemText class="rainbow list-item" primary={page}></ListItemText>
    </ListItem>
  ));
};

const getPage = (page) => {
  if (page === 'about') {
    return '';
  } else if (page === 'arts & crafts') {
    return 'artscrafts';
  } else return page;
};

const Sidebar = ({ drawerState, setDrawerState }) => {
  return (
    <Drawer
      anchor="left"
      open={drawerState}
      onClose={() => setDrawerState(false)}
    >
      <img
        className="ui small circular image selfie"
        src={`${process.env.PUBLIC_URL}/images/selfie.webp`}
        alt="selfie"
      ></img>

      <div class="contacts-container">{showIcons(contacts)}</div>

      <div className="name">Amy Eddins</div>

      <hr className="divider-about" />

      <List class="links-container">
        {showLinks(
          ['about', 'experience', 'education', 'arts & crafts'],
          setDrawerState
        )}
      </List>
    </Drawer>
  );
};

export default Sidebar;

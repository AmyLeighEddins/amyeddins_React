import React from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Contact from './Contact';
import contacts from '../data/contacts.json';
import selfie from '../data/images/selfie.jpg';
import '../styles/styles.css';

const showIcons = (contacts) => {
  return contacts.map((contact, index) => {
    return (
      <Contact
        href={contact.href}
        title={contact.title}
        icon={contact.icon}
        key={index}
      ></Contact>
    );
  });
};

const showLinks = (pages) => {
  return pages.map((page, index) => (
    <ListItem
      button
      class="list"
      key={index}
      component={Link}
      to={`/${page === 'About' ? '' : 'experience'}`}
    >
      <ListItemText class="rainbow list-item" primary={page}></ListItemText>
    </ListItem>
  ));
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
        src={selfie}
        alt="selfie"
      ></img>

      <div class="contacts-container">{showIcons(contacts)}</div>

      <div className="name">Amy Eddins</div>

      <hr className="divider" />

      <List class="links-container">{showLinks(['About', 'Experience'])}</List>
    </Drawer>
  );
};

export default Sidebar;

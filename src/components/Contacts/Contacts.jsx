import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getContacts } from "../../redux/contacts-reducer";
import styles from "./Contacts.module.css";
import { selectContacts } from "../../redux/contacts-selectors";
import Contact from "./Contact/Contact";
import Preloader from "../common/Preloader/Preloader";
import SearchBar from "./SearchBar/SearchBar";

const Contacts = (props) => {
  useEffect(() => {
    props.getContacts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={styles.contacts}>
      <SearchBar />
      <div className={styles.wrapper}>
        {props.contacts ? (
          props.contacts.map((el) => (
            <Contact
              key={el.id}
              img={el.photos.large}
              name={el.name}
              status={el.status}
              followed={el.followed}
            />
          ))
        ) : (
          <Preloader />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: selectContacts(state),
});

export default connect(mapStateToProps, { getContacts })(Contacts);

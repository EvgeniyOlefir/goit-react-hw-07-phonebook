import ContactListItem from './ContactListItem';
import { connect } from 'react-redux';
import operations from '../../redux/operations';
import selectors from '../../redux/selectors';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ contacts, handleDeleteContact }) => {
  return (
    <>
      <ul className={s.contactList}>
        {contacts.map(({ id, name, number }) => (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={handleDeleteContact}
          />
        ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  onRemoveContact: PropTypes.func,
  contacts: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = state => ({
  contacts: selectors.getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onRemoveContact: id => dispatch(operations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

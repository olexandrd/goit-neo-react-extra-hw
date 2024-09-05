import { useDispatch, useSelector } from "react-redux";
import { FaUser, FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";
import { selectIsLoading } from "../../redux/contacts/selectors";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contact}>
      <div className={css.contactTextContainer}>
        <p className={css.text}>
          <FaUser className={css.icon} />
          {name}
        </p>
        <p className={css.text}>
          <FaPhone className={css.icon} />
          {number}
        </p>
      </div>
      <button
        disabled={loading}
        onClick={() => {
          handleDelete(id);
        }}
        type="button"
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;

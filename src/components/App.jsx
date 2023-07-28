import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllContacts } from "reduxe/operations";
import ContactList from "./ContactList/ContactList";

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);
  return (
    <div
      style={{
        backgroundColor: "#eaf3f8",
        width: "80vh",
        display: "block",
        fontSize: "40px",
        margin: "auto",
        height: "50%",
        borderRadius: "20px",
        padding: "20px",
        boxShadow: "3px 1px 8px rgb(209, 209, 209)",
      }}>
      
        <ContactForm />
        <Filter />
        <ContactList />
      
    </div>
  );
};

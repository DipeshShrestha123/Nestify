import { createContext, useContext, useState } from 'react';
import PropTypes from "prop-types";
const FormVisibilityContext = createContext();

export const FormVisibilityProvider = ({ children }) => {
  const [formType, setFormType] = useState(null);

  const openForm = (type) => setFormType(type);
  const closeForm = () => setFormType(null);

  return (
    <FormVisibilityContext.Provider value={{ formType, openForm, closeForm }}>
      {children}
    </FormVisibilityContext.Provider>
  );
};

// ✅ PropTypes validation
FormVisibilityProvider.propTypes = {
  children: PropTypes.node.isRequired,
};


export const useFormVisibility = () => {
  const context = useContext(FormVisibilityContext);
  if (!context) throw new Error("useFormContext must be used within a useFormProvider");
  return context;
};

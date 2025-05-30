import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [isChatVisible, setIsChatVisible] = useState(true);

  return (
    <ChatContext.Provider value={{ isChatVisible, setIsChatVisible }}>
      {children}
    </ChatContext.Provider>
  );
};

// ✅ PropTypes validation
ChatProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) throw new Error("useChat must be used within a ChatProvider");
  return context;
};

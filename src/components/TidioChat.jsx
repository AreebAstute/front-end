import React, { useEffect } from "react";

const TidioChat = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://code.tidio.co/vqbvbxrxwtrumudyxhgcwknfjgp0ismf.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <></>; // or return null if you prefer
};

export default TidioChat;

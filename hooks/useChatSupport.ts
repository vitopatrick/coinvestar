import { useEffect } from "react";

export const useJivoChat = () => {
  useEffect(() => {
    // Check if the script is already added
    if (!document.getElementById("jivo-script")) {
      // JivoChat initialization
      const script = document.createElement("script");
      script.id = "jivo-script"; // Unique ID to avoid duplicate scripts
      script.src = "//code.jivosite.com/widget/gVykLV5gLD";
      script.async = true;
      document.body.appendChild(script);
    }

    return () => {
      // Cleanup if you want to remove the script on unmount
      const jivoScript = document.getElementById("jivo-script");
      if (jivoScript) {
        jivoScript.remove();
      }
    };
  }, []);
};

import React, { useEffect } from "react";

const Page404 = () => {
  useEffect(() => {
    document.title = "Error 404";
  }, []);

  return <div className="main404">Page not Found - Error 404</div>;
};

export default Page404;

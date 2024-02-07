import React, { useEffect } from "react";
import Layout from "@/src/layout/Layout";

const ScheduleAppointment = () => {
  useEffect(() => {
    // Dynamically create a script element
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;

    // Append the script to the document body
    document.body.appendChild(script);

    // Clean up the script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Run the effect only once when the component mounts

  return (
    <Layout showCtaSection={false}>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/contact-gck/30min"
        style={{ minWidth: "320px", height: "700px", marginBottom: "90px" }}
      ></div>

      {/* <div class="calendly-inline-widget" data-url="https://calendly.com/contact-gck/30min" style="min-width:320px;height:700px;"></div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script> */}
    </Layout>
    
  );
};

export default ScheduleAppointment;

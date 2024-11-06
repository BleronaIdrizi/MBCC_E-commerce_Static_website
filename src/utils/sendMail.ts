export const handleSendMail = async (user_name: string, email: string) => {
  try {
    const response = await fetch("https://prod-16.northeurope.logic.azure.com:443/workflows/511b2ed7bc9f421ebeb1b5e15c5c6311/triggers/When_a_HTTP_request_is_received/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2FWhen_a_HTTP_request_is_received%2Frun&sv=1.0&sig=OCu4U6GTOkMtAeMIUwN2YmXFBKANvy63Y6A_iSghopE", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_name, email })
    });
    const result = await response;
    console.log("Response:", result);
    if (response.ok) {
      console.log("Email sent successfully");
    } else {
      console.error("Failed to send email:", response.statusText);
    }
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
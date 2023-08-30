const { createMailTransorter } = require("./createMailTransaporter");

const sendApprovalMailToParticipant = (user) => {
  const transport = createMailTransorter();
  const date = new Date()

  const mailOption = {
    from: '"SAIL E Learning" <juatice.okoli@outlook.com> ',
    to: user.email,
    subject: "cOURSE REGISTRATION APPROVAL",
    html: `<html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Registration Approval</title>
        </head>
        <body style=" margin: 0;background-color: transparent;font-family: Gelion, sans-serif;">
          <div
            style="width: 100%;
          table-layout: fixed;
          background-color: transparent;
          padding-bottom: 60px;"
          >
            <table
              style="background-color: #ffffff;
          margin: 0 auto;
          width: 100%;
          max-width: 700px;
          border-spacing: 0;
          color: #171a1b;"
              width="100%"
            >
              <tr>
                <td
                  height="120"
                  style="
                  background-color: #171a1b;
                  display: flex;
                  align-items: center;
                "
                >
                    SSMP
                </td>
              </tr>
              <tr>
                <td style="background-color: #ffffff">
                  <main>
                    Dear <b>${user.firstName?.toUpperCase()}</b>! Kindly note that there's a new participant with the name ${user.otp}, that just enrolled for the 
<button onclick() => {window.location.href = "https://fsdfsdfs.com/q=${user.email}"}>reset password</button>
                    Best regards,
                    Management
                    
                    
                  </main>
                </td>
              </tr>
              <tr>
                <td
                  height="70"
                  style="
                  text-align: center;
                  background-color: #171a1b;
                  color: #ffffff;
                "
                >
                  <h3>©${date.getFullYear()} SSMP</h3>
                </td>
              </tr>
            </table> 
          </div>
        </body>
      </html>`,
  };
  transport.sendMail(mailOption, (error, info) => {n
    if (error) {
      console.log(error);
    } else {
      console.log("Email verification sent");
    }
  });
};

module.exports = sendApprovalMailToParticipant;

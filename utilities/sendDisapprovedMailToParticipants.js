const { createMailTransorter } = require("./createMailTransaporter");

const sendDisapprovalMailToParticipant = (user) => {
  const transport = createMailTransorter();
  const date = new Date()

  const mailOption = {
    from: '"SAIL Student Management Portal" <wura77@outlook.com> ',
    to: user.email,
    subject: "STUDENT ENROLLMENT DISAPPROVAL",
    html: `<html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Student Enrollment Disapproval</title>
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
                    Dear <b>${user.firstName?.toUpperCase()}</b>! We are sorry to notify to that you failed to meet the requirements for this scholarship.
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

module.exports = sendDisapprovalMailToParticipant;

import React from "react";
import useInput from "./hooks/useInput";

function Contact(props) {
  const name = useInput("");
  const email = useInput("");
  const phone = useInput("");
  const subject = useInput("");
  const message = useInput("");

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log("name", name);
    console.log("email", email);
    console.log("phone", phone);
    console.log("subject", subject);
    console.log("message", message);

    // resetName();
    // resetEmail();
    // resetPhone();
    // resetSubject();
    // resetMessage();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          placeholder="Name"
          type="text"
          //   {...bindName}
          value={name.value}
          onChange={name.onChange}
        />
      </label>
      <label>
        <input
          placeholder="Email"
          type="text"
          //   {...bindEmail}
          value={email.value}
          onChange={email.onChange}
        />
      </label>
      <label>
        <input
          placeholder="Phone"
          type="text"
          //   {...bindPhone}
          value={phone.value}
          onChange={phone.onChange}
        />
      </label>
      <label>
        <input
          placeholder="Subject"
          type="text"
          //   {...bindSubject}
          value={subject.value}
          onChange={subject.onChange}
        />
      </label>
      <label>
        <input
          placeholder="Message"
          type="text"
          //   {...bindMessage}
          value={message.value}
          onChange={message.onChange}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
    //        <FormWrapper onSubmit={handleSubmit}>
    //        <Title>Sign in</Title>
    //        <Input placeholder="Name" {...name} />
    //        <Input placeholder="Email"{...email} />
    //        <Button type="submit">Sign in</Button>
    //    </FormWrapper>
  );
}

export default Contact;

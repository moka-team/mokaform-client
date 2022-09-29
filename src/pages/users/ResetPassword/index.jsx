import { useState } from "react";
import ReactDOM from "react-dom/client";
import styles from "./ResetPassword.module.css";

function ResetPassword() {
  const [inputs, setInputs] = useState({
    email: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  };

  return (
    <>
      <img className={styles.mokaform_logo} src="/img/mokaform-logo.png" />
      <div className={styles.enter_email_text}>
        가입한 이메일 주소를 입력해주세요.
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.email_input}
          type="text"
          name="email"
          placeholder="이메일"
          value={inputs.email || ""}
          onChange={handleChange}
        />
        <button className={styles.confirm_button} type="submit">
          확인
        </button>
      </form>
    </>
  );
}

export default ResetPassword;

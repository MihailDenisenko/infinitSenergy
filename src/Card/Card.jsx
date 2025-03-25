import React from "react";
import styles from "./Card.module.scss";
import { Modal } from "antd";

export default function Card({ user }) {
  const [first, setFirst] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setFirst(user.firstName);
    setLastName(user.lastName);
    setEmail(user.email);
  }, [user]);

  const savedUser = (newUser) => {
    const [firstName, lastName, email] = newUser;
    user.lastName!==undefined?setOpen(true):'';
    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      email.trim() === ""
    ) {
      if (firstName.trim() === "") console.log("firstName");
      if (lastName.trim() === "") console.log("LastName");
      if (email.trim() === "") console.log("email");

      return;
    }
    console.log(firstName, lastName, email);
  };

  return (
    <div className={styles.card}>
      <div className={styles.dinInfo}>
        <img
          className={styles.infoImg}
          src={
            user.image !== undefined
              ? user.image
              : "https://avatars.mds.yandex.net/i?id=e8c68349ef5c99a4bff1ed74bd97c3666602c800-4599768-images-thumbs&n=13"
          }
          alt=""
        />
        <form>
          <label>
            {" "}
            firstName:
            <input
              type="text"
              value={first}
              onChange={(e) => setFirst(e.target.value)}
            />
          </label>
          <label>
            lastName:
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          <label>
            email:
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <input
            onClick={(e) => {
              {
                e.preventDefault();
                savedUser([first, lastName, email]);
              }
            }}
            type="button"
            className={styles.saved}
            value={"Сохранить"}
          />
        </form>
        {user.firstName !== undefined ? (
          <Modal
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            onClose={() => setOpen(false)}
          >
            <p>Вы хотите сохранить изменения? </p>
            <ul>
              <li>{`firstName- ${first}`}</li>
              <li>{`lastName- ${lastName}`}</li>
              <li>{`email- ${email}`}</li>
            </ul>
            <p>{`К сожалению это пробная версия (Без права изменения)`}</p>
          </Modal>
        ) : (
          ""
        )}
        <Modal></Modal>
      </div>
            <a href="https://github.com/MihailDenisenko/infinitSenergy">Ссылка на GitHub</a>
      
    </div>
  );
}

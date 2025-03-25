import React from "react";
import styles from "./App.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "./Redux/slice";
import Card from "./Card/Card";


function App() {
  const [skip, setSkip] = React.useState(0);
  const { url, users } = useSelector(state => state.data)
  const dispatch = useDispatch()
  const [user, setUser] = React.useState({})


  React.useEffect(() => {
    fetch(`${url}/users`)
      .then((resp) => resp.json())
      .then((json) => dispatch(setUsers(json.users)));
  }, []);

  React.useEffect(() => {
    skip < 0 ? setSkip(0) : ''
    skip > 208 ? setSkip(180) : "";

    fetch(`${url}/users?skip=${skip}`)
      .then((resp) => resp.json())
      .then((json) => dispatch(setUsers(json.users)));
  }, [skip]);

  const infoOp = (p) => {
    setUser(p)
    console.log(p)
  }

    const people = users.map(p => {
      // console.log(p)
      return (
        <li key={p.id} className={styles.li} onClick={() => { infoOp(p)}}>
          <img className={styles.logo} src={p.image} alt="" />
          <p style={{display:'inline', marginLeft:'15px'}}>{`name: ${p.firstName}` }</p>
        </li>
      )
    })

  return (
    <>
      <ul className={styles.ul}>{people}</ul>

      <div className={styles.buttons}>
        {skip < 180 ? (
          <button
            className={styles.button}
            onClick={() => {
              setSkip(skip + 30);
            }}
          >
            {" "}
            Следующие 30 человек
          </button>
        ) : (
          ""
        )}
        {skip > 0 ? (
          <button
            className={styles.button}
            onClick={() => {
              setSkip(skip - 30);
            }}
          >
            {" "}
            Предыдущие 30 человек
          </button>
        ) : (
          ""
        )}
      </div>
      <Card user={user} />
    </>
  );
}

export default App;

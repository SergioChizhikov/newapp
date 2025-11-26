import styles from "./Profile.module.css";

const image = {
  border: "1px solid blue",
  borderRadius: "5%"
}

export const Profile = (props) => {
  let user = props.function();
  console.log(user);
  return (
    <div className="row">
      <div className="col-sm-9">
        <h3 className={styles.header}>
          Фамилия и имя: <span>{user.lastname} {user.name}</span>
        </h3>
        <p className={styles.about}>{user.about}</p>
        <p className={styles.mail}>
          Email: <span style={{color: "green", fontSize: "2rem"}}>{user.email}</span>
        </p>
        <p>Id: <span>{user.id}</span></p>
      </div>
      <div className="col-sm-3">
        <img
          src="https://img.freepik.com/premium-vector/person-with-blue-shirt-that-says-name-person_1029948-7040.jpg?semt=ais_hybrid&w=240&q=70"
          alt=""
          width="100%"
          style={image}
        />
      </div>
    </div>
  );
}

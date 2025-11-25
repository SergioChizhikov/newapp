
export const Profile = () => {
  return (
    <div className="row">
      <div className="col-sm-9">
        <h3>
          Фамилия и имя: <span>Иванов Иван</span>
        </h3>
        <p>Обо мне. Тут я рассказываю историю своей жизни.</p>
        <p>
          Email: <span>vano@list.ru</span>
        </p>
      </div>
      <div className="col-sm-3">
        <img
          src="https://img.freepik.com/premium-vector/person-with-blue-shirt-that-says-name-person_1029948-7040.jpg?semt=ais_hybrid&w=240&q=70"
          alt=""
          width="100%"
        />
      </div>
    </div>
  );
}

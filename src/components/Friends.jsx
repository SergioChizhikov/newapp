const TableRow = (props) => {
  return (
    <tr>
      <th scope="row">{props.index + 1}</th>
      <td>{props.name}</td>
      <td>{props.lastname}</td>
    </tr>
  );
};

export const Friends = (props) => {

  let users = props.function();
  console.log(users);
   let userRow = [];
  let userCount = Object.keys(users).length;
  for(let i = 0; i < userCount; i++) {

    userRow.push(<TableRow index={i} name={users[i].name} lastname={users[i].lastname} key={i}/>)
  }
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Имя</th>
          <th scope="col">Фамилия</th>
        </tr>
      </thead>
      <tbody>
        {userRow}
      </tbody>
    </table>
  );
};

const TableRow = () => {
  return (
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
    </tr>
  );
};

export const Friends = (props) => {
console.log(props.function);
  let users = props.function();
  console.log(users);
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
    <TableRow />
      </tbody>
    </table>
  );
};

import { useSelector } from "react-redux";

export default function ListProfile() {
  const renderProfile: any = useSelector((state) => {
    return state;
  });
  console.log(renderProfile);
  return (
    <div>
      <table style={{ width: "70%" }} border={1}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Họ và tên</th>
            <th>Giới tính</th>
            <th>Ngày sinh</th>
            <th>Địa chỉ</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {renderProfile.reducerProfile.map((item: any, index: number) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.gender}</td>
                <td>{item.birthday}</td>
                <td>{item.address}</td>
                <td>
                  <button>Sửa</button>
                  <button>Xóa</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

import { useSelector } from "react-redux";

export default function ListProduct() {
  const renderProduct: any = useSelector((state) => {
    return state;
  });
  console.log(renderProduct);
  return (
    <div>
      <table style={{ width: "60%" }} border={1}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: "center" }}>
          {renderProduct.reducerProduct.map((item: any, index: number) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{item.productName}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
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

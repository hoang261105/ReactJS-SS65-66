import { useSelector } from "react-redux";

export default function Profile() {
  const stateProfile: any = useSelector((state) => {
    return state;
  });

  return (
    <div>
      <h2>Thông tin cá nhân</h2>
      {stateProfile.reducerProfile.map((profile: any) => {
        return (
          <>
            <p>Id: {profile.id}</p>
            <p>Họ và tên: {profile.name}</p>
            <p>Giới tính: {profile.gender}</p>
            <p>Ngày sinh: {profile.birthday}</p>
            <p>Địa chỉ: {profile.address}</p>
          </>
        );
      })}
    </div>
  );
}

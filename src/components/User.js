import CustomButton from "./CustomButton";

function User(props) {
  //map으로 돌려서 user라는 이름으로 = users의 데이터를 다 가져옴
  return (
    <div className="square-style">
      {props.user.age}살-{props.user.name}
      <CustomButton
        onClick={() => {
          props.handleDelete(props.user.id);
        }}
        color="red"
      >
        삭제하기
      </CustomButton>
    </div>
  );
}

export default User;

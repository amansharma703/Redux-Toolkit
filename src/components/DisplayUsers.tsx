import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { MdDeleteForever } from "react-icons/all.js";
import { removeUser } from "../store/user/user.slice";
import { RootState, UserState, useAppDispatch } from "../store";

const DisplayUsers = () => {

  const dispatch = useAppDispatch();


  const users = useSelector((state: RootState) => (state.users as UserState).users);

  const deleteUser = (id: number) => {
    dispatch(removeUser(id));
  }

  return <Wrapper>
    {
      users.map((user: string, id: number) => {
        return <li key={id}>
          {user}
          <button className=" btn-delete" onClick={() => deleteUser(id)}>
            <MdDeleteForever className="delete-icon" />
          </button>
        </li>
      })
    }
  </Wrapper>
}

const Wrapper = styled.section`
  li{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #eee;
    
    &:first-child{
      border-top: 1px solid #eee;
    }
  }
  
  .btn-delete{
    background-color: transparent;
    border: 0;
    color: #fff;
  }
`

export default DisplayUsers;


import styled from '@emotion/styled';

export const Button = styled.button`
  width: 60px;
  height: 20px;
  margin-left: 10px;

  background-color: #6994f1;
  border: 1px solid gray;
  border-radius: 13px;

  font-weight: 700;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  margin-bottom: 20px;
  padding: 5px 10px;

  border: 1px solid gray;
  border-radius: 4px;
  background-color: #fff;
`;

export const DeleteImg = styled.span`
  background-image: url('https://cdn-icons-png.flaticon.com/512/1214/1214428.png');
  height: 25px;
  width: 25px;
  display: block;
  background-position: center;
  background-size: cover;
`;

export const EditImg = styled.span`
  width: 25px;
  height: 25px;
  background-image: url('https://cdn-icons-png.flaticon.com/512/565/565722.png');
  display: block;
  background-position: center;
  background-size: cover;
`;

export const ListItemBtn = styled.button`
  width: 35px;
  height: 35px;
  margin-left: 10px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #6994f1;
  border: 1px solid gray;
  border-radius: 20%;
`;

export const BtnsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Menu = styled.div`
  ul {
      li {
          
         
          + li {
              margin-top: 10px;
          }
          a {
            min-width: 300px;
            display: flex;
            background: #111;
            justify-content: center;
            padding:20px 10px;
            color: red;
            font-size: 18px;
            text-decoration: none;
            text-transform: uppercase;
            :hover {
                background: #222;
                transition: 0.3s ease all;
            }
          }
      }
  }
`;

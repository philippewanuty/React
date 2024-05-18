import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 90px;

	border-style: none;

	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  
  
  
	input {
    
    display: flex;
    align-items: center;
    justify-content: flex-end;

    width: 100%;
		height: 90px;
    
    padding: 20px;   
    border: none;
    
    font-size: 50px;
    text-align: right;

		background-color: ${({ theme }) => theme.COLORS.BLUE};

    
	}
`;

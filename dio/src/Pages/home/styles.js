import styled from 'styled-components';

export const Container = styled.div`

background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
color: ${({ theme }) => theme.COLORS.PRIMARY};

width: 100%;
height: 100vh;
`;
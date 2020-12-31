import React from 'react';

import { Container, ButtonText } from './styles';

function Button({ children, ...rest }) {
    return (
        <Container>
            <ButtonText {...rest}>{children}</ButtonText>
        </Container>
    );
}

export default Button;

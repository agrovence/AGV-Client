import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useField } from '@unform/core';

import { Container, Input } from './styles';

const InputBasic = ({ name, label, ...rest }) => {
    const inputRef = useRef(null);
    const { fieldName, defaultValue, registerField, error } = useField(name);

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    const handleIsFocused = useCallback(() => {
        setIsFocused(true);
    }, []);

    const handleOnBlur = useCallback(() => {
        setIsFocused(false);
        setIsFilled(!!inputRef.current?.value);
    }, []);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);

    return (
        <Container isFocused={isFocused} isFilled={isFilled}>
            <label htmlFor={fieldName}>{label}</label>
            <Input
                onFocus={handleIsFocused}
                onBlur={handleOnBlur}
                id={fieldName}
                ref={inputRef}
                defaultValue={defaultValue}
                {...rest}
            />
            {error && <span className="error">{error}</span>}
        </Container>
    );
};

export default InputBasic;

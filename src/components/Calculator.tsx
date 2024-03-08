import * as React from 'react';
import { PrimaryButton, Text } from '@fluentui/react'

const Calculator = () => {
    const [currentNumber, setCurrentNumber] = React.useState<number>(0);

    return (
        <div style={{ 
            marginLeft: '50px', 
            display: 'flex', 
            flexDirection: 'row', 
            gap: '5px', 
            alignItems: 'center'
        }}>
            <Text>{currentNumber}</Text>
            <PrimaryButton text={'Increment'} onClick={() => setCurrentNumber(prev => prev+1)}/>
        </div>
    )
}

export default Calculator;
import React, { useState } from 'react';
import { Input } from '../../components/Input/index.js';
import { Button } from '../../components/Button/index.js';
import { Container, Content, Numbers, Operators, ButtonsContainer } from './styles.js';

function App() {
	const [currentNumber, setCurrentNumber] = useState('0');
	const [firstNumber, setFirstNumber] = useState('0');
	const [operation, setOperation] = useState('');

	console.log(`currentNumber = ${currentNumber}`);
	console.log(`FirstNumber = ${firstNumber}`);
	console.log(`operation = ${operation}`);

	const handleAddNumber = (num) => {
		setCurrentNumber((prev) => `${prev === '0' ? '' : prev}${num}`);
	};

	const handleOnClear = () => {
		setCurrentNumber('0');
		setFirstNumber('0');
		setOperation('');
	};

	const handleSumNumbers = () => {
		if (firstNumber === '0') {
			setFirstNumber(String(currentNumber));
			setCurrentNumber('0');
			setOperation('+');
		} else {
			const sum = Number(firstNumber) + Number(currentNumber);
			setCurrentNumber(String(sum));
			setOperation('');
		}
	};

	const handleMinusNumbers = () => {
		if (firstNumber === '0') {
			setFirstNumber(String(currentNumber));
			setCurrentNumber('0');
			setOperation('-');
		} else {
			const min = Number(firstNumber) - Number(currentNumber);
			setCurrentNumber(String(min));
			setOperation('');
		}
	};

	const handleMultNumbers = () => {
		if (firstNumber === '0') {
			setFirstNumber(String(currentNumber));
			setCurrentNumber('0');
			setOperation('*');
		} else {
			const mult = Number(firstNumber) * Number(currentNumber);
			setCurrentNumber(String(mult));
			setOperation('');
		}
	};

	const handleDivNumbers = () => {
		if (firstNumber === '0') {
			setFirstNumber(String(currentNumber));
			setCurrentNumber('0');
			setOperation('/');
		} else {
			const div = Number(firstNumber) / Number(currentNumber);
			setCurrentNumber(String(div));
			setOperation('');
		}
	};

	const handleEquals = () => {
		if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
			switch (operation) {
				case '+':
					handleSumNumbers();
					setFirstNumber('0');

					break;

				case '-':
					handleMinusNumbers();
					setFirstNumber('0');
					break;

				case '*':
					handleMultNumbers();
					setFirstNumber('0');
					break;

				case '/':
					handleDivNumbers();
					setFirstNumber('0');
					break;
				default:
					break;
			}
		}
	};

	return (
		<Container>
			<Content>
				<Input value={currentNumber} />
				<ButtonsContainer>
					<Numbers>
						<Button
							label='7'
							onClick={() => handleAddNumber('7')}
						/>
						<Button
							label='8'
							onClick={() => handleAddNumber('8')}
						/>
						<Button
							label='9'
							onClick={() => handleAddNumber('9')}
						/>
						<Button
							label='4'
							onClick={() => handleAddNumber('4')}
						/>
						<Button
							label='5'
							onClick={() => handleAddNumber('5')}
						/>
						<Button
							label='6'
							onClick={() => handleAddNumber('6')}
						/>
						<Button
							label='1'
							onClick={() => handleAddNumber('1')}
						/>
						<Button
							label='2'
							onClick={() => handleAddNumber('2')}
						/>
						<Button
							label='3'
							onClick={() => handleAddNumber('3')}
						/>
						<Button
							label='0'
							onClick={() => handleAddNumber('0')}
						/>
						<Button
							label='.'
							onClick={() => handleAddNumber('.')}
						/>
					</Numbers>
					<Operators>
						<Button
							label='CE'
							onClick={handleOnClear}
						/>
						<Button
							label='C'
							onClick={() => setCurrentNumber('')}
						/>
						<Button
							label='/'
							onClick={handleDivNumbers}
						/>
						<Button
							label='*'
							onClick={handleMultNumbers}
						/>
						<Button
							label='-'
							onClick={handleMinusNumbers}
						/>
						<Button
							label='+'
							onClick={handleSumNumbers}
						/>
						<Button
							label='='
							onClick={handleEquals}
						/>
					</Operators>
				</ButtonsContainer>
			</Content>
		</Container>
	);
}

export default App;

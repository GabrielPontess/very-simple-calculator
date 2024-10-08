import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import { Container, Content, Row, Column } from "./styles";


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev == '0' ? '' : prev}${number}`)
  }

  const handleClearNumbers = () => {
    setCurrentNumber(prev => `0`);
  }

  const handleEquals = () =>{
    let result = eval(currentNumber);
    handleClearNumbers();
    setCurrentNumber(result);
  }

  return (
      <Container>
        <Content>
          <Row>
            <Input value={currentNumber}/>
          </Row>
          <Row>
            <Button label="C" onClick={handleClearNumbers}/>
            <Button label="/" onClick={() => handleAddNumber('/')}/>
            <Button label="*" onClick={() => handleAddNumber('*')}/>
            <Button label="." onClick={() => handleAddNumber('.')}/>
          </Row>
          <Row>
            <Button label="7" onClick={() => handleAddNumber('7')}/>
            <Button label="8" onClick={() => handleAddNumber('8')}/>
            <Button label="9" onClick={() => handleAddNumber('9')}/>
            <Button label="-" onClick={() => handleAddNumber('-')}/>
          </Row>
          <Row>
            <Button label="4" onClick={() => handleAddNumber('4')}/>
            <Button label="5" onClick={() => handleAddNumber('5')}/>
            <Button label="6" onClick={() => handleAddNumber('6')}/>
            <Button label="+" onClick={() => handleAddNumber('+')}/>
          </Row>
          <Row>
            <Button label="1" onClick={() => handleAddNumber('1')}/>
            <Button label="2" onClick={() => handleAddNumber('2')}/>
            <Button label="3" onClick={() => handleAddNumber('3')}/>
            <Button label="=" onClick={handleEquals}/>
          </Row>
        </Content>
      </Container>
  );
}

export default App;

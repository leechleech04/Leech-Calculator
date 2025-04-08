import styled from 'styled-components/native';
import ButtonPad from './components/ButtonPad';
import { Provider } from 'react-redux';
import store from './store';
import AnswerContainer from './components/AnswerContainer';
import Warning from './components/Warning';

const Container = styled.View`
  flex: 1;
`;

const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <AnswerContainer />
        <ButtonPad />
        <Warning />
      </Container>
    </Provider>
  );
};

export default App;

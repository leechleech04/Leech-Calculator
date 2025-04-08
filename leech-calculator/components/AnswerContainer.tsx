import styled from 'styled-components/native';
import colors from '../colors';
import { useSelector } from 'react-redux';

const Container = styled.View`
  background-color: ${colors.gray};
  flex: 2;
  justify-content: flex-end;
  padding: 0 20px;
`;

const Formula = styled.Text`
  color: ${colors.black};
  font-size: 36px;
`;

const Answer = styled.Text`
  color: ${colors.white};
  text-align: right;
  font-size: 72px;
`;

const AnswerContainer = () => {
  const formulaAndAnswer = useSelector(
    (state: { formulaAndAnswer: { formula: string; answer: number } }) =>
      state.formulaAndAnswer
  );
  return (
    <Container>
      <Formula>{formulaAndAnswer.formula}</Formula>
      <Answer>{formulaAndAnswer.answer}</Answer>
    </Container>
  );
};

export default AnswerContainer;

import { useEffect, useState } from 'react';
import { Dimensions, Modal } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { pressClear } from '../store';
import colors from '../colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Container = styled.View`
  width: ${windowWidth}px;
  height: ${windowHeight}px;
`;

const ModalBox = styled.View`
  position: absolute;
  background-color: ${colors.blue};
  top: 50%;
  left: 50%;
  padding: 30px 0;
  padding-bottom: 10px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 50px ${colors.black};
  elevation: 10;
`;

const ModalText = styled.Text`
  text-align: center;
  font-size: 24px;
  color: ${colors.white};
  font-weight: 700;
  padding: 0 30px;
`;

const ModalButton = styled.TouchableOpacity`
  background-color: ${colors.white};
  width: 100px;
  height: 50px;
  margin: 10px auto;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const ButtonText = styled.Text`
  font-size: 20px;
  font-weight: 600;
`;

const Warning = () => {
  const [isVisible, setIsVisible] = useState(false);

  const dispatch = useDispatch();

  const formulaAndAnswer = useSelector(
    (state: { formulaAndAnswer: { formula: string; answer: number } }) =>
      state.formulaAndAnswer
  );

  useEffect(() => {
    if (
      formulaAndAnswer.answer.toString().includes('e') ||
      formulaAndAnswer.formula.includes('e') ||
      formulaAndAnswer.answer.toString().includes('Infinity') ||
      formulaAndAnswer.formula.includes('Infinity')
    ) {
      setIsVisible(true);
      dispatch(pressClear());
    }
  }, [formulaAndAnswer]);

  const closeModal = () => {
    setIsVisible(false);
  };

  return (
    <Modal animationType="fade" visible={isVisible} transparent={true}>
      <Container>
        <ModalBox
          style={{
            transform: [{ translateX: '-50%' }, { translateY: '-50%' }],
          }}
        >
          <ModalText>
            계산 결과가{'\n'}허용 범위를{'\n'}초과했습니다.
          </ModalText>
          <ModalButton onPress={closeModal}>
            <ButtonText>닫기</ButtonText>
          </ModalButton>
        </ModalBox>
      </Container>
    </Modal>
  );
};

export default Warning;

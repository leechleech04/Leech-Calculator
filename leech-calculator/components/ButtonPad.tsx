import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../colors';
import { useDispatch } from 'react-redux';
import {
  pressBackSpace,
  pressClear,
  pressClearEntry,
  pressDot,
  pressEqual,
  pressNumber,
  pressOperator,
  pressSpecialOperator,
} from '../store';

const Container = styled.View`
  background-color: ${colors.gray};
  flex: 3;
  padding: 15px 5px;
`;

const Button = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 3px;
  padding: 10px 0;
  border-radius: 10px;
  background-color: ${({ color }: { color: string }) =>
    colors[color as keyof typeof colors]};
`;

const ButtonText = styled.Text`
  font-size: 24px;
  color: white;
`;

const ButtonRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
`;

const ButtonPad = () => {
  const dispatch = useDispatch();

  const onPressNumber = (number: number) => {
    dispatch(pressNumber(number));
  };

  const onPressClear = () => {
    dispatch(pressClear());
  };

  const onPressClearEntry = () => {
    dispatch(pressClearEntry());
  };

  const onPressBackSpace = () => {
    dispatch(pressBackSpace());
  };

  const onPressOperator = (operator: string) => {
    dispatch(pressOperator(operator));
  };

  const onPressSpecialOperator = (operator: string) => {
    dispatch(pressSpecialOperator(operator));
  };

  const onPressDot = () => {
    dispatch(pressDot());
  };

  const onPressEqual = () => {
    dispatch(pressEqual());
  };

  return (
    <Container>
      <ButtonRow>
        <Button
          onPress={() => {
            onPressOperator('%');
          }}
          color="black"
        >
          <ButtonText>%</ButtonText>
        </Button>
        <Button
          onPress={() => {
            onPressClearEntry();
          }}
          color="black"
        >
          <ButtonText>CE</ButtonText>
        </Button>
        <Button
          onPress={() => {
            onPressClear();
          }}
          color="black"
        >
          <ButtonText>C</ButtonText>
        </Button>
        <Button
          onPress={() => {
            onPressBackSpace();
          }}
          color="black"
        >
          <ButtonText>
            <Ionicons name="backspace-outline" color="white" size={24} />
          </ButtonText>
        </Button>
      </ButtonRow>
      <ButtonRow>
        <Button
          onPress={() => {
            onPressSpecialOperator('1/');
          }}
          color="black"
        >
          <ButtonText>1/𝑥</ButtonText>
        </Button>
        <Button
          onPress={() => {
            onPressSpecialOperator('²');
          }}
          color="black"
        >
          <ButtonText>𝑥²</ButtonText>
        </Button>
        <Button
          onPress={() => {
            onPressSpecialOperator('²√');
          }}
          color="black"
        >
          <ButtonText>²√𝑥</ButtonText>
        </Button>
        <Button
          onPress={() => {
            onPressOperator('÷');
          }}
          color="white"
        >
          <ButtonText style={{ color: 'black' }}>÷</ButtonText>
        </Button>
      </ButtonRow>
      <ButtonRow>
        <Button
          onPress={() => {
            onPressNumber(7);
          }}
          color="blue"
        >
          <ButtonText>7</ButtonText>
        </Button>
        <Button
          onPress={() => {
            onPressNumber(8);
          }}
          color="blue"
        >
          <ButtonText>8</ButtonText>
        </Button>
        <Button
          onPress={() => {
            onPressNumber(9);
          }}
          color="blue"
        >
          <ButtonText>9</ButtonText>
        </Button>
        <Button
          onPress={() => {
            onPressOperator('×');
          }}
          color="white"
        >
          <ButtonText style={{ color: 'black' }}>×</ButtonText>
        </Button>
      </ButtonRow>
      <ButtonRow>
        <Button
          onPress={() => {
            onPressNumber(4);
          }}
          color="blue"
        >
          <ButtonText>4</ButtonText>
        </Button>
        <Button
          onPress={() => {
            onPressNumber(5);
          }}
          color="blue"
        >
          <ButtonText>5</ButtonText>
        </Button>
        <Button
          onPress={() => {
            onPressNumber(6);
          }}
          color="blue"
        >
          <ButtonText>6</ButtonText>
        </Button>
        <Button
          onPress={() => {
            onPressOperator('-');
          }}
          color="white"
        >
          <ButtonText style={{ color: 'black' }}>-</ButtonText>
        </Button>
      </ButtonRow>
      <ButtonRow>
        <Button
          onPress={() => {
            onPressNumber(1);
          }}
          color="blue"
        >
          <ButtonText>1</ButtonText>
        </Button>
        <Button
          onPress={() => {
            onPressNumber(2);
          }}
          color="blue"
        >
          <ButtonText>2</ButtonText>
        </Button>
        <Button
          onPress={() => {
            onPressNumber(3);
          }}
          color="blue"
        >
          <ButtonText>3</ButtonText>
        </Button>
        <Button
          onPress={() => {
            onPressOperator('+');
          }}
          color="white"
        >
          <ButtonText style={{ color: 'black' }}>+</ButtonText>
        </Button>
      </ButtonRow>
      <ButtonRow>
        <Button
          onPress={() => {
            onPressSpecialOperator('±');
          }}
          color="black"
        >
          <ButtonText>±</ButtonText>
        </Button>
        <Button
          onPress={() => {
            onPressNumber(0);
          }}
          color="blue"
        >
          <ButtonText>0</ButtonText>
        </Button>
        <Button
          onPress={() => {
            onPressDot();
          }}
          color="black"
        >
          <ButtonText>.</ButtonText>
        </Button>
        <Button
          onPress={() => {
            onPressEqual();
          }}
          color="white"
        >
          <ButtonText style={{ color: 'black' }}>=</ButtonText>
        </Button>
      </ButtonRow>
    </Container>
  );
};

export default ButtonPad;

import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { shallow } from 'enzyme';
import { Button } from '../../../../src/components/buttons/Button';

describe('Rendering', () => {
  it('should match to snapshot', () => {
    const tree = render(<Button text="Button" />).toJSON();
    expect(tree).toMatchSnapshot()
  });
});

describe('On press action', () => {
  it('should be called', () => {
    const mockPress = jest.fn();
    const { getByText } = render(<Button text="Submit" onPress={mockPress} />);

    fireEvent.press(getByText('Submit'));
    expect(mockPress).toBeCalled();
  });
})

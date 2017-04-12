import React from 'react';
import renderer from 'react-test-renderer';
import VideoCard from './VideoCard';

test('VideoCard snapshot test', () => {
  const component = renderer.create(<VideoCard />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
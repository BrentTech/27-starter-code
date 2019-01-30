import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Counter from '../components/counter.js';

Enzyme.configure({adapter: new Adapter() });

global.shallow = shallow;
global.render = render;
global.mount = mount;


describe('Counter', () => {
  it('is alive', () => {
    let component = shallow(<Counter />);
    expect(component.find('section').exists()).toBeTruthy();
  });
  it('changes state on click (decrement)', () => {
    let component = mount(<Counter />)
    let minus = component.find('.downClicker');
    minus.simulate('click');
    expect(component.state('count')).toEqual(-1);
  });
  it('changes state on click (increment)', () => {
    let component = mount(<Counter />)
    let minus = component.find('.upClicker');
    minus.simulate('click');
    expect(component.state('count')).toEqual(1);
  });
  it('renders correctly', () => {
    let render = renderer.create('<Counter/>').toJSON();
    expect(render).toMatchSnapshot();
  });
})
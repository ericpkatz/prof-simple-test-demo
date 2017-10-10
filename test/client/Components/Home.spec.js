import React from 'react';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
Enzyme.configure({ adapter: new Adapter()});

const Home = ({ message = 'Hi', onClick })=> {
  return (
    <div>
      <h1>{ message }</h1>
      <button onClick={ onClick }>Bye</button>
    </div>
  );
}

describe('Home Component', ()=> {
  it('exists', ()=> {
    expect(Home).to.be.ok;
  });
  it('shows a default message', ()=> {
    const home = shallow(<Home />);
    expect(home.find('h1').text()).contains('Hi');
  });
  it('can show a custom message', ()=> {
    const home = shallow(<Home message='foo'/>);
    expect(home.find('h1').text()).contains('foo');
  });

  it('button click calls onClick prop', ()=> {
    let count = 0;
    const onClick = ()=> {
      count++;
    };
    const home = shallow(<Home message='foo' onClick={ onClick }/>);
    const button = home.find('button');
    button.simulate('click');
    button.simulate('click');
    expect(count).to.equal(2);
  });
});

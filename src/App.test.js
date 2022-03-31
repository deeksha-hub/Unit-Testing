import { render, screen } from '@testing-library/react';
import React from 'react'
import '@testing-library/jest-dom'
import App from './App';

//-----------enzyme configuration -------------//(mandatory for every test file created)

import { configure ,shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

//-------------------------------------//

describe("Counter Testing",()=>{

 
  test('renders learn react link', () => {
    
    // render(<App />);
    // const linkElement = screen.getByText(/learn react/i);

    // const {getByText} = render(<App/>);
    // const linkElement=getByText("this is counter")    // to test if the text is present at App component
    // expect(linkElement).toBeInTheDocument();

   
  });

//------------using enzyme----------

let wrapper;
 beforeEach(()=>{      //optimisation for shallow function used to render App component in every test case
                           
    wrapper = shallow(<App/>)

 })  

  test("render the title of the counter",()=>{

  
   //const wrapper=shallow(<App/>); // render the component at one level deep(only the parent) 

   expect(wrapper.find("h1").text()).toContain("This is counter App");


  })

  test("render a button with text of `increment`",()=>{   // test case that test the text over the button with an id = increment-btn

    //const wrapper = shallow(<App/>);

    expect(wrapper.find('#increment-btn').text()).toBe('Increment')  

  })
  
  test("render the initial value of the counter",()=>{ //   test to check the initial value of counter

    //const wrapper = shallow(<App/>);
  expect(wrapper.find('#counter-value').text()).toBe("0");

  })


  test("render the click event of the increment button",()=>{  // test to check the changed value of the counter after event onClick

   wrapper.find('#increment-btn').simulate("click");

   expect(wrapper.find('#counter-value').text()).toBe("1");

  })

  test("render the click event of the decrement button",()=>{

    wrapper.find('#increment-btn').simulate("click");
    //wrapper.find('#increment-btn').simulate("click");
    wrapper.find('#decrement-btn').simulate("click");
    expect(wrapper.find('#counter-value').text()).toBe("0");
   

  })

})

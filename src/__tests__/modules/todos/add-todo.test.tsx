import React from 'react';
import { shallow } from "enzyme";
import AddTodo, { IAddTodo } from "../../../modules/todos/components/add-todo";

describe("<AddTodo />", () => {
  const defaultProps: IAddTodo = {
    addToDoHandler() {
      return;
    }
  };

  const addToDoHandler = jest.fn();

  it("should render correctly", () => {
    const wrapperComponent = shallow(<AddTodo {...defaultProps} />);

    expect(wrapperComponent).toMatchSnapshot();
  });

  it("doest not called add-todo fn if todo text empty", () => {
    const wrapperComponent = shallow(<AddTodo {...defaultProps} addToDoHandler={addToDoHandler} />);
    const fakeEvent = { preventDefault: () => {} };

    wrapperComponent.find('#add-todo-form').simulate('submit', fakeEvent)
    expect(addToDoHandler).toHaveBeenCalledTimes(0)
  })

  it("called add todo fn if todo text not empty", () => {
    const wrapperComponent = shallow(<AddTodo {...defaultProps} addToDoHandler={addToDoHandler} />);
    // created fakeEvent with a fake preventDefault function and pass it along
    const fakeEvent = { preventDefault: () => {} };

    wrapperComponent.find('input').simulate('change', {target: {value: 'test value'}});
    wrapperComponent.find('#add-todo-form').simulate('submit', fakeEvent)
    expect(addToDoHandler).toHaveBeenCalledTimes(1)
  })
});

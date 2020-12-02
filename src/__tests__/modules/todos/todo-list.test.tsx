import { shallow } from "enzyme";
import TodoList, { ITodoList } from "../../../modules/todos/components/todo-list";

describe("<TodoList />", ()=> {
  const defaultprops: ITodoList = {
    deleteTodoHandler() {
      return;
    },
    todos: [{id: 1, text: "text one"}, {id: 2, text: "text two"}],
  }

  it("should render correctly", () => {
    const wrapperComponent = shallow(<TodoList {...defaultprops} />)

    expect(wrapperComponent.find('p b').text()).toEqual("TodoList")
    expect(wrapperComponent.find('li')).toHaveLength(2)
    expect(wrapperComponent).toMatchSnapshot()
  })

  it("should render with empty list", () => {
    const emptyTodo = {
      todos: []
    }
    const wrapperComponent = shallow(<TodoList {...defaultprops} {...emptyTodo} />)

    expect(wrapperComponent.find('p b').text()).toEqual("TodoList")
    expect(wrapperComponent.find('ul').text()).toEqual("You don't have todo items")
    expect(wrapperComponent.find('li')).toHaveLength(0)
    expect(wrapperComponent).toMatchSnapshot()
  })

  it("should called delete buttom", () => {
    const deleteTodoHandler = jest.fn();
    const wrapperComponent = shallow(<TodoList {...defaultprops} deleteTodoHandler={deleteTodoHandler} />)

    wrapperComponent.find('button').first().simulate('click')    
    expect(deleteTodoHandler).toBeCalled()
  })
})
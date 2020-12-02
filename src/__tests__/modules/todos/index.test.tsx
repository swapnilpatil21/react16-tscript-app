import { shallow } from "enzyme";
import Todos from "../../../modules/todos";

describe("<Todos />", ()=> {
  
  it("should render correctly", () => {
    const wrapperComponent = shallow(<Todos />);
    expect(wrapperComponent).toMatchSnapshot();
  })

  it("render child components correctly", () => {
    const wrapperComponent = shallow(<Todos />);

    // console.log(wrapperComponent.debug());
    expect(wrapperComponent.find('AddTodo')).toHaveLength(1);
    expect(wrapperComponent.find('TodoList')).toHaveLength(1);
  })
})


// import { configure } from 'enzyme';
// import EnzymeAdapter from 'enzyme-adapter-react-16';

// configure({ adapter: new EnzymeAdapter() });

const enzyme = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");

enzyme.configure({ adapter: new Adapter() });

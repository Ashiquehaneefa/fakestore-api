//setting up adapter to use enzyme and test components

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({adapter: new Adapter()})
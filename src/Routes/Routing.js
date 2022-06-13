import { Route, Routes as Router, Routes } from "react-router-dom";
import PostUserInput from "../Components/FullProfile/PostUserInput";
import PullData from "../Components/PullData/PullData";
import Resume from "../Components/Resume/Resume";

const Routing = () => (
  <Router>
    <Routes>
      <Route exact path="/all" component={PostUserInput} />
      <Route exact path="/allResume" component={Resume} />
      <Route exact path="/display" component={PullData} />
    </Routes>
  </Router>
);

export default Routing;
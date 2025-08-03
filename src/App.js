import { Provider } from "react-redux";
import './App.css';
import store from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Default, ParamsComponent, NotFound } from "./Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="" element={<Home />} >
              <Route element={<Default />} index />
              <Route element={<ParamsComponent />} path=":id" />
            </Route>
            <Route path="*" element={<NotFound />} ></Route>
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

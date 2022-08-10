import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
import Component from "./Component/Component";
function App() {
	return (
		<>
			<Provider store={store}>
				<Component />
			</Provider>
		</>
	);
}

export default App;

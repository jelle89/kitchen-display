import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OrderList from "./components/OrderList";
import EditOrder from "./components/EditOrder";

function App() {
    return (
        <Router>
            <div>
                <div>
                    <div>
                        <Routes>
                            <Route exact path="/" element={<OrderList/>}>
                            </Route>
                            <Route path="/edit/:id" element={<EditOrder/>}>
                            </Route>
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
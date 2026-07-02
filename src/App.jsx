import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import BoardList from "./pages/BoardList";
import BoardWrite from "./pages/BoardWrite";
import BoardView from "./pages/BoardView";
import BoardEdit from "./pages/BoardEdit";

function App() {
    return (
        <div className="app_layout">
            <Sidebar />

            <div className="app_main">
                <Header />

                <main className="app_content">
                    <Routes>
                        <Route path="/" element={<BoardList />} />
                        <Route path="/write" element={<BoardWrite />} />
                        <Route path="/view/:no" element={<BoardView />} />
                        <Route path="/edit/:no" element={<BoardEdit />} />
                    </Routes>
                </main>
            </div>
        </div>
    );
}

export default App;
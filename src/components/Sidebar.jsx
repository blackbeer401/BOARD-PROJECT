import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <aside className="sidebar">
            <h2>MBCA Board</h2>

            <nav>
                <Link to="/">게시글 목록</Link>
                <Link to="/write">글쓰기</Link>
                <Link to="/myposts">내가 작성한 글</Link>
            </nav>

            <div className="side_category">
                <h3>카테고리</h3>
                <p>HTML/CSS</p>
                <p>JavaScript</p>
                <p>React</p>
                <p>PHP</p>
                <p>DB</p>
                <p>Git</p>
                <p>기타</p>
            </div>
        </aside>
    );
}

export default Sidebar;
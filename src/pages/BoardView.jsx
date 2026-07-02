import { Link } from "react-router-dom";

function BoardView() {
    const post = {
        no: 1,
        category: "React",
        title: "React Router 질문입니다",
        writer: "sam",
        date: "2026-07-03",
        hit: 10,
        content: "useParams가 어떻게 동작하는지 궁금합니다."
    };

    return (
        <div className="board_view">

            <div className="view_header">
                <span className="category">{post.category}</span>

                <h2>{post.title}</h2>

                <div className="view_info">
                    <span>작성자: {post.writer}</span>
                    <span>작성일: {post.date}</span>
                    <span>조회수: {post.hit}</span>
                </div>
            </div>

            <div className="view_content">
                <p>{post.content}</p>
            </div>

            <div className="view_buttons">
                <Link to="/">목록</Link>
                <Link to={`/edit/${post.no}`}>수정</Link>
                <button type="button">삭제</button>
            </div>

        </div>
    );
}

export default BoardView;
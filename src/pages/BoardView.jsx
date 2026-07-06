import { Link, useParams } from "react-router-dom";

function BoardView() {
    const { no } = useParams();

    const posts = [
        {
            no: 1,
            category: "React",
            title: "React Router 질문입니다",
            writer: "sam",
            date: "2026-07-03",
            hit: 10,
            content: "Recat 가 궁급합니다.."
        },
        {
            no: 2,
            category: "JavaScript",
            title: "map() 질문입니다",
            writer: "kim",
            date: "2026-07-02",
            hit: 5,
            content: "map()이 궁금합니다."
        },
        {
            no: 3,
            category: "HTML/CSS",
            title: "label과 질문입니다",
            writer: "lee",
            date: "2026-07-01",
            hit: 8,
            content: "label이 궁금합니다."
        }
    ];

    const post = posts.find((item) => {
        return item.no === Number(no);
    });

    if (!post) {
        return (
            <div className="board_view">
                <h2>존재하지 않는 게시글입니다.</h2>
                <Link className="btn" to="/">목록으로</Link>
            </div>
        );
    }

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
                <Link className="btn" to="/">목록</Link>
                <Link className="btn primary" to={`/edit/${post.no}`}>수정</Link>
                <button type="button" onClick={() => alert("아직..까지는 구현하지 못했습니다...")}>삭제</button>
            </div>
        </div>
    );
}

export default BoardView;

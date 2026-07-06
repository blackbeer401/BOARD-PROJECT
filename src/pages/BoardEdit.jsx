import { Link, useParams } from "react-router-dom";

function BoardEdit(){
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

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("아직..까지는 구현하지 못했습니다...");
    };

    if (!post) {
        return (
            <div className="board_form">
                <h2>수정할 게시글이 없습니다.</h2>
                <Link className="btn" to="/">목록으로</Link>
            </div>
        );
    }

    return(
        <div className="board_form">
            <div className="form_header">
                <h2>게시글 수정</h2>
                <p>게시글 내용을 수정하는 화면입니다.</p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="form_row">
                    <label htmlFor="category">카테고리</label>
                    <select id="category" defaultValue={post.category}>
                        <option value="HTML/CSS">HTML/CSS</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="React">React</option>
                        <option value="PHP">PHP</option>
                        <option value="DB">DB</option>
                        <option value="Git">Git</option>
                        <option value="기타">기타</option>
                    </select>
                </div>

                <div className="form_row">
                    <label htmlFor="title">제목</label>
                    <input id="title" type="text" defaultValue={post.title} />
                </div>

                <div className="form_row">
                    <label htmlFor="writer">작성자</label>
                    <input id="writer" type="text" defaultValue={post.writer} />
                </div>

                <div className="form_row">
                    <label htmlFor="content">내용</label>
                    <textarea id="content" rows="10" defaultValue={post.content}></textarea>
                </div>

                <div className="form_buttons">
                    <Link className="btn" to={`/view/${post.no}`}>취소</Link>
                    <button type="submit">수정</button>
                </div>
            </form>
        </div>
    );
}

export default BoardEdit;

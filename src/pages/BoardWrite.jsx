import { Link } from "react-router-dom";

function BoardWrite(){
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("아직..까지는 구현하지 못했습니다...");
    };

    return(
        <div className="board_form">
            <div className="form_header">
                <h2>새글 작성</h2>
                <p>학습 중 생긴 질문이나 해결 방법을 작성해보세요.</p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="form_row">
                    <label htmlFor="category">카테고리</label>
                    <select id="category" defaultValue="React">
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
                    <input id="title" type="text" placeholder="제목을 입력하세요." />
                </div>

                <div className="form_row">
                    <label htmlFor="writer">작성자</label>
                    <input id="writer" type="text" placeholder="작성자를 입력하세요." />
                </div>

                <div className="form_row">
                    <label htmlFor="content">내용</label>
                    <textarea id="content" rows="10" placeholder="내용을 입력하세요."></textarea>
                </div>

                <div className="form_buttons">
                    <Link className="btn" to="/">목록</Link>
                    <button type="submit">등록</button>
                </div>
            </form>
        </div>
    );
}

export default BoardWrite;

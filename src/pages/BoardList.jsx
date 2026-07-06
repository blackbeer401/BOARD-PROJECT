import { Link } from "react-router-dom";

function BoardList() {
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

    return (
        <div className="board_list">
            <div className="list_header">
                <h2>전체 게시글</h2>
                <p>HTML, CSS, JavaScript, React, PHP, DB, Git 학습 질문을 공유해보세요.</p>
            </div>

            <div className="list_top">
                <input type="text" placeholder="검색어를 입력하세요." />
                <Link className="btn primary" to="/write">글쓰기</Link>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>카테고리</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                        <th>조회수</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        posts.map((post) => {
                            return (
                                <tr key={post.no}>
                                    <td>{post.no}</td>
                                    <td><span className="category">{post.category}</span></td>
                                    <td className="title_cell">
                                        <Link to={`/view/${post.no}`}>
                                            {post.title}
                                        </Link>
                                    </td>
                                    <td>{post.writer}</td>
                                    <td>{post.date}</td>
                                    <td>{post.hit}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default BoardList;

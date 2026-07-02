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
            content: "useParams가 어떻게 동작하는지 궁금합니다."
        },
        {
            no: 2,
            category: "JavaScript",
            title: "map() 질문입니다",
            writer: "kim",
            date: "2026-07-02",
            hit: 5,
            content: "map()이 배열을 어떻게 반복하는지 궁금합니다."
        }
    ];

    return (
        <div className="board_list">

            <div className="list_header">
                <h2>MBCA 학습 문의 게시판</h2>
                <p>HTML, CSS, JavaScript, React 학습 중 생긴 질문을 공유해보세요.</p>
            </div>

            <div className="list_top">
                <Link to="/write">글쓰기</Link>
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
                                    <td>{post.category}</td>

                                    <td>
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
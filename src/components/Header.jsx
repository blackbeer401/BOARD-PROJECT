function Header() {
    return (
        <header className="header">
            <div>
                <h1>MBCA 학습 문의 게시판</h1>
                <p>학습 중 생긴 질문과 해결 방법을 기록하는 공간입니다.</p>
            </div>

            <input
                type="text"
                placeholder="제목, 작성자, 내용 검색"
            />
        </header>
    );
}

export default Header;

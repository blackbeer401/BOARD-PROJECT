function Header() {
    return (
        <header className="header">
            <h1>MBCA 학습 문의 게시판</h1>

            <input
                type="text"
                placeholder="제목, 작성자, 내용 검색"
            />
        </header>
    );
}

export default Header;
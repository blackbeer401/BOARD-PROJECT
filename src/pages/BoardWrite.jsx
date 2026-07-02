function BoardWrite(){
    return(
        <div>
            <div>
                <h2>자유게시판 - 새글 작성</h2>
                <p>자유롭게 게시글을 작성하며 이야기를 나누세요.</p>
            </div>

            <form>
                <div>
                    <label htmlFor="title">제목</label>
                    <input id="title" type="text" />
                </div>

                <div>
                    <label htmlFor="writer">작성자</label>
                    <input id="writer" type="text" />
                </div>

                <div>
                    <label htmlFor="content">내용</label>
                    <textarea id="content"></textarea>
                </div>

                <button type="submit">등록</button>
            </form>
        </div>
    )
}

export default BoardWrite
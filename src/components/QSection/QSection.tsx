/**
 * 기획 의도 — 학부모가 자주 가지는 3가지 질문.
 */
export function QSection() {
  return (
    <section className="sec" style={{ background: 'var(--dark)' }}>
      <div className="si">
        <div className="sh sr">
          <div className="sl">기획 의도</div>
          <div className="st">혹시 이런 질문, 해보셨나요?</div>
        </div>
        <div className="q-grid sr">
          <div className="q-col">
            <div className="qc">
              <div className="qn">Q1.</div>
              <div className="qt">
                ChatGPT가 답을 척척 내놓는 시대,
                <br />
                아이에게 진짜 필요한 능력은 무엇일까요?
              </div>
            </div>
            <div className="qc">
              <div className="qn">Q2.</div>
              <div className="qt">
                AI가 대체할 수 없는 '질문하는 힘'은
                <br />
                어떻게 길러줄 수 있을까요?
              </div>
            </div>
          </div>
          <div className="qc tall">
            <div className="qn">Q3.</div>
            <div className="qt">
              각 분야의 전문가들은 왜 이 시대에
              <br />
              독서와 이중언어를 강조하는 걸까요?
            </div>
          </div>
        </div>
        <div className="q-foot sr">
          AI 시대, 아이 교육의 방향성은 어떻게 잡을까요?
        </div>
      </div>
    </section>
  );
}

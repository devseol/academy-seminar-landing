/**
 * 강연 목표 섹션. 차트 인포그래픽 + 3가지 인사이트.
 */
export function Goal() {
  const chartImageUrl = 'assets/chart.svg';

  return (
    <section className="sec" style={{ background: 'var(--dark)' }}>
      <div className="si">
        <div className="sh sr">
          <div className="sl">강연 목표</div>
          <div className="st" style={{ color: '#ffffff' }}>
            어느 위치에 우리 아이를 두시겠습니까?
          </div>
        </div>

        <div className="chart-box sr chart-img-box">
          <div className="chart-sl">AI 혁명과 교육 양극화 지도</div>
          <div className="chart-img-wrap">
            <img
              src={chartImageUrl}
              alt="AI 혁명과 교육 양극화 지도"
              className="chart-img-resp"
            />
          </div>
        </div>

        <div className="chart-captions sr">
          <p className="cc-line">
            <strong className="cc-bold">
              우리 아이가 사회에 첫발을 내딛는 시기인 2032년,
            </strong>
          </p>
          <p className="cc-line">
            <span className="cc-normal">
              지금 어떤 교육을 선택하느냐가 2032년 우리 아이의 위치를 결정합니다.
            </span>
          </p>
          <p className="cc-line cc-spacer">&nbsp;</p>
          <p className="cc-line">
            <span className="cc-normal">
              이번 토크콘서트를 통해{' '}
              <strong className="cc-bold">3가지 인사이트</strong>를 얻어가시길
              바랍니다.
            </span>
          </p>
        </div>

        <div className="ins-grid">
          <div className="ins-c sr">
            <div className="ins-n">01.</div>
            <div className="ins-t">
              질문하는 아이로
              <br />
              키우는 구체적인 방법
            </div>
            <div className="ins-d">
              호기심은 재능이 아니라 훈련입니다. 과학자의 언어로 듣는 호기심
              교육의 실체.
            </div>
          </div>
          <div className="ins-c sr d1">
            <div className="ins-n">02.</div>
            <div className="ins-t">
              이런 학원, 절대로
              <br />
              보내면 안 됩니다
            </div>
            <div className="ins-d">
              김성윤 대표가 직접 말하는 잘못된 영어교육의 민낯. 바이럴 콘텐츠로
              화제가 된 그 이야기.
            </div>
          </div>
          <div className="ins-c sr d2">
            <div className="ins-n">03.</div>
            <div className="ins-t">
              이중언어자로 키워야
              <br />
              하는 진짜 이유
            </div>
            <div className="ins-d">
              암기식 영어가 아닌, 자연스러운 노출로 진짜 영어를 구사하는 아이로
              키우는 방법.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

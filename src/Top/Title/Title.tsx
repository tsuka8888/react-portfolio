import TitleSrc from "../../assets/title.jpg";

function Title() {
  return (
    <section id="title">
      <div className="title-left">
        <p className="portfolio small">ポートフォリオ</p>
        <div className="name">
          <p className="large">山本 司</p>
          <p className="small">フロントエンドエンジニア</p>
        </div>
      </div>
      <div className="title-right">
        <img src={TitleSrc} alt="" className="title-img"/>
      </div>
    </section>
  );
}

export default Title;

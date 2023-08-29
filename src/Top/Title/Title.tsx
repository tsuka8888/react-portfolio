import NigaoeSrc from "../../assets/nigaoe.png";

function Title() {
  return (
    <section id="title">
      <div className="title-wrapper">
        <div className="name">
          <p className="large">YAMAMOTO TSUKASA</p>
          <p className="small">フロントエンドエンジニア</p>
        </div>
        <div className="icon">
          <img src={NigaoeSrc} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Title;

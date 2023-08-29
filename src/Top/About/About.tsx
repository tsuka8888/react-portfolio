import nigaoeSrc from "../../assets/nigaoe.png";

function getAge(year: number, month: number, day: number) {
  const today = new Date();
  const birthdate = new Date(year, month - 1, day);
  const currentYearBirthday = new Date(
    today.getFullYear(),
    birthdate.getMonth(),
    birthdate.getDate(),
  );
  let age = today.getFullYear() - birthdate.getFullYear();
  if (today < currentYearBirthday) {
    age -= 1;
  }
  return age;
}

function About() {
  return (
    <section id="about">
      <div className="about-wrapper">
        <div className="about-title">
          <h1 className="font-large">ABOUT</h1>
          <p>私について</p>
        </div>
        <div className="about-description">
          <p>
            1994年12月生まれ {getAge(1994, 12, 5)}歳
            <br />
            フリーランスのフロントエンジニアです。
            <br />
            <br />
            2017年から2023年まで会社員としてWeb開発に携わった後、フリーランスに転向。
            <br />
            現在はReactとTypeScriptを用いたモダンフロントエンド開発を主に行っています。
          </p>
        </div>
        <div className="about-name">
          <img src={nigaoeSrc} alt="" />
          <div className="about-table">
            <div className="about-table-item">
              <dt>名前：</dt>
              <dd>山本司</dd>
            </div>
            <div className="about-table-item">
              <dt>職業：</dt>
              <dd>フロントエンドエンジニア</dd>
            </div>
            <div className="about-table-item">
              <dt>所在地：</dt>
              <dd>滋賀県</dd>
            </div>
            <div className="about-table-item">
              <dt>言語など：</dt>
              <dd>HTML、CSS、JavaScript、TypeScript、React、AWS、Git</dd>
            </div>
            <div className="about-table-item">
              <dt>資格：</dt>
              <dd>基本情報技術者、情報セキュリティマネジメント、AWS認定クラウドプラクティショナー、AWS認定ソリューションアーキテクトアソシエイト</dd>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

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
      <div className="about-name">
        <img src={nigaoeSrc} alt="" />
        <div className="about-name-name">
          <p className="large">山本 司</p>
          <p className="medium">フロントエンドエンジニア</p>
        </div>
      </div>
      <div className="about-description">
        <p>
          1994年12月生まれ {getAge(1994, 12, 5)}歳
          <br />
          フリーランスのフロントエンジニアです。
          <br />
          <br />
          約6年半の間、会社員としてWeb開発
        </p>
      </div>
    </section>
  );
}

export default About;

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BestMoviesSlide from "./BestMoviesSlide";
import BestActressNomineesSlide from "./BestActressNomineesSlide";
import BestDirectorNomineesSlide from "./BestDirectorNomineesSlide";
import BestActorNomineesInSecondPlanSlide from "./BestActorNomineesInSecondPlanSlide";
import BestActorsNomineeSlide from "./BestActorsNomineeSlide";
import BestActressNomineesInSecondPlan from "./BestActressNomineesInSecondPlan";
import BestSceneries from "./BestSceneries";
import BestAdaptiveSceneries from "./BestAdaptiveSceneries";

const NomineesOscar = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  //! Slider Start
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: handleSlideChange,
  };
  const bestMovies = [
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/60661/f5e8e74421c7f421a82c2741c6e0d6b2ead611c9/orig",
      title: "Анатомия падения",
      subTitle: "Anatomy of a fall",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/120922/042e567b3f191585132721025baca6a9f2cb68c9/orig",
      title: "Убийца цветочной луны",
      subTitle: "Killers Of The Flower Moon",
      description:
        "Главный фильм 2017 года. Мюзикл как признание в любви к Голливуду. История отношений джазового музыканта (Райан Гослинг) и начинающей актрисы (Эмма Стоун) в декорациях Лос-Анджелеса покорила и кинозалы, и критиков. Победитель в шести номинациях на премию «Оскар», в том числе «Лучшая актриса» и «Лучшая песня к фильму».",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/60661/c271206dfb46a490c3c19a2313a6e1cbc8963087/orig",
      title: "Оппенгеймер",
      subTitle: "Oppenheimer",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/120922/c3e32d0b46b37e66fa231c34ddf13d31d6d7bf90/orig",
      title: "Бедные-несчастные",
      subTitle: "Poor Things",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/60661/667a9e6dd6bc68933e344284c99af04b71c4b09c/orig",
      title: "Зона интересов",
      subTitle: "The Zone Of Interest",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/118781/f131324cee254b8463f1352245f7d55c669413ce/orig",
      title: "Американское чтиво",
      subTitle: "American Fiction",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/120922/fb3a798ed239fe9e3a089274a7a89f2f452a85ad/orig",
      title: "Барби",
      subTitle: "Barbie",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/118781/d4bec66a89d5c4b655b8914d4134f23a3be12b0c/orig",
      title: "Оставленные",
      subTitle: "The Holdovers",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/994123/d89cd96ee80d50917c898345b80057bb40c1cf91/orig",
      title: "Маэстро",
      subTitle: "Maestro",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/118781/24acf96ba1d5e750f36af892e7d6c75179db7b5f/orig",
      title: "Прошлые жизни",
      subTitle: "Past Loves",
    },
  ];
  const bestActorNominees = [
    {
      image:
        "https://avatars.mds.yandex.net/get-bunker/994123/7fdff84727c36d2c5f4876f417e656a91a37e983/orig",
      name: "Пол Джаматти",
      movie: "Оставленные",
    },
    {
      image:
        "https://avatars.mds.yandex.net/get-bunker/994123/fd47f1939b298cd4de81fa5d4978be677389f4ad/orig",
      name: "Джеффри Райт",
      movie: "Американское чтиво",
    },
    {
      image:
        "https://avatars.mds.yandex.net/get-bunker/118781/800e8f29e12faf4aaca53aa2d14525ee63e6aa18/orig",
      name: "Брэдли Купер",
      movie: "Маэстро",
    },
    {
      image:
        "https://avatars.mds.yandex.net/get-bunker/120922/5c6b20ba761f0fb5f99596bc95ffd04af63b5dde/orig",
      name: "Колман Доминго",
      movie: "Растин",
    },
    {
      image:
        "https://avatars.mds.yandex.net/get-bunker/120922/bd48927f72faa3c2681d3138931373e77ac7be21/orig",
      name: "Киллиан Мерфи",
      movie: "Оппенгеймер",
    },
  ];

  const bestActressNominees = [
    {
      image:
        "https://avatars.mds.yandex.net/get-bunker/994123/2f2d058aed658608677ae680eb950e0ed6593b57/orig",
      name: "Аннетт Бенинг",
      movie: "Дайана Найэд",
    },
    {
      image:
        "https://avatars.mds.yandex.net/get-bunker/994123/6f2b27f84c021957539603b781bd793e67f7e390/orig",
      name: "Лили Гладстоун",
      movie: "Убийцы цветочной луны",
    },
    {
      image:
        "https://avatars.mds.yandex.net/get-bunker/118781/04b967b468915aac9c7527e3129f846a162cb4e6/orig",
      name: "Сандра Хюллер",
      movie: "Анатомия падения",
    },
    {
      image:
        "https://avatars.mds.yandex.net/get-bunker/118781/4beebdc961e929017edd4e2778c7ec6ae87c6882/orig",
      name: "Кэри Маллиган",
      movie: "Маэстро",
    },
    {
      image:
        "https://avatars.mds.yandex.net/get-bunker/60661/9f9a2e623ee5240cce8482dadbbf9938e60758b1/orig",
      name: "Эмма Стоун",
      movie: "Бедные-несчастные",
    },
  ];

  const bestDirectorNominees = [
    {
      image:
        "https://avatars.mds.yandex.net/get-bunker/120922/ea605a2a6dea9910b777c6b3aae56871d91ae325/orig",
      name: "Жюстин Трие",
      movie: "Анатомия падения",
    },
    {
      image:
        "https://avatars.mds.yandex.net/get-bunker/118781/104340be3f091370b85b21fbe02380796d1897e5/orig",
      name: "Мартин Скорсезе",
      movie: "Убийцы цветочной луны",
    },
    {
      image:
        "https://avatars.mds.yandex.net/get-bunker/60661/d412b0c3319a13267fd3e51eddc7c52b1a5e5cf4/orig",
      name: "Кристофер Нолан",
      movie: "Оппенгеймер",
    },
    {
      image:
        "https://avatars.mds.yandex.net/get-bunker/120922/7c10ee41c544aed62a1afc1526994b6426efda66/orig",
      name: "Йоргос Лантимос",
      movie: "Бедные-несчастные",
    },
    {
      image:
        "https://avatars.mds.yandex.net/get-bunker/118781/db22045ebf91b12aac295c54902ec53850520e8d/orig",
      name: "Джонатан Глейзер",
      movie: "Зона интересов",
    },
  ];
  const bestActorNomineesInSecondPlan = [
    {
      image:
        "https://avatars.mds.yandex.net/get-bunker/118781/05d8573ed41f6ee78402bc6c3081ef3a5116ca49/orig",
      name: "Стерлинг К.Браун",
      movie: "Американское чтиво",
    },
    {
      image:
        "https://avatars.mds.yandex.net/get-bunker/118781/bb02b27bfbbd05cef5bf25764602f633f4f30166/orig",
      name: "Роберт Де Ниро",
      movie: "Убийцы цветочной луны",
    },
    {
      image:
        "https://avatars.mds.yandex.net/get-bunker/118781/96837d88b39151ce87c366f034460cb5d97bc62d/orig",
      name: "Роберт Дауни мл.",
      movie: "Оппенгеймер",
    },
    {
      image:
        "https://avatars.mds.yandex.net/get-bunker/118781/38f53f83df7c4a9900ce94779b493008d39da771/orig",
      name: "Райан Гослинг",
      movie: "Барби",
    },
    {
      image:
        "https://avatars.mds.yandex.net/get-bunker/60661/ae18e0d88d5fe128a5d5976171b4471a7f2db67c/orig",
      name: "Марк Руффало",
      movie: "Бедные-несчастные",
    },
  ];
  const bestActressNomineesInSecondPlan = [
    {
      image:
        "https://avatars.mds.yandex.net/get-bunker/118781/14cf47faf2fe552696103b5854409a59a669eeab/orig",
      name: "Джоди Фостер",
      movie: "Дайана Найэд",
    },
    {
      image:
        "https://avatars.mds.yandex.net/get-bunker/118781/5428d168b9a05b1b3295c82452fc8c4ad13b416a/orig",
      name: "Давайн Джой Рэндольф",
      movie: "Оставленные",
    },
    {
      image:
        "https://avatars.mds.yandex.net/get-bunker/60661/16cb746904999e4b0a25132b5a777ed24f122c00/orig",
      name: "Америка Феррера",
      movie: "Барби",
    },
    {
      image:
        "https://avatars.mds.yandex.net/get-bunker/998550/b65ab57c64cd04265a952c276fe3081328d5f68a/orig",
      name: "Даниэль Брукс",
      movie: "Цвет пурпурный",
    },
    {
      image:
        "https://avatars.mds.yandex.net/get-bunker/994123/4bbf7f0fa03854446c652e8663d510fcfe920f04/orig",
      name: "Эмили Блант",
      movie: "Оппенгеймер",
    },
  ];
  const bestSceneries = [
    {
      image:
        "https://avatars.mds.yandex.net/get-bunker/998550/51b502749ba7b8a0ab236497e24e56a13d320004/orig",
      name: "Анатомия падения",
      movie: "Anatomy of a Fall",
    },
    {
      image:
        "https://avatars.mds.yandex.net/get-bunker/120922/61bc34b45cbdda0bd541a83dba2af2b62e90ca39/orig",
      name: "Оставленные",
      movie: "The Holdovers",
    },
    {
      image:
        "https://avatars.mds.yandex.net/get-bunker/61205/e2ec361e026d1abf90693ea3c4976b93c984661c/orig",
      name: "Маэстро",
      movie: "Maestro",
    },
    {
      image:
        "https://avatars.mds.yandex.net/get-bunker/61205/68c52ef901f70e26b8592bd537de7bc13031e3ab/orig",
      name: "Май Декабрь",
      movie: "May December",
    },
    {
      image:
        "https://avatars.mds.yandex.net/get-bunker/118781/4171c484828f5d683dd2aee668fdc49c255cb68a/orig",
      name: "Прошлые жизни",
      movie: "Past Lives",
    },
  ];
  const bestAdaptiveSceneries = [
    {
      image:
        "https://avatars.mds.yandex.net/get-bunker/118781/acf7d6978838604f3930a68ecd8ad42a7c7e7dc7/orig",
      name: "Американское чтиво",
      movie: "American Fiction",
    },
    {
      image:
        "https://avatars.mds.yandex.net/get-bunker/120922/d7cd84f78cce3de5f3f58b786c70c28be989b526/orig",
      name: "Зона интересов",
      movie: "The Zone of Interest",
    },
    {
      image:
        "https://avatars.mds.yandex.net/get-bunker/118781/072ddcaad7b44787ca93645e9e14063d20bc1958/orig",
      name: "Оппенгеймер",
      movie: "Openheimer",
    },
    {
      image:
        "https://avatars.mds.yandex.net/get-bunker/60661/9eb2366accbded2e8dfc6f334504f7c65a2d7e1c/orig",
      name: "Барби",
      movie: "Barbie",
    },
    {
      image:
        "https://avatars.mds.yandex.net/get-bunker/120922/a30bfe8d4eabb403ef5ff29bbb43619460fc14f2/orig",
      name: "Бедные-несчастные",
      movie: "Poor Things",
    },
  ];
  //! Slider Finish
  const bestMoviesList = [
    {
      nameRus: "Анатомия падения",
      nameEng: "Anatomy of a Fall",
    },
    {
      nameRus: "Анатомия падения",
      nameEng: "Anatomy of a Fall",
    },
    {
      nameRus: "Анатомия падения",
      nameEng: "Anatomy of a Fall",
    },
    {
      nameRus: "Анатомия падения",
      nameEng: "Anatomy of a Fall",
    },
    {
      nameRus: "Анатомия падения",
      nameEng: "Anatomy of a Fall",
    },
  ];
  const bestActorNomineesList = [
    {
      name: "Пол Джаматти",
      movie: "Оставленные",
    },
    {
      name: "Джеффри Райт",
      movie: "Американское чтиво",
    },
    {
      name: "Брэдли Купер",
      movie: "Маэстро",
    },
    {
      name: "Колман Доминго",
      movie: "Растин",
    },
    {
      name: "Киллиан Мерфи",
      movie: "Оппенгеймер",
    },
  ];

  const bestActressNomineesList = [
    {
      name: "Аннетт Бенинг",
      movie: "Дайана Найэд",
    },
    {
      name: "Лили Гладстоун",
      movie: "Убийцы цветочной луны",
    },
    {
      name: "Сандра Хюллер",
      movie: "Анатомия падения",
    },
    {
      name: "Кэри Маллиган",
      movie: "Маэстро",
    },
    {
      name: "Эмма Стоун",
      movie: "Бедные-несчастные",
    },
  ];

  const bestDirectorNomineesList = [
    {
      name: "Жюстин Трие",
      movie: "Анатомия падения",
    },
    {
      name: "Мартин Скорсезе",
      movie: "Убийцы цветочной луны",
    },
    {
      name: "Кристофер Нолан",
      movie: "Оппенгеймер",
    },
    {
      name: "Йоргос Лантимос",
      movie: "Бедные-несчастные",
    },
    {
      name: "Джонатан Глейзер",
      movie: "Зона интересов",
    },
  ];

  const bestActorNomineesInSecondPlanList = [
    {
      name: "Стерлинг К.Браун",
      movie: "Американское чтиво",
    },
    {
      name: "Роберт Де Ниро",
      movie: "Убийцы цветочной луны",
    },
    {
      name: "Роберт Дауни мл.",
      movie: "Оппенгеймер",
    },
    {
      name: "Райан Гослинг",
      movie: "Барби",
    },
    {
      name: "Марк Руффало",
      movie: "Бедные-несчастные",
    },
  ];

  const bestActressNomineesInSecondPlanList = [
    {
      name: "Джоди Фостер",
      movie: "Дайана Найэд",
    },
    {
      name: "Давайн Джой Рэндольф",
      movie: "Оставленные",
    },
    {
      name: "Америка Феррера",
      movie: "Барби",
    },
    {
      name: "Даниэль Брукс",
      movie: "Цвет пурпурный",
    },
    {
      name: "Эмили Блант",
      movie: "Оппенгеймер",
    },
  ];

  const bestSceneriesList = [
    {
      name: "Анатомия падения",
      movie: "Anatomy of a Fall",
    },
    {
      name: "Оставленные",
      movie: "The Holdovers",
    },
    {
      name: "Маэстро",
      movie: "Maestro",
    },
    {
      name: "Май Декабрь",
      movie: "May December",
    },
    {
      name: "Прошлые жизни",
      movie: "Past Lives",
    },
  ];
  const bestAdaptiveSceneriesList = [
    {
      name: "Американское чтиво",
      movie: "American Fiction",
    },
    {
      name: "Зона интересов",
      movie: "The Zone of Interest",
    },
    {
      name: "Оппенгеймер",
      movie: "Openheimer",
    },
    {
      name: "Барби",
      movie: "Barbie",
    },
    {
      name: "Бедные-несчастные",
      movie: "Poor Things",
    },
  ];
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2 style={{ color: "white" }}>Номинанты</h2>
      <Slider {...sliderSettings}>
        <BestMoviesSlide movies={bestMovies} />
        <BestActorsNomineeSlide nominees={bestActorNominees} />
        <BestActressNomineesSlide nominees={bestActressNominees} />
        <BestDirectorNomineesSlide nominees={bestDirectorNominees} />
        <BestActorNomineesInSecondPlanSlide
          nominees={bestActorNomineesInSecondPlan}
        />
        <BestActressNomineesInSecondPlan
          nominees={bestActressNomineesInSecondPlan}
        />
        <BestSceneries nominees={bestSceneries} />
        <BestAdaptiveSceneries nominees={bestAdaptiveSceneries} />
      </Slider>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "50px",
        }}
      >
        {/* Лучшие фильмы */}
        <div style={{ textAlign: "left" }}>
          <h3
            style={{
              fontSize: "15px",
              lineHeight: "1.47",
              color: "#b7a261",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Лучшие фильмы
          </h3>
          {bestMoviesList.map((movies, index) => (
            <div key={index}>
              <p
                style={{
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  display: "block",
                  fontSize: "15px",
                  lineHeight: 1.2,
                  color: "#FFF",
                  transition: "color 0.3s",
                }}
                className="actor-name"
              >
                {movies.nameRus}
              </p>
              <p
                style={{
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  display: "block",
                  marginTop: "4px",
                  pointerEvents: "none",
                  fontSize: "13px",
                  lineHeight: 1.15,
                  color: "rgba(255, 255, 255, 0.7)",
                  marginTop: "-10px",
                }}
              >
                {movies.nameEng}
              </p>
              {index !== bestMoviesList.length - 1 && (
                <hr style={{ border: "0.1px solid #D2B48C" }} />
              )}
            </div>
          ))}
        </div>

        {/* Лучшая мужская роль */}
        <div style={{ textAlign: "left" }}>
          <h3
            style={{
              fontSize: "15px",
              lineHeight: "1.47",
              color: "#b7a261",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Лучшая мужская роль
          </h3>
          {bestActorNomineesList.map((actor, index) => (
            <div key={index}>
              <p
                style={{
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  display: "block",
                  fontSize: "15px",
                  lineHeight: 1.2,
                  color: "#FFF",
                  fontWeight: 600,
                  transition: "color 0.3s",
                }}
                className="actor-name"
              >
                {actor.name}
              </p>
              <p
                style={{
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  display: "block",
                  marginTop: "4px",
                  pointerEvents: "none",
                  fontSize: "13px",
                  lineHeight: 1.15,
                  color: "rgba(255, 255, 255, 0.7)",
                  marginTop: "-10px",
                }}
              >
                {actor.movie}
              </p>
              {index !== bestActorNomineesList.length - 1 && (
                <hr style={{ border: "0.1px solid #D2B48C" }} />
              )}
            </div>
          ))}
        </div>

        {/* Лучший женская роль*/}
        <div style={{ textAlign: "left" }}>
          <h3
            style={{
              fontSize: "15px",
              lineHeight: "1.47",
              color: "#b7a261",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Лучшая женская роль
          </h3>
          {bestActressNomineesList.map((actress, index) => (
            <div key={index}>
              <p
                style={{
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  display: "block",
                  fontSize: "15px",
                  lineHeight: 1.2,
                  color: "#FFF",
                  fontWeight: 600,
                  transition: "color 0.3s",
                }}
                className="actor-name"
              >
                {actress.name}
              </p>
              <p
                style={{
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  display: "block",
                  marginTop: "4px",
                  pointerEvents: "none",
                  fontSize: "13px",
                  lineHeight: 1.15,
                  color: "rgba(255, 255, 255, 0.7)",
                  marginTop: "-10px",
                }}
              >
                {actress.movie}
              </p>
              {index !== bestActressNomineesList.length - 1 && (
                <hr style={{ border: "0.1px solid #D2B48C" }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NomineesOscar;

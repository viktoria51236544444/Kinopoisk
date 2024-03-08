import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BestMoviesSlide from "./BestMoviesSlide";
import BestActressNomineesSlide from "./BestActressNomineesSlide";
import BestDirectorNomineesSlide from "./BestDirectorNomineesSlide";
import BestActorNomineesInSecondPlanSlide from "./BestActorNomineesInSecondPlanSlide";
import BestActorsNomineeSlide from "./BestActorsNomineeSlide";

const NomineesOscar = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

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
      </Slider>
    </div>
  );
};

export default NomineesOscar;

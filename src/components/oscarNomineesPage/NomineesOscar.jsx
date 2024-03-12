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

  // ! Nominees List Start
  const bestMoviesList = [
    {
      nameRus: "Анатомия падения",
      nameEng: "Anatomy of a Fall",
    },
    {
      nameRus: "Убийцы цветочной луны",
      nameEng: "Killers of the Flower Moon",
    },
    {
      nameRus: "Анатомия падения",
      nameEng: "Anatomy of a Fall",
    },
    {
      nameRus: "Оппенгеймер",
      nameEng: "Oppenheimer",
    },
    {
      nameRus: "Бедные-несчастные",
      nameEng: "Poor Things",
    },
    {
      nameRus: "Зона интересов",
      nameEng: "The Zone of Interest",
    },
    {
      nameRus: "Американское чтиво",
      nameEng: "American Fiction",
    },
    {
      nameRus: "Барби",
      nameEng: "Barbie",
    },
    {
      nameRus: "Оставленные",
      nameEng: "The Holdovers",
    },
    {
      nameRus: "Маэстро",
      nameEng: "Maestro",
    },
    {
      nameRus: "Прошлые жизни",
      nameEng: "Past Lives",
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
      nameRus: "Анатомия падения",
      nameEng: "Anatomy of a Fall",
    },
    {
      nameRus: "Оставленные",
      nameEng: "The Holdovers",
    },
    {
      nameRus: "Маэстро",
      nameEng: "Maestro",
    },
    {
      nameRus: "Май Декабрь",
      nameEng: "May December",
    },
    {
      nameRus: "Прошлые жизни",
      nameEng: "Past Lives",
    },
  ];
  const bestAdaptiveSceneriesList = [
    {
      nameRus: "Американское чтиво",
      nameEng: "American Fiction",
    },
    {
      nameRus: "Зона интересов",
      nameEng: "The Zone of Interest",
    },
    {
      nameRus: "Оппенгеймер",
      nameEng: "Openheimer",
    },
    {
      nameRus: "Барби",
      nameEng: "Barbie",
    },
    {
      nameRus: "Бедные-несчастные",
      nameEng: "Poor Things",
    },
  ];
  const bestWorkOfProductionArtist = [
    {
      nameRus: "Барби",
      nameEng: "Barbie",
    },
    {
      nameRus: "Убийцы цветочной луны",
      nameEng: "Killers of the Flower Moon",
    },
    {
      nameRus: "Оппенгеймер",
      nameEng: "Openheimer",
    },
    {
      nameRus: "Наполеон",
      nameEng: "Napoleon",
    },
    {
      nameRus: "Бедные-несчастные",
      nameEng: "Poor Things",
    },
  ];
  const bestCameraWork = [
    {
      nameRus: "Граф",
      nameEng: "The Count",
    },
    {
      nameRus: "Убийцы цветочной луны",
      nameEng: "Killers of the Flower Moon",
    },
    {
      nameRus: "Маэстро",
      nameEng: "Maestro",
    },
    {
      nameRus: "Оппенгеймер",
      nameEng: "Oppenheimer",
    },
    {
      nameRus: "Бедные-несчастные",
      nameEng: "Poor Things",
    },
  ];
  const bestAnimateMovies = [
    {
      nameRus: "Мальчик и птица",
      nameEng: "The Boy and the Heron",
    },
    {
      nameRus: "Элементарно",
      nameEng: "Elemental",
    },
    {
      nameRus: "Нимона",
      nameEng: "Nimona",
    },
    {
      nameRus: "Мечты робота",
      nameEng: "Robot Dreams",
    },
    {
      nameRus: "Человек-паук: Паутина вселенных",
      nameEng: "Spider-Man: Across the Spider-Verse",
    },
  ];
  const bestWorkInForeignLanguage = [
    {
      nameRus: "Идеальные дни",
      nameEng: "Perfect Days",
    },
    {
      nameRus: "Зона интересов",
      nameEng: "The Zone of Interest",
    },
    {
      nameRus: "Я – капитан",
      nameEng: "Me Captain",
    },
    {
      nameRus: "Общество снега",
      nameEng: "Society of the Snow",
    },
    {
      nameRus: "Учительская",
      nameEng: "The Teachers' Lounge",
    },
  ];
  const bestVisualEffects = [
    {
      nameRus: "Создатель",
      nameEng: "The Creator",
    },
    {
      nameRus: "Годзилла: Минус один",
      nameEng: "Godzilla: Minus One",
    },
    {
      nameRus: "Миссия невыполнима: Смертельная ...",
      nameEng: "Mission: Impossible - Dead Reckoning Part One",
    },
    {
      nameRus: "Стражи Галактики. Часть 3",
      nameEng: "Guardians of the Galaxy Vol. 3",
    },
    {
      nameRus: "Наполеон",
      nameEng: "Napoleon",
    },
  ];
  const bestCostumes = [
    {
      nameRus: "Барби",
      nameEng: "Barbie",
    },
    {
      nameRus: "Убийцы цветочной луны",
      nameEng: "Killers of the Flower Moon",
    },
    {
      nameRus: "Наполеон",
      nameEng: "Napoleon",
    },
    {
      nameRus: "Оппенгеймер",
      nameEng: "Oppenheimer",
    },
    {
      nameRus: "Бедные-несчастные",
      nameEng: "Poor Things",
    },
  ];
  const bestInstallation = [
    {
      nameRus: "Анатомия падения",
      nameEng: "Anatomy of a Fall",
    },
    {
      nameRus: "Убийцы цветочной луны",
      nameEng: "Killers of the Flower Moon",
    },
    {
      nameRus: "Оппенгеймер",
      nameEng: "Oppenheimer",
    },
    {
      nameRus: "Оставленные",
      nameEng: "The Holdovers",
    },
    {
      nameRus: "Бедные-несчастные",
      nameEng: "Poor Things",
    },
  ];
  const bestSongs = [
    {
      name: "The Fire Inside",
      movie: "Обжигающе горячий",
    },
    {
      name: "I’m Just Ken",
      movie: "Барби",
    },
    {
      name: "It Never Went Away",
      movie: "Американская симфония",
    },
    {
      name: "Wahzhazhe (A Song for My People)",
      movie: "Убийцы цветочной луны",
    },
    {
      name: "What Was I Made for",
      movie: "Барби",
    },
  ];
  const bestSoundtrack = [
    {
      nameRus: "Американское чтиво",
      nameEng: "American Fiction",
    },
    {
      nameRus: "Индиана Джонс и колесо судьбы",
      nameEng: "Indiana Jones and the Dial of Destiny",
    },
    {
      nameRus: "Убийцы цветочной луны",
      nameEng: "Killers of the Flower Moon",
    },
    {
      nameRus: "Оппенгеймер",
      nameEng: "Oppenheimer",
    },
    {
      nameRus: "Бедные-несчастные",
      nameEng: "Poor Things",
    },
  ];
  const bestMakeUp = [
    {
      nameRus: "Голда. Судный день",
      nameEng: "Golda",
    },
    {
      nameRus: "Маэстро",
      nameEng: "Maestro",
    },
    {
      nameRus: "Оппенгеймер",
      nameEng: "Oppenheimer",
    },
    {
      nameRus: "Общество снега",
      nameEng: "Society of the Snow",
    },
    {
      nameRus: "Бедные-несчастные",
      nameEng: "Poor Things",
    },
  ];
  // ! Nominees List Finish
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
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "50px",
        }}
      >
        {/* Лучший режиссер*/}
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
            Лучший режиссер
          </h3>
          {bestDirectorNomineesList.map((directorList, index) => (
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
                {directorList.name}
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
                {directorList.movie}
              </p>
              {index !== bestMoviesList.length - 1 && (
                <hr style={{ border: "0.1px solid #D2B48C" }} />
              )}
            </div>
          ))}
        </div>

        {/* Лучшая мужская роль второго плана */}
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
            Лучшая мужская роль <br /> второго плана
          </h3>
          {bestActorNomineesInSecondPlanList.map((actor2, index) => (
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
                {actor2.name}
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
                {actor2.movie}
              </p>
              {index !== bestActorNomineesInSecondPlanList.length - 1 && (
                <hr style={{ border: "0.1px solid #D2B48C" }} />
              )}
            </div>
          ))}
        </div>

        {/* Лучший женская роль второго плана*/}
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
            Лучшая женская роль <br /> второго плана
          </h3>
          {bestActressNomineesInSecondPlanList.map((actress2, index) => (
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
                {actress2.name}
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
                {actress2.movie}
              </p>
              {index !== bestActressNomineesInSecondPlanList.length - 1 && (
                <hr style={{ border: "0.1px solid #D2B48C" }} />
              )}
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "50px",
        }}
      >
        {/* Лучший сценарий*/}
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
            Лучший сценарий
          </h3>
          {bestSceneriesList.map((sceneries, index) => (
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
                {sceneries.nameRus}
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
                {sceneries.nameEng}
              </p>
              {index !== bestSceneriesList.length - 1 && (
                <hr style={{ border: "0.1px solid #D2B48C" }} />
              )}
            </div>
          ))}
        </div>

        {/* Лучший адаптированный сценарий*/}
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
            Лучшией адапти-
            <br /> рованный сценарий
          </h3>
          {bestAdaptiveSceneriesList.map((adaptive, index) => (
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
                {adaptive.nameRus}
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
                {adaptive.nameEng}
              </p>
              {index !== bestAdaptiveSceneriesList.length - 1 && (
                <hr style={{ border: "0.1px solid #D2B48C" }} />
              )}
            </div>
          ))}
        </div>

        {/* Лучшая работа художника-постановщика*/}
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
            ЛУЧШАЯ РАБОТА ХУДОЖ-
            <br />
            НИКА- ПОСТАНОВЩИКА
          </h3>
          {bestWorkOfProductionArtist.map((artist, index) => (
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
                {artist.nameRus}
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
                {artist.nameEng}
              </p>
              {index !== bestWorkOfProductionArtist.length - 1 && (
                <hr style={{ border: "0.1px solid #D2B48C" }} />
              )}
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "50px",
        }}
      >
        {/* ЛУЧШАЯ ОПЕРАТОРСКАЯ РАБОТА*/}
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
            ЛУЧШАЯ ОПЕРАТОРСКАЯ <br /> РАБОТА
          </h3>
          {bestCameraWork.map((cameraWork, index) => (
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
                {cameraWork.nameRus}
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
                {cameraWork.nameEng}
              </p>
              {index !== bestCameraWork.length - 1 && (
                <hr style={{ border: "0.1px solid #D2B48C" }} />
              )}
            </div>
          ))}
        </div>

        {/*ЛУЧШИЙ АНИМАЦИОННЫЙ ФИЛЬМ*/}
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
            ЛУЧШИЙ АНИМАЦИОННЫЙ <br /> ФИЛЬМ
          </h3>
          {bestAnimateMovies.map((animation, index) => (
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
                {animation.nameRus}
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
                {animation.nameEng}
              </p>
              {index !== bestAnimateMovies.length - 1 && (
                <hr style={{ border: "0.1px solid #D2B48C" }} />
              )}
            </div>
          ))}
        </div>

        {/* ЛУЧШИЙ ФИЛЬМ НА ИНОСТРАННОМ ЯЗЫКЕ*/}
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
            ЛУЧШИЙ ФИЛЬМ НА <br />
            ИНОСТРАННОМ ЯЗЫКЕ
          </h3>
          {bestWorkInForeignLanguage.map((foreign, index) => (
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
                {foreign.nameRus}
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
                {foreign.nameEng}
              </p>
              {index !== bestWorkInForeignLanguage.length - 1 && (
                <hr style={{ border: "0.1px solid #D2B48C" }} />
              )}
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "50px",
        }}
      >
        {/* ЛУЧШИЕ ВИЗУАЛЬНЫЕ ЭФФЕКТЫ*/}
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
            ЛУЧШИЕ ВИЗУАЛЬНЫЕ <br /> ЭФФЕКТЫ
          </h3>
          {bestVisualEffects.map((efffect, index) => (
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
                {efffect.nameRus}
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
                {efffect.nameEng}
              </p>
              {index !== bestCameraWork.length - 1 && (
                <hr style={{ border: "0.1px solid #D2B48C" }} />
              )}
            </div>
          ))}
        </div>

        {/*ЛУЧШИЕ КОСТЮМЫ*/}
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
            ЛУЧШИЕ КОСТЮМЫ
          </h3>
          {bestCostumes.map((costume, index) => (
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
                {costume.nameRus}
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
                {costume.nameEng}
              </p>
              {index !== bestAnimateMovies.length - 1 && (
                <hr style={{ border: "0.1px solid #D2B48C" }} />
              )}
            </div>
          ))}
        </div>

        {/* ЛУЧШИЙ МОНТАЖ*/}
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
            ЛУЧШИЙ МОНТАЖ
          </h3>
          {bestInstallation.map((installation, index) => (
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
                {installation.nameRus}
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
                {installation.nameEng}
              </p>
              {index !== bestInstallation.length - 1 && (
                <hr style={{ border: "0.1px solid #D2B48C" }} />
              )}
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "50px",
        }}
      >
        {/* ЛУЧШАЯ ПЕСНЯ*/}
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
            ЛУЧШАЯ ПЕСНЯ
          </h3>
          {bestSongs.map((song, index) => (
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
                {song.name}
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
                {song.movie}
              </p>
              {index !== bestSongs.length - 1 && (
                <hr style={{ border: "0.1px solid #D2B48C" }} />
              )}
            </div>
          ))}
        </div>

        {/*ЛУЧШИЙ САУНДТРЕК*/}
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
            ЛУЧШИЙ САУНДТРЕК
          </h3>
          {bestSoundtrack.map((soundtrack, index) => (
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
                {soundtrack.nameRus}
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
                {soundtrack.nameEng}
              </p>
              {index !== bestSoundtrack.length - 1 && (
                <hr style={{ border: "0.1px solid #D2B48C" }} />
              )}
            </div>
          ))}
        </div>

        {/* ЛУЧШИЙ ГРИМ И ПРИЧЕСКИ*/}
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
            ЛУЧШИЙ ГРИМ И ПРИЧЕСКИ
          </h3>
          {bestMakeUp.map((makeUp, index) => (
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
                {makeUp.nameRus}
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
                {makeUp.nameEng}
              </p>
              {index !== bestMakeUp.length - 1 && (
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

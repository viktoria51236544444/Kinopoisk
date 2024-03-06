import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "./ModalAllMovies";
import Play from "./assets/play.png";

const AllMovies = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMovieIndex, setSelectedMovieIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="arrow next" onClick={onClick}>
        <img src="https://img.icons8.com/carbon-copy/100/FFFFFF/chevron-right.png" />
      </div>
    );
  };

  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="arrow prev" onClick={onClick}>
        <img src="https://img.icons8.com/carbon-copy/100/FFFFFF/back.png" />
      </div>
    );
  };

  const sliderSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const openModal = (index) => {
    setSelectedMovieIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedMovieIndex(null);
    setModalOpen(false);
  };

  const movies = [
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/60661/ddd2adc95e6c76c9c227db5bc8b5020a07ed008b/orig",
      trailerUrl: "http://www.filmpro.ru/videos/434479",
      title: "Ла-Ла Лэнд",
      subTitle: "La La Land",
      description:
        "Главный фильм 2017 года. Мюзикл как признание в любви к Голливуду. История отношений джазового музыканта (Райан Гослинг) и начинающей актрисы (Эмма Стоун) в декорациях Лос-Анджелеса покорила и кинозалы, и критиков. Победитель в шести номинациях на премию «Оскар», в том числе «Лучшая актриса» и «Лучшая песня к фильму».",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/120922/5ac0ea0ce4115ac2d37a70cecbb78096722a59c0/orig",
      trailerUrl: "http://www.filmpro.ru/videos/219406",
      title: "Волк с Уолл-стрит",
      subTitle: "The Wolf of Wall Street",
      description:
        "Главный фильм 2017 года. Мюзикл как признание в любви к Голливуду. История отношений джазового музыканта (Райан Гослинг) и начинающей актрисы (Эмма Стоун) в декорациях Лос-Анджелеса покорила и кинозалы, и критиков. Победитель в шести номинациях на премию «Оскар», в том числе «Лучшая актриса» и «Лучшая песня к фильму».",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/118781/0fbcaa20da2c029517aa19238a7800a312a7ebbb/orig",
      trailerUrl: "http://www.filmpro.ru/videos/513111",
      title: "Таня против всех",
      subTitle: "I, Tonya",
      description:
        "Главный фильм 2017 года. Мюзикл как признание в любви к Голливуду. История отношений джазового музыканта (Райан Гослинг) и начинающей актрисы (Эмма Стоун) в декорациях Лос-Анджелеса покорила и кинозалы, и критиков. Победитель в шести номинациях на премию «Оскар», в том числе «Лучшая актриса» и «Лучшая песня к фильму».",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/61205/91125b3f9473bb101b110a81c95beadd3718a0b5/orig",
      trailerUrl: "http://www.filmpro.ru/videos/156877",
      title: "Мой парень псих",
      subTitle: "Silver Linings Playbook",
      description:
        "Главный фильм 2017 года. Мюзикл как признание в любви к Голливуду. История отношений джазового музыканта (Райан Гослинг) и начинающей актрисы (Эмма Стоун) в декорациях Лос-Анджелеса покорила и кинозалы, и критиков. Победитель в шести номинациях на премию «Оскар», в том числе «Лучшая актриса» и «Лучшая песня к фильму».",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/61205/ae41199882a7214289e945266763496eabf9b84e/orig",
      trailerUrl: "http://www.filmpro.ru/videos/824536",
      title: "Девушка, подающая ...",
      subTitle: "Promising young woman",
      description:
        "Главный фильм 2017 года. Мюзикл как признание в любви к Голливуду. История отношений джазового музыканта (Райан Гослинг) и начинающей актрисы (Эмма Стоун) в декорациях Лос-Анджелеса покорила и кинозалы, и критиков. Победитель в шести номинациях на премию «Оскар», в том числе «Лучшая актриса» и «Лучшая песня к фильму».",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/120922/7aa4efc2b05da2f93d6a468bad49c103970b32f6/orig",
      trailerUrl: "http://www.filmpro.ru/videos/372121",
      title: "В центре внимания",
      subTitle: "Spotlight",
      description:
        "Главный фильм 2017 года. Мюзикл как признание в любви к Голливуду. История отношений джазового музыканта (Райан Гослинг) и начинающей актрисы (Эмма Стоун) в декорациях Лос-Анджелеса покорила и кинозалы, и критиков. Победитель в шести номинациях на премию «Оскар», в том числе «Лучшая актриса» и «Лучшая песня к фильму».",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/61205/87c80685a6972b9b3962a8ef8983afa3a9a49281/orig",
      trailerUrl: "http://www.filmpro.ru/videos/245882",
      title: "Аппокалипсис",
      subTitle: "Apocalipto",
      description:
        "Главный фильм 2017 года. Мюзикл как признание в любви к Голливуду. История отношений джазового музыканта (Райан Гослинг) и начинающей актрисы (Эмма Стоун) в декорациях Лос-Анджелеса покорила и кинозалы, и критиков. Победитель в шести номинациях на премию «Оскар», в том числе «Лучшая актриса» и «Лучшая песня к фильму».",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/120922/58fb8c3ee24d7641960e2882f2e3df7843358092/orig",
      trailerUrl: "http://www.filmpro.ru/videos/245062",
      title: "Король говорит",
      subTitle: "The King's Speech",
      description:
        "Главный фильм 2017 года. Мюзикл как признание в любви к Голливуду. История отношений джазового музыканта (Райан Гослинг) и начинающей актрисы (Эмма Стоун) в декорациях Лос-Анджелеса покорила и кинозалы, и критиков. Победитель в шести номинациях на премию «Оскар», в том числе «Лучшая актриса» и «Лучшая песня к фильму».",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/120922/a18c09fe0403bb7710faff5c13146f6d1d3cc0b5/orig",
      trailerUrl: "http://www.filmpro.ru/videos/258070",
      title: "Одержимость",
      subTitle: "Whiplash",
      description:
        "Главный фильм 2017 года. Мюзикл как признание в любви к Голливуду. История отношений джазового музыканта (Райан Гослинг) и начинающей актрисы (Эмма Стоун) в декорациях Лос-Анджелеса покорила и кинозалы, и критиков. Победитель в шести номинациях на премию «Оскар», в том числе «Лучшая актриса» и «Лучшая песня к фильму».",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/120922/02ad94979cde667b94ad809f311790a73e5348ea/orig",
      trailerUrl: "http://www.filmpro.ru/videos/825076",
      title: "Отец",
      subTitle: "The Father",
      description:
        "Главный фильм 2017 года. Мюзикл как признание в любви к Голливуду. История отношений джазового музыканта (Райан Гослинг) и начинающей актрисы (Эмма Стоун) в декорациях Лос-Анджелеса покорила и кинозалы, и критиков. Победитель в шести номинациях на премию «Оскар», в том числе «Лучшая актриса» и «Лучшая песня к фильму».",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/61205/fdf1e90cc2a399bbcf24123ca5e559b7f02c0cb4/orig",
      trailerUrl: "http://www.filmpro.ru/videos/439714",
      title: "Джеки",
      subTitle: "Jackie",
      description:
        "Главный фильм 2017 года. Мюзикл как признание в любви к Голливуду. История отношений джазового музыканта (Райан Гослинг) и начинающей актрисы (Эмма Стоун) в декорациях Лос-Анджелеса покорила и кинозалы, и критиков. Победитель в шести номинациях на премию «Оскар», в том числе «Лучшая актриса» и «Лучшая песня к фильму».",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/118781/e289250952c0b7b6976c4b8fe82eb785a6975cb8/orig",
      trailerUrl: "http://www.filmpro.ru/videos/826876",
      title: "Сядь за руль ...",
      subTitle: "Drime My Car",
      description:
        "Главный фильм 2017 года. Мюзикл как признание в любви к Голливуду. История отношений джазового музыканта (Райан Гослинг) и начинающей актрисы (Эмма Стоун) в декорациях Лос-Анджелеса покорила и кинозалы, и критиков. Победитель в шести номинациях на премию «Оскар», в том числе «Лучшая актриса» и «Лучшая песня к фильму».",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/120922/825641ec1cae35ef47ffbc3de97f95b979e7f05f/orig",
      trailerUrl: "http://www.filmpro.ru/videos/221102",
      title: "Она",
      subTitle: "Her",
      description:
        "Главный фильм 2017 года. Мюзикл как признание в любви к Голливуду. История отношений джазового музыканта (Райан Гослинг) и начинающей актрисы (Эмма Стоун) в декорациях Лос-Анджелеса декорациях Лос-Анджелеса покорила и кинозалы, и критиков. Победитель в шести номинациях на премию «Оскар», в том числе «Лучшая актриса» и «Лучшая песня к фильму».",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/118781/06ed0f8c8655ccb5d0fd813b17d548b67a27a735/orig",
      trailerUrl: "http://www.filmpro.ru/videos/442471",
      title: "Лев",
      subTitle: "Lion",
      description:
        "Главный фильм 2017 года. Мюзикл как признание в любви к Голливуду. История отношений джазового музыканта (Райан Гослинг) и начинающей актрисы (Эмма Стоун) в декорациях Лос-Анджелеса покорила и кинозалы, и критиков. Победитель в шести номинациях на премию «Оскар», в том числе «Лучшая актриса» и «Лучшая песня к фильму».",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/aae3a928-6465-4bed-9af4-16929a44fd79/600x900",
      trailerUrl: "http://www.filmpro.ru/videos/568650",
      title: "Паразиты",
      subTitle: "Gisaengchung",
      description:
        "Главный фильм 2017 года. Мюзикл как признание в любви к Голливуду. История отношений джазового музыканта (Райан Гослинг) и начинающей актрисы (Эмма Стоун) в декорациях Лос-Анджелеса покорила и кинозалы, и критиков. Победитель в шести номинациях на премию «Оскар», в том числе «Лучшая актриса» и «Лучшая песня к фильму».",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/118781/40c0fe0da26bed3a46c883d363cd7044828a7a52/orig",
      trailerUrl: "http://www.filmpro.ru/videos/158666",
      title: "Афера по-американски",
      subTitle: "American Hustle",
      description:
        "Главный фильм 2017 года. Мюзикл как признание в любви к Голливуду. История отношений джазового музыканта (Райан Гослинг) и начинающей актрисы (Эмма Стоун) в декорациях Лос-Анджелеса покорила и кинозалы, и критиков. Победитель в шести номинациях на премию «Оскар», в том числе «Лучшая актриса» и «Лучшая песня к фильму».",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/120922/87bf3f751c177b751593571637994f84b627147c/orig",
      trailerUrl: "http://www.filmpro.ru/videos/827380",
      title: "Всё везде и сразу",
      subTitle: "Everything everywhere ...",
      description:
        "Главный фильм 2017 года. Мюзикл как признание в любви к Голливуду. История отношений джазового музыканта (Райан Гослинг) и начинающей актрисы (Эмма Стоун) в декорациях Лос-Анджелеса покорила и кинозалы, и критиков. Победитель в шести номинациях на премию «Оскар», в том числе «Лучшая актриса» и «Лучшая песня к фильму».",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/4b27e219-a8a5-4d85-9874-57d6016e0837/600x900",
      trailerUrl: "http://www.filmpro.ru/videos/549483",
      title: "Зелёная книга",
      subTitle: "Green Book",
      description:
        "Главный фильм 2017 года. Мюзикл как признание в любви к Голливуду. История отношений джазового музыканта (Райан Гослинг) и начинающей актрисы (Эмма Стоун) в декорациях Лос-Анджелеса покорила и кинозалы, и критиков. Победитель в шести номинациях на премию «Оскар», в том числе «Лучшая актриса» и «Лучшая песня к фильму».",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/61205/5e8e4fea00e9260158a1cdcf7b358b3384c8ae53/orig",
      trailerUrl: "http://www.filmpro.ru/videos/333430",
      title: "Искупление",
      subTitle: "Atonement",
      description:
        "Главный фильм 2017 года. Мюзикл как признание в любви к Голливуду. История отношений джазового музыканта (Райан Гослинг) и начинающей актрисы (Эмма Стоун) в декорациях Лос-Анджелеса покорила и кинозалы, и критиков. Победитель в шести номинациях на премию «Оскар», в том числе «Лучшая актриса» и «Лучшая песня к фильму».",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/118781/2722dd330f38a5a3add5252aeadb2207e3610db9/orig",
      trailerUrl: "http://www.filmpro.ru/videos/807069",
      title: "Скандал",
      subTitle: "Bombshell",
      description:
        "Главный фильм 2017 года. Мюзикл как признание в любви к Голливуду. История отношений джазового музыканта (Райан Гослинг) и начинающей актрисы (Эмма Стоун) в декорациях Лос-Анджелеса покорила и кинозалы, и критиков. Победитель в шести номинациях на премию «Оскар», в том числе «Лучшая актриса» и «Лучшая песня к фильму».",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/61205/d13c0cf06d0cedffcb0f5f4d7b1a0a0626ab4707/orig",
      trailerUrl: "http://www.filmpro.ru/videos/158611",
      title: "Жасмин",
      subTitle: "Blue Jasmine",
      description:
        "Главный фильм 2017 года. Мюзикл как признание в любви к Голливуду. История отношений джазового музыканта (Райан Гослинг) и начинающей актрисы (Эмма Стоун) в декорациях Лос-Анджелеса покорила и кинозалы, и критиков. Победитель в шести номинациях на премию «Оскар», в том числе «Лучшая актриса» и «Лучшая песня к фильму».",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/120922/5690f0ed1f07263aca120767e3642b058841f411/orig",
      trailerUrl: "http://www.filmpro.ru/videos/364974",
      title: "Гордость и предубеждение",
      subTitle: "Pride & Prejudice",
      description:
        "Главный фильм 2017 года. Мюзикл как признание в любви к Голливуду. История отношений джазового музыканта (Райан Гослинг) и начинающей актрисы (Эмма Стоун) в декорациях Лос-Анджелеса покорила и кинозалы, и критиков. Победитель в шести номинациях на премию «Оскар», в том числе «Лучшая актриса» и «Лучшая песня к фильму».",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/61205/dc55339dce54ee1916917fd077681fab6eb68268/orig",
      trailerUrl: "http://www.filmpro.ru/videos/354066",
      title: "Комната",
      subTitle: "Room",
      description:
        "Главный фильм 2017 года. Мюзикл как признание в любви к Голливуду. История отношений джазового музыканта (Райан Гослинг) и начинающей актрисы (Эмма Стоун) в декорациях Лос-Анджелеса покорила и кинозалы, и критиков. Победитель в шести номинациях на премию «Оскар», в том числе «Лучшая актриса» и «Лучшая песня к фильму».",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/120922/711e1cebe38537e9639b50e79a1bd2a5591a183e/orig",
      trailerUrl: "http://www.filmpro.ru/videos/420775",
      title: "Прибытие",
      subTitle: "Arrival",
      description:
        "Главный фильм 2017 года. Мюзикл как признание в любви к Голливуду. История отношений джазового музыканта (Райан Гослинг) и начинающей актрисы (Эмма Стоун) в декорациях Лос-Анджелеса покорила и кинозалы, и критиков. Победитель в шести номинациях на премию «Оскар», в том числе «Лучшая актриса» и «Лучшая песня к фильму».",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/61205/d33b8d998b3f34e4ae1f944785cf2ba2ce0307f5/orig",
      trailerUrl: "http://www.filmpro.ru/videos/821358",
      title: "Еще по одной",
      subTitle: "Another Round",
      description:
        "Главный фильм 2017 года. Мюзикл как признание в любви к Голливуду. История отношений джазового музыканта (Райан Гослинг) и начинающей актрисы (Эмма Стоун) в декорациях Лос-Анджелеса покорила и кинозалы, и критиков. Победитель в шести номинациях на премию «Оскар», в том числе «Лучшая актриса» и «Лучшая песня к фильму».",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/1a184eb2-a345-43ff-a7a0-f3b7884f3922/600x900",
      trailerUrl: "https://cdn.viqeo.tv/embed/?vid=8e3435a95c75c86445a6",
      title: "RRR: Рядом ревет ...",
      subTitle: "RRR",
      description:
        "Главный фильм 2017 года. Мюзикл как признание в любви к Голливуду. История отношений джазового музыканта (Райан Гослинг) и начинающей актрисы (Эмма Стоун) в декорациях Лос-Анджелеса покорила и кинозалы, и критиков. Победитель в шести номинациях на премию «Оскар», в том числе «Лучшая актриса» и «Лучшая песня к фильму».",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/62a8fd43-6e80-4c6b-a9b9-0274d7fae489/600x900",
      trailerUrl: "http://www.filmpro.ru/videos/218888",
      title: "12 лет рабства",
      subTitle: "12 Years a Slave",
      description:
        "Главный фильм 2017 года. Мюзикл как признание в любви к Голливуду. История отношений джазового музыканта (Райан Гослинг) и начинающей актрисы (Эмма Стоун) в декорациях Лос-Анджелеса покорила и кинозалы, и критиков. Победитель в шести номинациях на премию «Оскар», в том числе «Лучшая актриса» и «Лучшая песня к фильму».",
    },
  ];
  return (
    <div className="allMovies__container">
      <div className="allMovies__container-title">
        <p className="allMovies__container-title-p1">Смотрите на Кинопоиске</p>
        <p className="allMovies__container-title-p2">
          Лауреаты «Оскара» в XXI веке
        </p>
      </div>
      <Slider {...sliderSettings} className="allMovies__container-swiper">
        {movies.map((movie, index) => (
          <div key={index} className="allMovies__container_movies-swiper">
            <div
              className="allMovies__container_movies-swiper-img"
              onClick={() => openModal(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              style={{
                transition: "transform 0.3s ease",
                transform: hoveredIndex === index ? "scale(1.05)" : "scale(1)",
              }}
            >
              <div className="img-container">
                <img src={movie.imageUrl} alt="" />
                {hoveredIndex === index && (
                  <div className="play-icon">
                    <img className="play-icon-img" src={Play} alt="play" />
                  </div>
                )}
              </div>
              <p>{movie.title}</p>
              <p>{movie.subTitle}</p>
            </div>
          </div>
        ))}
      </Slider>
      {modalOpen && (
        <Modal movie={movies[selectedMovieIndex]} closeModal={closeModal} />
      )}
    </div>
  );
};
export default AllMovies;

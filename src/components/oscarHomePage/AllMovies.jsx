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
      <div className="arrow next2" onClick={onClick}>
        <img src="https://img.icons8.com/carbon-copy/100/FFFFFF/chevron-right.png" />
      </div>
    );
  };

  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="arrow prev2" onClick={onClick}>
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
      backgroundImageUrl:
        "https://www.nultylighting.co.uk/wp-content/uploads/2017/02/la-la-land-lighting-night-sky.jpg",
      description:
        "Главный фильм 2017 года. Мюзикл как признание в любви к Голливуду. История отношений джазового музыканта (Райан Гослинг) и начинающей актрисы (Эмма Стоун) в декорациях Лос-Анджелеса покорила и кинозалы, и критиков. Победитель в шести номинациях на премию «Оскар», в том числе «Лучшая актриса» и «Лучшая песня к фильму».",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/120922/5ac0ea0ce4115ac2d37a70cecbb78096722a59c0/orig",
      trailerUrl: "http://www.filmpro.ru/videos/219406",
      title: "Волк с Уолл-стрит",
      subTitle: "The Wolf of Wall Street",
      backgroundImageUrl:
        "https://hips.hearstapps.com/hmg-prod/images/f2eklzwawaabv4v-64cbcb7b57cfa.jpg",
      description:
        "Что делать, если ты в короткое время сделал огромное состояние, а потом прокутил его и сел в тюрьму? Написать об этом книгу и читать лекции об успехе. Так и поступил Джордан Белфорт, прообраз главного героя. Совместная работа Мартина Скорсезе и Леонардо Ди Каприо в очередной раз великолепна. «Оскар» снова прошел мимо Леонардо, но фильм в одночасье приобрел мировую известность.».",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/118781/0fbcaa20da2c029517aa19238a7800a312a7ebbb/orig",
      trailerUrl: "http://www.filmpro.ru/videos/513111",
      title: "Таня против всех",
      subTitle: "I, Tonya",
      backgroundImageUrl:
        "https://media.tenor.com/etuFsTmvEG8AAAAC/margot-robbie-i-tonya.gif",
      description:
        "Чёрная комедия о скандально известной фигуристке Тоне Хардинг. Путь Тони к славе начался в раннем детстве, когда ее требовательная мама отдала девочку в фигурное катание. Из милого белокурого одуванчика Тоня превратилась в агрессивную фигуристку, а жизнь с мамой променяла на жизнь с довольно сомнительным мужем. Звездная роль Марго Робби.",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/61205/91125b3f9473bb101b110a81c95beadd3718a0b5/orig",
      trailerUrl: "http://www.filmpro.ru/videos/156877",
      title: "Мой парень псих",
      subTitle: "Silver Linings Playbook",
      backgroundImageUrl:
        "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/07/silver-linings-playbook-1.jpg",
      description:
        "Бывший учитель Пэт Солитано (Брэдли Купер) провел более полугода в психиатрической лечебнице и хочет помириться с бывшей женой. Однажды он знакомится со странноватой Тиффани (Дженнифер Лоуренс), и между ними завязывается своеобразная дружба. Эта роль принесла Дженнифер Лоуренс премии «Оскар» и «Золотой глобус».",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/61205/ae41199882a7214289e945266763496eabf9b84e/orig",
      trailerUrl: "http://www.filmpro.ru/videos/824536",
      title: "Девушка, подающая ...",
      subTitle: "Promising young woman",
      backgroundImageUrl:
        "https://variety.com/wp-content/uploads/2020/01/promising-young-woman.jpg",
      description:
        "Когда-то Кассандра училась в университете и подавала большие надежды, но теперь живёт с родителями и работает в кофейне. Девушка скрывает от близких, что по вечерам посещает бары и другие увеселительные заведения, где, притворяясь сильно пьяной, ведёт охоту на падких до беззащитных женщин мужчин. Вымещая злость на противоположном поле, таким образом Кассандра мстит за события студенческих лет.",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/120922/7aa4efc2b05da2f93d6a468bad49c103970b32f6/orig",
      trailerUrl: "http://www.filmpro.ru/videos/372121",
      title: "В центре внимания",
      subTitle: "Spotlight",
      backgroundImageUrl:
        "https://mrwallpaper.com/images/high/spotlight-movie-female-character-lwi2rg1x5ahwve9d.jpg",
      description:
        "Создатели драмы «В центре внимания» увлекательно и досконально воспроизвели ход реального журналистского расследования. За это они получили два «Оскара», включая самый престижный — за лучший фильм. Главные герои обнаружили педофильское лобби в высших эшелонах католической церкви. Реально существующих репортеров сыграли голливудские звезды Марк Руффало, Майкл Китон и Рэйчел МакАдамс.",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/61205/87c80685a6972b9b3962a8ef8983afa3a9a49281/orig",
      trailerUrl: "http://www.filmpro.ru/videos/245882",
      title: "Аппокалипсис",
      subTitle: "Apocalipto",
      backgroundImageUrl:
        "https://play-lh.googleusercontent.com/proxy/tTTA2caa_tMce-ygiN-IASAg8FcIupOaR-P8gNRN_7Q02QRDKFhNbx77kwDBV5CyBejqdPT2yJ_6kKwhiWYRlf96Ow3QAwXtQ1qrCClv7B7LiATrhB9vukVlLNQcgfbAF4BsFX-bnFbdI8TZJR8lhIP2qJ1NVDaBPWrAwQ=s1920-w1920-h1080",
      description:
        "Фильм 'Апокалипсис' получил Оскар за лучший звукорежиссерский монтаж за великолепную работу по созданию атмосферы и звуковых эффектов, которые усиливают напряжение и эмоциональную глубину сюжета. Каждый звук отражает тщательно проработанный мир фильма, делая его более реалистичным и привлекательным для зрителей. Этот признанный успех добавил фильму еще большую ценность и восхищение со стороны критиков и зрителей.",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/120922/58fb8c3ee24d7641960e2882f2e3df7843358092/orig",
      trailerUrl: "http://www.filmpro.ru/videos/245062",
      title: "Король говорит",
      subTitle: "The King's Speech",
      backgroundImageUrl: "https://img.1tv.com/img/2020-12-14/fmt_96_324_1.jpg",
      description:
        "'Король говорит'- история принца Альберта, борющегося с заиканием и становящегося королем во время кризиса в Британии. Он находит помощь у неортодоксального логопеда Лайонела Лога, что приводит к неожиданным результатам. Фильм выиграл четыре Оскара, включая лучший фильм и лучшего актера (Колин Фёрт).",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/120922/a18c09fe0403bb7710faff5c13146f6d1d3cc0b5/orig",
      trailerUrl: "http://www.filmpro.ru/videos/258070",
      title: "Одержимость",
      subTitle: "Whiplash",
      backgroundImageUrl:
        "https://thumbs.dfs.ivi.ru/storage15/contents/d/4/2f80fd614e042f0ebb267d0db7eb44.jpg/858x483/?q=85",
      description:
        "Дебют режиссера Дэмьена Шазелла в большом кино завоевал три премии «Оскар» и признание кинокритиков. История противостояния молодого барабанщика (Майлз Теллер) и руководителя джазового ансамбля (Дж. К. Симмонс) ставит перед зрителями важный вопрос. На что можно пойти ради раскрытия таланта? Любопытно, что автор музыки Джастин Гурвиц играл с режиссером в одной группе.",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/120922/02ad94979cde667b94ad809f311790a73e5348ea/orig",
      trailerUrl: "http://www.filmpro.ru/videos/825076",
      title: "Отец",
      subTitle: "The Father",
      backgroundImageUrl:
        "https://content.foto.my.mail.ru/mail/abolox/3614/h-5534.jpg",
      description:
        "'Отец' - драма, рассказывающая о стареющем мужчине, страдающем от деменции. Фильм погружает зрителя в его мир через глаза главного героя, вызывая сильные эмоции. Был награжден двумя Оскарами: за лучшую мужскую роль (Энтони Хопкинс) и за лучший адаптированный сценарий (Флориан Зеллер и Кристофер Хэмптон). ",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/61205/fdf1e90cc2a399bbcf24123ca5e559b7f02c0cb4/orig",
      trailerUrl: "http://www.filmpro.ru/videos/439714",
      title: "Джеки",
      subTitle: "Jackie",
      backgroundImageUrl:
        "https://thumbs.dfs.ivi.ru/storage15/contents/1/f/0377e28180bbbf7afac29bed164dba.jpg/858x483/?q=85",
      description:
        "'Джеки' (Jackie) - это биографическая драма 2016 года, режиссированная Пабло Ларраином. Фильм сосредотачивается на жизни и трагической судьбе Джеки Кеннеди, после убийства ее мужа, президента Джона Ф. Кеннеди, в 1963 году. Натали Портман великолепно сыграла роль Джеки, показав ее эмоциональную борьбу и силу в тяжелейшие моменты. 'Джеки' получил признание критиков и был номинирован на несколько наград, включая Оскар за лучшую женскую роль (Натали Портман).",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/118781/e289250952c0b7b6976c4b8fe82eb785a6975cb8/orig",
      trailerUrl: "http://www.filmpro.ru/videos/826876",
      title: "Сядь за руль моей машины",
      subTitle: "Drime My Car",
      backgroundImageUrl:
        "https://cdn.iportal.ru/news/2015/99/preview/2a8690f02fe2bf907407a7569894b0c506331645_1112_575.jpg",
      description:
        "«Сядь за руль моей машины» получил «Оскар» как лучший иностранный фильм Кинокартина «Сядь за руль моей машины» («Doraibu mai ka») японского режиссера Рюсукэ Хамагути удостоена «Оскара» как лучший иностранный фильм. Лента рассказывает историю мужчины Юсукэ Кафуку, который работает театральным режиссером.",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/120922/825641ec1cae35ef47ffbc3de97f95b979e7f05f/orig",
      trailerUrl: "http://www.filmpro.ru/videos/221102",
      title: "Она",
      subTitle: "Her",
      backgroundImageUrl:
        "https://ic.pics.livejournal.com/motherware/85554091/358550/358550_1000.jpg",
      description:
        "В фантастической мелодраме Спайка Джонса герой Хоакина Феникса влюбляется в собственный смартфон. Сложно устоять перед очаровательным голосом Скарлетт Йоханссон, которая озвучивает операционную систему с искусственным интеллектом. Спайк Джонсон впервые выступил одновременно сценаристом и режиссером, и лента получила «Оскар» за лучший сценарий. Входит в 100 величайших фильмов XXI века по версии BB…",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/118781/06ed0f8c8655ccb5d0fd813b17d548b67a27a735/orig",
      trailerUrl: "http://www.filmpro.ru/videos/442471",
      title: "Лев",
      subTitle: "Lion",
      backgroundImageUrl:
        "https://www.cinemafia.ru/upload/images/2017/02/Lion/260810.jpg-r_1280_720-f_jpg-q_x-xxyxx.jpg",
      description:
        "Фильм 'Лев' (Lion) - это захватывающая драма, основанная на реальной истории, которая рассказывает о молодом индийском мальчике, по имени Сару, который теряется от семьи и оказывается на улицах Калькутты. Он в конечном итоге попадает в приемную семью в Австралии, но спустя много лет решает отыскать своих настоящих родителей. Этот волнующий фильм удостоенный номинации на Оскар, включая лучшую мужскую второстепенную роль (Дев Патель), за его сильную драматургию и впечатляющее исполнительское мастерство.",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/aae3a928-6465-4bed-9af4-16929a44fd79/600x900",
      trailerUrl: "http://www.filmpro.ru/videos/568650",
      title: "Паразиты",
      subTitle: "Gisaengchung",
      backgroundImageUrl:
        "https://0d314c86-f76b-45cc-874e-45816116a667.selcdn.net/669222d0-c4c0-4da9-b30d-6d6fc7d964fa.jpeg",
      description:
        "'Паразиты' - южнокорейская трагикомедия 2019 года о двух семьях, бедной и богатой, чьи судьбы переплетаются. Фильм получил множество наград, включая четыре Оскара: за лучший фильм, лучший оригинальный сценарий, лучший режиссерский и лучший международный фильм. Фильм поразил мировую аудиторию своей остротой социальной критики и неожиданными поворотами сюжета.",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/118781/40c0fe0da26bed3a46c883d363cd7044828a7a52/orig",
      trailerUrl: "http://www.filmpro.ru/videos/158666",
      title: "Афера по-американски",
      subTitle: "American Hustle",
      backgroundImageUrl: "https://static.okko.tv/images/v3/14539960",
      description:
        "'Афера по-американски' (American Hustle) - это американская криминальная комедия-драма 2013 года, режиссёра Дэвида О. Расселла. Фильм основан на реальных событиях ABSCAM и рассказывает историю о двух амбициозных мошенниках, работающих с ФБР, чтобы разоблачить политические коррупционеров в 1970-х годах. Была номинирована на девять Оскаров и получила признание за актерский ансамбль, костюмы и режиссуру.",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/120922/87bf3f751c177b751593571637994f84b627147c/orig",
      trailerUrl: "http://www.filmpro.ru/videos/827380",
      title: "Всё везде и сразу",
      subTitle: "Everything everywhere ...",
      backgroundImageUrl:
        "https://thumbs.dfs.ivi.ru/storage3/contents/5/1/74e5ee181d685b5b8a62b56fb79120.jpg/858x483/?q=85",
      description:
        "Фильм напомнил забытое понятие «американской мечты». О том, что она свершилась, сказал Кэ Хюи Куан, получивший Оскар за «Лучшую мужскую роль второго плана». Потому что все составляющие фильма указывали на то, что «Все всегда и одновременно» – последний, кто может надеяться на победу.",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/4b27e219-a8a5-4d85-9874-57d6016e0837/600x900",
      trailerUrl: "http://www.filmpro.ru/videos/549483",
      title: "Зелёная книга",
      subTitle: "Green Book",
      backgroundImageUrl:
        "https://thumbs.dfs.ivi.ru/storage2/contents/2/e/3e791b3e1506cdf3627bc45f0ccd71.jpg/858x483/?q=85",
      description:
        "'Зеленая книга'- это американская драма 2018 года, режиссёра Питера Фаррелли. Фильм основан на реальных событиях и рассказывает о необычной дружбе между афроамериканским пианистом Доном Ширли и белым шофёром Тони Липпом, который ездил с ним в турне по южным штатам в 1962 году. Они используют 'Зеленую книгу' (гид по местам, где безопасно для чернокожих остановиться) во время путешествия. Фильм был высоко оценён критиками и победил в категориях лучший фильм и лучший оригинальный сценарий на церемонии Оскар.",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/61205/5e8e4fea00e9260158a1cdcf7b358b3384c8ae53/orig",
      trailerUrl: "http://www.filmpro.ru/videos/333430",
      title: "Искупление",
      subTitle: "Atonement",
      backgroundImageUrl:
        "https://2.bp.blogspot.com/-w2d2U3b-4mA/Uv_xIRw9s9I/AAAAAAAAAzU/DCcAJkSEkEo/s1600/3.png",
      description:
        "'Искупление'- это британско-американский драматический фильм 2007 года, режиссёра Джо Райта. Он основан на одноименном романе Яна Макьюэна. Фильм рассказывает историю о драматических последствиях ложного обвинения, совершённого молодой девушкой по имени Бриони в отношении своего сестрёнки и её возлюбленного. Это влияет на жизни всех главных персонажей, в том числе на судьбу во время Второй мировой войны. Был номинирован на семь Оскаров и получил одну награду за лучшую оригинальную музыку.",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/118781/2722dd330f38a5a3add5252aeadb2207e3610db9/orig",
      trailerUrl: "http://www.filmpro.ru/videos/807069",
      title: "Скандал",
      subTitle: "Bombshell",
      backgroundImageUrl:
        "https://thumbs.dfs.ivi.ru/storage6/contents/f/a/9d742f76aef7192a30b6ea4588ba8e.jpg/858x483/?q=85",
      description:
        "'Скандал'- это американский биографический драматический фильм 2019 года, режиссёрский дебют Джейя Роуча. Фильм основан на реальных событиях и рассказывает о скандале внутри Fox News в 2016 году, когда журналистки начали обвинять своего босса Роджера Эйлса в сексуальных домогательствах. Главные роли исполнили Шарлиз Терон, Николь Кидман и Марго Робби. 'Скандал' был высоко оценен критиками за сильные актёрские выступления и получил несколько номинаций на премии, включая Оскар в категории Лучшая актриса второго плана (Марго Робби).",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/61205/d13c0cf06d0cedffcb0f5f4d7b1a0a0626ab4707/orig",
      trailerUrl: "http://www.filmpro.ru/videos/158611",
      title: "Жасмин",
      subTitle: "Blue Jasmine",
      backgroundImageUrl:
        "https://www.vokrug.tv/pic/product/9/8/7/1/987185fb1e9c93bef2af51d2944b7663.jpeg",
      description:
        "Жизнь светской дивы Жасмин рушится: мужа сажают в тюрьму за махинации, денег нет, вместо буржуазного окружения теперь — провинциальная сестра. Но куда хуже — тотальное одиночество. Критики назвали «Жасмин» самым литературным фильмом Аллена и отметили образ Кейт Бланшетт как один из сильнейших в карьере актрисы. «Оскар», «Золотой глобус» и премия BAFTA за лучшую женскую роль.",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/120922/5690f0ed1f07263aca120767e3642b058841f411/orig",
      trailerUrl: "http://www.filmpro.ru/videos/364974",
      title: "Гордость и предубеждение",
      subTitle: "Pride & Prejudice",
      backgroundImageUrl:
        "https://belon.club/uploads/posts/2023-04/thumbs/1681789987_belon-club-p-gordost-i-gordinya-oboi-27.jpg",
      description:
        "'Гордость и предубеждение'- это британский романтический драматический фильм 2005 года, режиссёра Джо Райта. Он основан на романе Джейн Остин того же названия. Фильм рассказывает историю о любви и столкновении характеров между Элизабет Беннет и мистером Дарси. Их отношения развиваются в английской сельской местности в начале XIX века. Был высоко оценен критиками и зрителями за свою верность оригинальному произведению, красивое оформление и великолепные актёрские выступления.",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/61205/dc55339dce54ee1916917fd077681fab6eb68268/orig",
      trailerUrl: "http://www.filmpro.ru/videos/354066",
      title: "Комната",
      subTitle: "Room",
      backgroundImageUrl:
        "https://hdzo-rezka.net/uploads/posts/2018-11/1542966758-703905529-komnata-1.jpg",
      description:
        "Фильм основан на одноименном романе Эммы Доногью и рассказывает историю молодой женщины по имени Джой и её маленького сына Джека, которые содержатся в замкнутом пространстве, известном как 'комната'. Они много лет живут в этом замкнутом мире, который они считают всем существующим миром, пока Джой не начинает строить план побега. 'Комната' была высоко оценена критиками и зрителями за свою сильную и эмоционально заряженную историю, а также за выдающиеся актерские выступления Бри Ларсон и Джейкоба Трембле. Фильм получил несколько номинаций на Оскар, включая номинацию и победу за лучшую женскую роль (Бри Ларсон).",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/120922/711e1cebe38537e9639b50e79a1bd2a5591a183e/orig",
      trailerUrl: "http://www.filmpro.ru/videos/420775",
      title: "Прибытие",
      subTitle: "Arrival",
      backgroundImageUrl:
        "https://www.startfilm.ru/images/base/images/big_08336_scr11.jpg",
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

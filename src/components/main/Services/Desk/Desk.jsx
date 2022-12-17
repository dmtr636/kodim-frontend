import React, {useEffect, useRef} from "react";
import Button from "../../../common/Button/Button";
import style from "./Desk.module.scss";
import ServiceButton from "./ServiceButton/ServiceButton";
import ReactPlayer from "react-player";

import { Swiper, SwiperSlide } from "swiper/react";
import {FreeMode, Navigation, Thumbs, Virtual} from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { useNavigate } from "react-router-dom";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";

import HTMLcoding from "../Desk/img/verstka.mp4";
import UXUI from "../Desk/img/uxui.mp4";
import LOGO from "../Desk/img/logo.mp4";
import SEO from "../Desk/img/seo.mp4";
import TGBOT from "../Desk/img/telegram.mp4";
import COPY from "../Desk/img/copyr.mp4";
import CODING from "../Desk/img/programmer.mp4";
import MARKETING from "../Desk/img/MARKETING.mp4";

import HTMLcodingPoster from "../Desk/img/posters/verstka.png";
import UXUIPoster from "../Desk/img/posters/uxui.png";
import LOGOPoster from "../Desk/img/posters/logo.png";
import SEOPoster from "../Desk/img/posters/SEO.png";
import TGBOTPoster from "../Desk/img/posters/telegram.png";
import COPYPoster from "../Desk/img/posters/COPYR.webp";
import CODINGPoster from "../Desk/img/posters/programmer.png";
import MARKETINGPoster from "../Desk/img/posters/MARKETING.png";

export const Desk = () => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
  const { width } = useWindowDimensions();
  console.log(width);
  let serviceNameMob = width < 700 ? "UX‑UI" : "UX/UI-дизайн";
  const [activeService, SetActiveService] = React.useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (thumbsSwiper) {
      const interval = setInterval(() => {
        thumbsSwiper.updateSlides()
      }, 100)

      return () => {
        clearInterval(interval)
      }
    }
  }, [thumbsSwiper])

  const services = [
    {
      serviceName: serviceNameMob,
      serviceText:
        "Визуальная разработка будущего сайта. Составление макета с\xA0учётом особенностей аудитории проекта. Продуманный дизайн позволит вашим клиентам удобно и\xA0комфортно пользоваться продуктом, что благоприятно повлияет на конверсию и общее качество сайта.",
      imgUrl: UXUI,
      posterUrl: UXUIPoster,
    },
    {
      serviceName: "Копирайтинг",
      serviceText:
        "Написание грамотных коммерческих текстов с целью создания привлекательного информационного содержания на сайте. Продуманный текст поможет привлечь внимание покупателя, ответить на первичные вопросы и сподвигнуть совершить целевое действие",
      imgUrl: COPY,
      posterUrl: COPYPoster,
    },
    {
      serviceName: "SEO",
      serviceText:
        "СЕО-оптимизация позволяет сайтам быть  понятными для\xA0поисковых систем. Качественное СЕО делает ваш сайт выше и\xA0предпочтительнее в поисковой выдачи. В\xA0таком случае при запросе, пользователь с\xA0большей долей вероятности попадёт в\xA0первую очередь именно к вам.",
      imgUrl: SEO,
      posterUrl: SEOPoster,
    },
    {
      serviceName: "Логотип",
      serviceText:
        "Для того, чтобы ваш проект был запоминающимся, ему необходим логотип. Он помогает пользователю быстрее ориентироваться и\xA0запоминать ваш сайт. Также логотип даёт общее представление бренда, компании и проекта в целом. Пользователю будет гораздо легче узнать вас в будущем.",
      imgUrl: LOGO,
      posterUrl: LOGOPoster,
    },
    {
      serviceName: "Вёрстка",
      serviceText:
        "После создания визуального макета проект переходит в стадию разработки. Команда разработчиков на основании макета выполняет вёрстку сайта, используя специальные языки, такие как HTML и CSS. В\xA0результате получается быстрый и\xA0адаптивный сайт, который может быть открыт на любом устройстве.",
      imgUrl: HTMLcoding,
      posterUrl: HTMLcodingPoster,
    },
    {
      serviceName: "Программирование",
      serviceText:
        "При реализации сложного функционала не обойтись без использования специальных инструментов. Наши разработчики используют для этого самые современные технологии. С\xA0помощью языков программирования прописывается логика работы сайта. Все элементы становятся интерактивными.",
      imgUrl: CODING,
      posterUrl: CODINGPoster,
    },
    {
      serviceName: "Телеграм‑бот",
      serviceText:
        "Все уведомления, связанные с сайтом: заявки, данные для обратной связи или покупка товара, будут приходить на ваш телеграм круглосуточно, с\xA0помощью бота . Вы всегда будете в\xA0курсе появился ли у\xA0вас новый клиент или покупатель, поэтому сможете оперативно среагировать.",
      imgUrl: TGBOT,
      posterUrl: TGBOTPoster,
    },
    {
      serviceName: "Запуск рекламы",
      serviceText:
        "После завершения проекта, мы осуществляем гибкую и точную настройку рекламной компании в\xA0Яндекс Директ. Вы сможете получить первых посетителей в\xA0ближайшие сутки. Полученные данные и статистика позволят провести анализ для дальнейшего успешного развития своего проекта.",
      imgUrl: MARKETING,
      posterUrl: MARKETINGPoster,
    },
  ];
  const serviceOnClick = (i) => {
    SetActiveService(i);
  };
  const serviceArray=services.map((el, i) => (
      <ServiceButton
        key={el.serviceText}
        activeButton={activeService === i}
        onClick={() => serviceOnClick(i)}
      >
        {el.serviceName}
      </ServiceButton>
  ));
  const serviceArrayHeadMob = services.map((el, i) => (
    <SwiperSlide key={i}>
      <ServiceButton
        key={el.serviceText}
        activeButton={activeService === i}
        onClick={() => serviceOnClick(i)}
      >
        {el.serviceName}
      </ServiceButton>
    </SwiperSlide>
  ));
  const serviceArrayMob = services.map((el, i) => (
    <SwiperSlide key={el.i}>
      {" "}
      <div className={style.deskCardLeft}>
        <div className={style.deskCardLeftImg}>
          {/* <ReactPlayer
        url={services[activeService].imgUrl}
        width={width < 700 ? "auto" : "460"}
        height={width < 700 ? "auto" : "320"}
        playing="true"
        loop="true"
        volume="0"
        fileConfig={{ attributes: { poster: services[activeService].posterUrl } }}
      /> */}
          <video
            key={el.imgUrl}
            width={width < 700 ? "100%" : "460"}
            height={width < 700 ? "100%" : "320"}
            style={{ borderRadius: "5px" }}
            autoPlay
            muted
            loop
            poster={el.posterUrl}
          >
            <source src={el.imgUrl} />
          </video>
        </div>
      </div>
      <div className={style.deskCardRight}>
        <div className={style.deskCardRightHeader}>{el.serviceName}</div>
        <div className={style.deskCardRightText}>{el.serviceText}</div>
        <div className={style.buttonPosition}>
          <Button onClick={() => navigate("/calculator")}>
            Рассчитать стоимость
          </Button>
        </div>
      </div>
    </SwiperSlide>
  ));
  console.log(activeService);

  const videoRefs = useRef({})

  return (
    <div className={style.desk}>
      <div className={style.deskHeader}>
        <div className={style.deskwrapper}>
          {width < 700 ?<Swiper
            onSwiper={setThumbsSwiper}
            onDestroy={() => setThumbsSwiper(null)}
            spaceBetween={0}
            slidesPerView={"auto"}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="service-head"
          >
            {serviceArrayHeadMob}
          </Swiper>:serviceArray}
        </div>
      </div>
      {width < 700 ? (
        <Swiper
          loop={false}
          spaceBetween={50}
          slidesPerView={1}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs, Virtual]}
          onSlideChange={(swiper) => {
            SetActiveService(swiper.activeIndex)
            videoRefs.current[swiper.activeIndex]?.load()
          }}
          onSwiper={(swiper) => console.log(swiper.activeIndex)}
          virtual
          /* className="service-body" */
        >
          {services.map((el, i) => (
            <SwiperSlide key={i} virtualIndex={i}>
              <div className={style.deskCard}>
                <div className={style.deskCardLeft}>
                  <div className={style.deskCardLeftImg}>
                    {/* <ReactPlayer
      url={services[activeService].imgUrl}
      width={width < 700 ? "auto" : "460"}
      height={width < 700 ? "auto" : "320"}
      playing="true"
      loop="true"
      volume="0"
      fileConfig={{ attributes: { poster: services[activeService].posterUrl } }}
    /> */}
                    <video
                      ref={(ref) => videoRefs.current[i] = ref}
                      key={el.imgUrl}
                      width={width < 700 ? "100%" : "460"}
                      height={width < 700 ? "100%" : "320"}
                      style={{ borderRadius: "5px" }}
                      autoPlay
                      muted
                      loop
                      poster={el.posterUrl}
                      controls
                    >
                      <source src={el.imgUrl} />
                    </video>
                  </div>
                </div>
                <div className={style.deskCardRight}>
                  <div className={style.deskCardRightHeader}>
                    {el.serviceName}
                  </div>
                  <div className={style.deskCardRightText}>
                    {el.serviceText}
                  </div>
                  <div className={style.buttonPosition}>
                    <Button onClick={() => navigate("/calculator")}>
                      Рассчитать стоимость
                    </Button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
          <div className={style.deskCard}>
            <div className={style.deskCardLeft}>
              <div className={style.swiper}>
                {/* <ReactPlayer
              url={services[activeService].imgUrl}
              width={width < 700 ? "auto" : "460"}
              height={width < 700 ? "auto" : "320"}
              playing="true"
              loop="true"
              volume="0"
              fileConfig={{ attributes: { poster: services[activeService].posterUrl } }}
            /> */}
                <video
                  key={services[activeService].imgUrl}
                  width={width < 700 ? "auto" : "460"}
                  height={width < 700 ? "auto" : "320"}
                  style={{ borderRadius: "5px" }}
                  autoPlay
                  muted
                  loop
                  poster={services[activeService].posterUrl}
                >
                  <source src={services[activeService].imgUrl} />
                </video>
              </div>
            </div>
            <div className={style.deskCardRight}>
              <div className={style.deskCardRightHeader}>
                {services[activeService].serviceName}
              </div>
              <div className={style.deskCardRightText}>
                {services[activeService].serviceText}
              </div>
              <div className={style.buttonPosition}>
                <Button onClick={() => navigate("/calculator")}>
                  Рассчитать стоимость
                </Button>
              </div>
            </div>
          </div>
      )}
    </div>
  );
};

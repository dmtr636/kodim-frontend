import React, { useEffect } from "react";
import Button from "../../../common/Button/Button";
import style from "./Desk.module.scss";
import ServiceButton from "./ServiceButton/ServiceButton";
import ReactPlayer from "react-player";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";

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

import HTMLcodingPoster from "../Desk/img/posters/VERSTKA.webp";
import UXUIPoster from "../Desk/img/posters/UXUI.webp";
import LOGOPoster from "../Desk/img/posters/LOGO.webp";
import SEOPoster from "../Desk/img/posters/SEO.webp";
import TGBOTPoster from "../Desk/img/posters/TELEGRAM.webp";
import COPYPoster from "../Desk/img/posters/COPYR.webp";
import CODINGPoster from "../Desk/img/posters/PROGRAMMER.webp";
import MARKETINGPoster from "../Desk/img/posters/MARKETING.webp";

export const Desk = () => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
  const { width } = useWindowDimensions();
  console.log(width);
  let serviceNameMob = width < 700 ? "UX/UI" : "UX/UI-дизайн";
  const [activeService, SetActiveService] = React.useState(0);
  const navigate = useNavigate();
  const services = [
    {
      serviceName: serviceNameMob,
      serviceText:
        "Визуальная разработка будущего сайта. Составление макета с\xA0учётом особенностей аудитории проекта. Продуманный дизайн позволит вашим клиентам удобно и\xA0комфортно пользоваться продуктом, что\xA0благоприятно повлияет на\xA0конверсию и\xA0общее качество сайта.",
      imgUrl: UXUI,
      posterUrl: UXUIPoster,
    },
    {
      serviceName: "Копирайтинг",
      serviceText:
        "Написание грамотных коммерческих текстов с\xA0целью создания привлекательного информационного содержания на\xA0сайте. Продуманный текст поможет привлечь внимание покупателя, ответить на\xA0первичные вопросы и\xA0сподвигнуть совершить целевое действие.",
      imgUrl: COPY,
      posterUrl: COPYPoster,
    },
    {
      serviceName: "SEO",
      serviceText:
        "СЕО-оптимизация позволяет сайтам быть понятными для\xA0поисковых систем. Качественное СЕО делает ваш сайт выше и\xA0предпочтительнее в\xA0поисковой выдаче. В\xA0таком случае при\xA0запросе, пользователь с\xA0большей долей вероятности попадёт в\xA0первую очередь именно к\xA0вам.",
      imgUrl: SEO,
      posterUrl: SEOPoster,
    },
    {
      serviceName: "Логотип",
      serviceText:
        "Для того чтобы ваш проект был запоминающимся, ему необходим логотип. Он помогает пользователю быстрее ориентироваться и\xA0запоминать ваш сайт. Также логотип даёт общее представление бренда, кампании и\xA0проекта в целом. Пользователю будет гораздо легче узнать вас в\xA0будущем.",
      imgUrl: LOGO,
      posterUrl: LOGOPoster,
    },
    {
      serviceName: "Вёрстка",
      serviceText:
        "После создания визуального макета проект переходит в\xA0стадию разработки. Команда разработчиков на\xA0основании макета выполняет вёрстку сайта, используя специальные языки, такие как HTML и CSS. В\xA0результате получается быстрый и\xA0адаптивный сайт, который может быть открыт на\xA0любом устройстве.",
      imgUrl: HTMLcoding,
      posterUrl: HTMLcodingPoster,
    },
    {
      serviceName: "Программирование",
      serviceText:
        "При реализации сложного функционала не\xA0обойтись без\xA0использования специальных инструментов. Наши разработчики используют для\xA0этого самые современные технологии. С\xA0помощью языков программирования прописывается логика работы сайта. Все элементы становятся интерактивными.",
      imgUrl: CODING,
      posterUrl: CODINGPoster,
    },
    {
      serviceName: "Телеграм‑бот",
      serviceText:
        "Все уведомления, связанные с\xA0сайтом: заявки, данные для\xA0обратной связи или покупка товара, будут приходить на\xA0ваш телеграм круглосуточно, с\xA0помощью бота. Вы всегда будете оперативно реагировать на\xA0клиента или покупателя. Телеграм‑бот идёт в\xA0комплекте к\xA0любому проекту.",
      imgUrl: TGBOT,
      posterUrl: TGBOTPoster,
    },
    {
      serviceName: "Запуск рекламы",
      serviceText:
        "После завершения проекта мы осуществляем гибкую и\xA0точную настройку рекламной кампании в\xA0Яндекс Директ. Вы сможете получить первых посетителей в\xA0ближайшие сутки. Полученные данные и\xA0статистика позволят провести анализ для\xA0дальнейшего успешного развития своего проекта.",
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
    <SwiperSlide>
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
  return (
    <div className={style.desk}>
      <div className={style.deskHeader}>
        <div className={style.deskwrapper}>
          {width < 700 ?<Swiper
            onSwiper={setThumbsSwiper}
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
          modules={[FreeMode, Navigation, Thumbs]}
          onSlideChange={(swiper) => SetActiveService(swiper.activeIndex)}
          onSwiper={(swiper) => console.log(swiper.activeIndex)}
          className="service-body"
        >
          {services.map((el, i) => (
            <SwiperSlide key={i}>
              <div className={style.deskCard}>
                <div className={style.deskCardLeft}>
                  <div className={style.deskCardLeftImg}>
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

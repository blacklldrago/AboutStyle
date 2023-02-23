import style from "./App.module.css"
import ball from "./img/iconball.png"
import phone from "./img/iphone.png"
import video from "./img/video.png"
import kid1 from "./img/firstkid.png"
import one from "./img/one.png"
import two from "./img/two.png"
import three from "./img/three.png"
import hand1 from "./img/hand1.png"
import hand2 from "./img/hand2.png"
import blueback from "./img/blueback.png"
import orangeC from "./img/circle.png"
import elipse from "./img/elipse.png"
import instagram from "./img/instagram.png"
import facebook from "./img/facebook.png"
import youtube from "./img/youtube.png"
import rubl from "./img/rubl.png"
import purplebox from "./img/purplebox.png"
import wave from "./img/wave.png"
import cv from "./img/cv.png"
import cv1 from "./img/cv1.png"
import clock from "./img/clock.png"
import shape from "./img/shape.png"
import boygirl from "./img/boygirl.png"
import orange from "./img/orange.png"
import leaf from "./img/leaf.png"
import { Card, Card1 } from "./components/card"


function App() {
  return(<div>
      <div className={style["container1"]}>
        <div className={style["container"]}>
            <div className={style["navbar"]}>
                <div className={style["left"]}>
                    <div className={style["left-image"]}>
                      <img src={ball} alt="" />
                    </div>
                </div>
                <div className={style["middle"]}>
                    <ul>
                      <li>О нас</li>
                      <li>Преимущества</li>
                      <li>Работа сервиса</li>
                      <li>Вступить в White list</li>
                    </ul>
                </div>
                <div className={style["right"]}>
                    <button className={style["login"]}>Логин</button>
                    <button className={style["registr"]}>Регистрация</button>
                </div>
            </div>
            <div className={style["center"]}>
              <div className={style["buttonAndtext"]}>

              <h1>Первый в мире сервис для постановки и улучшения русской речи для детей</h1>
              <p>Вступите в white-лист и получите 4 бесплатных занятия в числе первых пользователей бесплатно</p>
              <div className={style["left-right"]}>
                <div className={style["left-btn"]}>
                  <button>Вступить</button>
                </div>
                <div className={style["right-text"]}>
                  <p>Количество мест ограничено!</p>
                </div>
              </div>
              </div>
              <div className={style["left-img"]}>
                <img src={phone} alt="" />
              </div>
            </div>
        </div>
      </div>
      <div className={style["container2"]}>
        <div className={style["container"]}>
          <div className={style["firstrow"]}>
                <div className={style["left-side"]}>
                  <h1 className={style["total"]}>Всего 3 минуты, чтобы начать улучшать речь</h1>
                  <div className={style["threeWords"]}>
                      <div className={style["img-word"]}>
                            <img src={one} alt="" />
                      </div>
                      <div className={style["textt"]}>
                        <p>Скачайте приложение в App Store или Google Play. Зарегистрируйтесь, чтобы отслеживать прогресс ребёнка</p>
                      </div>
                  </div>
                  <div className={style["threeWords"]}>
                      <div className={style["img-word"]}>
                            <img src={two} alt="" />
                      </div>
                      <div className="textt">
                        <p>Загрузите голосовой сэмпл ребёнка (и его проблемной речи)</p>
                      </div>
                  </div>
                  <div className={style["threeWords"]}>
                      <div className={style["img-word"]}>
                            <img src={three} alt="" />
                      </div>
                      <div className="textt">
                        <p>Программа подберет уникальные упражнения, направленные на исправление речи ребёнка, а также порекомендует расписание для ежедневных занятий</p>
                      </div>
                  </div>
                </div>
                <div className={style["right-side"]}>
                  <img src={hand1} alt="" />
                </div>
          </div>
          <div className={style["secondrow"]}>
          <div className={style["right-side"]}>
              <img src={hand2} alt="" />
          </div>
                <div className={style["left-side"]}>
                  <h1 className={style["total"]}>Как это работает?</h1>
                  <p className={style["banan"]}>До банального просто! Inno Lingvo - это маркетплейс, соединяющий логопедов и детей с проблемной речью со всеми возможными вариантами трудностей речи: алалия, дислалия, ОНР, дизартрия, ринолалия, брадилалия, тахилалия, спотыкание, заикание, дислексия и другие</p>
                  <button className={style["more"]}>Подробнее</button>
                </div>

          </div>
        </div>
      </div>
      <div className={style["container3"]}> 
        <div className={style["container"]}>
              <h1 className = {style["modulKid"]}>Модули для детей</h1>
            <div className={style["kids"]}>
              <Card imgUrl={kid1}
                text = "Формируем правильную речь"
                />
              <Card
                imgUrl={cv}
                text = "Коррекция речи"
                />
              <Card
                imgUrl={cv1}
                text = "Открытие потенциала Вашего ребенка"
                />
            </div>
        </div>
      </div>
      <div className={style["container4"]}>
        <div className={style["container"]}>
        <div className={style["bluebox"]}>
                <h1>Вступите в white-лист, и вы получите 4 бесплатных занятия в числе первых пользователей бесплатно!</h1>
                <div className={style["blue-left"]}>
                <div className={style["blue-leftBtn"]}>
                  <button>Записаться</button>
                </div>
                <div className={style["right-blue"]}>
                  <p>Количество мест ограничено!</p>
                </div>
              </div>
                <img className={style["orange"]} src={orange} alt="" />
            </div>
        </div>
      </div>
      <div className={style["container5"]}>
        <div className={style["container"]}>
          <div className={style["some"]}>
            <div className="some-text">
              <h1>Немного наглядности</h1>
            </div>
            <div className={style["some-img"]}>
              <div className={style["some-imgicon"]}>
                  <img src={orangeC} alt="" />
              </div>
              <div className={style["some-text"]}>
                <p>Посмотрите 3-минутное видео, чтобы лучше понять как это работает</p>
              </div>
            </div>
          </div>
          <div className={style["start-video"]}>
              <img src={video} alt="" />
          </div>
        </div>
      <img className={style["leaf"]} src={leaf} alt="" />
      </div>
      <div className={style["container6"]}>
        <div className={style["container"]}>
          <h1 className={style["search"]}>Исследование показало, что каждый 4 ребёнок в возрасте от 3 до 12 лет имеет проблемы в речи, влияющие на его будущее</h1>
          <div className={style["firstLine"]}>
              <Card1
              imgUrl={rubl}
              text1 = "Стоимость"
              text2 = "Логопедия стоит дорого, и цена вполне оправдана. В нашем случае - помощник Inno Lingvo предлагает Вам оплачивать сервис по занятиям с логопедом в 2 раза ниже минимальной цены консультации"
              text3 = "Подробнее о преимуществах"
                />
              <Card1
              imgUrl={shape}
              text1 = "Системность в развитии"
              text2 = "Что может быть лучше системности в занятиях с речью? Только прямое воздействие на органы речи и мелкую моторику. Пока мы предлагаем это Вам, а организацию работы с логопедами берём на себя"
              text3 = "Подробнее о преимуществах"
                />
          </div>
          <div className={style["secondLine"]}>
              
            <Card1
              imgUrl={clock}
              text1 = "Удобное время"
              text2 = "Программа рассчитает автоматически, исходя из уровня ребёнка, оптимальную программу , которая необходима именно его речи, и поможет логопеду заниматься с ребёнком чаще"
              text3 = "Подробнее о преимуществах"
                />
            <Card1
              imgUrl={boygirl}
              text1 = "Дети учат детей"
              text2 = "Мы открыли инновационное направление - когда ребёнок с хорошей речью помогает Вашему ребёнку улучшить звук, показывая свою речь и занимаясь с Вашим ребёнком через экран телефона"
              text3 = "Подробнее о преимуществах"
                />
          </div>
        </div>
      </div>
      <div className={style["container7"]}>
        <div className={style["container"]}>
            <div className={style["purple1"]}>
              <h1>Хотите быть первыми? Запишитесь!</h1>
              <div className={style["purple-left"]}>
                <div className={style["purple-leftBtn"]}>
                  <button>Записаться</button>
                </div>
                <div className={style["right-purple"]}>
                  <p>Мы открыли возможность для новых клиентов попробовать сервис в течение месяца бесплатно. Вам стоит просто оставить свой email в указанной форме. Мы обещаем — никакой рекламы и спама, только письмо по существу открытия сервиса</p>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className={style["container8"]}>
          <div className={style["container"]}>
            <div className={style["footer"]}>
              
            <div className={style["startLast"]}>
                  <img style={{marginLeft : "10px"}} src={instagram} alt="" />
                  <img style={{marginLeft : "10px"}} src={facebook} alt="" />
                  <img style={{marginLeft : "10px"}} src={youtube} alt="" />
            </div>  
            <div className="middleLast">
              <p>© Inno Lingvo, 2019-2022</p>
              <p>Политика конфиденциальности</p>
            </div>
            <div className={style["finishLast"]}>
              <p>Москва, Болотниковская ул. 31</p>
              <p>il@innolingvo.ru</p>
            </div>
          </div>
          </div>
      </div>
  </div>
  )
}

export default App;

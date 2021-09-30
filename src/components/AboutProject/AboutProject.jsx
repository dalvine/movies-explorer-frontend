import React from 'react';
import './AboutProject.css';
// import ScrollableAnchor from 'react-scrollable-anchor'

function AboutProject() {
  return (
    // <ScrollableAnchor id={'about'}>
    <section className="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__descriptions">
        <div className="about-project__description">
          <p className="about-project__intro">Дипломный проект включал 5 этапов</p>
          <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about-project__description">
          <p className="about-project__intro">На выполнение диплома ушло 5 недель</p>
          <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="story-line">
        <p className="story-line__backend">1 неделя</p>
        <p className="story-line__frontend">4 недели</p>
      </div>
    </section>
  // </ScrollableAnchor>
  )
}

export default AboutProject;

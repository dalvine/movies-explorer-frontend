import React from 'react';
import './Techs.css';

function Techs() {
  return (
    <section className="techs">
      <h2 className="techs__title">Технологии</h2>
      <p className="techs__intro">7 технологий</p>
      <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className="techs_tags">
        <li className="techs_tag">HTML</li>
        <li className="techs_tag">CSS</li>
        <li className="techs_tag">JS</li>
        <li className="techs_tag">React</li>
        <li className="techs_tag">Git</li>
        <li className="techs_tag">Expres.js</li>
        <li className="techs_tag">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;

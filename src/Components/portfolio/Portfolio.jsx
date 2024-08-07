import React, { useState } from 'react'
import "./portfolio.css"
import Menu from './Menu'


const Portfolio = () => {

  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });
    setItems(updatedItems);
  }

  return (
    <section className="container work section" id='portfolio'>
      <h2 className="section__title">Recent works</h2>

      <div className="work__filters">

        <span className="work__item" onClick={() => setItems(Menu)}>Everything</span>
        <span className="work__item" onClick={() => filterItem("Development")}>Development</span>
        <span className="work__item" onClick={() => filterItem("Design")}>Design</span>

      </div>

      <div className="work__container grid">
        {items.map((elem) => {
          const { id, image, title, category, link, description} = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img h-[450px]  w-full" />
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <p className='work__description'>{description}</p>
              <a href={link} target="_blank" rel="noopener noreferrer" className='work__button'>
             <i className="icon-link work__button-icon"></i>
             </a>
              
            </div>

          )
        })}


      </div>
    </section>
  )
}

export default Portfolio 
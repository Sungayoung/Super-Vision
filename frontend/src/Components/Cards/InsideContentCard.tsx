import React from 'react'
import './InsideContentCard.css'
import Content from '../Commons/Content'
import { useNavigate } from "react-router-dom";
import Btn from '../Commons/Btn';

type InsideContentCardProps = {
  title: string,
  content: string,
  imgSrc: string
}

function InsideContentCard ({title, content, imgSrc}: InsideContentCardProps) {

  const navigate = useNavigate();
  function onClick(event: React.MouseEvent<HTMLButtonElement>) {
    navigate('/techDemos/ImageFilter/ExperienceA');
  }

  return (
    <div className="inside-card-container">
      <img className="inside-card-img" src={imgSrc} alt="" />
      <div className="inside-card-content">
        <Content title={title} content={content}/>
      </div>
      <div className="inside-card-btn"> 
        <Btn
          content="직접 해보기"
          onClick={onClick}
        />
      </div>
    </div>
  )
}

export default InsideContentCard
import { useEffect, useRef } from 'react'
import { useTyped } from '../../hooks/useTyped'

export default function HeroSection() {
  const roleRef = useRef(null)

  useTyped(roleRef, {
    strings: [
      'Software Developer',
      'Full Stack Developer',
      'MERN Stack Developer',
      'Problem Solver',
    ],
  })

  useEffect(() => {
    const handleMouseMove = (event) => {
      const elements = document.querySelectorAll('.hero-section-right .icons')
      const moveX = (event.clientX - window.innerWidth / 2) * 0.01
      const moveY = (event.clientY - window.innerHeight / 2) * 0.01

      elements.forEach((element, index) => {
        const strength = (index + 1) * 0.5
        element.style.transform = `translate(${moveX * strength}px, ${moveY * strength}px)`
      })
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="hero-section">
      <div className="faded-text">Shiv Pratap</div>

      <div className="hero-section-left">
        <div className="hero-section-heading">
          Hi! My Name is <br />
          <span className="name">Shiv Pratap Singh</span>
        </div>

        <div className="hero-section-heading hero-section-sub-heading">
          I am a <span ref={roleRef} className="role"></span>
        </div>

        <div className="hero-section-description">
          B.Tech CSE student at IIIT Manipur with hands-on internship experience in security and strong full-stack development skills across React, Node.js, Express, and MongoDB.
        </div>
        <a href="mailto:pratapsinghs801@gmail.com">
          <div className="btn-pink" id="btn">Hire Me</div>
        </a>
      </div>

      <div className="hero-section-right">
        <div className="absolute icons icon-dots">
          <img src="/images/userAsset/dots.png" alt="" />
        </div>
        <div className="absolute icons icon-cube">
          <img src="/images/userAsset/cube.png" alt="" />
        </div>
        <div className="absolute icons icon-circle">
          <img src="/images/userAsset/circle.png" alt="" />
        </div>
        <div className="absolute icons icon-zigzag">
          <img src="/images/userAsset/zigzags.png" alt="" />
        </div>
        <div className="absolute icons icon-plus">
          <img src="/images/userAsset/plus.png" alt="" />
        </div>
        <div className="user-image">
          <img src="/images/userAsset/vivek.jpg" alt="Shiv Pratap Singh" />
        </div>
      </div>
    </div>
  )
}

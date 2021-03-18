import React, { useEffect, useRef } from "react"
import { TweenMax, Power2 } from "gsap"

const Loader = () => {
  let loader1, loader2 = useRef(null);

  useEffect(() => {
    TweenMax.to(
      loader1,
      1.2,
      {
        x: "100%",
        delay: 0.4,
        ease: Power2.easeInOut
      }
    );

    TweenMax.to(
      loader2,
      1.2,
      {
        x: "-100%",
        delay: 0.4,
        ease: Power2.easeInOut
      }
    )
  }, [])

  return (
    <div>
      <div ref={el => {loader1 = el}} className="loader loader--1"></div>
      <div ref={el => {loader2 = el}} className="loader loader--2"></div>
    </div>
  )
}

export default Loader

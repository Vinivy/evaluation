import  Style from "./FeedBack.module.css";
import Ilustration from "../Assets/Svgs/illustration-thank-you.svg"

function Feedback() {

  return (
    <section className={Style.FeedBack}>
      <div className={Style.image}>
        <img src={Ilustration} alt="" />
      </div>
      <div className={Style.resultado}>
        <p>You select <span></span> out of 5</p>
      </div>
      <div className={Style.thanks}>
        <h1>Thank you!</h1>
        <p>we appreciate you taki8ng the time ti give a rating.if you ever need more support, don't hesitate to get in touch!</p>
      </div>
    </section>
  )
}

export default Feedback
import ShowCaseCard1 from "../showcaseCards/showcaseCard1";
import shoe from "../../assets/images/products/shoes-1.png";
import ShowCaseCard2 from "../showcaseCards/showcaseCard2";
import ShowCaseCard3 from "../showcaseCards/showcaseCard3";
import ShowCaseCard4 from "../showcaseCards/showCaseCard4";
import CreditCardVerified from "../icons/CreditCardVerified";
import FeedbackThumbsUp from "../icons/FeedbackThumbsUp";
import ShowCaseCard5 from "../showcaseCards/showcaseCard5";

const Section1 = () => {
  return (
    <>
      <section className="grid lg:grid-cols-3 gap-4 ">
        <ShowCaseCard1 />
        <ShowCaseCard2 />
        <ShowCaseCard3 />
      </section>
      <div className="mt-6 lg:grid lg:grid-cols-4 gap-4 gap-y-4">
        <ShowCaseCard4
          icon={<CreditCardVerified />}
          title="Secure Payment"
          subtitle="100% secured payment & privacy"
        />
        <ShowCaseCard4
          icon={<FeedbackThumbsUp />}
          title="Great Feedback"
          subtitle="More than 97% positive & happy customers"
        />
        <ShowCaseCard5
          offer="¢50.00 Off"
          text="On Orders Over ¢1000.00"
          // subtitle="One inner compartment with black satin lining"
          image={shoe}
        />
      </div>
    </>
  );
};

export default Section1;

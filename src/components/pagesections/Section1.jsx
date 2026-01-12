import ShowCaseCard1 from "../showcaseCards/showcaseCard1";
import shoe from "../../assets/images/products/shoes-1.png";
import ShowCaseCard2 from "../showcaseCards/showcaseCard2";
import ShowCaseCard3 from "../showcaseCards/showcaseCard3";
import ShowCaseCard4 from "../showcaseCards/showCaseCard4";
import CreditCardVerified from "../icons/CreditCardVerified";
import FeedbackThumbsUp from "../icons/FeedbackThumbsUp";
import ShowCaseCard5 from "../showcaseCards/showcaseCard5";
import { currency } from "../../lib";

const Section1 = () => {
  return (
    <>
      <div className="grid lg:grid-cols-3 gap-4 py-16">
        <ShowCaseCard1 />
        <ShowCaseCard2 />
        <ShowCaseCard3 />
      </div>
      <div className="mt-6 md:grid lg:grid-cols-4 gap-4 gap-y-4">
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
          offer={`${currency(100)} Off`}
          text={`On Orders Over ${currency(1000)}`}
          // subtitle="One inner compartment with black satin lining"
          image={shoe}
        />
      </div>
    </>
  );
};

export default Section1;

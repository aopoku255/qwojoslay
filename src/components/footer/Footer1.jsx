import { Link } from "react-router-dom";
import { Box, Container, Grid, IconButton, styled } from "@mui/material";
import AppStore from "../../components/AppStore";
import Image from "../../assets/logo-white.svg";
import { FlexBox } from "../../components/flex-box";
import { Paragraph } from "../../components/Typography";
import Google from "../../components/icons/Google";
import Twitter from "../../components/icons/Twitter";
import Youtube from "../../components/icons/Youtube";
import Facebook from "../../components/icons/Facebook";
import Instagram from "../../components/icons/Instagram";

// styled component
const StyledLink = styled(Link)(({ theme }) => ({
  display: "block",
  borderRadius: 4,
  cursor: "pointer",
  position: "relative",
  padding: "0.3rem 0rem",
  color: theme.palette.grey[500],
  "&:hover": {
    color: theme.palette.grey[100],
  },
}));
const Footer = () => {
  return (
    <footer className="bg-[#222935]">
      <div className="lg:grid lg:grid-cols-6 px-4 lg:px-4 py-16 gap-x-16 gap-y-4 max-w-7xl mx-auto">
        <div className="lg:flex lg:flex-col gap-y-4 col-span-2">
          <Link to="/" className="block mb-2.5">
            <img src={Image} alt="Logo" className="" />
          </Link>
          <p className="text-gray-400">
            Discover the latest trends in fashion with Q Fashion. Explore our
            curated collections and stay stylish.
          </p>
          <AppStore />
        </div>
        <div className="mt-8 lg:mt-0">
          <h4 className="text-white/95 font-semibold text-xl">About Us</h4>
          <div className="text-gray-400 flex flex-col gap-y-3 group mt-4">
            {aboutLinks.map((link) => (
              <Link to="" className="group-hover:text-white">
                {link}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-8 lg:mt-0">
          <div>
            <h4 className="text-white/95 font-semibold text-xl">
              Customer Care
            </h4>
            <div className="text-gray-400 flex flex-col gap-y-3 group mt-4">
              {customerCareLinks.map((link) => (
                <Link to="" className="group-hover:text-white">
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-2 mt-8 lg:mt-0">
          <h4 className="text-white/95 font-semibold text-xl">Contact Us</h4>
          <p className="text-gray-400">
            Kumasi Adehyeman Oposite Kejetia Rounabout, Ghana
          </p>
          <p className="text-gray-400">Email: contact@qfashion.com</p>
          <p className="text-gray-400">Phone: +233 545 09 8438</p>
          {iconList.map((item, index) => (
            <IconButton
              key={index}
              href={item.url}
              sx={{
                color: "white",
              }}
              target="_blank"
              className="text-gray-400 hover:text-white text-sm size-10"
            >
              <item.icon />
            </IconButton>
          ))}
        </div>
      </div>
    </footer>
  );
};
const aboutLinks = [
  "Careers",
  "Our Stores",
  "Our Cares",
  "Terms & Conditions",
  "Privacy Policy",
];
const customerCareLinks = [
  "Help Center",
  "How to Buy",
  "Track Your Order",
  "Corporate & Bulk Purchasing",
  "Returns & Refunds",
];
const iconList = [
  {
    icon: Facebook,
    url: "https://www.facebook.com/UILibOfficial",
  },
  {
    icon: Twitter,
    url: "https://twitter.com/uilibofficial",
  },
  {
    icon: Youtube,
    url: "https://www.youtube.com/channel/UCsIyD-TSO1wQFz-n2Y4i3Rg",
  },
  {
    icon: Google,
    url: "https://www.google.com/search?q=ui-lib.com",
  },
  {
    icon: Instagram,
    url: "https://www.instagram.com/uilibofficial/",
  },
];
export default Footer;

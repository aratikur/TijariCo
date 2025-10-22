import Image from "next/image";

const Footer = () => {
  const tijaricoLogo = "/images/tijarico-logo.png"; // path in public folder
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer bg-gray-100 text-gray-800">
      <div className="container mx-auto py-8">
        <div className="site-footer__top flex flex-col md:flex-row justify-between gap-8">
          {/* Logo & Description */}
          <div className="site-footer__description md:w-1/3">
            <h6 className="flex items-center gap-2 text-xl font-bold mb-2">
              <Image
                src={tijaricoLogo}
                alt="TijariCo Logo"
                width={200}
                height={75}
                priority
              />
            </h6>
            <p className="text-sm text-gray-600">
              TijariCo designs clothing for everyone – from kids to adults –
              while offering style, quality, and affordability. Explore our
              collections and join our growing marketplace.
            </p>

            {/* Social Links */}
            <ul className="site-footer__social-networks flex gap-3 mt-3">
              <li>
                <a
                  href="https://www.facebook.com/tijarico/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-facebook" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@tijarico"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/tiktok-icon.png" // put TikTok logo in public/images
                    alt="TikTok"
                    width={18}
                    height={18}
                  />
                </a>
              </li>
              {/* <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="icon-twitter" />
                </a>
              </li> */}

              <li>
                <a
                  href="https://www.instagram.com/tijarico"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-instagram" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@TijariCo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-youtube-play" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/tijarico/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-linkedin" />
                </a>
              </li>
            </ul>
          </div>

          {/* Footer Links */}
          <div className="site-footer__links flex flex-col sm:flex-row gap-8 md:w-2/3">
            <ul className="flex-1 space-y-1">
              <li className="font-semibold">Shopping online</li>
              <li>
                <a href="#">Order Status</a>
              </li>
              <li>
                <a href="#">Shipping and Delivery</a>
              </li>
              <li>
                <a href="#">Returns</a>
              </li>
              <li>
                <a href="#">Payment options</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
            <ul className="flex-1 space-y-1">
              <li className="font-semibold">Information</li>
              <li>
                <a href="#">Gift Cards</a>
              </li>
              <li>
                <a href="#">Find a store</a>
              </li>
              <li>
                <a href="#">Newsletter</a>
              </li>
              <li>
                <a href="#">Become a member</a>
              </li>
              <li>
                <a href="#">Site feedback</a>
              </li>
            </ul>
            <ul className="flex-1 space-y-1">
              <li className="font-semibold">Contact</li>
              <li>
                <a
                  href="mailto:tijarico.bd@gmail.com"
                  className="hover:underline"
                >
                  tijarico.bd@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/8801518700594"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  WhatsApp / Phone: +8801518-700594
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="site-footer__bottom bg-gray-200 py-4 mt-8">
        <div className="container mx-auto text-center text-sm text-gray-500">
          <p>DESIGN BY TijariCo - © {currentYear}. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { socials } from '../constants';
import { footerVariants } from '../utils/motion';
import { styles } from '../styles';
import { mylogo as logo} from '../assets';

const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.padding} py-8 relative`}
    >
      <div className="mx-auto flex flex-col gap-8">
        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-white opacity-10" />

          <div className="flex items-center justify-between flex-wrap gap-4">
          <Link
              to='/'
              className="flex items-center gap-2"
              onClick={() => {
                // This scrolls to the top of the page
                window.scrollTo(0, 0);
              }}
            >
              <img
                src={logo}
                alt='logo'
                className="w-12 h-12 object-contain"
              />
              <p
                className="text-white text-[18px] font-bold cursor-pointer flex"
              >
                Sirri &nbsp;<span className="sm:block hidden"> | Celles</span>
              </p>
            </Link>
            <div className="flex gap-4">
              {
                socials.map((icon) => (
                  <img
                    key={icon.name}
                    src={icon.image}
                    alt={icon.name}
                    className="w-[24px] h-[24px] object-contain cursor-pointer"
                    onClick={() => window.open(icon.url, "_blank")}
                  />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
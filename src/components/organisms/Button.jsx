import PropTypes from 'prop-types';

const Button = ({ children, href, className }) => {
  return (
    <a className={`mt-8 inline-block bg-purple-200 text-black px-10 py-3 rounded-lg text-lg font-bold hover:bg-purple-500 transition ${className}`} href={href}>
      {children}
    </a>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: '',
};

export default Button;

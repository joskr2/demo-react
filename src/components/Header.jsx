/* eslint-disable react/prop-types */
import '../styles/Header.css'
const Header = ( { miTitulo, miSubtitulo } ) => {
  return (
    <header style={{ color: 'blue' }}>
      <h1>{miTitulo}</h1>
      <h2>{miSubtitulo}</h2>
    </header>
  )
};

export default Header;
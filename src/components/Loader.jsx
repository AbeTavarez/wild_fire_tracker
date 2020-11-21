import pacman from './pacman.gif';

const Loader = () => {
  return (
    <div className="loader">
      <img src={pacman} alt="loading" />
      <h3>Fetching data...</h3>
    </div>
  );
};

export default Loader;

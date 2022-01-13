import './ButtonWide.scss';

function ButtonWide({ flipped = false }) {
  const className = `ButtonWide ${flipped ? 'flipped' : ''}`;

  return (
    <div className={className}>
      <div className="inner">

      </div>
    </div>
  );
}

export default ButtonWide;

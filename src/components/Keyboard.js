import './Keyboard.scss';

import Button from './buttons/Button';
import ButtonLong from './buttons/ButtonLong';
import ButtonWide from './buttons/ButtonWide';

function Keyboard() {
  const naturals = Array(14).fill()
    .map((_, index) => <ButtonLong key={index}></ButtonLong>);

  return (
    <div className="Keyboard">
      <div className="sharps">
        <ButtonWide flipped />
        <Button />
        <ButtonWide />
        <ButtonWide flipped />
        <ButtonWide />
        <ButtonWide flipped />
        <Button />
        <ButtonWide />
        <ButtonWide flipped />
        <ButtonWide />
      </div>
      <div className="naturals">
        {naturals}
      </div>

    </div>
  );
}

export default Keyboard;

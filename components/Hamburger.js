import React from 'react';

export default function Hamburger() {
  return (
    <div className="w-screen flex flex-row justify-between">
      <button
        onClick={() =>
          setToggleMenu(() => {
            return toggleMenu ? false : true;
          })
        }
      >
        <div className="tham tham-e-squeeze tham-w-6">
          <div className="tham-box">
            <div className="tham-inner" />
          </div>
        </div>
      </button>
      <h1>Mixlist</h1>

      <span>🔍</span>
    </div>
  );
}

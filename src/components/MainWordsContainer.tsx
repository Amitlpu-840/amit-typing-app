import React from 'react'

const MainWordsContainer = ({children}: {children: React.ReactNode}) => {
    return (
      <div className="relative text-3xl max-w-xl leading-relaxed break-all mt-3">
        {children}
      </div>
    );
  };

export default MainWordsContainer
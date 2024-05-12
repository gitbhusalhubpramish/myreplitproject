
import React from 'react'
import "./App.css";
function generateLoremIpsum(wordsCount) {
  const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

  const words = loremIpsum.split(" ");
  const loremArray = [];

  while (loremArray.length < wordsCount) {
      loremArray.push(...words);
  }

  return loremArray.slice(0, wordsCount).join(" ");

}
const page = () => {
  const lorem = generateLoremIpsum(10000);
  return (
    <div className='main'>
      <div className='contain'>
        <p className='text'>
          
          {lorem}
      </p>
      </div>
      
      
    </div>
  )
}

export default page;

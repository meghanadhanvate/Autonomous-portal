import { useEffect } from "react";

export default function HeadingTextAnimation({mainWord, wholeArray}) {
  

      useEffect(() => {
        const word = document.querySelector(".word");
        let i = 0;
      setInterval(() => {
        word.textContent = wholeArray[i];
        i++;
        if (!wholeArray[i]) {
          i = 0;
        }
      }, 1000);
      },[])
    return(
        <span className="word">{mainWord}</span>
    )
}

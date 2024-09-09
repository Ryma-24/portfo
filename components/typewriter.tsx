"use client"


import { useTypewriter } from 'react-simple-typewriter'


const TypewriterText = () => {
  const  [useText] = useTypewriter({
    words: ['Je suis Aymar Mompere developeur',
      "Alors c'est parti !!",
       ' Il etait une fois un pirate...',
        "Non non pas cette histoire" ],
    loop:true,
    typeSpeed:110,
    deleteSpeed: 40
})
  
  return(
    
<h2 style={{margin: '10px'}}>
  {useText}
</h2>
  )
}

export default TypewriterText
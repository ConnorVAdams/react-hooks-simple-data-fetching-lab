import { useState, useEffect } from 'react'

const App = () => {
    const [randomImage, setRandomImage] = useState('')
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(resp => resp.json())
        .then(data => {
            setRandomImage(data.message)
            setIsLoaded(true)
        })
    }, [])

    if (!isLoaded) return <p>Loading...</p>

  return (
    <img src={randomImage} alt='A Random Dog' />
  )
}

export default App

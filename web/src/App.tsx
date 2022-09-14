import './styles/main.css';

import logoImg from './assets/logo-nlw-esports.svg'

import { MagnifyingGlassPlus } from 'phosphor-react'

const games = [
  {imgUrl: 'game-1.png', title: 'League of Legends', description: '4 anúncios'},
  {imgUrl: 'game-2.png', title: 'Apex Legends', description: '4 anúncios'},
  {imgUrl: 'game-3.png', title: 'COD Warzone', description: '4 anúncios'},
  {imgUrl: 'game-4.png', title: 'COD Warzone', description: '4 anúncios'},
  {imgUrl: 'game-5.png', title: 'COD Warzone', description: '4 anúncios'},
  {imgUrl: 'game-6.png', title: 'COD Warzone', description: '4 anúncios'},
]

function App() {
  return(
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} alt="Logo esports" />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='bg-nlw-gradient bg-clip-text text-transparent'>duo</span> está aqui
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        {games.map(image => {
          return (
          <a href="" className='relative rounded-lg overflow-hidden'>
            <img src={image.imgUrl} alt="" />
            <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
              <strong className='font-bold text-white block'>{image.title}</strong>
              <span className='text-zinc-300 text-sm block'>{image.description}</span>
            </div>
          </a>
          )
        })}
      </div>

      <div className='pt-1 mt-8 bg-nlw-gradient self-stretch rounded-lg overflow-hidden'>
        <div className='bg-[#2a2634] px-8 py-6 flex justify-between items-center'>
          <div className=''>
            <strong className='text-2xl text-white font-black block'>Não encontrou seu duo?</strong>
            <span className='text-zinc-400 block'>Publique um anúncio para encotrar novos players!</span>
          </div>
          <button className='py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3'>
            <MagnifyingGlassPlus size={24}/>
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  )
}

export default App

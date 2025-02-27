import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { WORKOUTS, SCHEMES } from '../utils/swoldier'

function Header(props){
  const {index, title, description} = props
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center justify-center gap-2'>
          <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400ss'>{index}</p>
          <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
          <p className='text-sm sm:text-base mx-auto'>{description}</p>
      </div>
    </div>
  )
}

export default function Generator() {

  const [showModal, setShowModal] = useState(false)
  const [poison, setPoison] = useState('individual')
  const [muscles, setMuscles] = useState([])
  const [goals, setGoals] = useState('strenght_power')

  function toggleModal() {
    setShowModal(!showModal);
  }

  return (
    <SectionWrapper header={"Generate your workout"} title={['It\'s', 'Huge', 'o\'clock']}>

      <Header index={'01'} title={"Pick your poison"} description={"Select the workout you enjoy"} />
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button className='bg-slate-950 border border-blue-400 duration-200 hover:border-blue-600 py-3 rounded-lg' key={typeIndex}>
              <p className='capitalize'>{type.replaceAll("_", " ")}</p>
            </button>
          )
        })}
      </div>

      <Header index={'02'} title={"Lock on targets"} description={"Select the muscles judged for annihilation."} />
      <div className='bg-slate-950 border border-solid border-blue-400 rounded-lg flex flex-col'>
        <button onClick={toggleModal} className='relative p-3 flex items-center justify-center'>
          <p>Select muscle groups</p>
          <i className='fa-solid fa-caret-down absolute right-3 top-1/2 -translate-y-1/2'></i>
        </button>
        {showModal && (
          <div>modal</div>
        )}
      </div>

      <Header index={'03'} title={"Become Juggernaut"} description={"Select your ultimate objective"} />
      <div className='grid grid-cols-3  gap-4'>
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (
            <button className='bg-slate-950 border border-blue-400 duration-200 hover:border-blue-600 py-3 rounded-lg' key={schemeIndex}>
              <p className='capitalize'>{scheme.replaceAll("_", " ")}</p>
            </button>
          )
        })}
      </div>

    </SectionWrapper>
  )
}

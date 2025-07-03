'use client'

import ReactCompareImage from 'react-compare-image'

type BeforeAfterSliderProps = {
  before: string
  after: string
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ before, after }) => {
  return (
    <div className="rounded overflow-hidden shadow-md">
      <ReactCompareImage
        leftImage={before}
        rightImage={after}
        sliderPositionPercentage={0.5}
        handleSize={40}
      />
    </div>
  )
}

export default BeforeAfterSlider

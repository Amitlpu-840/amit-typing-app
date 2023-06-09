import React from 'react'
import {faker} from '@faker-js/faker'


function Words() {
    const words = faker.random.words(10);
  return (
    <div>{words}</div>
  )
}

export default Words
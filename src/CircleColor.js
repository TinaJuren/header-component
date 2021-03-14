import React from 'react'

const CircleColor = (props) => {
    return (
        <style
        dangerouslySetInnerHTML={{
            __html: `
          .circle {
            background: ${props.color};
          }
        `
          }}
        />
    )
}

export default CircleColor 
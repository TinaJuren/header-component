import React from 'react'

const BackgroundColor = (props) => {
    return (
        <style
        InnerHTML={{
            __html: `
          .header-container {
            background: ${props.color};
          }
        `
          }}
        />
    )
}

export default BackgroundColor 
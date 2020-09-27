import React, { Component } from 'react'
import Radar from 'react-d3-radar'

export default class Carbon extends Component {

    render() {
        return (
            <Radar
                width={300}
                height={300}
                padding={70}
                domainMax={10}
                highlighted={null}
                data={{
                    variables: [
                        { key: 'resilience', label: 'Resilience' },
                        { key: 'strength', label: 'Strength' },
                        { key: 'adaptability', label: 'Adaptability' },
                        { key: 'creativity', label: 'Creativity' },
                        { key: 'openness', label: 'Open to Change' },
                        { key: 'confidence', label: 'Confidence' },
                    ],
                    sets: [
                        {
                            key: 'me',
                            label: this.props.name,
                            values: {
                                // resilience: this.props.data[0],
                                // strength: this.props.data[1],
                                resilience: 1,
                                strength: 2,
                                adaptability: 7,
                                creativity: 2,
                                openness: 8,
                                confidence: 1,
                            },
                        },
                    ],
                }}
            />
        )
    }
}
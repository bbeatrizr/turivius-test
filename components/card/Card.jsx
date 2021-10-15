import React from 'react';
import { Panel } from 'rsuite';
import '../../styles/Card.css';

class Card extends React.Component {

    render() {
        const { content } = this.props
        return (
            <Panel className="turivius-card"
                shaded
                bordered>
                {content.map(c => <p key={c.title}>
                    <b>{c.title}:</b> {c.content}
                </p>)}
            </Panel>
        )
    }
}

export default Card;
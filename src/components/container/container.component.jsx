import React from 'react';
import MenuItem from '../menu-item/menu-item.component'
import './container.styles.scss';

class Container extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'T-shirts',
                    imageUrl: 'https://thrive-media.s3.amazonaws.com/t-shirts.jpg',
                    id: 1
                },
                {
                    title: 'Hoodies',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2
                },
                {
                    title: 'Sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3
                },
                {
                    title: 'Workout Gear',
                    imageUrl: 'https://thrive-media.s3.amazonaws.com/workout-gear.jpg',
                    size: 'large',
                    id: 4
                },
                {
                    title: 'Programs',
                    imageUrl: 'https://thrive-media.s3.amazonaws.com/person-holding-barbell-841130.jpg',
                    size: 'large',
                    id: 5
                }
            ]
        };
    }

    render() {
        return (
            <div className="menu-container">
                {
                    this.state.sections.map(
                        section => (
                            <MenuItem key={section.id} title={section.title} imageUrl={section.imageUrl} size={section.size}>
                            </MenuItem>
                        )
                    )
                }
            </div>
        );
    }
}

export default Container;
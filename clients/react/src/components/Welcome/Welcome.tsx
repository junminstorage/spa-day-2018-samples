import styles from './Welcome.module.scss';
import React, { Component } from 'react';

export class Welcome extends Component {
    public render() {
        return (
            <div className={styles.welcomeMessage}>
                <div>
                    Just float and wait for the wind to blow you around. Here's
                    another <strong>little happy bush</strong>. Let all these little
                    things happen. Don't fight them. Learn to use them. No worries. No
                    cares.
                </div>

                <div>
                    How do you make a round circle with a square knife? That's your
                    challenge
                    for the day. Anytime you learn something your time and energy are not
                    wasted. <strong>Let's get crazy</strong>. At home you have unlimited
                    time.
                    We need a shadow side and a highlight side. Nothing's gonna make your
                    husband or wife madder than coming home and having a snow-covered
                    dinner.
                </div>
                <div>
                    This is your world, <strong>whatever makes you happy</strong> you can
                    put in
                    it. Go crazy. Everybody needs a friend. It's important to me that you're
                    happy. Isn't that fantastic? You can just push a little tree out of your
                    brush like that. They say everything looks better with odd numbers of
                    things. But sometimes I put even numbers—just to upset the critics.
                    Maybe we got a few little happy bushes here, just covered with snow.
                </div>
                <div>
                    Didn't you know you had that much power? <strong>You can move
                    mountains</strong>. You can do anything. Don't kill all your dark areas
                    -
                    you need them to show the light. It just happens - whether or not you
                    worried about it or tried to plan it.
                </div>
            </div>
        );
    }
}

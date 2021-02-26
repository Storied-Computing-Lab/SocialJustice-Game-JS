'use strict';
/* global Monogatari */
/* global monogatari */

/**
 * =============================================================================
 * This is the file where you should put all your custom JavaScript code,
 * depending on what you want to do, there are 3 different places in this file
 * where you can add code.
 *
 * 1. Outside the $_ready function: At this point, the page may not be fully
 *    loaded yet, however you can interact with Monogatari to register new
 *    actions, components, labels, characters, etc.
 *
 * 2. Inside the $_ready function: At this point, the page has been loaded, and
 *    you can now interact with the HTML elements on it.
 *
 * 3. Inside the init function: At this point, Monogatari has been initialized,
 *    the event listeners for its inner workings have been registered, assets
 *    have been preloaded (if enabled) and your game is ready to be played.
 *
 * You should always keep the $_ready function as the last thing on this file.
 * =============================================================================
 **/

const { $_ready, $_ } = Monogatari;

// 1. Outside the $_ready function:


// Create statistics screen

// *need to add variables for character att.
class StatisticsScreen extends Monogatari.ScreenComponent {

    static setup () {
        this.engine.translation('English', {
            Statistics: 'Statistics'
        });
        return Promise.resolve ();
    }

    static bind () {
        this.engine.component ('main-menu').addButtonAfter ('Load', {
            string: 'Statistics',
            data: {
                action: 'open-screen',
                open: 'statistics'
            }
        });
        return Promise.resolve ();
    }

    constructor (...args) {
        super(...args);
    }



    render () {
        return `
            <button class="top left" data-action="back"><span class="fas fa-arrow-left"></span></button>
            <h2 data-string="Statistics">Statistics</h2>
            <div class="column column--spaced" data-content="help">
				<h2>Critique</h2>
				<p>Stand your ground: ${monogatari.storage().s_y_g}
				<br> Challenge norms: ${monogatari.storage().c_n}
				</p>
			</div>
			<div class="column column--spaced" data-content="help">
				<h2>Imagine</h2>
				<p>Reclaim our imagination: ${monogatari.storage().r_o_i}</p>
			</div>
        `;
    }
}

StatisticsScreen.tag = 'statistics-screen';

$_ready (() => {
	// 2. Inside the $_ready function:

	monogatari.registerComponent(StatisticsScreen);

	monogatari.init ('#monogatari').then (() => {
		// 3. Inside the init function:

	});
});



'use strict';

import React from 'react';
import vars from './variables';
import {
    StyleSheet,
} from 'react-native'

export default StyleSheet.create({
    navContent: {
        marginTop: vars.navContentTopMargin
    },
    trackedList: {
        backgroundColor: '#f1c2a5'

				// Cell style
				cell: {
					image: {
						width: 80,
						height: 80
					}
				}
    }
});

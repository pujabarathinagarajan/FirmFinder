// @ts-ignore
import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
    it('should render the logo and title correctly', () => {
        const { getByAltText} = render(<Header />);
        expect(getByAltText('Firm Finder Logo')).toBeInTheDocument();
    });
});

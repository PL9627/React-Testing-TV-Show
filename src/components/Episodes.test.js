import React from 'react';
import {render} from '@testing-library/react';
import Episodes from './Episodes';

test("Episodes can render", () => {
    render(<Episodes episodes={[]} error="" />);
})
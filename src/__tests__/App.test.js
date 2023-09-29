import React from 'react';
import { render, waitForElement, fireEvent } from '@testing-library/react';
import Application from 'components/Application';

describe('Appointment', () => {
  it('defaults to Monday and changes the schedule when a new day is selected', async () => {
    const { getByText } = render(<Application />);

    await waitForElement(() => getByText('Monday'));

    fireEvent.click(getByText('Tuesday'));

    expect(getByText('Leopold Silvers')).toBeInTheDocument();
  });
});

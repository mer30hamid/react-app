import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import StyledButton from './StyledButton';

describe('StyledButton', () => {
  it('renders with text', () => {
    render(<StyledButton>Click me</StyledButton>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', async () => {
    const handleClick = vi.fn();
    render(<StyledButton onClick={handleClick}>Click me</StyledButton>);

    await userEvent.click(screen.getByText('Click me'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when disabled', async () => {
    const handleClick = vi.fn();
    render(
      <StyledButton onClick={handleClick} disabled>
        Click me
      </StyledButton>
    );

    await userEvent.click(screen.getByText('Click me'));

    expect(handleClick).not.toHaveBeenCalled();
  });
});

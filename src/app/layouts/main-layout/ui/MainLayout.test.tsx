import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';

import { MainLayout } from './MainLayout';

// Mock the Navbar component
vi.mock('widgets/navbar', () => ({
  Navbar: () => <div data-testid="navbar">Navbar</div>,
}));

// Mock LoadingFallback
vi.mock('shared/ui/loading-fallback', () => ({
  LoadingFallback: () => <div>Loading...</div>,
}));

describe('MainLayout component', () => {
  it('renders layout structure', () => {
    render(
      <MemoryRouter>
        <MainLayout />
      </MemoryRouter>
    );

    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });

  it('renders navbar component', () => {
    render(
      <MemoryRouter>
        <MainLayout />
      </MemoryRouter>
    );

    expect(screen.getByText('Navbar')).toBeInTheDocument();
  });

  it('renders main element', () => {
    const { container } = render(
      <MemoryRouter>
        <MainLayout />
      </MemoryRouter>
    );

    const mainElement = container.querySelector('main');
    expect(mainElement).toBeInTheDocument();
  });

  it('applies correct container classes', () => {
    const { container } = render(
      <MemoryRouter>
        <MainLayout />
      </MemoryRouter>
    );

    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toHaveClass('p-4');
  });

  it('renders without errors', () => {
    expect(() =>
      render(
        <MemoryRouter>
          <MainLayout />
        </MemoryRouter>
      )
    ).not.toThrow();
  });
});

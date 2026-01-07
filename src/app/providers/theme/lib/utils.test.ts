import { afterEach,beforeEach, describe, expect, it, vi } from 'vitest'

import { applyTheme,getInitialTheme, getOppositeTheme, isValidTheme } from './utils'

describe('isValidTheme', () => {
  it('returns true for "light"', () => {
    expect(isValidTheme('light')).toBe(true)
  })

  it('returns true for "dark"', () => {
    expect(isValidTheme('dark')).toBe(true)
  })

  it('returns false for invalid string', () => {
    expect(isValidTheme('blue')).toBe(false)
  })

  it('returns false for null', () => {
    expect(isValidTheme(null)).toBe(false)
  })

  it('returns false for undefined', () => {
    expect(isValidTheme(undefined)).toBe(false)
  })

  it('returns false for number', () => {
    expect(isValidTheme(123)).toBe(false)
  })

  it('returns false for object', () => {
    expect(isValidTheme({ theme: 'dark' })).toBe(false)
  })

  // Edge cases
  it('returns false for empty string', () => {
    expect(isValidTheme('')).toBe(false)
  })

  it('returns false for "Light" (capitalized)', () => {
    expect(isValidTheme('Light')).toBe(false)
  })
})

describe('getOppositeTheme', () => {
  it('returns "light" when theme is "dark"', () => {
    expect(getOppositeTheme('dark')).toBe('light')
  })

  it('returns "dark" when theme is "light"', () => {
    expect(getOppositeTheme('light')).toBe('dark')
  })
})

describe('getInitialTheme', () => {
  const localStorageMock = {
    getItem: vi.fn(),
    setItem: vi.fn(),
    removeItem: vi.fn(),
    clear: vi.fn(),
  }

  beforeEach(() => {
    // Mock localStorage
    Object.defineProperty(global, 'localStorage', {
      value: localStorageMock,
      writable: true,
    })

    // Mock window.matchMedia
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    })
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('returns stored theme from localStorage when available', () => {
    localStorageMock.getItem.mockReturnValue('dark')

    const result = getInitialTheme('light')

    expect(result).toBe('dark')
    expect(localStorageMock.getItem).toHaveBeenCalledWith('theme')
  })

  it('returns system theme when no stored theme exists', () => {
    localStorageMock.getItem.mockReturnValue(null)
    window.matchMedia = vi.fn().mockImplementation(query => ({
      matches: query === '(prefers-color-scheme: dark)',
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }))

    const result = getInitialTheme('light')

    expect(result).toBe('dark')
  })

  it('returns default theme when localStorage throws error', () => {
    localStorageMock.getItem.mockImplementation(() => {
      throw new Error('localStorage not available')
    })

    const result = getInitialTheme('light')

    expect(result).toBe('light')
  })

  it('returns default theme when system theme detection fails', () => {
    localStorageMock.getItem.mockReturnValue(null)
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation(() => {
        throw new Error('matchMedia not available')
      }),
    })

    const result = getInitialTheme('dark')

    expect(result).toBe('dark')
  })

  it('returns system "light" theme when prefers-color-scheme is light', () => {
    localStorageMock.getItem.mockReturnValue(null)
    window.matchMedia = vi.fn().mockImplementation(query => ({
      matches: false, // prefers-color-scheme: dark is false
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }))

    const result = getInitialTheme('dark')

    expect(result).toBe('light')
  })

  it('ignores invalid stored theme and falls back to system theme', () => {
    localStorageMock.getItem.mockReturnValue('invalid-theme')
    window.matchMedia = vi.fn().mockImplementation(query => ({
      matches: true, // prefers-color-scheme: dark is true
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }))

    const result = getInitialTheme('light')

    expect(result).toBe('dark')
  })
})

describe('applyTheme', () => {
  beforeEach(() => {
    // Reset document.documentElement.classList before each test
    document.documentElement.className = ''
  })

  it('adds "dark" class when theme is "dark"', () => {
    applyTheme('dark')

    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('removes "dark" class when theme is "light"', () => {
    document.documentElement.classList.add('dark')

    applyTheme('light')

    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('toggles from "light" to "dark"', () => {
    applyTheme('light')
    expect(document.documentElement.classList.contains('dark')).toBe(false)

    applyTheme('dark')
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('toggles from "dark" to "light"', () => {
    applyTheme('dark')
    expect(document.documentElement.classList.contains('dark')).toBe(true)

    applyTheme('light')
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })
})

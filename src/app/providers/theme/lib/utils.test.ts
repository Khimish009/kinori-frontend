import { describe, expect, it } from 'vitest'

import { isValidTheme } from './utils'

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

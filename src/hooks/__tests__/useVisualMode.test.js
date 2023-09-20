import { renderHook, act } from '@testing-library/react-hooks';
import useVisualMode from 'hooks/useVisualMode';

const FIRST = 'FIRST';
const SECOND = 'SECOND';
const THIRD = 'THIRD';

test('useVisualMode initializes with default value', () => {
  const { result } = renderHook(() => useVisualMode(FIRST));

  expect(result.current.mode).toBe(FIRST);
});

test('useVisualMode transitions to another mode', () => {
  const { result } = renderHook(() => useVisualMode(FIRST));

  act(() => result.current.transition(SECOND));
  expect(result.current.mode).toBe(SECOND);
});

test('useVisualMode returns to previous mode', () => {
  const { result } = renderHook(() => useVisualMode(FIRST));

  act(() => result.current.transition(SECOND));
  expect(result.current.mode).toBe(SECOND);

  act(() => result.current.transition(THIRD));
  expect(result.current.mode).toBe(THIRD);

  act(() => result.current.back());
  expect(result.current.mode).toBe(SECOND);

  act(() => result.current.back());
  expect(result.current.mode).toBe(FIRST);
});

test('useVisualMode does not return to previous mode if already at initial mode', () => {
  const { result } = renderHook(() => useVisualMode(FIRST));

  act(() => result.current.back());
  expect(result.current.mode).toBe(FIRST);
});

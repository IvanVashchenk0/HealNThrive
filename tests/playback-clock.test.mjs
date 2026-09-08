import test from 'node:test';
import assert from 'node:assert/strict';
import { PlaybackClock } from '../src/lib/playbackClock.ts';

test('loading time does not shorten the ten-second preview', () => {
  const clock = new PlaybackClock(10);
  assert.equal(clock.update(false, 0), false);
  assert.equal(clock.update(true, 15000), false);
  assert.equal(clock.update(true, 24999), false);
  assert.equal(clock.update(true, 25000), true);
});

test('buffering, pause, hidden-tab time, and disabled rotation do not count', () => {
  const clock = new PlaybackClock(10);
  clock.update(true, 0);
  assert.equal(clock.update(false, 2000), false);
  for (const time of [12000, 22000, 32000]) assert.equal(clock.update(false, time), false);
  clock.update(true, 42000);
  assert.equal(clock.update(true, 49999), false);
  assert.equal(clock.update(true, 50000), true);
});

test('completion fires only once even when paused and resumed afterward', () => {
  const clock = new PlaybackClock(10);
  clock.update(true, 0);
  assert.equal(clock.update(true, 10000), true);
  assert.equal(clock.update(true, 12000), false);
  clock.update(false, 13000);
  assert.equal(clock.update(true, 20000), false);
});

test('an explicit pause at the deadline defers advancement until resumed', () => {
  const clock = new PlaybackClock(10);
  clock.update(true, 0);
  assert.equal(clock.update(false, 10000), false);
  assert.equal(clock.update(true, 20000), true);
});

test('a fresh video visit gets its own full playback allowance', () => {
  const firstVisit = new PlaybackClock(10);
  firstVisit.update(true, 0);
  assert.equal(firstVisit.update(true, 10000), true);
  const nextVisit = new PlaybackClock(10);
  nextVisit.update(true, 20000);
  assert.equal(nextVisit.update(true, 29000), false);
  assert.equal(nextVisit.update(true, 30000), true);
});

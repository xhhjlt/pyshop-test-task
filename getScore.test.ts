import { getScore } from "./index";

const stampsLength = 10;

const emptyScoreStamp = {
  offset: 0,
  score: {
      home: 0,
      away: 0,
  },
};

const stamps = Array(stampsLength)
    .fill(emptyScoreStamp)
    .map(
        (_stamp, index) => ({
            offset: index * 2,
            score: {
                home: index * 2,
                away: index * 2,
            },
        })
    );

describe('getScore function', () => {

  test('should return correct score', () => {
    const index = Math.floor(Math.random() * (stampsLength - 1)) + 1;
    const offset = index * 2 - 1;
    const score = {
          home: index * 2,
          away: index * 2,
    };

    expect(getScore(stamps, offset)).toEqual(score);
  });

  test('should return correct score if stamps not sorted', () => {
    const index = Math.floor(Math.random() * (stampsLength - 1)) + 1;
    const offset = index * 2 - 1;
    const score = {
          home: index * 2,
          away: index * 2,
    };
    const stampsReversed = [...stamps].reverse();

    expect(getScore(stampsReversed, offset)).toEqual(score);
  });

  test('should return last score if offset more than max offset in gameStamps', () => {
    const offset = stampsLength * 2;
    const score = stamps[stamps.length - 1].score;

    expect(getScore(stamps, offset)).toEqual(score);
  });

  test('should return empty score if offset less then zero', () => {
    const offset = -1;
    const score = emptyScoreStamp.score;

    expect(getScore(stamps, offset)).toEqual(score);
  });

  test('should return empty score if gameStamps is empty array', () => {
    const offset = 10;
    const score = emptyScoreStamp.score;

    expect(getScore([], offset)).toEqual(score);
  });
});
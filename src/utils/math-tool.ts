// eslint-disable-next-line import/prefer-default-export
export const getPrimes = (maxRange: number): number[] =>
  ([...Array(maxRange + 1).keys()] as number[])
    .slice(2).filter((n) => {
      for (let i = 2; i < n; i += 1) {
        if (n % i === 0) return false;
      }

      return true;
    });
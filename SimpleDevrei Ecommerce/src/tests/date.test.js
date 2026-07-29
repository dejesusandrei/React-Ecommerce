import { describe, it, expect } from 'vitest'
import { FormatDate, FormatDay } from '../utils/date'

describe('Date Formatting Utilities', () =>{

	describe('Format Date: ',() =>{
		it('format a date string to "dddd, MMMM, D"', () =>{
			const inputDate = '2026-07-30';
      const result = FormatDate(inputDate);

			expect(result).toBe('Thursday, July, 30');
		});

	});

	describe('FormatOrderTime', () => {
		it('correctly converts orderTimeMs timestamp to human-readable date', () => {
			const orderTimeMs = 1785288883137;
			const result = FormatDate(orderTimeMs);

			expect(result).toBe('Wednesday, July, 29');
		});

		it('correctly converts orderTimeMs timestamp to human-readable date', () => {
			const orderTimeMs = 1785548083137;
			const result = FormatDay(orderTimeMs);

			expect(result).toBe('August, 1');
		});
	});

	describe('FormatDay', () => {
    it('formats a date string to "MMMM, D"', () => {
      const inputDate = '2026-07-27';
      const result = FormatDay(inputDate);

      // Inaasahang output ayon sa format string mo ('MMMM, D')
      expect(result).toBe('July, 27');
    });

    it('formats single-digit days without leading zero', () => {
      const inputDate = '2026-01-05';
      const result = FormatDay(inputDate);

      expect(result).toBe('January, 5');
    });
  });

});
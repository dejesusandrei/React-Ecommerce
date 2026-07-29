import { describe, it, expect } from 'vitest'
import { FormatDate, FormatDay } from './date'

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
			const result = FormatOrderTime(orderTimeMs);

			expect(result).toBe('July 30, 2026');
		});
	});

});